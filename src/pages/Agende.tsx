import { MessageCircle, Brain, Mic, Heart, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Brain,
    name: "Psicopedagogia",
    description: "Avaliação e intervenção nas dificuldades de aprendizagem",
  },
  {
    icon: Mic,
    name: "Fonoaudiologia",
    description: "Avaliação e tratamento dos distúrbios da fala e linguagem",
  },
  {
    icon: Heart,
    name: "Psicologia Infantil",
    description: "Acompanhamento emocional e comportamental da criança",
  },
];

const benefits = [
  "Equipe multidisciplinar especializada",
  "Atendimento humanizado e acolhedor",
  "Localização no Grageru, Aracaju-SE",
  "Primeira avaliação sem compromisso",
];

const Agende = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5579933005359?text=" +
        encodeURIComponent("Olá! Gostaria de agendar uma avaliação para meu filho(a)."),
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Centro Multidisciplinar Tia Lidi
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Agende a avaliação do seu filho pelo WhatsApp
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Atendimento especializado para crianças em Aracaju. Fale com nossa equipe agora mesmo.
          </p>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xl md:text-2xl font-bold px-10 py-5 md:px-14 md:py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 mx-auto"
          >
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
            Agendar pelo WhatsApp
          </button>

          <p className="text-sm text-muted-foreground">
            Resposta rápida • Sem compromisso • Atendimento humanizado
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Especialidades em destaque
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-background rounded-2xl p-8 border border-border shadow-sm text-center space-y-4"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + CTA */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Por que escolher o Centro Tia Lidi?
          </h2>
          <ul className="space-y-3 text-left max-w-md mx-auto">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg md:text-xl font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-7 h-7" />
            Falar no WhatsApp agora
          </button>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Centro Multidisciplinar Tia Lidi — Aracaju, SE
      </footer>
    </div>
  );
};

export default Agende;
