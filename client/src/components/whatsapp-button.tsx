import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "5511999999999"; // Replace with actual WhatsApp number
  const message = "Olá! Gostaria de saber mais sobre os serviços da BPC.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 group"
      data-testid="button-whatsapp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Falar no WhatsApp</span>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Falar no WhatsApp
        <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
      </div>
    </a>
  );
}
