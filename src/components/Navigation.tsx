import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Periodka</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Funkcie
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            O aplikácii
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Recenzie
          </a>
          <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
            Podpora
          </a>
        </div>
        
        <Button variant="default" className="font-semibold">
          Stiahnuť zadarmo
        </Button>
      </div>
    </nav>
  );
};