import React from 'react';
import { FloNavigation } from '@/components/FloNavigation';
import { FloFooter } from '@/components/FloFooter';

export default function Recenzia() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <FloNavigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Recenzia </span>
                <span className="brand-text text-primary">Periodka</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Detailná recenzia aplikácie Periodka - všetko čo potrebujete vedieť o sledovaní menštruačného cyklu.
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg mx-auto">
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Prečo Periodka?</h2>
                <p className="text-muted-foreground mb-4">
                  Periodka je moderná aplikácia na sledovanie menštruačného cyklu, ktorá kombinuje jednoduchost s pokročilými funkciami. 
                  Našim cieľom je poskytnúť ženám nástroj, ktorý im pomôže lepšie porozumieť svojmu telu.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Presné predpovede menštruácie a ovulácie</li>
                  <li>Sledovanie symptómov a nálady</li>
                  <li>Anonymné a bezpečné uchovanie údajov</li>
                  <li>Personalizované odporúčania pre každú fázu cyklu</li>
                </ul>
              </div>

              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Hodnotenie</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Výhody</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Intuitívne používanie</li>
                      <li>Presné algoritmy</li>
                      <li>Krásny design</li>
                      <li>Ochrana súkromia</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Možné zlepšenia</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Viac možností exportu</li>
                      <li>Integrácia s fitness trackermi</li>
                      <li>Rozšírenejšie analytiky</li>
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