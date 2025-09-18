import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Laura Whelan",
    source: "App Store",
    rating: 5,
    text: "Periodka je ako priateľka s emocionálnou aj fyzickou podporou. Interaktívny obsah milujem – aplikácia ma naozaj chápe."
  },
  {
    id: 2,
    name: "M****A",
    source: "Google Play",
    rating: 5,
    text: "Wow! Najlepšia aplikácia pre tehotenstvo. Veľmi informatívna. Zvyčajne neplatím za appky, ale toto sa oplatí."
  },
  {
    id: 3,
    name: "Používateľka Periodka",
    source: "App Store",
    rating: 5,
    text: "Úžasná appka ❤️ Je to viac než menštruačný kalendár. Informácie o zdraví, aké zvyčajne dáva zdravotník."
  },
  {
    id: 4,
    name: "Kristen DuVal",
    source: "App Store", 
    rating: 5,
    text: "Mala som problémy s počatím – vďaka logovaniu a ovulačnému monitoru som pochopila svoj cyklus. Teraz som tehotná!"
  },
  {
    id: 5,
    name: "Používateľka s PCOS",
    source: "App Store",
    rating: 5,
    text: "Pri PCOS a nepravidelných cykloch je táto appka záchrana pri sledovaní plodnosti."
  }
];

export const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-primary text-primary" />
            Viac ako 7 miliónov 5-★ hodnotení
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Dôveruje nám <span className="bg-gradient-primary bg-clip-text text-transparent">67 miliónov+</span> žien každý mesiac
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Recenzie hovoria za všetko.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <Card className="glass p-12 text-center relative min-h-[300px] flex items-center justify-center">
            <div className="space-y-6">
              {/* Star Rating */}
              <div className="flex justify-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed max-w-3xl">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              {/* Author Info */}
              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">
                  {testimonials[currentSlide].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentSlide].source}
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
            {testimonials.map((_, index) => (
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

        {/* App Store Ratings */}
        <div className="flex justify-center items-center gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">4,8/5</div>
            <div className="text-sm text-muted-foreground">App Store</div>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">4,7/5</div>
            <div className="text-sm text-muted-foreground">Google Play</div>
          </div>
        </div>
      </div>
    </section>
  );
};