import React from 'react';
import { Button } from '@/components/ui/button';
import { Apple, Smartphone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const FloFooter = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="text-2xl font-bold text-primary">Flo</div>
              <p className="text-background/80 leading-relaxed">
                Know your body, own your health
              </p>
              
              {/* App Store Buttons */}
              <div className="space-y-3">
                <Button className="bg-background text-foreground hover:bg-background/90 flex items-center gap-3 px-4 py-2 h-auto rounded-lg w-full justify-start">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
                
                <Button className="bg-background text-foreground hover:bg-background/90 flex items-center gap-3 px-4 py-2 h-auto rounded-lg w-full justify-start">
                  <Smartphone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Product Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Flo for Android</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Flo for iPhone</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Flo Premium</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Secret Chats</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Flo for Partners</a></li>
              </ul>
            </div>

            {/* Features Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Period Tracker</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Ovulation Calculator</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Pregnancy Tracker</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Cycle Calendar</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Health Insights</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Careers</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Press</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media & Bottom Links */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Facebook className="w-5 h-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
                <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-background transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-background transition-colors">Data Protection</a>
              </div>

              {/* Copyright */}
              <div className="text-sm text-background/60">
                © 2025 Flo Health Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};