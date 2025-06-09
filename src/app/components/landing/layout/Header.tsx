import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react'; // Using MessageCircle for WhatsApp

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20agendar%20meus%20c%C3%ADlios%21";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold text-accent">FelixLash</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Book on WhatsApp
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
