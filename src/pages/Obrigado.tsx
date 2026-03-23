import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Obrigado = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content */}
      <section className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
        <div className="max-w-lg mx-auto text-center space-y-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-secondary/40 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-foreground" />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            Recebemos seu contato! 💚
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Em breve nossa equipe vai falar com você pelo WhatsApp.
          </p>

          <div className="pt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Enquanto aguarda, saiba mais sobre nossa equipe e serviços.
            </p>
            <Link to="/">
              <Button variant="outline" size="lg" className="text-base">
                Conheça nossa clínica
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="py-5 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Centro Multidisciplinar Tia Lidi — Aracaju, SE
      </footer>
    </div>
  );
};

export default Obrigado;
