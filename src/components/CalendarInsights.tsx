import React from 'react';
import { CycleTimeline } from './CycleTimeline';
import { CalendarMockup } from './CalendarMockup';
import { EducationalInsight } from './EducationalInsight';

export const CalendarInsights = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-32">
          <h2 className="text-6xl lg:text-7xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Kalendár a poznatky
          </h2>
          <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Sledujte svoj cyklus pomocou intuitívneho kalendára a získajte cenné poznatky o svojom zdraví.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-12">
            <div className="transform hover:scale-105 transition-all duration-300">
              <CycleTimeline />
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <EducationalInsight />
            </div>
          </div>
          <div className="transform hover:scale-105 transition-all duration-300">
            <CalendarMockup />
          </div>
        </div>
      </div>
    </section>
  );
};