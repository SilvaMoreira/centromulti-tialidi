import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, BookOpen } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Psicopedagogia",
      description: "Apoio especializado para dificuldades de aprendizagem, ajudando a criança a desenvolver suas habilidades cognitivas e escolares.",
      features: [
        "Avaliação psicopedagógica",
        "Intervenção em dificuldades de aprendizagem",
        "Orientação familiar e escolar",
        "Desenvolvimento de estratégias de estudo"
      ],
      color: "from-primary to-primary/60"
    },
    {
      icon: Brain,
      title: "Psicologia Infantil",
      description: "Acompanhamento psicológico focado no desenvolvimento emocional e comportamental da criança.",
      features: [
        "Avaliação psicológica infantil",
        "Terapia cognitivo-comportamental",
        "Apoio emocional e social",
        "Orientação de pais e cuidadores"
      ],
      color: "from-accent to-accent/60"
    },
    {
      icon: MessageSquare,
      title: "Fonoaudiologia",
      description: "Tratamento especializado para questões de linguagem, fala, voz e audição.",
      features: [
        "Avaliação fonoaudiológica completa",
        "Terapia de linguagem oral e escrita",
        "Tratamento de distúrbios de fala",
        "Estimulação precoce da comunicação"
      ],
      color: "from-secondary to-secondary/60"
    }
  ];

  return (
    <section id="especialidades" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendimento integrado e personalizado para o desenvolvimento completo da criança
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-none shadow-soft hover:shadow-lg transition-smooth hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                  <service.icon className="w-8 h-8 text-background" strokeWidth={2} />
                </div>

                <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <div className="font-semibold text-sm text-foreground mb-2">
                    O que oferecemos:
                  </div>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-coral/10 to-primary/10 border-none shadow-soft">
            <p className="text-lg text-foreground font-medium mb-2">
              💛 Atendimento integrado para resultados mais efetivos
            </p>
            <p className="text-muted-foreground">
              Nossa equipe trabalha em conjunto para oferecer o melhor cuidado ao seu filho
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
