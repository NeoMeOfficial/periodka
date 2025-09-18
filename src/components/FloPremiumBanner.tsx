import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FloPremiumBanner = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Flo is gifting{' '}
              <span className="text-white/90">Flo Premium</span>
              {' '}subscriptions to women in need
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed">
              The Pass It On Project is our mission for gender equality: 
              SEE to access period and reproductive health information.
            </p>
            
            <Button 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 h-auto rounded-lg group"
            >
              Learn more about Pass It On
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded-full w-32 mx-auto"></div>
                    <div className="h-4 bg-white/20 rounded-full w-24 mx-auto"></div>
                    <div className="h-4 bg-white/20 rounded-full w-28 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};