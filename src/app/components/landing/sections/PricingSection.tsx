
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Smartphone, CircleDollarSign } from 'lucide-react'; // Smartphone for PIX, CircleDollarSign for Cash

// Data derived from LashStylesCatalogSection for consistency
const lashServicesData = [
  { service: 'Efeito Molhado', applicationPrice: '€ 42,00', maintenancePrice: '€ 32,00' },
  { service: 'Volume Brasileiro – Fio Y', applicationPrice: '€ 45,00', maintenancePrice: '€ 35,00' },
  { service: 'Volume 3D', applicationPrice: '€ 45,00', maintenancePrice: '€ 35,00' },
  { service: 'Volume 4D', applicationPrice: '€ 45,00', maintenancePrice: '€ 35,00' },
  { service: 'Volume 5D', applicationPrice: '€ 48,00', maintenancePrice: '€ 38,00' },
  { service: 'Sereia', applicationPrice: '€ 35,00', maintenancePrice: 'Sem manutenção' },
  { service: 'Fox EYES', applicationPrice: '€ 48,00', maintenancePrice: '€ 38,00' },
  { service: 'Brown – Fio Marrom', applicationPrice: '€ 45,00', maintenancePrice: '€ 35,00' },
];

const eyebrowServicesData = [
  { service: 'Design de Sobrancelha', price: '€ 11,00' },
  { service: 'Design de Sobrancelha + Henna', price: '€ 18,00' },
  { service: 'Brow Lamination', price: '€ 35,00' },
];

const pricingTiers = [
  {
    name: "Aplicação de Pestanas",
    items: lashServicesData.map(s => ({ service: s.service, price: s.applicationPrice })),
  },
  {
    name: "Manutenção de Pestanas",
    items: lashServicesData.map(s => ({ service: s.service, price: s.maintenancePrice })),
  },
  {
    name: "Design de Sobrancelhas & Brow",
    items: eyebrowServicesData.map(s => ({ service: s.service, price: s.price })),
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Tabela de Preços &amp; <span className="text-accent">Pagamento</span>
        </h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, tierIndex) => (
            <Card key={tier.name} className="shadow-lg animate-fade-in-up" style={{ animationDelay: `${tierIndex * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">{tier.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.items.map((item) => (
                    <li key={item.service} className="flex justify-between items-center font-body text-foreground border-b border-border/50 pb-2">
                      <span>{item.service}</span>
                      <span className="font-semibold text-accent">{item.price}</span>
                    </li>
                  ))}
                </ul>
                 {tier.name === "Manutenção de Pestanas" && (
                   <p className="text-xs text-muted-foreground mt-4">
                     * Manutenção válida até 25 dias após a aplicação (exceto para o serviço Sereia).
                   </p>
                 )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: `${pricingTiers.length * 0.1}s` }}>
          <h3 className="font-headline text-2xl text-foreground mb-6">Formas de Pagamento Aceitas</h3>
          <div className="flex justify-center items-center space-x-6 md:space-x-10">
            <div className="flex flex-col items-center text-muted-foreground">
              <Smartphone className="h-10 w-10 text-accent mb-2" />
              <span className="font-body">MB WAY</span>
            </div>
            <div className="flex flex-col items-center text-muted-foreground">
              <CircleDollarSign className="h-10 w-10 text-accent mb-2" />
              <span className="font-body">Euro</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
