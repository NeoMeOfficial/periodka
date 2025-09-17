import React from 'react';
import { CycleTimeline } from './CycleTimeline';
import { CalendarMockup } from './CalendarMockup';
import { EducationalInsight } from './EducationalInsight';

export const CalendarInsights = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Kalendár a poznatky
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sledujte svoj cyklus pomocou intuitívneho kalendára a získajte cenné poznatky o svojom zdraví.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <CycleTimeline />
            <EducationalInsight />
          </div>
          <div>
            <CalendarMockup />
          </div>
        </div>
      </div>
    </section>
  );
};