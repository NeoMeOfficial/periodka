import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Calendar, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-woman.jpg';
import periodkaIcon from '@/assets/periodka-icon.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Ahoj! 👋
                </h1>
                
                <div className="space-y-2">
                  <p className="text-xl font-medium">Ste vo fáze menštruácie</p>
                  <p className="text-muted-foreground">Deň 1 z vášho aktuálneho cyklu</p>
                </div>
                
                <Badge variant="secondary" className="text-sm font-medium">
                  Všetky dáta sú uložené na vašom zariadení
                </Badge>
              </div>
              
              <div className="bg-muted/10 rounded-2xl p-6 glass">
                <p className="text-lg mb-4">Ďalšia menštruácia za <span className="font-bold text-primary">27 dní</span></p>
                <p className="text-sm text-muted-foreground">Založené na vašom 28-dňovom cykle</p>
              </div>
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

            <div className="flex flex-col gap-4">
              <Button size="lg" className="glass-button bg-gradient-primary hover:shadow-elegant transition-all duration-300 text-lg py-6">
                Zadaj menštruáciu
              </Button>
              <Button variant="outline" size="lg" className="glass-button">
                Pozrieť kalendár
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

          {/* Right content - Cycle indicator */}
          <div className="relative">
            <Card className="glass border-0 shadow-elegant p-8 rounded-3xl">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-soft flex items-center justify-center">
                {/* Circular cycle indicator */}
                <div className="relative w-64 h-64">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-muted/20"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeDasharray={`${(1/28) * 283} 283`}
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <img src={periodkaIcon} alt="Periodka" className="w-12 h-12 rounded-xl mb-3" />
                    <div className="text-4xl font-bold mb-2">1</div>
                    <div className="text-sm text-muted-foreground">deň cyklu</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};