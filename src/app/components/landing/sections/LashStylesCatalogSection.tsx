import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, Heart } from 'lucide-react';

interface LashStyle {
  id: string;
  name: string;
  applicationPrice: string;
  maintenancePrice: string;
  duration: string;
  imageUrl: string;
  imageHint: string;
  description: string;
}

const lashStyles: LashStyle[] = [
  {
    id: '1',
    name: 'Duda Sensata – Fio 5D',
    applicationPrice: 'R$ 250',
    maintenancePrice: 'R$ 150',
    duration: '2h - 2h30',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'eyelash extensions',
    description: 'Volume e definição com um toque natural e sofisticado.',
  },
  {
    id: '2',
    name: 'Glamour Russo – Volume Intenso',
    applicationPrice: 'R$ 300',
    maintenancePrice: 'R$ 180',
    duration: '2h30 - 3h',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dramatic lashes',
    description: 'Para um olhar marcante e cheio de personalidade.',
  },
  {
    id: '3',
    name: 'Classic Chic – Fio a Fio',
    applicationPrice: 'R$ 200',
    maintenancePrice: 'R$ 120',
    duration: '1h30 - 2h',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'classic eyelashes',
    description: 'Elegância e sutileza para o dia a dia.',
  },
  {
    id: '4',
    name: 'Brazilian Look – Volume Híbrido',
    applicationPrice: 'R$ 280',
    maintenancePrice: 'R$ 160',
    duration: '2h - 2h30',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'hybrid lashes',
    description: 'Mix de técnicas para um volume customizado e impactante.',
  },
];

export function LashStylesCatalogSection() {
  return (
    <section id="lash-styles" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Our Signature Lash Styles <span className="text-accent">✨</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lashStyles.map((style, index) => (
            <Card key={style.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src={style.imageUrl}
                    alt={style.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={style.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-accent mb-2">{style.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{style.description}</CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-foreground">
                    <DollarSign className="h-4 w-4 mr-2 text-primary" />
                    <span>Aplicação: {style.applicationPrice}</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <DollarSign className="h-4 w-4 mr-2 text-primary" />
                    <span>Manutenção: {style.maintenancePrice}</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Duração: {style.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Badge variant="secondary" className="bg-primary/20 text-primary-foreground hover:bg-primary/30">Popular</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
