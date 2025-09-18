import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import featuresPhoneMockup from '@/assets/features-phone-mockup.png';

const features = [
  {
    id: 1,
    title: "Sleduj svoj cyklus",
    description: "Zisti, čo je normálne pre teba vďaka sledovaniu menštruácie a cyklu. Objav vzorce v príznakoch a vedz, kedy pravdepodobne príde menštruácia – aby ťa už nič nezaskočilo."
  },
  {
    id: 2,
    title: "Pochop svoje príznaky",
    description: "Nauč sa rozumieť signálom svojho tela a rozoznávať, čo ti chce povedať. Sleduj príznaky a získaj prehľad o svojom zdraví."
  },
  {
    id: 3,
    title: "Vedz, čo robiť s príznakmi",
    description: "Získaj personalizované odporúčania a tipy od odborníkov, ako sa vyrovnať s príznakmi a zlepšiť svoje celkové zdravie."
  },
  {
    id: 4,
    title: "Anonymný režim",
    description: "Lepšie spoznaj svoje telo s pridanou vrstvou súkromia. Periodka štandardne šifruje údaje a nikdy ich nepredáva – v Anonymnom režime ťa nevieme identifikovať ani my."
  }
];

export const FeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-24 bg-gradient-soft relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Čo všetko zvládne aplikácia Periodka?
          </h2>
        </div>

        {/* Split Layout */}
        <div 
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Mobile Mockup - Left Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-sm">
              <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 p-8">
                <img 
                  src={featuresPhoneMockup} 
                  alt="Periodka aplikácia na mobile"
                  className="w-full h-auto max-w-[280px] mx-auto"
                />
              </Card>
            </div>
          </div>

          {/* Features List - Right Side */}
          <div className="space-y-6 relative">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`relative transition-all duration-500 ${
                  index === activeFeature ? 'z-10' : 'z-0'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {/* 3D Liquid Glass Morphism Highlight */}
                {index === activeFeature && (
                  <div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-xl border border-border/30 shadow-elegant animate-scale-in">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5"></div>
                    <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"></div>
                  </div>
                )}
                
                {/* Feature Content */}
                <div className="relative p-6 cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                  <div className="symptom-glass rounded-2xl p-4 mb-4">
                    <div className="flex items-center justify-center">
                      <div className="text-center space-y-1">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                          <h3 className={`text-lg lg:text-xl font-medium transition-colors duration-300 ${
                            index === activeFeature 
                              ? 'text-primary' 
                              : 'text-foreground/80'
                          }`} style={{ color: index === activeFeature ? undefined : '#955F6A' }}>
                            {feature.title}
                          </h3>
                          <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                    index === activeFeature 
                      ? 'text-foreground' 
                      : 'text-muted-foreground'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Progress Indicators */}
            <div className="flex gap-2 pt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeature 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};