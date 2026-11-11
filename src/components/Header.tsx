import React, { useState } from 'react';
import { Phone, Menu as MenuIcon, X, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface HeaderProps {
  onOpenOrderModal: (cakeName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE0D3] transition-colors">
      {/* Top micro announcement bar */}
      <div className="bg-[#2A170F] text-[#F5EFEB] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-[#C58B39]" />
              Navde, Panvel (410208)
            </span>
            <span className="hidden sm:inline text-white/30" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-white/80">Fresh Daily Bakes & Custom Orders</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white/80">
              <Clock className="w-3 h-3 text-[#C58B39]" />
              Open 8h Daily (10 AM - 6 PM)
            </span>
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="text-[#C58B39] hover:underline font-semibold"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single element wordmark */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 rounded-full bg-[#2A170F] text-[#C58B39] flex items-center justify-center font-display font-bold text-lg shadow-sm border border-[#C58B39]/40 group-hover:scale-105 transition-transform">
            Sp
          </div>
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#2A170F] whitespace-nowrap">
            Sp Interprises
          </span>
        </a>

        {/* Zone 2: 4-5 nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4D2D1F]">
          <a
            href="#home"
            className="hover:text-[#C58B39] transition-colors whitespace-nowrap pb-0.5 border-b-2 border-transparent hover:border-[#C58B39]"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-[#C58B39] transition-colors whitespace-nowrap pb-0.5 border-b-2 border-transparent hover:border-[#C58B39]"
          >
            Menu
          </a>
          <a
            href="#services"
            className="hover:text-[#C58B39] transition-colors whitespace-nowrap pb-0.5 border-b-2 border-transparent hover:border-[#C58B39]"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-[#C58B39] transition-colors whitespace-nowrap pb-0.5 border-b-2 border-transparent hover:border-[#C58B39]"
          >
            About Us
          </a>
          <a
            href="#hours"
            className="hover:text-[#C58B39] transition-colors whitespace-nowrap pb-0.5 border-b-2 border-transparent hover:border-[#C58B39]"
          >
            Hours & Delivery
          </a>
          <a
            href="#contact"
            className="hover:text-[#C58B39] transition-colors whitespace-nowrap pb-0.5 border-b-2 border-transparent hover:border-[#C58B39]"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:+91${BUSINESS_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#2A170F] rounded-lg hover:bg-[#3E2317] transition-colors shadow-sm whitespace-nowrap border border-[#C58B39]/30"
          >
            <Phone className="w-3.5 h-3.5 text-[#C58B39]" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={() => onOpenOrderModal()}
            className="px-4 py-2 text-xs font-semibold text-[#2A170F] bg-[#C58B39] hover:bg-[#B37B2E] transition-colors rounded-lg shadow-sm whitespace-nowrap"
          >
            Order Cake
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2A170F] hover:bg-[#EAE0D3]/50 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAE0D3] bg-[#FAF7F2] px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-3 mb-5 text-sm font-medium text-[#2A170F]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-[#F5EFEB] rounded-md transition-colors"
            >
              Home
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-[#F5EFEB] rounded-md transition-colors"
            >
              Menu & Cakes
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-[#F5EFEB] rounded-md transition-colors"
            >
              Services Offered
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-[#F5EFEB] rounded-md transition-colors"
            >
              About Our Story
            </a>
            <a
              href="#hours"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-[#F5EFEB] rounded-md transition-colors"
            >
              Operating Hours & Delivery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-[#F5EFEB] rounded-md transition-colors"
            >
              Contact Sp Interprises
            </a>
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-[#EAE0D3]">
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#2A170F] rounded-lg shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#C58B39]" />
              Call Now: {BUSINESS_INFO.phoneDisplay}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#2A170F] bg-[#C58B39] rounded-lg text-center"
            >
              Custom Cake Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
