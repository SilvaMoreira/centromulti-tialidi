import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Phone, Baby, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const Booking = () => {
    const { toast } = useToast();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: "",
        date: "",
        time: "",
        parentName: "",
        phone: "",
        childName: ""
    });
    const services = [
        { id: "visita-guiada", name: "Visita Guiada", icon: "🏡", description: "Conheça nossa estrutura e equipe" },
        { id: "orientacao-inicial", name: "Orientação Inicial", icon: "💬", description: "Conversa sobre as necessidades da criança" },
        { id: "avaliacao-gratuita", name: "Avaliação Gratuita", icon: "📋", description: "Avaliação sem compromisso" }
    ];
    const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate phone format before submission
        const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        const cleanPhone = formData.phone.replace(/\D/g, '');
        if (!phoneRegex.test(formData.phone) || (cleanPhone.length !== 10 && cleanPhone.length !== 11)) {
            toast({
                title: "Telefone inválido",
                description: "Digite um número válido no formato (00) 00000-0000",
                variant: "destructive",
            });
            return;
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-calendar-event`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
                },
                body: JSON.stringify({
                    parentName: formData.parentName,
                    phone: formData.phone,
                    childName: formData.childName || formData.parentName,
                    service: services.find(s => s.id === formData.service)?.name || formData.service,
                    professional: 'Equipe Centro Tia Lidi',
                    appointmentDate: formData.date,
                    appointmentTime: formData.time,
                }),
            });
            if (!response.ok) {
                throw new Error('Erro ao criar agendamento');
            }
            await response.json();
            toast({
                title: "Agendamento confirmado! 💛",
                description: "Te enviamos os detalhes no WhatsApp.",
            });
            // Reset form
            setFormData({
                service: "",
                date: "",
                time: "",
                parentName: "",
                phone: "",
                childName: ""
            });
            setStep(1);
        }
        catch (error) {
            console.error('Error creating appointment:', error);
            toast({
                title: "Erro ao agendar",
                description: "Não foi possível criar o agendamento. Tente novamente.",
                variant: "destructive",
            });
        }
    };
    const canProceed = (currentStep) => {
        if (currentStep === 1)
            return formData.service !== "";
        if (currentStep === 2)
            return formData.date !== "" && formData.time !== "";
        return false;
    };
    return (_jsx("section", { id: "agendamento", className: "py-24 px-4 bg-gradient-subtle", children: _jsxs("div", { className: "container mx-auto max-w-4xl", children: [_jsxs("div", { className: "text-center mb-16 animate-fade-in", children: [_jsx("h2", { className: "font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground", children: "Venha nos conhecer! \uD83D\uDC9B" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Agende uma visita sem compromisso. Conhe\u00E7a nossa equipe, estrutura e descubra como podemos ajudar no desenvolvimento do seu filho." })] }), _jsxs(Card, { className: "p-8 md:p-12 shadow-lg border-none bg-card", children: [_jsx("div", { className: "flex justify-between mb-12", children: [1, 2, 3].map((s) => (_jsxs("div", { className: "flex flex-col items-center flex-1", children: [_jsx("div", { className: `w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-smooth ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`, children: s }), _jsxs("div", { className: "text-xs mt-2 text-muted-foreground hidden sm:block", children: [s === 1 && "Tipo de Visita", s === 2 && "Data/Hora", s === 3 && "Seus Dados"] })] }, s))) }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [step === 1 && (_jsxs("div", { className: "space-y-6 animate-fade-in", children: [_jsx("h3", { className: "font-heading text-2xl font-bold mb-6 text-foreground", children: "Como gostaria de nos conhecer?" }), _jsx("div", { className: "grid md:grid-cols-3 gap-4", children: services.map((service) => (_jsxs("button", { type: "button", onClick: () => setFormData({
                                                    ...formData,
                                                    service: service.id
                                                }), className: `p-6 rounded-xl border-2 transition-smooth hover:scale-105 text-left ${formData.service === service.id
                                                    ? 'border-primary bg-primary/10'
                                                    : 'border-border bg-background hover:border-primary/50'}`, children: [_jsx("div", { className: "text-4xl mb-3", children: service.icon }), _jsx("div", { className: "font-semibold text-foreground mb-2", children: service.name }), _jsx("div", { className: "text-sm text-muted-foreground", children: service.description })] }, service.id))) }), _jsx(Button, { type: "button", onClick: () => setStep(2), disabled: !canProceed(1), className: "w-full", size: "lg", children: "Continuar" })] })), step === 2 && (_jsxs("div", { className: "space-y-6 animate-fade-in", children: [_jsx("h3", { className: "font-heading text-2xl font-bold mb-6 text-foreground", children: "Escolha data e hor\u00E1rio" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs(Label, { htmlFor: "date", className: "flex items-center gap-2 mb-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), "Data da consulta"] }), _jsx(Input, { id: "date", type: "date", min: new Date().toISOString().split('T')[0], value: formData.date, onChange: (e) => setFormData({ ...formData, date: e.target.value }), className: "h-12" })] }), formData.date && (_jsxs("div", { children: [_jsxs(Label, { className: "flex items-center gap-2 mb-3", children: [_jsx(Clock, { className: "w-4 h-4" }), "Hor\u00E1rio dispon\u00EDvel"] }), _jsx("div", { className: "grid grid-cols-3 md:grid-cols-4 gap-3", children: availableTimes.map((time) => (_jsx("button", { type: "button", onClick: () => setFormData({ ...formData, time }), className: `p-3 rounded-lg border-2 transition-smooth font-medium ${formData.time === time
                                                                    ? 'border-primary bg-primary text-primary-foreground'
                                                                    : 'border-border bg-background hover:border-primary/50 text-foreground'}`, children: time }, time))) })] }))] }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Button, { type: "button", variant: "outline", onClick: () => setStep(1), className: "flex-1", children: "Voltar" }), _jsx(Button, { type: "button", onClick: () => setStep(3), disabled: !canProceed(2), className: "flex-1", children: "Continuar" })] })] })), step === 3 && (_jsxs("div", { className: "space-y-6 animate-fade-in", children: [_jsx("h3", { className: "font-heading text-2xl font-bold mb-6 text-foreground", children: "Seus dados" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs(Label, { htmlFor: "parentName", className: "flex items-center gap-2 mb-2", children: [_jsx(User, { className: "w-4 h-4" }), "Nome do respons\u00E1vel *"] }), _jsx(Input, { id: "parentName", required: true, value: formData.parentName, onChange: (e) => setFormData({ ...formData, parentName: e.target.value }), placeholder: "Seu nome completo", className: "h-12" })] }), _jsxs("div", { children: [_jsxs(Label, { htmlFor: "phone", className: "flex items-center gap-2 mb-2", children: [_jsx(Phone, { className: "w-4 h-4" }), "WhatsApp *"] }), _jsx(Input, { id: "phone", required: true, type: "tel", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), placeholder: "(00) 00000-0000", pattern: "\\(?\\d{2}\\)?\\s?\\d{4,5}-?\\d{4}", title: "Digite um telefone v\u00E1lido: (00) 00000-0000", className: "h-12" })] }), _jsxs("div", { children: [_jsxs(Label, { htmlFor: "childName", className: "flex items-center gap-2 mb-2", children: [_jsx(Baby, { className: "w-4 h-4" }), "Nome da crian\u00E7a (opcional)"] }), _jsx(Input, { id: "childName", value: formData.childName, onChange: (e) => setFormData({ ...formData, childName: e.target.value }), placeholder: "Nome da crian\u00E7a", className: "h-12" })] }), _jsx("div", { className: "p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground", children: _jsx("p", { children: "\u2139\uFE0F Ao confirmar, voc\u00EA concorda com o uso dos seus dados para agendamento e contato via WhatsApp." }) })] }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Button, { type: "button", variant: "outline", onClick: () => setStep(2), className: "flex-1", children: "Voltar" }), _jsxs(Button, { type: "submit", variant: "cta", className: "flex-1", children: [_jsx(CheckCircle, { className: "w-5 h-5" }), "Confirmar visita"] })] })] }))] })] }), _jsx("div", { className: "mt-8 text-center", children: _jsx("p", { className: "text-sm text-muted-foreground", children: "\uD83D\uDD12 Seus dados est\u00E3o seguros e protegidos de acordo com a LGPD" }) })] }) }));
};
//# sourceMappingURL=Booking.js.map