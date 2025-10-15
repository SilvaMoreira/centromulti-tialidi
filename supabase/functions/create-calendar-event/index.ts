import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { parentName, phone, childName, service, professional, appointmentDate, appointmentTime } = await req.json();

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

    // Check if slot is already taken
    const { data: existingAppointment } = await supabase
      .from('appointments')
      .select('id')
      .eq('professional', professional)
      .eq('appointment_date', appointmentDate)
      .eq('appointment_time', appointmentTime)
      .maybeSingle();

    if (existingAppointment) {
      console.log('Slot already taken:', { professional, appointmentDate, appointmentTime });
      throw new Error('Este horário já está ocupado para este profissional');
    }

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
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
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
