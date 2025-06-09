import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function EyebrowDesignSection() {
  return (
    <section id="eyebrow-design" className="bg-primary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-8">
          Eyebrow Design <span className="text-accent">&amp; Artistry</span>
        </h2>
        <p className="font-body text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Perfectly sculpted brows are coming soon! Stay tuned for our new range of eyebrow design services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: `${item * 0.1}s` }}>
              <CardContent className="p-0">
                <div className="relative h-80 w-full bg-muted/50">
                  <Image
                    src={`https://placehold.co/600x800.png?text=Brow+Style+${item}`}
                    alt={`Coming soon eyebrow style ${item}`}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70"
                    data-ai-hint="eyebrow shaping model"
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <p className="font-headline text-2xl text-white">Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div 
          className="absolute inset-0 -z-10 animate-shimmer"
          style={{
            backgroundImage: 'linear-gradient(to right, transparent 0%, hsl(var(--primary)/0.1) 50%, transparent 100%)',
            backgroundSize: '2000px 100%',
          }}
        />
      </div>
    </section>
  );
}
