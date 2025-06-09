import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Info } from 'lucide-react';

const salonRules = [
  { id: 'rule1', text: 'O uso de maquiagem no dia do procedimento não é permitido.' },
  { id: 'rule2', text: 'Tolerância de 15 minutos de atraso ou perderá a vaga.' },
  { id: 'rule3', text: 'Desistência ou remarcação dentro das 24hrs do procedimento, será cobrado 50% do valor.' },
  { id: 'rule4', text: 'Atendimentos somente com horário marcado com antecedência.' },
  { id: 'rule5', text: 'Celular: Por favor, mantenha no modo "Não Perturbe" ou silencioso durante o procedimento.' },
];

export function RulesSection() {
  return (
    <section id="rules" className="bg-primary/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-xl animate-fade-in-up">
          <CardHeader className="text-center">
            <Info className="h-12 w-12 text-accent mx-auto mb-4" />
            <CardTitle className="font-headline text-3xl text-foreground">Informações Importantes</CardTitle>
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
