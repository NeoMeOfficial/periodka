import React from 'react';
import { Card } from '@/components/ui/card';
import { Target, Shield, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Predikcie, na ktoré sa môžeš spoľahnúť",
    description: "Naplánuj si mesiac podľa svojho cyklu."
  },
  {
    icon: Shield,
    title: "Súkromné údaje, ktoré zostávajú tvoje", 
    description: "Tvoje údaje zostávajú len tvoje."
  },
  {
    icon: BookOpen,
    title: "Informácie, ktorým môžeš veriť",
    description: "Vedecky podložené zdravotné informácie a poznatky."
  }
];

export const FloWhyChoose = () => {
  return (
    <section className="py-24 bg-gradient-soft relative geometric-shapes overflow-hidden">
      {/* Glassmorphism accent dots - enhanced coverage */}
      <div className="accent-dot-large w-44 h-44 top-12 right-16 opacity-25" style={{animationDelay: '1s'}}></div>
      <div className="accent-dot w-28 h-28 top-2/3 left-12 opacity-45" style={{animationDelay: '3s'}}></div>
      <div className="accent-dot-small w-18 h-18 bottom-32 right-1/4 opacity-65" style={{animationDelay: '5s'}}></div>
      <div className="accent-oval w-36 h-24 bottom-8 -left-12 opacity-30" style={{animationDelay: '0s'}}></div>
      <div className="accent-dot w-22 h-22 top-40 left-1/3 opacity-50" style={{animationDelay: '7s'}}></div>
      <div className="accent-dot-small w-12 h-12 top-20 right-20 opacity-60" style={{animationDelay: '4s'}}></div>
      <div className="accent-oval w-32 h-20 bottom-24 right-12 opacity-35" style={{animationDelay: '6s'}}></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Prečo si vybrať <span className="brand-text">Periodka</span>?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 text-center bg-background/80 border-border/50 hover:shadow-elegant transition-all duration-300 relative floating-dots">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};