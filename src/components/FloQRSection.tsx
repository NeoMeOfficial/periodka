import React from 'react';
import { QrCode, Apple, Smartphone } from 'lucide-react';

export const FloQRSection = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* QR Code Display */}
          <div className="w-48 h-48 mx-auto bg-background border-2 border-border rounded-2xl flex items-center justify-center">
            <div className="space-y-3">
              <QrCode className="w-24 h-24 mx-auto text-foreground" />
              <p className="text-sm text-muted-foreground">Scan to download</p>
            </div>
          </div>
          
          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Use your phone's camera to scan and download the Flo app.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Available on iOS and Android devices.
            </p>
          </div>
          
          {/* Platform Badges */}
          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Apple className="w-5 h-5" />
              <span className="text-sm">iOS</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm">Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};