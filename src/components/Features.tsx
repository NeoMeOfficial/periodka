import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Lock, KeyRound, TrendingUp, Target, Activity, Settings, Sparkles, Brain, EyeOff, Download } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-32">
          <h2 className="text-6xl lg:text-7xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Prečo používať Periodku?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Presne preto, že vaše súkromnosť a zdravie sú na prvom mieste. Žiadne kompromisy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          {/* Privacy & Security Section */}
          <div className="space-y-12">
            <Card className="glass border-primary/20 shadow-elegant p-12 rounded-[3rem] backdrop-blur-xl h-full">
              <div className="space-y-10">
                <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto shadow-soft">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                
                <div className="text-center space-y-6">
                  <h3 className="text-4xl font-bold">Súkromnosť a bezpečnosť</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Vaše najintímnejšie dáta zostávajú tam, kde patria - u vás.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-primary rounded-full mt-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-xl mb-4">Prístup orientovaný na súkromnosť</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Vaše dáta zostávajú na zariadení. Žiadna registrácia, žiadne cloudové dáta, žiadne sledovanie.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-primary rounded-full mt-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-xl mb-4">Ochrana PIN kódom</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Pridajte ďalšiu vrstvu súkromia pomocou 4-miestneho PIN kódu pre maximálnu bezpečnosť.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tracking & Predictions Section */}
          <div className="space-y-12">
            <Card className="glass border-primary/20 shadow-elegant p-12 rounded-[3rem] backdrop-blur-xl h-full">
              <div className="space-y-10">
                <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto shadow-soft">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                
                <div className="text-center space-y-6">
                  <h3 className="text-4xl font-bold">Sledovanie a predpovede</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Presné predpovede založené na vašich jedinečných vzorcoch.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-primary rounded-full mt-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-xl mb-4">Presné predpovede</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Periodka sa učí z vašich jedinečných vzorcov cyklu pre stále presnejšie predpovede.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-primary rounded-full mt-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-xl mb-4">Komplexné sledovanie</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Sledujte nielen menštruáciu, ale aj príznaky, náladu a intenzitu prietoku.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Advanced Features Section */}
          <div className="space-y-12">
            <Card className="glass border-primary/20 shadow-elegant p-12 rounded-[3rem] backdrop-blur-xl h-full">
              <div className="space-y-10">
                <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto shadow-soft">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                
                <div className="text-center space-y-6">
                  <h3 className="text-4xl font-bold">Pokročilé funkcie</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Inteligentné funkcie, ktoré vám uľahčia život.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-primary rounded-full mt-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-xl mb-4">Voliteľné AI poznatky</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Získajte personalizované odporúčania a analýzu vašich vzorcov cyklu a príznakov.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-3 h-3 bg-primary rounded-full mt-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-xl mb-4">Diskrétny režim</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Úplne zmení rozhranie aplikácie na pracovný nástroj produktivity pre maximálne súkromie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass p-16 rounded-[3rem] shadow-elegant border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Pripravená prevziať kontrolu nad svojím menštruačným zdravím?
            </h3>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Začnite sledovať svoj cyklus ešte dnes s Periodkou - aplikáciou orientovanou na súkromie, 
              úplne bezplatnou a navrhnutou tak, aby vám dala kontrolu.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-elegant transition-all duration-500 text-white font-semibold text-xl py-6 px-12 rounded-2xl hover:scale-105">
              Začať používať Periodku zdarma
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};