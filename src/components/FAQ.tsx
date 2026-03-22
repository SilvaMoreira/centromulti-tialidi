import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Onde encontrar psicopedagoga em Aracaju?",
    answer:
      "O Centro Multidisciplinar Tia Lidi oferece atendimento psicopedagógico especializado no bairro Grageru, Aracaju-SE. Atendemos crianças de toda a região metropolitana, incluindo Nossa Senhora do Socorro, Barra dos Coqueiros e São Cristóvão.",
    link: "/blog/psicopedagoga-aracaju-como-escolher",
  },
  {
    question: "Qual o melhor tratamento para autismo em Aracaju?",
    answer:
      "No Centro Tia Lidi, oferecemos intervenção precoce multidisciplinar para crianças com Transtorno do Espectro Autista (TEA). Nossa equipe combina psicologia, psicopedagogia e fonoaudiologia para um acompanhamento completo.",
    link: "/blog/autismo-aracaju-intervencao-precoce",
  },
  {
    question: "Como saber se meu filho precisa de fonoaudiólogo?",
    answer:
      "Se seu filho tem mais de 2 anos e não forma frases, troca sons nas palavras ou apresenta atraso na fala, é importante procurar avaliação fonoaudiológica. No Centro Tia Lidi oferecemos avaliação completa em Aracaju.",
    link: "/blog/atraso-fala-crianca-aracaju-fonoaudiologo",
  },
  {
    question: "A partir de que idade posso levar meu filho ao psicólogo infantil?",
    answer:
      "A partir dos 2-3 anos já é possível realizar acompanhamento psicológico infantil. Quanto antes identificarmos questões emocionais ou comportamentais, melhores os resultados da intervenção.",
    link: "/blog/psicologia-infantil-aracaju-desenvolvimento-emocional",
  },
  {
    question: "O que é psicopedagogia e qual a diferença para pedagogia?",
    answer:
      "A psicopedagogia investiga as causas das dificuldades de aprendizagem, incluindo aspectos emocionais e cognitivos. Já a pedagogia foca no processo de ensino e metodologias educacionais. Ambas são essenciais para o desenvolvimento infantil.",
    link: "/blog/pedagoga-aracaju-papel-desenvolvimento-infantil",
  },
  {
    question: "O Centro Tia Lidi atende crianças com TDAH?",
    answer:
      "Sim! Oferecemos avaliação e acompanhamento multidisciplinar para crianças com TDAH em Aracaju. Nossa equipe trabalha de forma integrada para auxiliar no desenvolvimento acadêmico, emocional e social.",
    link: "/blog/tdah-criancas-aracaju-diagnostico-tratamento",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 bg-muted/30" id="faq">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de atendimento infantil em Aracaju
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-background rounded-xl border border-border px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <p className="mb-3">{faq.answer}</p>
                <Link
                  to={faq.link}
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Saiba mais →
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale com nossa equipe!
          </p>
          <a
            href="https://wa.me/5579933005359"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
