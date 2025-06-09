import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5561998672542?text=Ol%C3%A1%2C%20Rafaela!%20Vi%20seu%20site%20e%20quero%20real%C3%A7ar%20meu%20olhar%2C%20agendando%20um%20hor%C3%A1rio%20para%20c%C3%ADlios%2Fsobrancelhas.";

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Desktop Image */}
      <Image
        src="https://i.imgur.com/SafANvl.png"
        alt="Fundo com cílios bonitos e ambiente de salão de beleza - Desktop"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0 filter brightness-50 hidden md:block"
        data-ai-hint="beauty salon soft focus"
        priority
      />
      {/* Mobile Image */}
      <Image
        src="https://i.imgur.com/GyOxMWz.png" 
        alt="Fundo com cílios bonitos e ambiente de salão de beleza - Mobile"
        layout="fill"
        objectFit="cover"
        quality={80} 
        className="absolute inset-0 z-0 filter brightness-50 block md:hidden"
        data-ai-hint="mobile friendly beauty background"
        priority
      />
      <div className="relative z-10 p-6 max-w-3xl animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Cílios e Sobrancelhas Perfeitos para um Olhar Deslumbrante <Sparkles className="inline-block h-10 w-10 text-primary animate-pulse" />
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-accent-foreground mb-10">
          Experiências de Luxo em Cílios e Sobrancelhas por Rafaela Felix
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Agende Seu Horário no WhatsApp
          </Link>
        </Button>
      </div>
    </section>
  );
}
