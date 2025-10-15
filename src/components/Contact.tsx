import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Localização e Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos em Aracaju, prontos para atender você e sua família
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-none shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rua Exemplo, 123 - Bairro Centro<br />
                    Aracaju - SE, 49000-000
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-none shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefone / WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">
                    (79) 99999-9999
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-none shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground text-sm">
                    contato@centrotialidi.com.br
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-none shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário de atendimento</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map */}
          <Card className="overflow-hidden border-none shadow-soft h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62745.13413568311!2d-37.08518682089844!3d-10.911775699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3e4a381b925%3A0x2ebaed7a28ac41b5!2sAracaju%2C%20SE!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Centro Tia Lidi"
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};
