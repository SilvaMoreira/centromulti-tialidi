import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import tiaLidiPhoto from "@/assets/tia-lidi-photo.png";
import rayssaAndrade from "@/assets/rayssa-andrade-new.jpeg";
export const Professionals = () => {
    const professionals = [
        {
            name: "Lidiane Santos - Tia Lidi",
            role: "Fundadora e Coordenadora",
            specialty: "Centro Multidisciplinar Tia Lidi",
            credentials: ["Especialista em Dificuldades de Aprendizagem"],
            avatar: "ML",
            photo: tiaLidiPhoto
        },
        {
            name: "Rayssa Andrade",
            role: "Fonoaudióloga",
            specialty: "Bacharel em Fonoaudiologia - UFS",
            credentials: ["Mestranda do Programa de Pós-Graduação em Ciências Aplicadas à Saúde da Universidade Federal de Sergipe"],
            avatar: "RA",
            photo: rayssaAndrade
        }
    ];
    return (_jsx("section", { id: "profissionais", className: "py-24 px-4 bg-gradient-subtle", children: _jsxs("div", { className: "container mx-auto max-w-6xl", children: [_jsxs("div", { className: "text-center mb-16 animate-fade-in", children: [_jsx("h2", { className: "font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground", children: "Nossa Equipe" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Profissionais experientes e dedicados ao desenvolvimento infantil" })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: professionals.map((professional, index) => (_jsxs(Card, { className: "group overflow-hidden border-none shadow-soft hover:shadow-lg transition-smooth hover:-translate-y-2 bg-card", style: { animationDelay: `${index * 100}ms` }, children: [_jsxs("div", { className: "relative h-48 gradient-card flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" }), professional.photo ? (_jsx("div", { className: "relative w-32 h-32 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-smooth", children: _jsx("img", { src: professional.photo, alt: professional.name, className: `w-full h-full ${professional.name.includes('Tia Lidi') ? 'object-cover scale-150' : 'object-cover scale-110'}` }) })) : (_jsx("div", { className: "relative w-32 h-32 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-smooth", children: _jsx("span", { className: "font-heading text-4xl font-bold text-primary", children: professional.avatar }) }))] }), _jsxs("div", { className: "p-6 space-y-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-heading text-xl font-bold text-foreground mb-1", children: professional.name }), _jsx("div", { className: "text-primary font-semibold text-sm mb-2", children: professional.role }), _jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: professional.specialty })] }), _jsx("div", { className: "pt-4 border-t border-border space-y-2", children: professional.credentials.map((credential, idx) => (_jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [idx === 0 ? (_jsx(Award, { className: "w-4 h-4 text-primary" })) : (_jsx(GraduationCap, { className: "w-4 h-4 text-primary" })), _jsx("span", { children: credential })] }, idx))) })] })] }, index))) }), _jsx("div", { className: "mt-16 text-center", children: _jsx(Card, { className: "inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-none", children: _jsx("p", { className: "text-muted-foreground", children: "\uD83D\uDCBC Todos os nossos profissionais s\u00E3o registrados e possuem ampla experi\u00EAncia em atendimento infantil" }) }) })] }) }));
};
//# sourceMappingURL=Professionals.js.map