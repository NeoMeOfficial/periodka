import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Track your cycle and symptoms",
    description: "Cookies aren't just great for the first day of your period - find out more. Read Articles. Free, Focus Today. No ads that annoy you, thanks to tech settings.",
    buttonText: "Start →"
  },
  {
    id: 2, 
    title: "Plan your fertility better",
    description: "Get personalised pre-to-post plans and learn how to read your fertility signs with ovulation tracking - so you can maximize your chances of getting your fertility badge each cycle."
  },
  {
    id: 3,
    title: "Follow your pregnancy week by week", 
    description: "Discover how your body and baby are changing. Track important milestones and, with your weekly to-do list, always know what matters most right now."
  },
  {
    id: 4,
    title: "Share Flo with your partner",
    description: "We'll teach your partner everything they need to know about your body (and how they can better support you) - so you don't have to learn about explanation/education."
  },
  {
    id: 5,
    title: "Switch to Anonymous Mode",
    description: "Get to know your body better with an added layer of privacy. Flo encrypts your data as standard and never sells it - we can't identify you when using Anonymous Mode."
  }
];

export const FloFeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            What can you do with the Flo app?
          </h2>
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto space-y-16">
          {features.map((feature, index) => (
            <div key={feature.id} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                {feature.buttonText && (
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold text-lg"
                  >
                    {feature.buttonText}
                  </Button>
                )}
              </div>
              
              {/* Visual Side */}
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Card className="w-64 h-80 bg-gradient-soft border-border/50 p-6 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded-full"></div>
                      <div className="h-3 bg-muted rounded-full w-3/4 mx-auto"></div>
                      <div className="h-3 bg-muted rounded-full w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};