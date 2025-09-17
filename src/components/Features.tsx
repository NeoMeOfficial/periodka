import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, TrendingUp, Heart, Smartphone, Eye, BarChart, Pin, Database, Zap, Settings } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prečo používať Periodku?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Periodka sa odlišuje od ostatných sledovačov menštruácie zameraním na súkromnosť, 
            presnosť a komplexné funkcie navrhnuté špeciálne pre vaše potreby.
          </p>
        </div>

        {/* Privacy & Security */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Súkromnosť a bezpečnosť</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Prístup orientovaný na súkromnosť</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vaše dáta zostávajú na vašom zariadení. Žiadna registrácia, žiadne cloudové dáta a žiadne sledovanie. 
                    Vaše intímne zdravotné dáta zostávajú len vaše.
                  </p>
                  <Badge variant="secondary">100% offline</Badge>
                </div>
              </div>
            </Card>

            <Card className="glass p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Pin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Ochrana PIN kódom</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pridajte ďalšiu vrstvu súkromia pomocou 4-miestneho PIN kódu. 
                    Uchovajte svoje citlivé zdravotné dáta v bezpečí pred kýmkoľvek, kto by mohol pristupovať k vášmu zariadeniu.
                  </p>
                  <Badge variant="secondary">4-miestny PIN</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tracking & Predictions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Sledovanie a predpovede</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass p-6 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-3">Presné predpovede</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Periodka sa učí z vašich jedinečných vzorcov cyklu, aby poskytovala stále presnejšie predpovede.
                </p>
                <Badge variant="secondary">95% presnosť</Badge>
              </div>
            </Card>

            <Card className="glass p-6 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-3">Komplexné sledovanie</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Sledujte nielen menštruáciu, ale aj príznaky, náladu, intenzitu prietoku a ďalšie zdravotné ukazovatele.
                </p>
                <Badge variant="secondary">20+ príznakov</Badge>
              </div>
            </Card>

            <Card className="glass p-6 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-3">Personalizované nastavenia</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Prispôsobte dĺžku cyklu, trvanie periód a sledovače príznakov. Periodka sa prispôsobí vášmu telu.
                </p>
                <Badge variant="secondary">Úplne prispôsobiteľné</Badge>
              </div>
            </Card>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Pokročilé funkcie</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass p-6 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-3">Voliteľné AI poznatky</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Získajte personalizované odporúčania a analýzu vašich vzorcov cyklu a príznakov.
                </p>
                <Badge variant="secondary">AI asistent</Badge>
              </div>
            </Card>

            <Card className="glass p-6 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-3">Diskrétny režim</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Úplne zmena rozhrania aplikácie na pracovný nástroj produktivity. Ideálne pre zachovanie súkromia.
                </p>
                <Badge variant="secondary">Úplne skryté</Badge>
              </div>
            </Card>

            <Card className="glass p-6 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-3">Jednoduché spravovanie dát</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Zálohovanie jedným kliknutím a jednoduchá funkcia importu. Žiadne prekážky. Len kontrola nad vašimi dátami.
                </p>
                <Badge variant="secondary">Jednoduché zálohovanie</Badge>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">98%</div>
            <p className="text-muted-foreground">používateľiek je spokojných s presnosťou</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">95%</div>
            <p className="text-muted-foreground">presnosť predpovedí po 3 mesiacoch</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">100%</div>
            <p className="text-muted-foreground">súkromnosť vašich dát</p>
          </div>
        </div>
      </div>
    </section>
  );
};