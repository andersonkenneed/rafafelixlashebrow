
"use client"; // Add this directive

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';
import { useState } from 'react'; // Import useState
import { ImagePreviewModal } from '@/app/components/ui/ImagePreviewModal'; // Import the modal

interface EyebrowService {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  imageHint: string;
  description: string;
}

const eyebrowServices: EyebrowService[] = [
  {
    id: 'brow1',
    name: 'Design de Sobrancelha',
    price: 'R$ 40,00',
    imageUrl: 'https://i.imgur.com/7C73ku8.png',
    imageHint: 'eyebrow design shaping',
    description: 'Modelagem e design de sobrancelhas para realçar seu formato natural e harmonizar o rosto.',
  },
  {
    id: 'brow2',
    name: 'Design de Sobrancelha + Henna',
    price: 'R$ 50,00',
    imageUrl: 'https://i.imgur.com/j3YWXKE.png',
    imageHint: 'eyebrow design henna',
    description: 'Design de sobrancelhas com aplicação de henna para preencher falhas e definir o olhar.',
  },
  {
    id: 'brow3',
    name: 'Brow Lamination',
    price: 'R$ 100,00',
    imageUrl: 'https://i.imgur.com/KRUlMJH.png',
    imageHint: 'brow lamination fluffy',
    description: 'Técnica que alinha e define os fios da sobrancelha, proporcionando um efeito "fluffy" e volumoso.',
  },
];

export function EyebrowDesignSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [altText, setAltText] = useState<string>("Eyebrow Service Preview");

  const openImagePreview = (imageUrl: string, name: string) => {
    setSelectedImage(imageUrl);
    setAltText(name);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  return (
    <section id="eyebrow-design" className="bg-primary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-8">
          Design de Sobrancelhas <span className="text-accent">&amp; Brow</span> Lamination
        </h2>
        <p className="font-body text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Descubra nossos serviços especializados para sobrancelhas perfeitamente esculpidas e estilizadas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {eyebrowServices.map((service, index) => (
            <Card key={service.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="p-0">
                <button 
                  onClick={() => openImagePreview(service.imageUrl, service.name)} 
                  className="relative h-60 w-full focus:outline-none group"
                  aria-label={`Ver imagem ampliada de ${service.name}`}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={service.imageHint}
                  />
                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">Ver Maior</span>
                  </div>
                </button>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl text-accent mb-2">{service.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 text-sm">{service.description}</CardDescription>
                <div className="flex items-center text-foreground font-semibold text-lg">
                  <DollarSign className="h-5 w-5 mr-2 text-primary" />
                  <span>{service.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ImagePreviewModal 
        imageUrl={selectedImage} 
        isOpen={!!selectedImage} 
        onClose={closeImagePreview}
        altText={altText} 
      />
    </section>
  );
}

