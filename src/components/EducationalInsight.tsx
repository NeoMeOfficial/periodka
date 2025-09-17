import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, ArrowRight } from 'lucide-react';

export const EducationalInsight = () => {
  return (
    <Card className="glass p-6 rounded-2xl">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-6 h-6 text-accent" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Vedeli ste?</h3>
          
          <h4 className="font-semibold mb-2">Menštruačná bolesť a prostaglandíny</h4>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Menštruačné kŕče sú spôsobené prostaglandínmi - hormonálnymi látkami, ktoré spôsobujú kontrakcie maternice. 
            Vyššie hladiny prostaglandínov môžu viesť k silnejším bolesťiam. Teplo, cvičenie a protizápalové lieky môžu pomôcť.
          </p>
          
          <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
            Viac poznatkov
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};