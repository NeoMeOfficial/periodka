import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Download, Smartphone } from 'lucide-react';
import heroPhoneMockup from '@/assets/hero-phone-mockup.png';

export const HeroWithSocialProof = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-background via-secondary/30 to-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Social Proof Badge */}
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 fill-primary text-primary" />
              Viac ako 7 miliónov 5-hviezdičkových hodnotení
            </Badge>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Sme <span className="bg-gradient-primary bg-clip-text text-transparent">Periodka</span>,
                <br />
                svetová jednotka v ženskom zdraví
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Viac ako 420 miliónov ľudí na celom svete používa Periodka na sledovanie menštruácie, ovulácie a tehotenstva.
              </p>
            </div>
            
            {/* App Store CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center gap-3 h-14 px-8 font-medium">
                <Download className="w-5 h-5" />
                Stiahnuť v App Store
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-3 h-14 px-8 font-medium">
                <Smartphone className="w-5 h-5" />
                Získať v Google Play
              </Button>
            </div>
            
            {/* Small print */}
            <p className="text-sm text-muted-foreground max-w-lg">
              Údaje o hodnoteniach a používanosti sú založené na údajoch z obchodov s aplikáciami a interných metrikách.¹²³
            </p>
          </div>
          
          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-75"></div>
              <img 
                src={heroPhoneMockup} 
                alt="Periodka aplikácia na mobile telefóne"
                className="relative z-10 w-full max-w-sm lg:max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};