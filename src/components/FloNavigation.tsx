import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import periodkaLogo from '@/assets/periodka-logo.png';

export const FloNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-6">
        <nav className="max-w-6xl mx-auto bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-elegant">
          <div className="px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={periodkaLogo} 
                alt="Periodka Logo" 
                className="w-12 h-12 rounded-lg"
              />
              <div className="text-2xl font-bold brand-text leading-none" style={{ color: '#F4415F' }}>Periodka</div>
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/recenzia" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Recenzia
              </Link>
              <Link to="/odporucania" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Odporúčania
              </Link>
              <Link to="/blog" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Blog
              </Link>
              <Link to="/neome" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                NeoMe
              </Link>
            </div>
            
            {/* Desktop CTA Button */}
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full shadow-soft hover:shadow-elegant transition-all">
              Stiahnuť zadarmo
            </Button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg bg-background/50 border border-border/30 backdrop-blur-sm hover:bg-background/70 transition-all"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/30 backdrop-blur-lg md:hidden"
          onClick={closeMobileMenu}
        >
          <div 
            className="fixed top-24 left-6 right-6 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-elegant overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-6">
              <div className="flex flex-col space-y-4 px-6">
                <Link 
                  to="/recenzia" 
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-3 border-b border-border/20"
                  onClick={closeMobileMenu}
                >
                  Recenzia
                </Link>
                <Link 
                  to="/odporucania" 
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-3 border-b border-border/20"
                  onClick={closeMobileMenu}
                >
                  Odporúčania
                </Link>
                <Link 
                  to="/blog" 
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-3 border-b border-border/20"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <Link 
                  to="/neome" 
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-3"
                  onClick={closeMobileMenu}
                >
                  NeoMe
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};