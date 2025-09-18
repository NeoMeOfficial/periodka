import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroWithSocialProof } from '@/components/HeroWithSocialProof';
import { ScreenshotsCarousel } from '@/components/ScreenshotsCarousel';
import { FeatureSplit } from '@/components/FeatureSplit';
import { ThreeUpFeatures } from '@/components/ThreeUpFeatures';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { QRDownload } from '@/components/QRDownload';
import { WideCTABanner } from '@/components/WideCTABanner';
import { Footer } from '@/components/Footer';
import { Calendar, Baby, Heart, Users, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroWithSocialProof />
      <ScreenshotsCarousel />
      
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
        title="Sleduj tehotenstvo týždeň po týždni"
        description="Zisti, ako sa mení tvoje telo aj bábätko. Sleduj dôležité míľniky a vďaka týždennému zoznamu úloh vždy vieš, čo je práve teraz dôležité."
        icon={Baby}
        className="bg-background"
      />
      
      <FeatureSplit
        title="Zdieľaj Periodka s partnerom – a zdieľajte zodpovednosť"
        description="Naučíme partnera všetko, čo potrebuje vedieť o tvojom tele (a ako ťa môže lepšie podporiť) – aby si to nemusela vysvetľovať ty."
        linkText="Zisti viac o zdieľaní s partnerom"
        linkHref="#partner"
        icon={Users}
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
