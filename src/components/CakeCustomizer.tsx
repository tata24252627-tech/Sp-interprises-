import React, { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, Phone, Check } from 'lucide-react';
import { FLAVOR_OPTIONS, BUSINESS_INFO, DELIVERY_ZONES } from '../data/bakeryData';

interface CakeCustomizerProps {
  onOpenOrderModal: (defaultMsg?: string) => void;
}

export const CakeCustomizer: React.FC<CakeCustomizerProps> = () => {
  const [flavor, setFlavor] = useState<string>(FLAVOR_OPTIONS[0]);
  const [weight, setWeight] = useState<number>(1.0); // in kg
  const [isEggless, setIsEggless] = useState<boolean>(true);
  const [tier, setTier] = useState<string>('single');
  const [occasion, setOccasion] = useState<string>('Birthday');
  const [messageOnCake, setMessageOnCake] = useState<string>('Happy Birthday!');
  const [deliveryArea, setDeliveryArea] = useState<string>('Navde, Panvel (410208)');

  // Estimate price
  // Base price per kg ~ 950-1100 depending on flavor
  const isPremiumFlavor =
    flavor.includes('Belgian') || flavor.includes('Rasmalai') || flavor.includes('Nutella');
  const ratePerKg = isPremiumFlavor ? 1050 : 900;
  const tierCost = tier === 'double' ? 300 : tier === 'triple' ? 700 : 0;
  const estimatedPrice = Math.round(weight * ratePerKg + tierCost);

  const customOrderText = `Hello Sp Interprises! I would like to order a custom cake:
• Flavor: ${flavor}
• Weight: ${weight} kg (${tier === 'single' ? 'Single Tier' : tier === 'double' ? '2-Tier' : '3-Tier'})
• Sponge: ${isEggless ? '100% Eggless (Vegetarian)' : 'Regular Sponge'}
• Occasion: ${occasion}
• Message on Cake: "${messageOnCake}"
• Delivery Area: ${deliveryArea}
• Estimated Cost: ₹${estimatedPrice}`;

  return (
    <section className="py-20 bg-white border-b border-[#EAE0D3]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C58B39]">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Cake Estimator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2A170F] tracking-tight">
              Design & Calculate Your Custom Cake in Seconds
            </h2>

            <p className="text-sm sm:text-base text-[#4D2D1F]/90 leading-relaxed">
              Planning a special celebration in Panvel? Choose your favorite gourmet flavor, 
              select pure eggless sponge, customize the message, and get an instant quote to send 
              directly to our bakehouse team.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#C58B39] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <p className="text-xs text-[#4D2D1F]">
                  <strong className="text-[#2A170F]">100% Eggless Guarantee:</strong> Baked in dedicated eggless batches with rich, natural moisture.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#C58B39] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <p className="text-xs text-[#4D2D1F]">
                  <strong className="text-[#2A170F]">Complimentary Extras:</strong> Includes custom cake box, birthday candle, knife & celebration tags.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#C58B39] shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <p className="text-xs text-[#4D2D1F]">
                  <strong className="text-[#2A170F]">Direct WhatsApp Confirmation:</strong> Our chef reviews your message and confirms delivery time immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Customizer Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#EAE0D3] shadow-md">
            <div className="space-y-5">
              {/* Flavor Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                  1. Select Cake Flavor
                </label>
                <select
                  value={flavor}
                  onChange={(e) => setFlavor(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
                >
                  {FLAVOR_OPTIONS.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              {/* Weight & Tiers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                    2. Cake Weight ({weight} kg)
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[0.5, 1.0, 1.5, 2.0, 3.0].map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setWeight(w)}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                          weight === w
                            ? 'bg-[#2A170F] text-white'
                            : 'bg-white text-[#4D2D1F] border border-[#EAE0D3] hover:bg-[#F5EFEB]'
                        }`}
                      >
                        {w} kg
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                    3. Structure
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[
                      { id: 'single', label: 'Single' },
                      { id: 'double', label: '2-Tier' },
                      { id: 'triple', label: '3-Tier' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTier(t.id)}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                          tier === t.id
                            ? 'bg-[#2A170F] text-white'
                            : 'bg-white text-[#4D2D1F] border border-[#EAE0D3] hover:bg-[#F5EFEB]'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eggless vs Regular Toggle */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                  4. Sponge Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEggless(true)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      isEggless
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-xs'
                        : 'bg-white border-[#EAE0D3] text-[#4D2D1F]'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    <span>100% Eggless (Recommended)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEggless(false)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      !isEggless
                        ? 'bg-[#2A170F] border-[#2A170F] text-white shadow-xs'
                        : 'bg-white border-[#EAE0D3] text-[#4D2D1F]'
                    }`}
                  >
                    <span>Traditional Sponge</span>
                  </button>
                </div>
              </div>

              {/* Message on Cake & Delivery locality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                    5. Message on Cake
                  </label>
                  <input
                    type="text"
                    value={messageOnCake}
                    onChange={(e) => setMessageOnCake(e.target.value)}
                    placeholder="e.g. Happy 25th Anniversary!"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                    6. Delivery Area
                  </label>
                  <select
                    value={deliveryArea}
                    onChange={(e) => setDeliveryArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
                  >
                    <option value="Navde, Panvel (410208)">Navde, Panvel (410208)</option>
                    {DELIVERY_ZONES.map((z) => (
                      <option key={z.name} value={`${z.name} (${z.area})`}>
                        {z.name} ({z.area})
                      </option>
                    ))}
                    <option value="Self Pickup at Bakehouse">Self Pickup at Bakehouse (Navde)</option>
                  </select>
                </div>
              </div>

              {/* Price Calculation Card and Order Dispatch */}
              <div className="p-4 rounded-2xl bg-white border border-[#EAE0D3] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#7A533E] font-medium block">
                    Estimated Custom Cake Price
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#2A170F] font-mono tabular-nums">
                      ₹{estimatedPrice}
                    </span>
                    <span className="text-xs text-[#7A533E]">
                      ({weight} kg · {isEggless ? 'Eggless' : 'Regular'})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={BUSINESS_INFO.whatsappUrl(customOrderText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:+91${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center justify-center p-3 bg-[#2A170F] hover:bg-[#3E2317] text-white rounded-xl transition-colors"
                    title={`Call ${BUSINESS_INFO.phone}`}
                  >
                    <Phone className="w-4 h-4 text-[#C58B39]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
