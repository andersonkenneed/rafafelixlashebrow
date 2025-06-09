import { Header } from '@/app/components/landing/layout/Header';
import { FloatingWhatsAppButton } from '@/app/components/landing/layout/FloatingWhatsAppButton';
import { HeroSection } from '@/app/components/landing/sections/HeroSection';
import { AboutRafaelaSection } from '@/app/components/landing/sections/AboutRafaelaSection';
import { LashStylesCatalogSection } from '@/app/components/landing/sections/LashStylesCatalogSection';
import { EyebrowDesignSection } from '@/app/components/landing/sections/EyebrowDesignSection';
import { PricingSection } from '@/app/components/landing/sections/PricingSection';
import { RulesSection } from '@/app/components/landing/sections/RulesSection';
import { ContactLocationSection } from '@/app/components/landing/sections/ContactLocationSection';
import { Footer } from '@/app/components/landing/layout/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutRafaelaSection />
        <LashStylesCatalogSection />
        <EyebrowDesignSection />
        <PricingSection />
        <RulesSection />
        <ContactLocationSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
