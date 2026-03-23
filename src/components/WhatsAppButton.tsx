import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const whatsappNumber = "5579933005359";
  const message = "Olá! Gostaria de agendar uma consulta.";
  
  const handleClick = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`,
      '_blank'
    );
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-20 h-20 shadow-2xl hover:shadow-2xl transition-all hover:scale-110 bg-[#25D366] hover:bg-[#20BD5A] text-white border-none animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-10 h-10" />
    </Button>
  );
};
