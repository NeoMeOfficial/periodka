import React from 'react';
import { FloNavigation } from '@/components/FloNavigation';
import { FloHero } from '@/components/FloHero';
import { FloFeaturesSection } from '@/components/FloFeaturesSection';
import { FloWhyChoose } from '@/components/FloWhyChoose';
import { FloVideoSection } from '@/components/FloVideoSection';
import { FloTestimonials } from '@/components/FloTestimonials';
import { FloRatingsSection } from '@/components/FloRatingsSection';
import { FloQRSection } from '@/components/FloQRSection';
import { FloPremiumBanner } from '@/components/FloPremiumBanner';
import { FloQASection } from '@/components/FloQASection';
import { FloFooter } from '@/components/FloFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloNavigation />
      <FloHero />
      <FloFeaturesSection />
      <FloWhyChoose />
      <FloVideoSection />
      <FloTestimonials />
      <FloRatingsSection />
      <FloQRSection />
      <FloPremiumBanner />
      <FloQASection />
      <FloFooter />
    </div>
  );
};

export default Index;