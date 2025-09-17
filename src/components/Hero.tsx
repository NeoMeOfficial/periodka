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
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Ahoj!
                </h1>
                
                <div className="space-y-4">
                  <p className="text-2xl font-medium">Ste vo fáze menštruácie</p>
                  <p className="text-xl text-muted-foreground">Deň 1 z vášho aktuálneho cyklu</p>
                </div>
                
                <Badge variant="secondary" className="text-base font-medium px-6 py-3 rounded-2xl">
                  Všetky dáta sú uložené na vašom zariadení
                </Badge>
              </div>
              
              <div className="bg-muted/5 rounded-3xl p-8 glass border border-primary/10">
                <p className="text-xl mb-6">Ďalšia menštruácia za <span className="font-bold text-primary">27 dní</span></p>
                <p className="text-base text-muted-foreground">Založené na vašom 28-dňovom cykle</p>
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

            <div className="flex flex-col gap-6 mt-12">
              <Button size="lg" className="bg-gradient-primary hover:shadow-elegant transition-all duration-500 text-white font-semibold text-xl py-6 px-12 rounded-2xl hover:scale-105 shadow-soft">
                Zadaj menštruáciu
              </Button>
              <Button variant="outline" size="lg" className="glass-button border-primary/30 hover:border-primary/50 text-lg py-5 px-12 rounded-2xl">
                Pozrieť kalendár
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-gradient-primary rounded-full" />
                ))}
              </div>
              <span className="text-base text-muted-foreground">100% zamerané na súkromnosť</span>
            </div>
          </div>

          {/* Right content - Enhanced cycle indicator */}
          <div className="relative lg:ml-8">
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/15 rounded-full blur-lg"></div>
              
              <Card className="glass border-primary/20 shadow-elegant p-10 rounded-[2rem] backdrop-blur-xl">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-soft flex items-center justify-center">
                  {/* Enhanced circular cycle indicator */}
                  <div className="relative w-72 h-72">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-muted/15"
                      />
                      {/* Progress circle with glow effect */}
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="url(#enhancedGradient)"
                        strokeWidth="4"
                        strokeDasharray={`${(1/28) * 264} 264`}
                        strokeLinecap="round"
                        className="transition-all duration-700 drop-shadow-lg"
                        filter="url(#glow)"
                      />
                      <defs>
                        <linearGradient id="enhancedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="50%" stopColor="hsl(10 70% 80%)" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                    </svg>
                    
                    {/* Enhanced center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="mb-4 p-3 rounded-2xl bg-gradient-primary/10 backdrop-blur-sm">
                        <img src={periodkaIcon} alt="Periodka" className="w-14 h-14 rounded-xl" />
                      </div>
                      <div className="text-5xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">1</div>
                      <div className="text-sm text-muted-foreground font-medium">deň cyklu</div>
                      <div className="mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Menštruácia
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};