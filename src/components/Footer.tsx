import React from 'react';
import { MapPin, Phone, Clock, Mail, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2A170F] text-[#FAF7F2] pt-16 pb-24 md:pb-16 border-t border-[#4D2D1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C58B39] text-[#2A170F] flex items-center justify-center font-display font-bold text-lg">
                Sp
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Sp Interprises
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Navde, Panvel's premier boutique cake shop. Dedicated to artisanal celebration cakes, 
              custom multi-tier wedding bakes, gourmet pastries, and our proud 100% eggless kitchen specialties.
            </p>

            <div className="pt-2 text-xs text-[#F7E9CE] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Dedicated 100% Eggless Preparation Counter</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-base text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#home" className="hover:text-[#C58B39] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C58B39] transition-colors">
                  Our Menu & Cakes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C58B39] transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#where-to-buy" className="hover:text-[#C58B39] transition-colors">
                  Where to Buy & Delivery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C58B39] transition-colors">
                  About Our Story
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-[#C58B39] transition-colors">
                  Business Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Offerings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-base text-white">Our Specialties</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>Custom Birthday & Themed Cakes</li>
              <li>Multi-Tiered Wedding Gateaux</li>
              <li>100% Eggless Pure Fruit Cakes</li>
              <li>Royal Belgian Dark Truffles</li>
              <li>Fresh Cupcakes & Tartlet Platters</li>
              <li>Express Doorstep Delivery in Panvel</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-base text-white">Bakehouse Location</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C58B39] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Sp Interprises</strong>
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C58B39] shrink-0" />
                <a
                  href={`tel:+91${BUSINESS_INFO.phone}`}
                  className="font-mono font-semibold hover:text-[#C58B39] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C58B39] shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#C58B39] hover:underline cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Sp Interprises. All rights reserved. Navde, Panvel, Maharashtra 410208.
          </p>
          <div className="flex items-center gap-1 text-white/60">
            <span>Baking memories in Panvel with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
