
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Info } from 'lucide-react'; // Using Info for maintenance note

interface LashStyle {
  id: string;
  name: string;
  applicationPrice: string;
  maintenancePrice: string;
  imageUrl: string;
  imageHint: string;
  description: string;
  maintenanceNote?: string;
}

const lashStyles: LashStyle[] = [
  {
    id: '1',
    name: 'Efeito Molhado',
    applicationPrice: 'R$ 150,00',
    maintenancePrice: 'R$ 120,00',
    imageUrl: 'https://i.imgur.com/LUpwM8Y.png',
    imageHint: 'wet look lashes',
    description: 'Efeito sofisticado que simula cílios úmidos, realçando o olhar com brilho e definição.',
    maintenanceNote: 'Manutenção válida até 25 dias após a aplicação.',
  },
  {
    id: '2',
    name: 'Isa Atrasada – Fio Y',
    applicationPrice: 'R$ 160,00',
    maintenancePrice: 'R$ 130,00',
    imageUrl: 'https://i.imgur.com/BFIxp24.png',
    imageHint: 'Y-shape lashes',
    description: 'Fios em formato Y para um volume delicado, leve e marcante.',
    maintenanceNote: 'Manutenção válida até 25 dias após a aplicação.',
  },
  {
    id: '3',
    name: 'Patygirl – Fio 3D',
    applicationPrice: 'R$ 170,00',
    maintenancePrice: 'R$ 140,00',
    imageUrl: 'https://i.imgur.com/mUTOTn5.png',
    imageHint: '3D volume lashes',
    description: 'Volume tridimensional com fios 3D para um olhar expressivo e cheio de glamour.',
    maintenanceNote: 'Manutenção válida até 25 dias após a aplicação.',
  },
  {
    id: '4',
    name: 'Girlpower – Fio 4D',
    applicationPrice: 'R$ 170,00',
    maintenancePrice: 'R$ 140,00',
    imageUrl: 'https://i.imgur.com/MTbdSbW.png',
    imageHint: '4D volume lashes',
    description: 'Mais volume e impacto com a técnica de fios 4D, para um olhar poderoso.',
    maintenanceNote: 'Manutenção válida até 25 dias após a aplicação.',
  },
  {
    id: '5',
    name: 'Duda Sensata – Fio 5D',
    applicationPrice: 'R$ 180,00',
    maintenancePrice: 'R$ 150,00',
    imageUrl: 'https://i.imgur.com/UuSgiV8.png',
    imageHint: '5D volume lashes',
    description: 'Máximo volume e sofisticação com fios 5D, para um olhar intenso e deslumbrante.',
    maintenanceNote: 'Manutenção válida até 25 dias após a aplicação.',
  },
  {
    id: '6',
    name: 'Sereia',
    applicationPrice: 'R$ 130,00',
    maintenancePrice: 'Sem manutenção',
    imageUrl: 'https://i.imgur.com/cJh6HNf.png',
    imageHint: 'mermaid lashes cat eye',
    description: 'Destaque especial apenas na cauda dos cílios, criando um efeito "cat eye" sutil e charmoso.',
  },
  {
    id: '7',
    name: 'Felix Fox – Efeito Fox / Delineado',
    applicationPrice: 'R$ 180,00',
    maintenancePrice: 'R$ 150,00',
    imageUrl: 'https://i.imgur.com/mOngGuO.png',
    imageHint: 'fox eye lashes eyeliner effect',
    description: 'Cílios alongados no canto externo para um efeito "fox eye" ou delineado, super moderno e sedutor.',
    maintenanceNote: 'Manutenção válida até 25 dias após a aplicação.',
  },
  {
    id: '8',
    name: 'Brown – Fio Marrom',
    applicationPrice: 'R$ 170,00',
    maintenancePrice: 'R$ 140,00',
    imageUrl: 'https://i.imgur.com/cQleY9q.png',
    imageHint: 'brown lashes natural look',
    description: 'Suavidade e naturalidade com fios em tom marrom, perfeito para um look discreto ou para loiras.',
    maintenanceNote: 'Manutenção válida até 25 dias após a aplicação.',
  },
];

export function LashStylesCatalogSection() {
  return (
    <section id="lash-styles" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Nossos Estilos de Cílios Exclusivos
          <Image
            src="https://i.imgur.com/KJ3IYMR.png"
            alt="Ícone de brilho"
            width={50}
            height={50}
            className="inline-block ml-2 align-middle"
          />
        </h2>
        <p className="font-body text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Um guia para você conhecer meus serviços e escolher o que mais combina com você!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lashStyles.map((style, index) => (
            <Card key={style.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
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
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl text-accent mb-2">{style.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 text-sm">{style.description}</CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-foreground">
                    <DollarSign className="h-4 w-4 mr-2 text-primary" />
                    <span>Aplicação: {style.applicationPrice}</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <DollarSign className="h-4 w-4 mr-2 text-primary" />
                    <span>Manutenção: {style.maintenancePrice}</span>
                  </div>
                  {style.maintenanceNote && (
                    <div className="flex items-start text-xs text-muted-foreground mt-1">
                      <Info className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                      <span>{style.maintenanceNote}</span>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30 font-semibold">Popular</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
