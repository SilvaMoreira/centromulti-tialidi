import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoNovo from "@/assets/logo-novo.png";
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { label: "Sobre", href: "#sobre" },
        { label: "Especialidades", href: "#especialidades" },
        { label: "Profissionais", href: "#profissionais" },
        { label: "Contato", href: "#contato" },
    ];
    const scrollToBooking = () => {
        document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };
    return (_jsx("header", { className: "sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-sm", children: _jsxs("div", { className: "container mx-auto max-w-6xl px-4", children: [_jsxs("div", { className: "flex items-center justify-between h-20", children: [_jsxs("a", { href: "#", className: "flex items-center gap-3 hover:opacity-80 transition-opacity", children: [_jsx("img", { src: logoNovo, alt: "Centro Multidisciplinar Tia Lidi", className: "h-12 w-auto bg-white p-2 rounded-lg" }), _jsxs("span", { className: "font-heading text-xl md:text-2xl font-semibold text-foreground", children: ["Centro Multidisciplinar", _jsx("br", {}), "Tia Lidi"] })] }), _jsx("nav", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => (_jsx("a", { href: link.href, className: "text-foreground hover:text-primary transition-colors font-medium", children: link.label }, link.href))) }), _jsx("div", { className: "hidden md:block", children: _jsx(Button, { variant: "cta", onClick: scrollToBooking, children: "Agendar consulta" }) }), _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "md:hidden p-2 hover:bg-accent rounded-lg transition-colors", "aria-label": "Toggle menu", children: _jsx(Menu, { className: "w-6 h-6" }) })] }), isMenuOpen && (_jsx("div", { className: "md:hidden py-4 border-t border-border animate-fade-in", children: _jsxs("nav", { className: "flex flex-col gap-4", children: [navLinks.map((link) => (_jsx("a", { href: link.href, onClick: () => setIsMenuOpen(false), className: "text-foreground hover:text-primary transition-colors font-medium py-2", children: link.label }, link.href))), _jsx(Button, { variant: "cta", onClick: scrollToBooking, className: "mt-2", children: "Agendar consulta" })] }) }))] }) }));
};
//# sourceMappingURL=Header.js.map