import React from 'react';
import { Heart, Sparkles, Award, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story Imagery */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#C58B39]/20 to-[#2A170F]/10 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EAE0D3] bg-white group">
                <img
                  src="/src/assets/images/bakery_craft_story_1794384757638.jpg"
                  alt="Pastry chef delicately hand-piping cream at Sp Interprises bakehouse in Navde Panvel"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F7E9CE]">
                    Artisanal Kitchen
                  </span>
                  <p className="font-display text-lg font-bold">
                    Baked With Love In Navde, Panvel
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    Every batch mixed, baked, and finished fresh the very day of your celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C58B39]">
              <Heart className="w-3.5 h-3.5" />
              <span>Our Story & Craftsmanship</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#2A170F] tracking-tight leading-tight">
              Making Every Milestone in Panvel Truly Unforgettable
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4D2D1F]/90 leading-relaxed">
              <p>
                Founded in the heart of <strong className="text-[#2A170F]">Navde, Panvel</strong>,{' '}
                <strong className="text-[#2A170F]">{BUSINESS_INFO.name}</strong> was born from a simple yet passionate philosophy: a cake is never just dessert—it is the centerpiece of smiles, warm hugs, candle blowing, and cherished family memories.
              </p>
              <p>
                Unlike commercial mass-market bakeries that use industrial freeze-stored premixes and artificial stabilizers, our bakehouse prides itself on pure old-school artisanal baking. We whip fresh dairy cream, hand-melt authentic cocoa ganache, source sweet farm-fresh fruits, and prepare each batch upon order.
              </p>
              <p>
                Over the years, we have become Panvel's trusted destination for <strong className="text-[#2A170F]">100% Eggless cakes</strong> that achieve unmatched feather-light softness, proving that vegetarian celebration bakes can be decadent, moist, and utterly divine.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE0D3]">
              <div className="bg-white p-4 rounded-xl border border-[#EAE0D3]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#C58B39] flex items-center justify-center mb-2.5">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#2A170F]">Pure Ingredients</h3>
                <p className="text-xs text-[#7A533E] mt-1">
                  Belgian cocoa, pure farm dairy, natural vanillas & zero artificial fillers.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#EAE0D3]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#C58B39] flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#2A170F]">Hygiene & Care</h3>
                <p className="text-xs text-[#7A533E] mt-1">
                  Spotless sanitary kitchen protocols and strict quality inspections for every bake.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#EAE0D3]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#C58B39] flex items-center justify-center mb-2.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#2A170F]">Navde Community</h3>
                <p className="text-xs text-[#7A533E] mt-1">
                  Proudly serving local families, schools, and corporate celebrations across Panvel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
