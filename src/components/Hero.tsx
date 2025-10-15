import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20 px-4 py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGQkUxODYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-coral/20 text-coral-foreground px-6 py-2 rounded-full text-sm font-medium animate-scale-in">
            <Heart className="w-4 h-4 fill-coral" />
            <span>Atendimento com amor e propósito</span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
            Cuidar do desenvolvimento<br />
            <span className="bg-gradient-to-r from-primary via-coral to-accent bg-clip-text text-transparent">
              é o primeiro passo
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Especialistas em psicopedagogia, psicologia infantil e fonoaudiologia trabalhando juntos pelo melhor desenvolvimento do seu filho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToBooking}
              className="group"
            >
              Agendar atendimento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Conheça nossa equipe
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: "10+", label: "Anos de experiência" },
              { number: "500+", label: "Famílias atendidas" },
              { number: "3", label: "Especialidades integradas" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-heading text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
