import React from 'react';
import { Clock, CheckCircle2, AlertCircle, Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface BusinessHoursProps {
  onOpenOrderModal: () => void;
}

export const BusinessHours: React.FC<BusinessHoursProps> = ({ onOpenOrderModal }) => {
  // Current time check
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= BUSINESS_INFO.openHour && currentHour < BUSINESS_INFO.closeHour;

  const daysOfWeek = [
    { day: 'Monday', hours: '10:00 AM – 6:00 PM', active: true },
    { day: 'Tuesday', hours: '10:00 AM – 6:00 PM', active: true },
    { day: 'Wednesday', hours: '10:00 AM – 6:00 PM', active: true },
    { day: 'Thursday', hours: '10:00 AM – 6:00 PM', active: true },
    { day: 'Friday', hours: '10:00 AM – 6:00 PM', active: true },
    { day: 'Saturday', hours: '10:00 AM – 6:00 PM', active: true },
    { day: 'Sunday', hours: '10:00 AM – 6:00 PM', active: true },
  ];

  return (
    <section id="hours" className="py-20 bg-white border-t border-[#EAE0D3]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#EAE0D3] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Hours summary */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C58B39]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C58B39]">
                  Bakehouse Schedule
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2A170F]">
                Open 8 Hours Daily For Fresh Bakes & Inquiries
              </h2>

              <p className="text-sm sm:text-base text-[#4D2D1F]/90 leading-relaxed">
                Our kitchen operates 8 continuous hours each day, dedicated to mixing fresh batters, whipping cream, baking bespoke orders, and handling deliveries across Navde and Panvel.
              </p>

              {/* Live Status Pill */}
              <div className="p-4 rounded-xl bg-white border border-[#EAE0D3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                      isOpen ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2A170F]">
                      {isOpen ? 'Currently Open & Baking' : 'Taking Advance Pre-Orders'}
                    </p>
                    <p className="text-xs text-[#7A533E]">
                      Daily shifts: 10:00 AM to 6:00 PM IST
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:+91${BUSINESS_INFO.phone}`}
                  className="px-3.5 py-1.5 bg-[#2A170F] text-white text-xs font-semibold rounded-lg hover:bg-[#3E2317] transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* Order notice advisory */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#4D2D1F]">
                <div className="flex items-start gap-2 bg-white/70 p-3 rounded-lg border border-[#EAE0D3]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2A170F]">Standard Cakes</p>
                    <p className="text-[#7A533E]">Order 2–3 hours in advance for fresh same-day preparation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/70 p-3 rounded-lg border border-[#EAE0D3]">
                  <AlertCircle className="w-4 h-4 text-[#C58B39] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2A170F]">Designer & Wedding</p>
                    <p className="text-[#7A533E]">Book 24–48 hours ahead for elaborate customized tiers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Weekly Breakdown Table */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE0D3] shadow-xs">
              <h3 className="font-display font-bold text-lg text-[#2A170F] mb-4 flex items-center justify-between">
                <span>Weekly Operational Hours</span>
                <span className="text-xs font-sans text-[#7A533E] font-normal">All 7 Days</span>
              </h3>

              <div className="divide-y divide-[#EAE0D3]">
                {daysOfWeek.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-[#2A170F]">{item.day}</span>
                    <span className="font-mono tabular-nums text-[#4D2D1F] font-semibold">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action row */}
              <div className="pt-6 mt-4 border-t border-[#EAE0D3] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenOrderModal}
                  className="flex-1 py-2.5 px-4 bg-[#C58B39] hover:bg-[#B37B2E] text-[#2A170F] font-semibold text-xs rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Future Order</span>
                </button>
                <a
                  href={BUSINESS_INFO.whatsappUrl('Hello Sp Interprises! I would like to inquire about your cake availability today.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
