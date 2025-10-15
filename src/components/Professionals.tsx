import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export const Professionals = () => {
  const professionals = [
    {
      name: "Dra. Maria Lidianne",
      role: "Psicopedagoga",
      specialty: "Especialista em Dificuldades de Aprendizagem",
      credentials: ["CRP 15/12345", "Mestrado em Educação"],
      avatar: "ML"
    },
    {
      name: "Dra. Ana Carolina Silva",
      role: "Psicóloga Infantil",
      specialty: "Especialista em TCC Infantil",
      credentials: ["CRP 15/67890", "Especialização em Psicologia Infantil"],
      avatar: "AS"
    },
    {
      name: "Dra. Fernanda Santos",
      role: "Fonoaudióloga",
      specialty: "Especialista em Linguagem e Fala",
      credentials: ["CRFa 15/11223", "Mestrado em Fonoaudiologia"],
      avatar: "FS"
    }
  ];

  return (
    <section id="profissionais" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes e dedicados ao desenvolvimento infantil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-none shadow-soft hover:shadow-lg transition-smooth hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 gradient-card flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"></div>
                <div className="relative w-32 h-32 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-4xl font-bold text-primary">
                    {professional.avatar}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {professional.name}
                  </h3>
                  <div className="text-primary font-semibold text-sm mb-2">
                    {professional.role}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {professional.specialty}
                  </p>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>{professional.credentials[1]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{professional.credentials[0]}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <p className="text-muted-foreground">
              💼 Todos os nossos profissionais são registrados e possuem ampla experiência em atendimento infantil
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
