import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, Heart, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface HeroProps {
  onOpenOrderModal: (cakeName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF7F2] to-[#F5EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C58B39]">
              <Sparkles className="w-4 h-4" />
              <span>Navde & Panvel's Premier Boutique Bakehouse</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#2A170F] tracking-tight leading-[1.15] text-balance">
              Handcrafted Celebration Cakes Baked Fresh Daily.
            </h1>

            <p className="text-base sm:text-lg text-[#4D2D1F]/90 leading-relaxed max-w-2xl">
              Welcome to <strong className="text-[#2A170F] font-semibold">Sp Interprises</strong> in Navde, Panvel. 
              From bespoke multi-tier birthday cakes to decadent Belgian chocolate truffles and our signature 
              <span className="text-[#2A170F] font-semibold"> 100% Eggless specials</span>, we bake every delight 
              from scratch with pure ingredients and deliver fresh to your doorstep.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2A170F] text-white font-semibold text-sm rounded-xl hover:bg-[#3E2317] transition-all shadow-md hover:shadow-lg"
              >
                <span>Explore Cake Menu</span>
                <ArrowRight className="w-4 h-4 text-[#C58B39]" />
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#2A170F] font-semibold text-sm rounded-xl border border-[#EAE0D3] hover:border-[#C58B39] transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C58B39]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C58B39] text-[#2A170F] font-semibold text-sm rounded-xl hover:bg-[#B37B2E] transition-all shadow-sm"
              >
                <span>Custom Order</span>
              </button>
            </div>

            {/* Proof & Trust Strip */}
            <div className="pt-6 border-t border-[#EAE0D3]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#4D2D1F]">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C58B39] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2A170F]">100% Eggless</p>
                  <p className="text-[#7A533E] text-[11px]">Specialty Kitchen</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C58B39] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2A170F]">Open 8h Daily</p>
                  <p className="text-[#7A533E] text-[11px]">10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-[#C58B39] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2A170F]">Fresh Pure Dairy</p>
                  <p className="text-[#7A533E] text-[11px]">Zero premixes</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C58B39] shrink-0 mt-1.5" />
                <div>
                  <p className="font-semibold text-[#2A170F]">Panvel Delivery</p>
                  <p className="text-[#7A533E] text-[11px]">Navde & nearby</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C58B39]/20 to-[#4D2D1F]/10 rounded-3xl blur-xl transform -rotate-1" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#EAE0D3] bg-white group">
                <img
                  src="/src/assets/images/hero_artisan_cake_1794384753259.jpg"
                  alt="Artisanal Belgian chocolate multi-tiered celebration cake with gold leaf and berries at Sp Interprises, Navde Panvel"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-xl border border-[#EAE0D3] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase font-semibold tracking-wider text-[#C58B39]">
                        Sp Interprises Signature
                      </p>
                      <h3 className="text-sm sm:text-base font-display font-bold text-[#2A170F]">
                        Belgian Chocolate & Gold Leaf Gateau
                      </h3>
                      <p className="text-xs text-[#7A533E]">
                        Customized for birthdays, weddings & milestones in Panvel
                      </p>
                    </div>
                    <button
                      onClick={() => onOpenOrderModal('Belgian Chocolate & Gold Leaf Gateau')}
                      className="px-3 py-1.5 bg-[#2A170F] text-white hover:bg-[#3E2317] text-xs font-semibold rounded-lg shrink-0 ml-2"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
