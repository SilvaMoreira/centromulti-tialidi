import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation schema
const appointmentSchema = z.object({
  parentName: z.string().trim().min(1, "Nome do responsável é obrigatório").max(100, "Nome muito longo"),
  phone: z.string().trim().regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Formato de telefone inválido. Use (XX) XXXXX-XXXX"),
  childName: z.string().trim().max(100, "Nome muito longo").optional(),
  service: z.string().min(1, "Serviço é obrigatório"),
  professional: z.string().min(1, "Profissional é obrigatório"),
  appointmentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Formato de data inválido"),
  appointmentTime: z.string().regex(/^\d{2}:\d{2}$/, "Formato de hora inválido"),
});

// Simple in-memory rate limiting (5 requests per IP per hour)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }
  
  if (limit.count >= 5) {
    return false;
  }
  
  limit.count++;
  return true;
}

function sanitizeErrorMessage(error: unknown): string {
  console.error('Detailed error:', error);
  
  if (error instanceof z.ZodError) {
    return (error as z.ZodError).errors[0].message;
  }
  
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    
    if (message.includes('credential') || message.includes('auth')) {
      return 'Serviço temporariamente indisponível. Tente novamente mais tarde.';
    }
    
    if (message.includes('calendar') || message.includes('api')) {
      return 'Erro ao criar evento no calendário. Tente novamente.';
    }
    
    if (message.includes('database') || message.includes('supabase')) {
      return 'Erro ao salvar agendamento. Tente novamente.';
    }
  }
  
  return 'Não foi possível criar o agendamento. Por favor, tente novamente.';
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ 
          error: 'Muitas tentativas. Por favor, aguarde alguns minutos antes de tentar novamente.' 
        }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse and validate input
    const rawData = await req.json();
    
    console.log('Received appointment request from IP:', clientIP);
    
    // Validate input using zod schema
    const validatedData = appointmentSchema.parse(rawData);
    const { parentName, phone, childName, service, professional, appointmentDate, appointmentTime } = validatedData;

    console.log('Creating appointment:', { parentName, service, professional, appointmentDate, appointmentTime });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get Google Calendar credentials
    const credentialsJson = Deno.env.get('GOOGLE_CALENDAR_CREDENTIALS');
    if (!credentialsJson) {
      throw new Error('Google Calendar credentials not found');
    }

    const credentials = JSON.parse(credentialsJson);

    // Get OAuth2 access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_email: credentials.client_email,
        private_key: credentials.private_key,
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: await createJWT(credentials),
      }),
    });

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text();
      console.error('Token error:', error);
      throw new Error('Failed to get access token');
    }

    const { access_token } = await tokenResponse.json();

    // Parse date and time
    const [hours, minutes] = appointmentTime.split(':');
    const startDateTime = new Date(appointmentDate);
    startDateTime.setHours(parseInt(hours), parseInt(minutes), 0);
    
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + 1);

    // Create Google Calendar event
    const event = {
      summary: `${service} - ${childName}`,
      description: `Atendimento: ${service}\nProfissional: ${professional}\nResponsável: ${parentName}\nTelefone: ${phone}\nCriança: ${childName}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
    };

    const calendarResponse = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      }
    );

    if (!calendarResponse.ok) {
      const error = await calendarResponse.text();
      console.error('Calendar error:', error);
      throw new Error('Failed to create calendar event');
    }

    const calendarEvent = await calendarResponse.json();
    console.log('Calendar event created:', calendarEvent.id);

    // Save to database
    const { data: appointment, error: dbError } = await supabase
      .from('appointments')
      .insert({
        parent_name: parentName,
        phone: phone,
        child_name: childName,
        service: service,
        professional: professional,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        google_event_id: calendarEvent.id,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw dbError;
    }

    console.log('Appointment saved to database:', appointment.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        appointment,
        eventLink: calendarEvent.htmlLink 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    const userMessage = sanitizeErrorMessage(error);
    const statusCode = error instanceof z.ZodError ? 400 : 500;
    
    return new Response(
      JSON.stringify({ error: userMessage }),
      { status: statusCode, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

async function createJWT(credentials: any) {
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/calendar',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  // Import private key
  const privateKey = credentials.private_key;
  const pemHeader = '-----BEGIN PRIVATE KEY-----';
  const pemFooter = '-----END PRIVATE KEY-----';
  const pemContents = privateKey.substring(
    pemHeader.length,
    privateKey.length - pemFooter.length - 1
  ).replace(/\s/g, '');

  const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  );

  // Sign the token
  const encoder = new TextEncoder();
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    encoder.encode(unsignedToken)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  return `${unsignedToken}.${encodedSignature}`;
}
