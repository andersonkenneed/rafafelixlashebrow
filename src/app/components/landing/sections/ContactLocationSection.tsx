import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Instagram, Phone, Mail } from 'lucide-react';

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/yourcodedaddress"; // Replace with actual Google Maps link
const INSTAGRAM_LINK = "https://instagram.com/rafaelafelix"; // Replace with actual Instagram profile

export function ContactLocationSection() {
  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Find Us &amp; <span className="text-accent">Get In Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg animate-fade-in-up">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent">Our Studio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-foreground font-semibold">Rafaela Felix Lash &amp; Brow Studio</p>
                  <Link href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground hover:text-accent transition-colors">
                    Your Street Address, City, State, Postal Code
                    <br />
                    (Click to view on Google Maps)
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <Link href="tel:+5500000000000" className="font-body text-muted-foreground hover:text-accent transition-colors">
                  +55 (00) 00000-0000
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
              <CardTitle className="font-headline text-2xl text-accent">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
               <p className="font-body text-muted-foreground">Follow Rafaela on Instagram for the latest styles, tips, and promotions!</p>
              <Link href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-accent-foreground bg-accent hover:bg-accent/90 transition-colors group"
              >
                <Instagram className="h-6 w-6 mr-2 transform group-hover:scale-110 transition-transform" />
                Follow @rafaelafelix
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
