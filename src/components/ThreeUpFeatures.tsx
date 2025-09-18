import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Target, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Predikcie, na ktoré sa dá spoľahnúť",
    description: "Plánuj si dni, tréning aj dovolenku podľa presných predikcií cyklu a plodnosti.",
    linkText: "Prečo sú naše predikcie presné",
    linkHref: "#accuracy"
  },
  {
    icon: Shield,
    title: "Osobné dáta zostávajú len tebe",
    description: "Súkromie je priorita: šifrovanie, žiadny predaj dát a Anonymný režim na jedno kliknutie.",
    linkText: "Tvoje otázky o súkromí – odpovedáme",
    linkHref: "#privacy"
  },
  {
    icon: Users,
    title: "Informácie, ktorým môžeš veriť",
    description: "Obsah pripravuje náš zdravotnícky tím a lekári. Všetky články sú medicínsky overené.",
    linkText: "Spoznaj náš medicínsky tím",
    linkHref: "#team"
  }
];

export const ThreeUpFeatures = () => {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Prečo si vybrať Periodka?
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass p-8 text-center group hover:scale-105 transition-all duration-500 relative"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <Button 
                  variant="link" 
                  className="text-primary font-medium p-0 h-auto group-hover:text-primary/80 transition-colors"
                >
                  {feature.linkText} →
                </Button>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};