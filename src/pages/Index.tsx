import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroWithSocialProof } from '@/components/HeroWithSocialProof';
import { FeaturesShowcase } from '@/components/FeaturesShowcase';
import { FeatureSplit } from '@/components/FeatureSplit';
import { ThreeUpFeatures } from '@/components/ThreeUpFeatures';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { QRDownload } from '@/components/QRDownload';
import { WideCTABanner } from '@/components/WideCTABanner';
import { Footer } from '@/components/Footer';
import { Calendar, Heart, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroWithSocialProof />
      <FeaturesShowcase />
      
      {/* Feature Sections */}
      <FeatureSplit
        title="Sleduj svoj cyklus a príznaky"
        description="Zisti, čo je normálne pre teba vďaka sledovaniu menštruácie a cyklu. Objav vzorce v príznakoch a vedz, kedy pravdepodobne príde menštruácia – aby ťa už nič nezaskočilo."
        bullets={["Predikcie period", "Denné logovanie príznakov", "Kalendár a história"]}
        icon={Calendar}
        className="bg-background"
      />
      
      <FeatureSplit
        title="Lepšie porozumej svojej plodnosti"
        description="Dostávaj denné tipy na počatie od expertov a nauč sa čítať signály plodnosti pomocou sledovania ovulácie – aby si v každom cykle maximalizovala šancu na pozitívny tehotenský test."
        bullets={["Plodné okná", "LH/ovulácia", "Denné odporúčania"]}
        icon={Heart}
        reverse
        className="bg-gradient-soft"
      />
      
      <FeatureSplit
        title="Prejdi do Anonymného režimu"
        description="Lepšie spoznaj svoje telo s pridanou vrstvou súkromia. Periodka štandardne šifruje údaje a nikdy ich nepredáva – v Anonymnom režime ťa nevieme identifikovať ani my."
        bullets={["Štandardné šifrovanie", "Žiadny predaj dát", "Neidentifikovateľné používanie"]}
        icon={Shield}
        className="bg-background"
      />
      
      <ThreeUpFeatures />
      <TestimonialCarousel />
      <QRDownload />
      <WideCTABanner />
      <Footer />
    </div>
  );
};

export default Index;