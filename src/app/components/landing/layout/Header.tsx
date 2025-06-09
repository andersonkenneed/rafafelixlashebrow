import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react'; // Using MessageCircle for WhatsApp

const WHATSAPP_LINK = "https://wa.me/5561998672542?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os%20e%20agendar%20um%20hor%C3%A1rio.";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-xl md:text-2xl font-bold text-accent">Rafaela Felix Lash & Brow</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar no WhatsApp
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
