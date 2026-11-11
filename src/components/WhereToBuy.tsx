import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Navigation,
  Clock,
  CheckCircle,
  Truck,
  MessageCircle,
  Search,
  Store,
} from 'lucide-react';
import { BUSINESS_INFO, DELIVERY_ZONES } from '../data/bakeryData';

interface WhereToBuyProps {
  onOpenOrderModal: (defaultMsg?: string) => void;
}

export const WhereToBuy: React.FC<WhereToBuyProps> = ({ onOpenOrderModal }) => {
  const [pinQuery, setPinQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    zoneName?: string;
    area?: string;
    deliveryTime?: string;
    freeDeliveryMin?: number;
    message?: string;
  } | null>(null);

  // Determine if open now based on current local time
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= BUSINESS_INFO.openHour && currentHour < BUSINESS_INFO.closeHour;

  const handleCheckLocation = (query: string) => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setSearchResult(null);
      return;
    }

    const matched = DELIVERY_ZONES.find(
      (z) =>
        z.name.toLowerCase().includes(q) ||
        z.area.toLowerCase().includes(q) ||
        (q === '410208' && (z.area.includes('410208') || z.name.includes('Navde'))) ||
        (q === '410206' && z.area.includes('410206')) ||
        (q === '410218' && z.area.includes('410218')) ||
        (q === '410209' && z.area.includes('410209')) ||
        (q.includes('panvel') && z.name.toLowerCase().includes('panvel')) ||
        (q.includes('navde') && z.name.toLowerCase().includes('navde')) ||
        (q.includes('kalamboli') && z.name.toLowerCase().includes('kalamboli')) ||
        (q.includes('kamothe') && z.name.toLowerCase().includes('kamothe')) ||
        (q.includes('taloja') && z.name.toLowerCase().includes('taloja'))
    );

    if (matched) {
      setSearchResult({
        found: true,
        zoneName: matched.name,
        area: matched.area,
        deliveryTime: matched.deliveryTime,
        freeDeliveryMin: matched.freeDeliveryMin,
      });
    } else {
      setSearchResult({
        found: false,
        message: `Area "${query}" is just outside our standard express radius, but we provide special custom delivery across Navi Mumbai & Raigad. Call 8108360585 for direct dispatch!`,
      });
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Navde, Panvel, Maharashtra 410208'
  )}`;

  return (
    <section
      id="where-to-buy"
      className="py-24 bg-[#FAF7F2] transition-colors duration-300 border-t border-[#EAE0D3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference banner style */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C58B39] mb-2">
            <Store className="w-4 h-4" />
            <span>Store Locator & Delivery Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#2A170F] tracking-tight">
            Where to Buy & Order Sp Interprises
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4D2D1F]/80">
            Freshly prepared at our bakehouse in Navde, Panvel. Pick up your cake directly or enjoy safe, temperature-controlled doorstep delivery across Panvel and surrounding areas.
          </p>
        </div>

        {/* Featured Store Locator & Order Card (like amul-website where-to-buy card) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#EAE0D3] shadow-xl flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
          {/* Left Column: Details, PIN Code Checker, and Action Buttons */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#F5EFEB] text-[#2A170F] text-xs font-semibold rounded-md border border-[#EAE0D3]">
                  Bakehouse & Counter
                </span>
                <span className="text-xs text-[#7A533E]">·</span>
                <span className="text-xs font-medium text-[#2A170F] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C58B39]" />
                  {isOpen ? 'Open Now (10 AM - 6 PM)' : 'Taking Pre-Orders'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#2A170F]">
                Find Us in Navde, Panvel
              </h3>

              <p className="text-sm sm:text-base text-[#4D2D1F]/90 leading-relaxed">
                Visit our kitchen for fresh daily cake collections, or place a doorstep delivery order for birthdays, anniversaries, or office celebrations anywhere in the Panvel region.
              </p>

              {/* Address card */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE0D3] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C58B39] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-[#2A170F]">{BUSINESS_INFO.name}</p>
                  <p className="text-[#4D2D1F]">{BUSINESS_INFO.address}</p>
                  <p className="text-xs text-[#7A533E] mt-0.5">{BUSINESS_INFO.landmark}</p>
                </div>
              </div>

              {/* Interactive PIN / Area Checker */}
              <div className="pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                  Check Delivery in Your Area / PIN Code
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-[#7A533E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={pinQuery}
                      onChange={(e) => {
                        setPinQuery(e.target.value);
                        handleCheckLocation(e.target.value);
                      }}
                      placeholder="Enter 410208, Navde, Panvel, etc."
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] placeholder-[#7A533E]/60 focus:outline-none focus:ring-2 focus:ring-[#C58B39] focus:bg-white transition-all"
                    />
                  </div>
                  <button
                    onClick={() => handleCheckLocation(pinQuery)}
                    className="px-4 py-2.5 bg-[#2A170F] hover:bg-[#3E2317] text-white text-xs font-semibold rounded-xl transition-colors whitespace-nowrap"
                  >
                    Check Area
                  </button>
                </div>

                {/* Quick area suggestion chips */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {['410208 Navde', '410206 Panvel', '410218 Kalamboli', '410209 Kamothe', 'Taloja'].map(
                    (chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => {
                          const queryVal = chip.split(' ')[0];
                          setPinQuery(queryVal);
                          handleCheckLocation(queryVal);
                        }}
                        className="text-[11px] font-medium text-[#4D2D1F] bg-[#F5EFEB] hover:bg-[#EAE0D3] px-2.5 py-1 rounded-md transition-colors"
                      >
                        {chip}
                      </button>
                    )
                  )}
                </div>

                {/* Dynamic Search Result Feedback */}
                {searchResult && (
                  <div
                    className={`mt-3 p-3.5 rounded-xl border text-xs transition-all ${
                      searchResult.found
                        ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                        : 'bg-amber-50/80 border-amber-200 text-amber-950'
                    }`}
                  >
                    {searchResult.found ? (
                      <div className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">
                            Direct Delivery Available in {searchResult.zoneName} ({searchResult.area})
                          </p>
                          <p className="text-emerald-800 text-[11px] mt-0.5">
                            Estimated time: <span className="font-medium">{searchResult.deliveryTime}</span> · Free delivery on orders above ₹{searchResult.freeDeliveryMin}.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p>{searchResult.message}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#2A170F] hover:bg-[#3E2317] text-white px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#C58B39]" />
                <span>Store Locator & Directions</span>
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="flex-1 bg-[#FAF7F2] hover:bg-[#F5EFEB] text-[#2A170F] border border-[#EAE0D3] px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C58B39]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenOrderModal()}
                className="bg-[#C58B39] hover:bg-[#B37B2E] text-[#2A170F] px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Truck className="w-4 h-4" />
                <span>Order Cake</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Locator Map Card matching amul-website interactive card */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between rounded-2xl relative overflow-hidden bg-[#2A170F] text-white p-6 sm:p-8 border border-[#4D2D1F] min-h-[340px]">
            {/* Background geometric map graphic overlay */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C58B39_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#C58B39]/20 rounded-full blur-3xl" />

            {/* Top card info */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C58B39]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#F7E9CE]">
                  Navde Bakehouse Hub
                </span>
              </div>
              <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-md border border-white/10 text-white/90">
                PIN: 410208
              </span>
            </div>

            {/* Center animated pin display */}
            <div className="relative z-10 my-8 flex flex-col items-center text-center">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center cursor-pointer"
                aria-label="Open Sp Interprises location in Google Maps"
              >
                {/* Ripple rings */}
                <div className="absolute w-20 h-20 bg-[#C58B39]/30 rounded-full animate-ping" />
                <div className="w-16 h-16 bg-[#C58B39] rounded-full flex items-center justify-center shadow-lg shadow-[#C58B39]/40 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-[#2A170F] w-8 h-8 fill-current" />
                </div>
              </a>

              <div className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-semibold text-white">
                Sp Interprises · Navde, Panvel
              </div>
              <p className="text-xs text-white/70 mt-1 max-w-xs">
                Panvel, Maharashtra 410208
              </p>
            </div>

            {/* Bottom summary & WhatsApp inquiry button */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-white/80 text-center sm:text-left">
                <p className="font-semibold text-white">Express Panvel Delivery</p>
                <p className="text-[11px] text-white/60">Call or WhatsApp for immediate dispatch</p>
              </div>

              <a
                href={BUSINESS_INFO.whatsappUrl('Hello Sp Interprises! I want to check cake delivery to my address in Panvel.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Local Area Delivery Matrix */}
        <div className="mt-12">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#2A170F] mb-4 text-center">
            Express Delivery Coverage Across Panvel & Nearby Localities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DELIVERY_ZONES.map((zone, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-[#EAE0D3] flex items-center justify-between hover:border-[#C58B39]/60 transition-colors"
              >
                <div>
                  <p className="font-semibold text-sm text-[#2A170F]">{zone.name}</p>
                  <p className="text-xs text-[#7A533E]">{zone.area}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-[#C58B39] block">
                    {zone.deliveryTime}
                  </span>
                  <span className="text-[11px] text-[#4D2D1F]/70 block">
                    Free above ₹{zone.freeDeliveryMin}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
