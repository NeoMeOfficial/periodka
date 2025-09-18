import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QrCode, Smartphone, Apple } from 'lucide-react';

export const QRDownload = () => {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      <div className="container mx-auto px-6">
        <Card className="glass max-w-2xl mx-auto p-12 text-center">
          <div className="space-y-8">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center">
              <QrCode className="w-10 h-10 text-white" />
            </div>
            
            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                Naskenuj a stiahni Periodka
              </h3>
              
              <p className="text-xl text-muted-foreground">
                Dostupné pre iOS aj Android.
              </p>
            </div>
            
            {/* QR Code Placeholder */}
            <div className="w-48 h-48 mx-auto bg-background border-2 border-dashed border-border rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-2">
                <QrCode className="w-16 h-16 mx-auto text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">QR kód</p>
              </div>
            </div>
            
            {/* Platform Badges */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-2 px-4 py-2">
                <Apple className="w-4 h-4" />
                iOS 12.0+
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 px-4 py-2">
                <Smartphone className="w-4 h-4" />
                Android 6.0+
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};