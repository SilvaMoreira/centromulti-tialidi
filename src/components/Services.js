import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, BookOpen } from "lucide-react";
export const Services = () => {
    const services = [
        {
            icon: BookOpen,
            title: "Psicopedagogia",
            description: "Apoio especializado para dificuldades de aprendizagem, ajudando a criança a desenvolver suas habilidades cognitivas e escolares.",
            features: [
                "Avaliação psicopedagógica",
                "Intervenção em dificuldades de aprendizagem",
                "Orientação familiar e escolar",
                "Desenvolvimento de estratégias de estudo"
            ],
            color: "from-primary to-primary/60"
        },
        {
            icon: Brain,
            title: "Psicologia Infantil",
            description: "Acompanhamento psicológico focado no desenvolvimento emocional e comportamental da criança.",
            features: [
                "Avaliação psicológica infantil",
                "Terapia cognitivo-comportamental",
                "Apoio emocional e social",
                "Orientação de pais e cuidadores"
            ],
            color: "from-accent to-accent/60"
        },
        {
            icon: MessageSquare,
            title: "Fonoaudiologia",
            description: "Tratamento especializado para questões de linguagem, fala, voz e audição.",
            features: [
                "Avaliação fonoaudiológica completa",
                "Terapia de linguagem oral e escrita",
                "Tratamento de distúrbios de fala",
                "Estimulação precoce da comunicação"
            ],
            color: "from-secondary to-secondary/60"
        }
    ];
    return (_jsx("section", { id: "especialidades", className: "py-24 px-4 bg-background", children: _jsxs("div", { className: "container mx-auto max-w-6xl", children: [_jsxs("div", { className: "text-center mb-16 animate-fade-in", children: [_jsx("h2", { className: "font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground", children: "Nossas Especialidades" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Atendimento integrado e personalizado para o desenvolvimento completo da crian\u00E7a" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: services.map((service, index) => (_jsxs(Card, { className: "group overflow-hidden border-none shadow-soft hover:shadow-lg transition-smooth hover:-translate-y-2 bg-card", style: { animationDelay: `${index * 100}ms` }, children: [_jsx("div", { className: `h-2 bg-gradient-to-r ${service.color}` }), _jsxs("div", { className: "p-8", children: [_jsx("div", { className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`, children: _jsx(service.icon, { className: "w-8 h-8 text-background", strokeWidth: 2 }) }), _jsx("h3", { className: "font-heading text-2xl font-bold mb-3 text-foreground", children: service.title }), _jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: service.description }), _jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "font-semibold text-sm text-foreground mb-2", children: "O que oferecemos:" }), service.features.map((feature, idx) => (_jsxs("div", { className: "flex items-start gap-2", children: [_jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2" }), _jsx("span", { className: "text-sm text-muted-foreground leading-relaxed", children: feature })] }, idx)))] })] })] }, index))) }), _jsx("div", { className: "mt-16 text-center", children: _jsxs(Card, { className: "inline-block p-8 bg-gradient-to-br from-coral/10 to-primary/10 border-none shadow-soft", children: [_jsx("p", { className: "text-lg text-foreground font-medium mb-2", children: "\uD83D\uDC9B Atendimento integrado para resultados mais efetivos" }), _jsx("p", { className: "text-muted-foreground", children: "Nossa equipe trabalha em conjunto para oferecer o melhor cuidado ao seu filho" })] }) })] }) }));
};
//# sourceMappingURL=Services.js.map