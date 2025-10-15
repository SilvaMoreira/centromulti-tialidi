import { Instagram, Facebook, Mail } from "lucide-react";
import logoNovo from "@/assets/logo-novo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={logoNovo} 
                alt="Centro Tia Lidi" 
                className="h-16 w-auto bg-white p-2 rounded-lg"
              />
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Atendimento multidisciplinar infantil com amor e propósito. 
              Cuidando do desenvolvimento das crianças em Aracaju.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="text-background/80 hover:text-background transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-background/80 hover:text-background transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#profissionais" className="text-background/80 hover:text-background transition-colors">
                  Profissionais
                </a>
              </li>
              <li>
                <a href="#agendamento" className="text-background/80 hover:text-background transition-colors">
                  Agendar consulta
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/80 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:tialidipsicopedagoga@gmail.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-background/60 text-xs mt-6">
              (79) 93300-5359<br />
              tialidipsicopedagoga@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} Centro Multidisciplinar Tia Lidi. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Feito com 💛 pela 
            <a 
              href="https://nivratech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline ml-1"
            >
              Nivra Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
