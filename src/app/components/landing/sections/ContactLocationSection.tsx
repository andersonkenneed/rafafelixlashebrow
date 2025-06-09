import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Instagram, Phone, Mail } from 'lucide-react';

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/JDEh5bjUkR8Kmfr66";
const INSTAGRAM_LINK = "https://instagram.com/rafafelixbeauty";

export function ContactLocationSection() {
  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Nossa Localização &amp; <span className="text-accent">Contato</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg animate-fade-in-up">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent">Nosso Estúdio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-foreground font-semibold">Rafaela Felix Lash &amp; Brow Studio</p>
                  <Link href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground hover:text-accent transition-colors">
                    Qr: 302 conjunto: D apt: 101 - Santa Maria Sul
                    <br />
                    Em cima da DROGARIA REAL FARMA, prédio laranja
                    <br />
                    (Clique para ver no Google Maps)
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <Link href="tel:+5561998672542" className="font-body text-muted-foreground hover:text-accent transition-colors">
                  +55 (61) 99867-2542
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <Link href="mailto:contato@rafaelafelix.com" className="font-body text-muted-foreground hover:text-accent transition-colors">
                  contato@rafaelafelix.com
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent">Conecte-se Conosco</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
               <p className="font-body text-muted-foreground">Siga Rafaela no Instagram para os últimos estilos, dicas e promoções!</p>
              <Link href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-accent-foreground bg-accent hover:bg-accent/90 transition-colors group"
              >
                <Instagram className="h-6 w-6 mr-2 transform group-hover:scale-110 transition-transform" />
                Siga @rafafelixbeauty
              </Link>
               <p className="font-body text-muted-foreground mt-4 text-sm">Toque nos ícones para acessar!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
