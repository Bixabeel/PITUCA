import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/50688748822?text=Hola%20Galletas%20Pituca,%20me%20gustaría%20consultar%20sobre%20alianzas%20o%20distribución"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-[1.75rem] border-2 border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      style={{
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
        animation: 'pulseGlow 2s ease-in-out infinite',
      }}
      aria-label="WhatsApp Corporativo"
      title="Contacto corporativo"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
    </a>
  );
}