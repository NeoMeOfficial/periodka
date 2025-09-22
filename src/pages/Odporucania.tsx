import React from 'react';
import { FloNavigation } from '@/components/FloNavigation';
import { FloFooter } from '@/components/FloFooter';
import { Heart, Activity, Moon, Sun } from 'lucide-react';

export default function Odporucania() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <FloNavigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Odporúčania pre </span>
                <span className="brand-text text-primary">zdravý cyklus</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Personalizované rady a tipy pre každú fázu vašeho menštruačného cyklu.
              </p>
            </div>

            {/* Recommendations by Phase */}
            <div className="space-y-8">
              {/* Menstrual Phase */}
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Menštruačná fáza (1-5 deň)</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Výživa</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Zvýšte príjem železa (špenát, červené mäso)</li>
                      <li>Pite dostatok tekutín</li>
                      <li>Konzumujte potraviny bohaté na omega-3</li>
                      <li>Obmedzte kofeín a alkohol</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Aktivita</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Jemné cvičenie (joga, chôdza)</li>
                      <li>Dostatočný odpočinok</li>
                      <li>Teplé kúpele na úľavu od bolesti</li>
                      <li>Meditácia a relaxácia</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Follicular Phase */}
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <Sun className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Folikulárna fáza (6-14 deň)</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Výživa</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Zelenina bohatá na antioxidanty</li>
                      <li>Celozrnné produkty</li>
                      <li>Čerstvé ovocie</li>
                      <li>Zdravé tuky (avokádo, orechy)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Aktivita</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Intenzívnejšie kardio cvičenie</li>
                      <li>Silový tréning</li>
                      <li>Nové výzvy a projekty</li>
                      <li>Sociálne aktivity</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ovulation Phase */}
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Ovulačná fáza (15-17 deň)</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Výživa</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Ľahké a čerstvé jedlá</li>
                      <li>Veľa zeleniny a ovocia</li>
                      <li>Dostatočná hydratácia</li>
                      <li>Prirodzené zdroje energie</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Aktivita</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Vysokointenzívne tréningy</li>
                      <li>Tímové športy</li>
                      <li>Kreatívne projekty</li>
                      <li>Dôležité rozhovory a stretnutia</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Luteal Phase */}
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <Moon className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Luteálna fáza (18-28 deň)</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Výživa</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Potraviny bohaté na horčík</li>
                      <li>Komplexné sacharidy</li>
                      <li>Zmena kálcia a vitamínu D</li>
                      <li>Obmedzte sladkosti a soľ</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Aktivita</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Miernejšie cvičenie</li>
                      <li>Joga a strečing</li>
                      <li>Organizácia a plánovanie</li>
                      <li>Sebareflexia a odpočinok</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloFooter />
    </div>
  );
}