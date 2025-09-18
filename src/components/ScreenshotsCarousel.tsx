import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import appScreenshots from '@/assets/app-screenshots-carousel.png';

const screenshots = [
  { id: 1, caption: "Hlavná obrazovka sledovania cyklu" },
  { id: 2, caption: "Domov v režime – chcem otehotnieť" },
  { id: 3, caption: "Domov v režime – tehotenstvo" },
  { id: 4, caption: "Prehľady a poznatky" },
  { id: 5, caption: "Anonymný režim a nastavenia súkromia" }
];

export const ScreenshotsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 bg-gradient-soft relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Čo všetko zvládne aplikácia Periodka?
          </h2>
        </div>

        {/* Carousel */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50">
            {/* Main Image */}
            <div className="aspect-video relative">
              <img 
                src={appScreenshots} 
                alt="Ukážky z aplikácie Periodka"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with current caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-8">
                <p className="text-xl font-medium text-center text-foreground">
                  {screenshots[currentSlide].caption}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-button"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-button"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Card>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};