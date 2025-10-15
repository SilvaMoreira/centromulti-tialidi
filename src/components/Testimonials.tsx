import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      author: "Mariana Santos",
      role: "Mãe do Pedro, 7 anos",
      content: "O Pedro tinha muita dificuldade com leitura e escrita. Depois do acompanhamento psicopedagógico no Centro Tia Lidi, ele melhorou muito! A equipe é atenciosa e realmente se dedica ao desenvolvimento das crianças.",
      rating: 5
    },
    {
      author: "Carlos Oliveira",
      role: "Pai da Júlia, 5 anos",
      content: "Minha filha era muito tímida e tinha dificuldades para se comunicar. O trabalho da fonoaudióloga foi transformador. Hoje ela é uma criança mais confiante e comunicativa. Muito obrigado!",
      rating: 5
    },
    {
      author: "Fernanda Lima",
      role: "Mãe do Lucas, 9 anos",
      content: "O Lucas tinha ansiedade e problemas comportamentais na escola. O acompanhamento psicológico foi essencial. A psicóloga é maravilhosa e nos ajudou muito como família. Recomendo demais!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            O que dizem as famílias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de pais e responsáveis que confiam no nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative p-8 bg-card border-none shadow-soft hover:shadow-lg transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Famílias atendidas</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
