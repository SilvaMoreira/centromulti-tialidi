import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";
import tiaLidiHistoria from "@/assets/tia-lidi-historia.png";
export const About = () => {
    return (_jsx("section", { id: "sobre", className: "py-24 px-4 bg-gradient-subtle", children: _jsxs("div", { className: "container mx-auto max-w-6xl", children: [_jsxs("div", { className: "text-center mb-16 animate-fade-in", children: [_jsx("h2", { className: "font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground", children: "Sobre o Centro Tia Lidi" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "H\u00E1 mais de uma d\u00E9cada, cuidamos do desenvolvimento infantil com uma abordagem multidisciplinar e humanizada." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-16", children: [
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
                    ].map((item, index) => (_jsxs(Card, { className: "p-8 bg-card hover:shadow-lg transition-smooth hover:-translate-y-1 animate-slide-up border-none shadow-soft", style: { animationDelay: `${index * 100}ms` }, children: [_jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6", children: _jsx(item.icon, { className: "w-7 h-7 text-foreground" }) }), _jsx("h3", { className: "font-heading text-xl font-bold mb-3 text-foreground", children: item.title }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.description })] }, index))) }), _jsx(Card, { className: "p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-none shadow-soft", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-center", children: [_jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground", children: "A Hist\u00F3ria da Tia Lidi" }), _jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Fundado em Aracaju com o prop\u00F3sito de oferecer atendimento de excel\u00EAncia para o desenvolvimento infantil, o Centro Multidisciplinar Tia Lidi nasceu da paix\u00E3o por transformar vidas atrav\u00E9s da educa\u00E7\u00E3o e do cuidado integral." }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Nossa equipe re\u00FAne profissionais altamente qualificados que trabalham em conjunto para garantir que cada crian\u00E7a receba o suporte necess\u00E1rio em seu desenvolvimento cognitivo, emocional e social." })] }), _jsx("div", { className: "w-full md:w-80 h-80 rounded-2xl overflow-hidden shadow-lg", children: _jsx("img", { src: tiaLidiHistoria, alt: "Lidiane Santos - Tia Lidi", className: "w-full h-full object-cover scale-125" }) })] }) })] }) }));
};
//# sourceMappingURL=About.js.map