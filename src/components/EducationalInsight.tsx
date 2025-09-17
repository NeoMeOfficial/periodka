import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, ArrowRight } from 'lucide-react';

export const EducationalInsight = () => {
  return (
    <Card className="glass p-8 rounded-3xl shadow-elegant border-primary/10">
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-elegant">
          <Lightbulb className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Vedeli ste?
          </h3>
          
          <h4 className="font-semibold mb-3 text-lg">Menštruačná bolesť a prostaglandíny</h4>
          
          <p className="text-muted-foreground mb-6 leading-relaxed text-base">
            Menštruačné kŕče sú spôsobené prostaglandínmi - hormonálnymi látkami, ktoré spôsobujú kontrakcie maternice. 
            Vyššie hladiny prostaglandínov môžu viesť k silnejším bolesťiam. Teplo, cvičenie a protizápalové lieky môžu pomôcť.
          </p>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold text-base group">
              Viac poznatkov
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Zdravotný tip dňa</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};