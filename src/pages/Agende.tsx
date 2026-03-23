import { MessageCircle, Brain, Mic, BookOpen, Users, Heart, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5579933005359&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0";

const services = [
  {
    emoji: "🧠",
    icon: Brain,
    name: "Psicologia Infantil",
    description: "Cuidamos das emoções e do comportamento do seu filho com carinho e profissionalismo.",
  },
  {
    emoji: "🗣️",
    icon: Mic,
    name: "Fonoaudiologia",
    description: "Ajudamos sua criança a se comunicar melhor, com técnicas lúdicas e acolhedoras.",
  },
  {
    emoji: "📚",
    icon: BookOpen,
    name: "Psicopedagogia",
    description: "Apoiamos o aprendizado do seu filho para que ele alcance todo o seu potencial.",
  },
];

const trustSignals = [
  {
    icon: Users,
    title: "Equipe especializada em crianças",
    description: "Profissionais com formação e experiência no universo infantil.",
  },
  {
    icon: Heart,
    title: "Atendimento humanizado",
    description: "Ambiente acolhedor onde seu filho se sente seguro e à vontade.",
  },
  {
    icon: MapPin,
    title: "Localizada em Aracaju",
    description: "No bairro Grageru, fácil acesso para toda a família.",
  },
];

const Agende = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
    navigate("/obrigado");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* HERO — above the fold */}
      <section className="flex-1 flex items-center justify-center px-4 py-14 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 bg-secondary/40 text-foreground rounded-full text-sm font-semibold tracking-wide">
            Centro Multidisciplinar Tia Lidi
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-foreground leading-tight">
            Seu filho merece o melhor cuidado.{" "}
            <span className="text-primary-foreground">Agende agora pelo WhatsApp.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Atendimento infantil especializado em Psicologia, Fonoaudiologia e
            Psicopedagogia em Aracaju.
          </p>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#19a84f] text-white text-lg sm:text-xl md:text-2xl font-bold px-8 sm:px-12 py-4 sm:py-5 md:px-14 md:py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-100"
          >
            <span className="text-2xl md:text-3xl">💬</span>
            Agendar pelo WhatsApp
          </button>

          <p className="text-xs sm:text-sm text-muted-foreground">
            Resposta rápida · Sem compromisso · Atendimento humanizado
          </p>
        </div>
      </section>

      {/* SERVICES — 3 cards */}
      <section className="px-4 py-14 md:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Especialidades para o desenvolvimento do seu filho
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="bg-card rounded-2xl p-7 md:p-8 border border-border shadow-sm text-center space-y-4 hover:shadow-md transition-shadow"
              >
                <span className="text-4xl block">{s.emoji}</span>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
                  {s.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="px-4 py-14 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Por que escolher o Centro Tia Lidi?
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {trustSignals.map((t) => (
              <div key={t.title} className="text-center space-y-3 px-2">
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/40 flex items-center justify-center">
                  <t.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">
                  {t.title}
                </h3>
                <p className="text-muted-foreground text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND CTA */}
      <section className="px-4 py-14 md:py-16 bg-secondary/20">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="text-muted-foreground">
            Fale com nossa equipe agora mesmo pelo WhatsApp. É rápido e sem compromisso.
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#19a84f] text-white text-lg md:text-xl font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-100"
          >
            <MessageCircle className="w-7 h-7" />
            Falar no WhatsApp agora
          </button>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-5 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Centro Multidisciplinar Tia Lidi — Aracaju, SE
      </footer>
    </div>
  );
};

export default Agende;
