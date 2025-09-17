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
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Prečo používať Periodku?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Vaša menštruácia si zaslúži súkromie, presnosť a pohodlie. Periodka je navrhnutá s dôrazom na vašu bezpečnosť a jedinečné potreby.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Privacy & Security Section */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Súkromnosť a bezpečnosť</h3>
              <p className="text-muted-foreground">Vaše dáta zostávajú výhradne vo vašich rukách</p>
            </div>
            
            <div className="space-y-6">
              <Card className="glass p-6 rounded-2xl shadow-soft border-primary/10 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Prístup orientovaný na súkromnosť</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Vaše dáta zostávajú na zariadení. Žiadna registrácia, žiadne cloudové dáta, žiadne sledovanie. 
                      Vaše intímne zdravotné údaje zostávajú výhradne vaše.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 rounded-2xl shadow-soft border-primary/10 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <KeyRound className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Ochrana PIN kódom</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Pridajte ďalšiu vrstvu súkromia pomocou 4-miestneho PIN kódu. Chráňte svoje citlivé 
                      zdravotné údaje pred kýmkoľvek, kto by mohol získať prístup k vášmu zariadeniu.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Tracking & Predictions Section */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sledovanie a predpovede</h3>
              <p className="text-muted-foreground">Inteligentné poznatky prispôsobené vášmu cyklu</p>
            </div>
            
            <div className="space-y-6">
              <Card className="glass p-6 rounded-2xl shadow-soft border-primary/10 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Presné predpovede</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Periodka sa učí z vašich jedinečných vzorcov cyklu a poskytuje čoraz presnejšie 
                      predpovede pre vašu menštruáciu, plodnosť a ovuláciu.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 rounded-2xl shadow-soft border-primary/10 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Komplexné sledovanie</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Sledujte nielen menštruáciu, ale aj príznaky, náladu, intenzitu prietoku a ďalšie 
                      zdravotné ukazovatele pre úplný obraz o vašom menštruačnom zdraví.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Advanced Features Section */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Pokročilé funkcie</h3>
              <p className="text-muted-foreground">Inovatívne nástroje pre modernú ženu</p>
            </div>
            
            <div className="space-y-6">
              <Card className="glass p-6 rounded-2xl shadow-soft border-primary/10 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Voliteľné AI poznatky</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Získajte personalizované odporúčania a analýzu vašich vzorcov cyklu a príznakov 
                      pomocou pokročilej umelej inteligencie.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 rounded-2xl shadow-soft border-primary/10 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <EyeOff className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Diskrétny režim</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Úplne zmeňte rozhranie aplikácie na pracovný nástroj. Ideálne pre zachovanie 
                      súkromia v akejkoľvek situácii.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass p-10 rounded-3xl shadow-elegant border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Pripravená prevziať kontrolu nad svojím menštruačným zdravím?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Začnite sledovať svoj cyklus ešte dnes s Periodkou - aplikáciou orientovanou na súkromie, 
              úplne bezplatnou a navrhnutou tak, aby vám dala kontrolu.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-elegant transition-all duration-500 text-white font-semibold text-xl py-6 px-12 rounded-2xl hover:scale-105">
              ✨ Začať používať Periodku zdarma
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};