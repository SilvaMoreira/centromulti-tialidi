import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Phone, Baby, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Booking = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    parentName: "",
    phone: "",
    childName: ""
  });

  const services = [
    { id: "visita-guiada", name: "Visita Guiada", icon: "🏡", description: "Conheça nossa estrutura e equipe" },
    { id: "orientacao-inicial", name: "Orientação Inicial", icon: "💬", description: "Conversa sobre as necessidades da criança" },
    { id: "avaliacao-gratuita", name: "Avaliação Gratuita", icon: "📋", description: "Avaliação sem compromisso" }
  ];

  const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone format before submission
    const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    
    if (!phoneRegex.test(formData.phone) || (cleanPhone.length !== 10 && cleanPhone.length !== 11)) {
      toast({
        title: "Telefone inválido",
        description: "Digite um número válido no formato (00) 00000-0000",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-calendar-event`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            parentName: formData.parentName,
            phone: formData.phone,
            childName: formData.childName || formData.parentName,
            service: services.find(s => s.id === formData.service)?.name || formData.service,
            professional: 'Equipe Centro Tia Lidi',
            appointmentDate: formData.date,
            appointmentTime: formData.time,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao criar agendamento');
      }

      await response.json();

      toast({
        title: "Agendamento confirmado! 💛",
        description: "Te enviamos os detalhes no WhatsApp.",
      });

      // Reset form
      setFormData({
        service: "",
        date: "",
        time: "",
        parentName: "",
        phone: "",
        childName: ""
      });
      setStep(1);
    } catch (error) {
      console.error('Error creating appointment:', error);
      toast({
        title: "Erro ao agendar",
        description: "Não foi possível criar o agendamento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const canProceed = (currentStep: number) => {
    if (currentStep === 1) return formData.service !== "";
    if (currentStep === 2) return formData.date !== "" && formData.time !== "";
    return false;
  };

  return (
    <section id="agendamento" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Venha nos conhecer! 💛
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende uma visita sem compromisso. Conheça nossa equipe, estrutura e descubra como podemos ajudar no desenvolvimento do seu filho.
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-lg border-none bg-card">
          {/* Progress indicator */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-smooth ${
                  step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {s}
                </div>
                <div className="text-xs mt-2 text-muted-foreground hidden sm:block">
                  {s === 1 && "Tipo de Visita"}
                  {s === 2 && "Data/Hora"}
                  {s === 3 && "Seus Dados"}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Visit Type Selection */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
                  Como gostaria de nos conhecer?
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setFormData({ 
                        ...formData, 
                        service: service.id
                      })}
                      className={`p-6 rounded-xl border-2 transition-smooth hover:scale-105 text-left ${
                        formData.service === service.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-background hover:border-primary/50'
                      }`}
                    >
                      <div className="text-4xl mb-3">{service.icon}</div>
                      <div className="font-semibold text-foreground mb-2">{service.name}</div>
                      <div className="text-sm text-muted-foreground">{service.description}</div>
                    </button>
                  ))}
                </div>
                <Button 
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!canProceed(1)}
                  className="w-full"
                  size="lg"
                >
                  Continuar
                </Button>
              </div>
            )}

            {/* Step 2: Date and Time */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
                  Escolha data e horário
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      Data da consulta
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  {formData.date && (
                    <div>
                      <Label className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4" />
                        Horário disponível
                      </Label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, time })}
                            className={`p-3 rounded-lg border-2 transition-smooth font-medium ${
                              formData.time === time
                                ? 'border-primary bg-primary text-primary-foreground'
                                : 'border-border bg-background hover:border-primary/50 text-foreground'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Voltar
                  </Button>
                  <Button 
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!canProceed(2)}
                    className="flex-1"
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
                  Seus dados
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="parentName" className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" />
                      Nome do responsável *
                    </Label>
                    <Input
                      id="parentName"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Seu nome completo"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4" />
                      WhatsApp *
                    </Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}"
                    title="Digite um telefone válido: (00) 00000-0000"
                    className="h-12"
                  />
                  </div>

                  <div>
                    <Label htmlFor="childName" className="flex items-center gap-2 mb-2">
                      <Baby className="w-4 h-4" />
                      Nome da criança (opcional)
                    </Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      placeholder="Nome da criança"
                      className="h-12"
                    />
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                    <p>
                      ℹ️ Ao confirmar, você concorda com o uso dos seus dados para agendamento e contato via WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1"
                  >
                    Voltar
                  </Button>
                  <Button 
                    type="submit"
                    variant="cta"
                    className="flex-1"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Confirmar visita
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            🔒 Seus dados estão seguros e protegidos de acordo com a LGPD
          </p>
        </div>
      </div>
    </section>
  );
};
