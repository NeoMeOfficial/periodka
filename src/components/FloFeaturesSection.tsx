import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Sleduj svoj cyklus a príznaky",
    description: "Zisti, čo je normálne pre teba vďaka sledovaniu menštruácie a cyklu. Objav vzorce v príznakoch a vedz, kedy pravdepodobne príde menštruácia – aby ťa už nič nezaskočilo."
  },
  {
    id: 2, 
    title: "Pochop svoje príznaky",
    description: "Nauč sa rozumieť signálom svojho tela a rozoznávať, čo ti chce povedať. Sleduj príznaky a získaj prehľad o svojom zdraví."
  },
  {
    id: 3,
    title: "Zmeň to, ako sa cítiš", 
    description: "Získaj personalizované odporúčania a tipy od odborníkov, ako sa vyrovnať s príznakmi a zlepšiť svoje celkové zdravie."
  },
  {
    id: 4,
    title: "Anonymný režim pre súkromie",
    description: "Lepšie spoznaj svoje telo s pridanou vrstvou súkromia. Periodka štandardne šifruje údaje a nikdy ich nepredáva – v Anonymnom režime ťa nevieme identifikovať ani my."
  }
];

export const FloFeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative geometric-shapes overflow-hidden">
      {/* Glassmorphism accent dots */}
      <div className="accent-dot-large w-56 h-56 -top-28 -right-28 opacity-30" style={{animationDelay: '1s'}}></div>
      <div className="accent-dot w-24 h-24 top-32 left-16 opacity-50" style={{animationDelay: '3s'}}></div>
      <div className="accent-dot-small w-12 h-12 bottom-40 right-24 opacity-70" style={{animationDelay: '5s'}}></div>
      <div className="accent-oval w-32 h-20 bottom-16 left-1/3 opacity-40" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Čo všetko zvládne aplikácia <span className="brand-text">Periodka</span>?
          </h2>
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto space-y-16">
          {features.map((feature, index) => (
            <div key={feature.id} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="symptom-glass rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                      <h3 className="text-xl lg:text-2xl font-medium" style={{ color: '#955F6A' }}>
                        {feature.id === 1 && (
                          <>Sleduj svoj <span className="highlight-text">cyklus</span> a príznaky</>
                        )}
                        {feature.id === 2 && (
                          <>Pochop svoje <span className="highlight-text">príznaky</span></>
                        )}
                        {feature.id === 3 && (
                          <>Zmeň to, ako sa <span className="highlight-text">cítiš</span></>
                        )}
                        {feature.id === 4 && (
                          <><span className="highlight-text">Anonymný režim</span> pre súkromie</>
                        )}
                      </h3>
                      <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: '#955F6A' }}>
                      {feature.description}
                    </p>
                    <div className="pt-2">
                      <Button 
                        variant="secondary-glass" 
                        style={{ color: '#F4415F' }}
                      >
                        <Lightbulb className="w-4 h-4" />
                        Chcem sa pridať
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Action Button - Now removed since we have the glassmorphism button */}
              </div>
              
              {/* Visual Side */}
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Card className="w-64 h-80 bg-gradient-soft border-border/50 p-6 flex items-center justify-center relative floating-dots">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded-full"></div>
                      <div className="h-3 bg-muted rounded-full w-3/4 mx-auto"></div>
                      <div className="h-3 bg-muted rounded-full w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};