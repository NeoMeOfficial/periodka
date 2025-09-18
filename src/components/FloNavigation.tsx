import React from 'react';
import { Button } from '@/components/ui/button';

export const FloNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <div className="text-2xl font-bold text-foreground">Periodka</div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#funkcie" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Funkcie
          </a>
          <a href="#o-aplikacii" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            O aplikácii
          </a>
          <a href="#recenzie" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Recenzie
          </a>
          <a href="#podpora" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Podpora
          </a>
          <a href="#premium" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Premium
          </a>
        </div>
        
        {/* CTA Button */}
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full">
          Stiahnuť zadarmo
        </Button>
      </div>
    </nav>
  );
};