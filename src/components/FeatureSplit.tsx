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
    <section className={`py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={reverse ? 'lg:col-start-2' : ''}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              {title}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            
            {bullets && (
              <ul className="space-y-3 mb-8">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-lg text-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {linkText && linkHref && (
              <Button variant="outline" asChild>
                <a href={linkHref}>{linkText}</a>
              </Button>
            )}
          </div>
          
          {/* Image/Visual */}
          <div className={reverse ? 'lg:col-start-1' : ''}>
            <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 p-8">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-auto max-w-md mx-auto"
                />
              ) : (
                <div className="w-full h-64 bg-gradient-soft rounded-lg flex items-center justify-center">
                  <Icon className="w-16 h-16 text-primary/50" />
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};