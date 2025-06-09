import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5561998672542?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

export function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-whatsapp"
      >
        <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Agendar no WhatsApp">
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 hidden sm:inline">Agendar no WhatsApp</span>
        </Link>
      </Button>
    </div>
  );
}
