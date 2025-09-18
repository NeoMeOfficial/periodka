import React from 'react';
import { Card } from '@/components/ui/card';
import { Target, Shield, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Predictions you can plan around",
    description: "Plan your month around your cycle."
  },
  {
    icon: Shield,
    title: "Personal data that stays private to you", 
    description: "Your data stays private to you."
  },
  {
    icon: BookOpen,
    title: "Information you can trust",
    description: "Science-backed health info and insights."
  }
];

export const FloWhyChoose = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Why choose Flo?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 text-center bg-background/80 border-border/50 hover:shadow-soft transition-all duration-300">
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