import React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { CalendarInsights } from '@/components/CalendarInsights';
import { HowItWorks } from '@/components/HowItWorks';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CalendarInsights />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
