import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Mail, MessageCircle } from 'lucide-react';
import periodkaIcon from '@/assets/periodka-icon.png';

export const Footer = () => {
  return (
    <footer className="bg-gradient-soft border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={periodkaIcon} alt="Periodka" className="w-10 h-10 rounded-lg" />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Periodka
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Bezpečný a súkromný sledovač menštruácie pre moderné ženy. 
              Vaše zdravie, vaše dáta, vaša kontrola.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span>Vytvorené so súkromnosťou na prvom mieste</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Funkcie</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Sledovanie cyklu</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Predpovede menštruácie</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Sledovanie príznakov</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Analýza nálady</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Kalendár plodnosti</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Ochrana PIN kódom</li>
            </ul>
          </div>

          {/* Privacy */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Súkromnosť</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Dáta offline</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Žiadne sledovanie</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Lokálne ukladanie</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Bezpečnostné funkcie</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Ochrana údajov</li>
            </ul>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">100% súkromné</span>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Podpora</h4>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Kontaktujte nás
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                Časté otázky
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Potrebujete pomoc? Sme tu pre vás 24/7.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Periodka. Všetky práva vyhradené. Vytvorené s láskou pre ženy na Slovensku.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-primary transition-colors cursor-pointer">Podmienky použitia</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Ochrana súkromia</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};