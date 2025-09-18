import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Amazing app. It's more than a period tracker. I follow with information about my health, weight, sleep, mood and there are many more things to follow. - LOVE it",
    author: "Ava Smith"
  },
  {
    id: 2,
    text: "This is the best period app I've ever used. Over the years I've tried out many period tracking apps but this one got me hooked to consistently logging the info that it is now part of my daily routine (like checking weather forecast).",
    author: "Emma Wilson"
  },
  {
    id: 3,
    text: "As I grew having problems understanding I find this incredibly helpful!! It's exactly the data, love the customizable options and I think it's accurate."
  }
];

export const FloTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              What our users say about Flo
            </h2>
            <p className="text-lg text-muted-foreground">
              By reading Flo you can feel empowered! Can you say the same to 
              know what causes feel fine?
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div 
            className="relative mb-12"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <Card className="p-8 bg-background/80 border-border/50 min-h-[200px] flex items-center justify-center">
              <div className="space-y-6 max-w-2xl">
                {/* Stars */}
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-lg text-foreground leading-relaxed italic">
                  "{testimonials[currentSlide].text}"
                </p>
                
                {/* Author */}
                {testimonials[currentSlide].author && (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full"></div>
                    <span className="font-semibold text-foreground">
                      {testimonials[currentSlide].author}
                    </span>
                  </div>
                )}
              </div>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background border"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background border"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mb-12">
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
      </div>
    </section>
  );
};