import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Info } from 'lucide-react';

const salonRules = [
  { id: 'rule1', text: 'Please arrive 10 minutes prior to your scheduled appointment.' },
  { id: 'rule2', text: 'Avoid wearing eye makeup on the day of your lash procedure.' },
  { id: 'rule3', text: 'Inform us of any allergies or sensitivities beforehand.' },
  { id: 'rule4', text: 'Cancellations made less than 24 hours in advance may be subject to a fee.' },
  { id: 'rule5', text: 'For best results, follow aftercare instructions carefully.' },
];

export function RulesSection() {
  return (
    <section id="rules" className="bg-primary/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-xl animate-fade-in-up">
          <CardHeader className="text-center">
            <Info className="h-12 w-12 text-accent mx-auto mb-4" />
            <CardTitle className="font-headline text-3xl text-foreground">Important Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {salonRules.map((rule) => (
                <li key={rule.id} className="flex items-start font-body text-foreground">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{rule.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
