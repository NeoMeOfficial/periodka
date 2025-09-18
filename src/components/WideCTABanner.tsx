import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ArrowRight } from 'lucide-react';

export const WideCTABanner = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow Badge */}
          <Badge variant="secondary" className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium">
            <Heart className="w-5 h-5 text-primary" />
            Periodka daruje bezplatné Premium ženám v núdzi
          </Badge>
          
          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Projekt Pass It On
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Program pomoci pre ľudí v krajinách s obmedzeným prístupom k bezpečným a dôveryhodným informáciám o zdraví.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button size="lg" className="text-lg px-12 py-6 h-auto group">
              Zisti viac o projekte Pass It On
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-8 pt-8 opacity-60">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <Heart className="w-6 h-6 text-primary" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};