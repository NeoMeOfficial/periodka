import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Baby, Calendar } from 'lucide-react';

const qaItems = [
  {
    icon: MessageCircle,
    title: "Krvácanie počas ovulácie: je to normálne? & ako dlho trvá ovulácia?",
    linkText: "Získať odpovede"
  },
  {
    icon: Baby,
    title: "Sprievodca AMH a jeho úlohou v reprodukčnom zdraví",
    linkText: "Získať odpovede"  
  },
  {
    icon: Calendar,
    title: "Dlhší cyklus: čo to je a prečo je dôležitý, ak sa snažíte otehotnieť",
    linkText: "Získať odpovede"
  }
];

export const FloQASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Otázky o vašom tele, odpovedané odborníkmi
          </h2>
        </div>

        {/* Q&A Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {qaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-soft border-border/50 hover:shadow-soft transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {item.title}
                  </h3>
                  
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group-hover:underline"
                  >
                    {item.linkText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom Link */}
        <div className="text-center mt-12">
          <Button variant="ghost" className="text-primary hover:text-primary/80 font-semibold">
            Objavte všetky otázky odpovedané zdravotnými odborníkmi →
          </Button>
        </div>
      </div>
    </section>
  );
};