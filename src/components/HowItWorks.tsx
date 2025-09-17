import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Calendar, BarChart3, Shield } from 'lucide-react';

const steps = [
  {
    icon: Download,
    step: '1',
    title: 'Stiahnite si aplikáciu',
    description: 'Bezplatne si stiahnite Periodku z obchodu s aplikáciami. Žiadna registrácia potrebná.',
  },
  {
    icon: Calendar,
    step: '2', 
    title: 'Začnite sledovať',
    description: 'Jednoducho označte svoj prvý deň menštruácie a začnite zaznamenávať svoje dáta.',
  },
  {
    icon: BarChart3,
    step: '3',
    title: 'Získajte poznatky',
    description: 'Periodka analyzuje vaše vzorce a poskytuje presné predpovede a zdravotné poznatky.',
  },
  {
    icon: Shield,
    step: '4',
    title: 'Zostaňte v súkromí',
    description: 'Všetky vaše dáta zostávajú bezpečne uložené na vašom zariadení. Žiadne zdieľanie.',
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Jednoduché použitie
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Ako Periodka funguje?
          </h2>
          <p className="text-xl text-muted-foreground">
            Začať používať Periodku je jednoduché. Stačí niekoľko krokov a budete mať 
            kompletnú kontrolu nad sledovaním svojho menštruačného cyklu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-4 z-0" />
              )}
              
              <Card className="p-6 text-center relative z-10 hover:shadow-elegant transition-all duration-300 bg-gradient-soft border-border/50">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-elegant">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center p-0 bg-primary text-primary-foreground border-0"
                  >
                    {step.step}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Pripravená začať svoju cestu so zdravím?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Pripojte sa k tisíckam žien, ktoré si už prevzali kontrolu nad svojím menštruačným zdravím 
            s úplnou súkromnosťou a bezpečnosťou.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-elegant"
            >
              Stiahnuť Periodku zdarma
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Pozrieť funkcie
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>100% súkromné</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Bezplatné</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>Presné</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};