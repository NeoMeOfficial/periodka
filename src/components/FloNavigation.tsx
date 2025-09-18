import React from 'react';
import { Button } from '@/components/ui/button';

export const FloNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">Flo</div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Product
          </a>
          <a href="#health-library" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Health Library
          </a>
          <a href="#calculators" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Calculators
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            About
          </a>
          <a href="#pro-optimizer" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Pro Optimizer
          </a>
        </div>
        
        {/* CTA Button */}
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full">
          Try Flo today
        </Button>
      </div>
    </nav>
  );
};