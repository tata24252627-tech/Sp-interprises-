import React, { useState } from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { CAKE_ITEMS, BUSINESS_INFO } from '../data/bakeryData';
import { CakeItem } from '../types/bakery';

interface MenuShowcaseProps {
  onOpenOrderModal: (cakeName?: string, weight?: string, price?: number) => void;
}

export const MenuShowcase: React.FC<MenuShowcaseProps> = ({ onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWeights, setSelectedWeights] = useState<Record<string, number>>({});

  const categories = [
    { id: 'all', label: 'All Specials' },
    { id: 'chocolate', label: 'Belgian Chocolate' },
    { id: 'eggless', label: '100% Eggless' },
    { id: 'birthday', label: 'Celebration Cakes' },
    { id: 'wedding', label: 'Wedding Tiers' },
    { id: 'pastries', label: 'Pastries & Cupcakes' },
  ];

  const filteredCakes =
    selectedCategory === 'all'
      ? CAKE_ITEMS
      : CAKE_ITEMS.filter((item) => item.category === selectedCategory);

  const handleWeightChange = (cakeId: string, index: number) => {
    setSelectedWeights((prev) => ({ ...prev, [cakeId]: index }));
  };

  return (
    <section id="menu" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C58B39] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fresh From The Oven</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2A170F] tracking-tight">
            Our Signature Cake Collection
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4D2D1F]/80">
            Each cake is baked fresh to order using genuine Belgian chocolate, farm dairy, and 
            seasonal fruits. Every option is available in <strong className="text-[#2A170F]">100% Eggless</strong> sponge.
          </p>
        </div>

        {/* Category Filters (Segmented interactive control buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#2A170F] text-white shadow-sm'
                  : 'bg-white text-[#4D2D1F] border border-[#EAE0D3] hover:border-[#C58B39] hover:bg-[#F5EFEB]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map((cake: CakeItem) => {
            const activeWeightIdx = selectedWeights[cake.id] || 0;
            const currentWeightObj = cake.weights[activeWeightIdx] || cake.weights[0];

            return (
              <div
                key={cake.id}
                className="bg-white rounded-2xl border border-[#EAE0D3] overflow-hidden flex flex-col justify-between hover:border-[#C58B39]/50 transition-all duration-300 hover:shadow-lg group"
              >
                {/* Image slot */}
                <div className="relative h-64 overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top indicators */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {/* Authentic Indian Veg Green Emblem */}
                    <div className="w-5 h-5 bg-white rounded border border-emerald-600 flex items-center justify-center p-0.5 shadow-sm" title="100% Eggless / Vegetarian">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      100% Eggless
                    </span>
                  </div>

                  {cake.popular && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-semibold text-[#2A170F] bg-[#C58B39] px-2.5 py-0.5 rounded shadow-sm">
                        Popular in Panvel
                      </span>
                    </div>
                  )}

                  {/* Serving estimate in image */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                    Serves: {currentWeightObj.serves}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Flavor notes clean text */}
                    <div className="flex items-center gap-2 text-xs text-[#7A533E] mb-1.5 font-medium">
                      <span>{cake.flavorNotes.join(' · ')}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-[#2A170F] group-hover:text-[#C58B39] transition-colors">
                      {cake.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#4D2D1F]/80 leading-relaxed line-clamp-2">
                      {cake.description}
                    </p>
                  </div>

                  {/* Weight Selector */}
                  <div className="pt-2 border-t border-[#EAE0D3]">
                    <span className="block text-xs font-medium text-[#4D2D1F] mb-1.5">
                      Select Size / Weight:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {cake.weights.map((w, idx) => (
                        <button
                          key={w.weight}
                          type="button"
                          onClick={() => handleWeightChange(cake.id, idx)}
                          className={`text-xs py-1 px-2 rounded-lg font-medium transition-colors cursor-pointer text-center ${
                            activeWeightIdx === idx
                              ? 'bg-[#2A170F] text-white'
                              : 'bg-[#F5EFEB] text-[#4D2D1F] hover:bg-[#EAE0D3]'
                          }`}
                        >
                          {w.weight}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price & Order Action */}
                  <div className="pt-3 border-t border-[#EAE0D3] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#7A533E] block">
                        Estimated Price
                      </span>
                      <span className="text-2xl font-bold text-[#2A170F] font-mono tabular-nums">
                        ₹{currentWeightObj.price}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        onOpenOrderModal(cake.name, currentWeightObj.weight, currentWeightObj.price)
                      }
                      className="px-4 py-2.5 bg-[#C58B39] hover:bg-[#B37B2E] text-[#2A170F] font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
                    >
                      Order / Customize
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Orders */}
        <div className="mt-16 bg-[#2A170F] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C58B39]/30">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold">
              Looking for a Custom Theme, Fondant, or Photo Cake?
            </h3>
            <p className="text-xs sm:text-sm text-[#F7E9CE]/80">
              Send us any reference image from Pinterest or Instagram. We bake custom cakes from 0.5 kg up to 10 kg!
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C58B39]" />
              <span>Call Bakehouse</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl('Hello Sp Interprises! I have a custom cake design reference photo I want to discuss.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#C58B39] hover:bg-[#B37B2E] text-[#2A170F] rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Photo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
