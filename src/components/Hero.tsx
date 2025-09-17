import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Calendar, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-woman.jpg';
import periodkaIcon from '@/assets/periodka-icon.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                100% Súkromný a bezpečný
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Číslo 1 bezplatný{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  sledovač menštruácie
                </span>{" "}
                s úplnou súkromnosťou
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sledujte svoj menštruačný cyklus s presnosťou a úplnou súkromnosťou. 
                Periodka uchováva vaše dáta offline a bezpečne, nikdy nezdieľa vaše citlivé informácie.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">100% súkromné</p>
                  <p className="text-sm text-muted-foreground">Všetky dáta zostávaju na vašom zariadení</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Presné predpovede</p>
                  <p className="text-sm text-muted-foreground">Založené na vašom jedinečnom cykle</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Úplne bezplatné</p>
                  <p className="text-sm text-muted-foreground">Bez predplatného či skrytých poplatkov</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Sledovanie príznakov</p>
                  <p className="text-sm text-muted-foreground">Nálada, bolesť a ďalšie</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
                Používať Periodku zdarma
              </Button>
              <Button variant="outline" size="lg">
                Viac informácií
              </Button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-gradient-primary rounded-full" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">100% zamerané na súkromnosť</span>
            </div>
          </div>

          {/* Right content - App mockup */}
          <div className="relative">
            <Card className="bg-gradient-hero border-0 shadow-elegant p-8 rounded-3xl">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-soft">
                <img 
                  src={heroImage} 
                  alt="Žena používajúca aplikáciu Periodka" 
                  className="w-full h-full object-cover"
                />
                
                {/* App overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                
                {/* App mockup element */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <Card className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-elegant min-w-[280px]">
                    <div className="flex items-center gap-3 mb-4">
                      <img src={periodkaIcon} alt="Periodka" className="w-8 h-8 rounded-lg" />
                      <h3 className="font-bold text-lg">Periodka</h3>
                    </div>
                    <div className="space-y-2 text-center">
                      <div className="text-2xl font-bold">● ● ● ○ ○</div>
                      <p className="text-sm opacity-90">Deň 3 z 28</p>
                      <p className="text-xs opacity-75">Ďalšia menštruácia za 25 dní</p>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};