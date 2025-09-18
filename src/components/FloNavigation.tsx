import React from 'react';
import { Button } from '@/components/ui/button';
import periodkaLogo from '@/assets/periodka-logo.png';

export const FloNavigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-6">
      <nav className="max-w-6xl mx-auto bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-elegant">
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={periodkaLogo} 
              alt="Periodka Logo" 
              className="w-12 h-12 rounded-lg"
            />
            <div className="text-2xl font-bold brand-text" style={{ color: '#F4415F' }}>Periodka</div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#funkcie" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Funkcie
            </a>
            <a href="#o-aplikacii" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              O aplikácii
            </a>
            <a href="#recenzie" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Recenzie
            </a>
            <a href="#podpora" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Podpora
            </a>
            <a href="#premium" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Premium
            </a>
          </div>
          
          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full shadow-soft hover:shadow-elegant transition-all">
            Stiahnuť zadarmo
          </Button>
        </div>
      </nav>
    </div>
  );
};