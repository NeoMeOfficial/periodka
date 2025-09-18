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
              {/* 3D Glass Phone Frame */}
              <div className="w-80 h-[600px] bg-gradient-primary rounded-[3rem] p-2 shadow-elegant relative overflow-hidden">
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[3rem] backdrop-blur-sm"></div>
                <div className="absolute inset-2 bg-white/10 rounded-[2.5rem] backdrop-blur-lg border border-white/20"></div>
                
                {/* Liquid glass effect */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-8 right-6 w-12 h-12 bg-primary/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* App Screenshot Container */}
                <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent z-10"></div>
                  
                  {/* Product Screenshot */}
                  <div className="w-full h-full flex items-center justify-center relative">
                    <img 
                      src="/src/assets/periodka-app-screen.png" 
                      alt="Periodka App Interface" 
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Additional glass overlay for premium effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/5"></div>
                  </div>
                </div>
                
                {/* 3D highlight effect */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-white/40 rounded-full blur-md"></div>
                <div className="absolute top-1/3 -right-1 w-4 h-8 bg-white/20 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};