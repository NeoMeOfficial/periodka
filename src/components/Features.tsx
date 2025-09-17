import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, TrendingUp, Heart, Calendar, Smile, Activity, Moon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Súkromnosť a bezpečnosť',
    description: 'Vaše dáta zostávajú na vašom zariadení. Žiadna registrácia, žiadne dáta v cloude, žiadne sledovanie.',
    highlight: 'Prístup orientovaný na súkromnosť'
  },
  {
    icon: Lock,
    title: 'Ochrana PIN kódom',
    description: 'Pridajte ďalšiu vrstvu súkromia pomocou 4-miestneho PIN kódu. Udržte svoje citlivé zdravotné dáta v bezpečí.',
    highlight: 'Extra bezpečnosť'
  },
  {
    icon: TrendingUp,
    title: 'Presné predpovede',
    description: 'Periodka sa učí z vašich jedinečných vzorcov cyklu a poskytuje čoraz presnejšie predpovede.',
    highlight: 'Inteligentné učenie'
  },
  {
    icon: Heart,
    title: 'Komplexné sledovanie',
    description: 'Sledujte nielen svoju menštruáciu, ale aj príznaky, náladu, intenzitu prietoku a ďalšie zdravotné markery.',
    highlight: 'Úplný obraz'
  },
  {
    icon: Calendar,
    title: 'Personalizované nastavenia',
    description: 'Prispôsobte si aplikáciu svojim potrebám s flexibilnými nastaveniami dĺžky cyklu a periód.',
    highlight: 'Na mieru'
  },
  {
    icon: Smile,
    title: 'Sledovanie nálady',
    description: 'Zaznamenávajte svoje emócie a nálady, aby ste lepšie pochopili, ako váš cyklus ovplyvňuje vaše pocity.',
    highlight: 'Emocionálne zdravie'
  },
  {
    icon: Activity,
    title: 'Analýza príznakov',
    description: 'Sledujte bolesť, únavu, kŕče a ďalšie príznaky pre lepšie pochopenie vašeho tela.',
    highlight: 'Detailné poznatky'
  },
  {
    icon: Moon,
    title: 'Sledovanie spánku',
    description: 'Monitorujte kvalitu spánku a jeho vzťah k vášmu menštruačnému cyklu.',
    highlight: 'Holistický prístup'
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Pokročilé funkcie
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Prečo si vybrať Periodku?
          </h2>
          <p className="text-xl text-muted-foreground">
            Periodka sa odlišuje od ostatných sledovačov menštruácie svojím zameraním na súkromnosť, 
            presnosť a komplexné funkcie pre zdravie žien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Pripojte sa k tisíckam žien, ktoré dôverujú Periodke pre svoje zdravie
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">50k+</div>
              <div className="text-muted-foreground">Spokojných používateliek</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">98%</div>
              <div className="text-muted-foreground">Presnosť predpovedí</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">100%</div>
              <div className="text-muted-foreground">Súkromné dáta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};