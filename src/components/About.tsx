import { Card } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";
import tiaLidiHistoria from "@/assets/tia-lidi-historia.png";

export const About = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Sobre o Centro Tia Lidi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Há mais de uma década, cuidamos do desenvolvimento infantil com uma abordagem multidisciplinar e humanizada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: "Cuidado Humanizado",
              description: "Cada criança é única e merece atenção personalizada. Nossa equipe trabalha com empatia e dedicação."
            },
            {
              icon: Users,
              title: "Equipe Multidisciplinar",
              description: "Profissionais especializados em psicopedagogia, psicologia e fonoaudiologia trabalham de forma integrada."
            },
            {
              icon: Award,
              title: "Excelência Comprovada",
              description: "Anos de experiência e centenas de famílias satisfeitas com o desenvolvimento de seus filhos."
            }
          ].map((item, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-lg transition-smooth hover:-translate-y-1 animate-slide-up border-none shadow-soft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-none shadow-soft">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground">
                A História da Tia Lidi
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundado em Aracaju com o propósito de oferecer atendimento de excelência para o desenvolvimento infantil, 
                o Centro Multidisciplinar Tia Lidi nasceu da paixão por transformar vidas através da educação e do cuidado integral.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe reúne profissionais altamente qualificados que trabalham em conjunto para garantir que cada 
                criança receba o suporte necessário em seu desenvolvimento cognitivo, emocional e social.
              </p>
            </div>
            <div className="w-full md:w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={tiaLidiHistoria} 
                alt="Lidiane Santos - Tia Lidi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
