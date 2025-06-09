import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutRafaelaSection() {
  return (
    <section id="about" className="bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end animate-fade-in-up">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Rafaela Felix, Lash &amp; Brow Specialist"
              width={350}
              height={350}
              className="rounded-full object-cover shadow-xl border-4 border-primary"
              data-ai-hint="beautician portrait smiling"
            />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Rafaela Felix <span className="text-accent">♡</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-4">
              Rafaela is a passionate and certified lash and brow artist dedicated to enhancing your natural beauty. With years of experience and a keen eye for detail, she creates personalized looks that make you feel confident and radiant.
            </p>
            <p className="font-body text-muted-foreground text-lg">
              Her mission is to provide a luxurious and comfortable experience, ensuring every client leaves feeling truly special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
