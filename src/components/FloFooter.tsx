import React from 'react';
import { Button } from '@/components/ui/button';
import { Apple, Smartphone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const FloFooter = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="text-2xl font-bold text-primary">Periodka</div>
              </div>
              <p className="text-background/80 leading-relaxed">
                Poznaj svoje telo, vlastni svoje zdravie
              </p>
              
              {/* App Store Buttons */}
              <div className="space-y-3">
                <Button className="bg-background text-foreground hover:bg-background/90 flex items-center gap-3 px-4 py-2 h-auto rounded-lg w-full justify-start">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
                
                <Button className="bg-background text-foreground hover:bg-background/90 flex items-center gap-3 px-4 py-2 h-auto rounded-lg w-full justify-start">
                  <Smartphone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Product Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Produkt</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Periodka pre Android</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Periodka pre iPhone</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Periodka Premium</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Súkromné rozhovory</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Periodka pre partnerov</a></li>
              </ul>
            </div>

            {/* Features Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Funkcie</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sledovač menštruácie</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Kalkulátor ovulácie</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sledovač tehotenstva</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Kalendár cyklu</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Zdravotné poznatky</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Spoločnosť</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">O nás</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Kariéra</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Tlač</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Kontakt</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Podpora</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media & Bottom Links */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Facebook className="w-5 h-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
                <a href="#" className="hover:text-background transition-colors">Ochrana súkromia</a>
                <a href="#" className="hover:text-background transition-colors">Podmienky používania</a>
                <a href="#" className="hover:text-background transition-colors">Cookies</a>
                <a href="#" className="hover:text-background transition-colors">Ochrana údajov</a>
              </div>

              {/* Copyright */}
              <div className="text-sm text-background/60">
                © 2025 Periodka s.r.o.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};