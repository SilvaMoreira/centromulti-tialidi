import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

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
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                  <address className="text-muted-foreground text-sm leading-relaxed not-italic mb-3">
                    R. Dep. Francisco Guedes Melo, 85 - Grageru<br />
                    Aracaju - SE, 49027-270
                  </address>
                  <Button 
                    onClick={() => window.open('https://maps.app.goo.gl/IBKwgmGpmoV2wBn5F', '_blank')}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border-2 border-[#25D366]/30 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    (79) 93300-5359
                  </p>
                  <Button 
                    onClick={() => window.open('https://wa.me/5579933005359?text=Olá! Gostaria de agendar uma consulta.', '_blank')}
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
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
                    tialidipsicopedagoga@gmail.com
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
                    Segunda a Sexta: 7h às 18h<br />
                    Sábado e Domingo: Fechado
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map */}
          <Card className="overflow-hidden border-none shadow-soft h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6345789!2d-37.0647!3d-10.9289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab26b1cf0e0e1%3A0x1!2sR.%20Dep.%20Francisco%20Guedes%20Melo%2C%2085%20-%20Grageru%2C%20Aracaju%20-%20SE%2C%2049027-270!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Centro Tia Lidi - R. Dep. Francisco Guedes Melo, 85 - Grageru, Aracaju - SE"
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};
