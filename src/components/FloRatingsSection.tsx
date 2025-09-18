import React from 'react';
import { Star, Apple, Smartphone } from 'lucide-react';

export const FloRatingsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-2">
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Over 7 million 5-star ratings*
            </h2>
          </div>

          {/* App Store Ratings */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <Apple className="w-8 h-8 text-foreground" />
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-foreground">4.8</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">App Store</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-foreground" />
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-foreground">4.7</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};