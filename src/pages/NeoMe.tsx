import React from 'react';
import { FloNavigation } from '@/components/FloNavigation';
import { FloFooter } from '@/components/FloFooter';
import { Sparkles, Target, Users, Zap } from 'lucide-react';

export default function NeoMe() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <FloNavigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="brand-text text-primary">NeoMe</span>
                <span className="text-foreground"> - Budúcnosť wellnessu</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Revolučná platforma pre komplexnú starostlivosť o zdravie žien v digitálnom veku.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold text-primary">Naša vízia</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                NeoMe predstavuje budúcnosť digitálneho wellnessu - ekosystém aplikácií a služieb, 
                ktorý spája najnovšie technológie s hlbokým porozumením potrieb moderných žien.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Periodka je len začiatok našej cesty. Pripravujeme revolúciu v oblasti ženského zdravia, 
                ktorá zmení spôsob, akým ženy pristupují k starostlivosti o seba.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Personalizácia</h3>
                </div>
                <p className="text-muted-foreground">
                  AI-poháňané odporúčania prispôsobené vašim jedinečným potrebám a životnému štýlu.
                </p>
              </div>

              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Inovácia</h3>
                </div>
                <p className="text-muted-foreground">
                  Najnovšie technológie v oblasti zdravia, biometrie a prediktívnej analytiky.
                </p>
              </div>

              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Komunita</h3>
                </div>
                <p className="text-muted-foreground">
                  Spojenie s ostatnými ženami, zdieľanie skúseností a vzájomná podpora.
                </p>
              </div>

              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Holistic Approach</h3>
                </div>
                <p className="text-muted-foreground">
                  Komplexný prístup k zdraviu zahŕňajúci fyzické, mentálne a emocionálne wellbeing.
                </p>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="bg-gradient-primary/10 rounded-2xl p-8 border border-primary/20 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Čoskoro dostupné
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Pracujeme na ďalších inovatívnych riešeniach, ktoré rozšíria možnosti Periodka aplikácie. 
                Buďte medzi prvými, ktorí sa o nich dozviete.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Váš email pre updates"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Informujte ma
                </button>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12 bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
              <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
                Roadmapa NeoMe
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div>
                    <span className="font-medium">2025 Q1:</span> Periodka 2.0 s pokročilými AI funkciami
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                  <div>
                    <span className="font-medium">2025 Q2:</span> Integrácia s fitness trackermi a zdravotnými zariadeniami
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                  <div>
                    <span className="font-medium">2025 Q3:</span> Komunitné funkcie a expert konzultácie
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                  <div>
                    <span className="font-medium">2025 Q4:</span> Spustenie kompletnej NeoMe platformy
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