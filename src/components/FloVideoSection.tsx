import React from 'react';
import { Play } from 'lucide-react';

export const FloVideoSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-primary aspect-video">
            {/* Video Thumbnail/Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=450&fit=crop&crop=face" 
                alt="Woman relaxing" 
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            
            {/* Flo Logo Overlay */}
            <div className="absolute bottom-8 left-8">
              <div className="text-4xl font-bold text-white">Flo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};