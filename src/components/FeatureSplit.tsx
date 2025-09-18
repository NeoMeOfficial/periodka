import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface FeatureSplitProps {
  title: string;
  description: string;
  bullets?: string[];
  linkText?: string;
  linkHref?: string;
  icon: LucideIcon;
  imageUrl?: string;
  reverse?: boolean;
  className?: string;
}

export const FeatureSplit: React.FC<FeatureSplitProps> = ({
  title,
  description,
  bullets,
  linkText,
  linkHref,
  icon: Icon,
  imageUrl,
  reverse = false,
  className = ""
}) => {
  return (
    <section className={`py-24 relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className={`absolute ${reverse ? 'top-1/4 right-0' : 'bottom-1/4 left-0'} w-96 h-96 bg-primary/3 rounded-full blur-3xl`}></div>
      
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Column */}
          <div className={`space-y-8 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                {title}
              </h3>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
              
              {bullets && bullets.length > 0 && (
                <ul className="space-y-3">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              
              {linkText && linkHref && (
                <Button variant="link" className="text-primary font-medium p-0 h-auto text-lg">
                  {linkText} →
                </Button>
              )}
            </div>
          </div>
          
          {/* Visual Column */}
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <Card className="glass p-8 transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square bg-gradient-soft rounded-2xl flex items-center justify-center">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <Icon className="w-32 h-32 text-primary/30" />
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};