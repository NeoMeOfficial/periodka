import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, TrendingUp } from 'lucide-react';

export const FloHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-soft relative overflow-hidden floating-dots geometric-shapes">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center pt-20">
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
                <span className="text-foreground">Ahoj, som </span>
                <span className="brand-text text-primary">Periodka</span>
                <span className="text-foreground">.</span>
                <br />
                <span className="text-foreground">Poviem ti <span className="highlight-text">ako</span> a <span className="highlight-text">kedy</span> sa o seba starať</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                <span className="highlight-text">Tisíce slovenských žien</span> už používajú Periodka na sledovanie 
                menštruácie, ovulácie a lepšie porozumenie svojho tela.
              </p>
            </div>
            
            {/* Primary CTA Button */}
            <div className="flex justify-center sm:justify-start">
              <Button 
                variant="primary" 
                className="bg-gradient-primary-button" 
                style={{ color: '#F4415F' }}
              >
                <TrendingUp className="w-4 h-4" />
                Odhad na dnes
              </Button>
            </div>
            
            {/* Small Print */}
            <p className="text-xs text-muted-foreground/60 max-w-md">
              *Údaje pochádzajú iba od používateliek Periodka. Tieto údaje nie sú 
              náhradou za odbornú lekársku starostlivosť.
            </p>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* 3D Premium Phone Frame */}
              <div className="w-80 h-[600px] bg-gradient-primary rounded-[3rem] p-1 shadow-elegant relative overflow-hidden" 
                   style={{
                     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                   }}>
                
                {/* Outer phone bezel with realistic phone styling */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-[3rem] backdrop-blur-sm"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-white/20 via-transparent to-white/5 rounded-[2.8rem] backdrop-blur-lg border border-white/30"></div>
                
                {/* Phone-specific elements */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/40 rounded-full"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                
                {/* Enhanced liquid glass animation */}
                <div className="absolute top-8 left-6 w-20 h-20 bg-white/25 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-12 right-8 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-1/2 left-2 w-8 h-32 bg-white/15 rounded-full blur-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                {/* App Screenshot Container with phone screen styling */}
                <div className="absolute inset-2 bg-background rounded-[2.2rem] overflow-hidden" 
                     style={{
                       boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.05)'
                     }}>
                  
                  {/* Clean white-based overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5 z-10 rounded-[2.2rem]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent z-10 rounded-[2.2rem]"></div>
                  
                  {/* Product Screenshot */}
                  <div className="w-full h-full relative rounded-[2.2rem] overflow-hidden">
                    <img 
                      src="/src/assets/periodka-app-screen.png" 
                      alt="Periodka App Interface showing menstrual cycle tracking features" 
                      className="w-full h-full object-cover object-center rounded-[2.2rem]"
                    />
                    
                    {/* Subtle screen reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/3 pointer-events-none rounded-[2.2rem]"></div>
                  </div>
                </div>
                
                {/* Enhanced 3D phone highlights */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-white/50 rounded-full blur-lg"></div>
                <div className="absolute top-1/4 -right-2 w-6 h-12 bg-white/30 rounded-full blur-md"></div>
                <div className="absolute bottom-1/4 -left-2 w-4 h-8 bg-white/25 rounded-full blur-sm"></div>
                
                {/* Side button details */}
                <div className="absolute left-0 top-24 w-1 h-12 bg-white/20 rounded-r-full"></div>
                <div className="absolute left-0 top-40 w-1 h-6 bg-white/20 rounded-r-full"></div>
                <div className="absolute right-0 top-32 w-1 h-16 bg-white/20 rounded-l-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};