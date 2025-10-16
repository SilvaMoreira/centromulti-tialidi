import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { className: "py-24 px-4 bg-background", children: _jsxs("div", { className: "container mx-auto max-w-6xl", children: [_jsxs("div", { className: "text-center mb-16 animate-fade-in", children: [_jsx("h2", { className: "font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground", children: "O que dizem as fam\u00EDlias" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Depoimentos reais de pais e respons\u00E1veis que confiam no nosso trabalho" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs(Card, { className: "relative p-8 bg-card border-none shadow-soft hover:shadow-lg transition-smooth animate-slide-up", style: { animationDelay: `${index * 100}ms` }, children: [_jsx(Quote, { className: "absolute top-6 right-6 w-8 h-8 text-primary/20" }), _jsx("div", { className: "flex gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "w-4 h-4 fill-primary text-primary" }, i))) }), _jsxs("p", { className: "text-muted-foreground leading-relaxed mb-6 relative z-10", children: ["\"", testimonial.content, "\""] }), _jsxs("div", { className: "pt-4 border-t border-border", children: [_jsx("div", { className: "font-semibold text-foreground", children: testimonial.author }), _jsx("div", { className: "text-sm text-muted-foreground", children: testimonial.role })] })] }, index))) }), _jsx("div", { className: "mt-16 text-center", children: _jsxs("div", { className: "inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "font-heading text-3xl font-bold text-foreground", children: "4.9" }), _jsx("div", { className: "text-sm text-muted-foreground", children: "Avalia\u00E7\u00E3o m\u00E9dia" })] }), _jsx("div", { className: "w-px h-12 bg-border" }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "font-heading text-3xl font-bold text-foreground", children: "500+" }), _jsx("div", { className: "text-sm text-muted-foreground", children: "Fam\u00EDlias atendidas" })] }), _jsx("div", { className: "w-px h-12 bg-border" }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "font-heading text-3xl font-bold text-foreground", children: "98%" }), _jsx("div", { className: "text-sm text-muted-foreground", children: "Satisfa\u00E7\u00E3o" })] })] }) })] }) }));
};
//# sourceMappingURL=Testimonials.js.map