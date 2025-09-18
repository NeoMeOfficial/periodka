import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Apple, Smartphone } from 'lucide-react';

export const FloHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-soft relative overflow-hidden floating-dots geometric-shapes">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Rating Badge */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span><span className="highlight-text">Najlepšia aplikácia</span> pre ženy na Google Play a App Store</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Sme</span>{' '}
                <span className="brand-text text-primary">Periodka</span>
                <span className="text-foreground">, tvoja <span className="highlight-text">spoľahlivá</span> aplikácia pre <span className="highlight-text">zdravie žien</span></span>
                <span className="text-primary">*</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                <span className="highlight-text">Tisíce slovenských žien</span> už používajú Periodka na sledovanie 
                menštruácie, ovulácie a lepšie porozumenie svojho tela.
              </p>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-foreground text-background hover:bg-foreground/90 flex items-center gap-3 px-6 py-3 h-auto rounded-lg">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button className="bg-foreground text-background hover:bg-foreground/90 flex items-center gap-3 px-6 py-3 h-auto rounded-lg">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
            
            {/* Small Print */}
            <p className="text-xs text-muted-foreground/60 max-w-md">
              *Údaje pochádzajú iba od používateliek Periodka. Tieto údaje nie sú 
              náhradou za odbornú lekársku starostlivosť.
            </p>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-primary rounded-[3rem] p-2 shadow-elegant">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  <div className="p-6 space-y-4">
                    {/* Mock App Interface */}
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-foreground">Júl 2025</div>
                      <div className="text-primary font-semibold">5,959 zaznamenaných príznakov</div>
                    </div>
                    
                    <div className="bg-gradient-soft rounded-2xl p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">Day 5</span>
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">Stredné krvácanie</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
                          <span className="text-sm text-muted-foreground">Kŕče</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-2">
                      {[...Array(31)].map((_, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                          i === 4 ? 'bg-primary text-white' : 
                          [3, 5, 6].includes(i) ? 'bg-primary/20 text-primary' :
                          'text-muted-foreground'
                        }`}>
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};