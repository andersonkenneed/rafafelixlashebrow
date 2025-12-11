import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutRafaelaSection() {
  return (
    <section id="about" className="bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end animate-fade-in-up">
            <Image
              src="https://i.imgur.com/3m1oHUi.png"
              alt="Rafaela Felix, Especialista em Pestanas e Sobrancelhas"
              width={350}
              height={350}
              className="rounded-full object-cover shadow-xl border-4 border-primary"
              data-ai-hint="beautician portrait smiling"
            />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conheça Rafaela Felix <span className="text-accent">♡</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-4">
              Seja bem vinda coração! Me chamo Rafaela, tenho 28 anos e atuo na área a mais de 5 anos, sou Especialista em Fios Tecnológicos. 
            </p>
            <p className="font-body text-muted-foreground text-lg mb-4">
              Minha prioridade é manter a naturalidade e realçar ainda mais sua beleza. Garanto uma ótima durabilidade e a saúde do seu fio preservada. 
            </p>
            <p className="font-body text-muted-foreground text-lg">
              Trabalhamos com os melhores materiais do mercado e com todo profissionalismo e segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
