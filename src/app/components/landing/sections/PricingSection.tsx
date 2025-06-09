import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, CreditCard, Smartphone, CircleDollarSign } from 'lucide-react'; // Smartphone for PIX, CircleDollarSign for Cash

const pricingTiers = [
  {
    name: "Lash Application",
    items: [
      { service: "Duda Sensata – Fio 5D", price: "R$ 250" },
      { service: "Glamour Russo – Volume Intenso", price: "R$ 300" },
      { service: "Classic Chic – Fio a Fio", price: "R$ 200" },
      { service: "Brazilian Look – Volume Híbrido", price: "R$ 280" },
    ],
  },
  {
    name: "Maintenance",
    items: [
      { service: "Duda Sensata – Fio 5D", price: "R$ 150" },
      { service: "Glamour Russo – Volume Intenso", price: "R$ 180" },
      { service: "Classic Chic – Fio a Fio", price: "R$ 120" },
      { service: "Brazilian Look – Volume Híbrido", price: "R$ 160" },
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Pricing &amp; <span className="text-accent">Payment</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {pricingTiers.map((tier, tierIndex) => (
            <Card key={tier.name} className="shadow-lg animate-fade-in-up" style={{ animationDelay: `${tierIndex * 0.15}s` }}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">{tier.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.items.map((item) => (
                    <li key={item.service} className="flex justify-between items-center font-body text-foreground border-b border-border/50 pb-2">
                      <span>{item.service}</span>
                      <span className="font-semibold text-primary-foreground">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-headline text-2xl text-foreground mb-6">Payment Methods Accepted</h3>
          <div className="flex justify-center items-center space-x-6 md:space-x-10">
            <div className="flex flex-col items-center text-muted-foreground">
              <Smartphone className="h-10 w-10 text-accent mb-2" />
              <span className="font-body">PIX</span>
            </div>
            <div className="flex flex-col items-center text-muted-foreground">
              <CircleDollarSign className="h-10 w-10 text-accent mb-2" />
              <span className="font-body">Cash</span>
            </div>
            <div className="flex flex-col items-center text-muted-foreground">
              <CreditCard className="h-10 w-10 text-accent mb-2" />
              <span className="font-body">Credit/Debit Card</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
