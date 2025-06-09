import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20agendar%20meus%20c%C3%ADlios%21";

export function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-whatsapp"
      >
        <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Book on WhatsApp">
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 hidden sm:inline">Book on WhatsApp</span>
        </Link>
      </Button>
    </div>
  );
}
