import React, { useState } from 'react';
import { X, Phone, MessageCircle, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, FLAVOR_OPTIONS } from '../data/bakeryData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCakeName?: string;
  initialWeight?: string;
  initialPrice?: number;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialCakeName = 'Royal Belgian Dark Truffle Cake',
  initialWeight = '1.0 kg',
  initialPrice = 1050,
}) => {
  if (!isOpen) return null;

  const [cakeName, setCakeName] = useState(initialCakeName);
  const [weight, setWeight] = useState(initialWeight);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [messageOnCake, setMessageOnCake] = useState('');
  const [isEggless, setIsEggless] = useState(true);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const orderWhatsAppText = `Hello Sp Interprises! I would like to place an order:
• Cake: ${cakeName}
• Weight: ${weight}
• Sponge: ${isEggless ? '100% Eggless' : 'Regular Sponge'}
• Message on Cake: "${messageOnCake || 'None'}"
• Customer Name: ${customerName || 'Customer'}
• Phone: ${customerPhone || 'N/A'}
• Delivery Date: ${deliveryDate || 'Today / Earliest slot'}
• Delivery Address: ${deliveryAddress || 'Navde, Panvel'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#EAE0D3] overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#2A170F] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C58B39] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sp Interprises Quick Order</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold">
            Customize & Order Your Cake
          </h3>
          <p className="text-xs text-white/70 mt-1">
            Direct coordination with our Navde, Panvel bakehouse
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Cake Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1">
              Selected Cake
            </label>
            <input
              type="text"
              value={cakeName}
              onChange={(e) => setCakeName(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] font-semibold focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
            />
          </div>

          {/* Size / Weight & 100% Eggless */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1">
                Weight / Size
              </label>
              <select
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
              >
                <option value="0.5 kg">0.5 kg (4–6 guests)</option>
                <option value="1.0 kg">1.0 kg (8–12 guests)</option>
                <option value="1.5 kg">1.5 kg (12–16 guests)</option>
                <option value="2.0 kg">2.0 kg (18–22 guests)</option>
                <option value="3.0 kg+">3.0 kg+ Multi-tier</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1">
                Preference
              </label>
              <button
                type="button"
                onClick={() => setIsEggless(!isEggless)}
                className={`w-full py-2 px-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  isEggless
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                    : 'bg-[#FAF7F2] border-[#EAE0D3] text-[#4D2D1F]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                <span className="truncate">{isEggless ? '100% Eggless' : 'Regular'}</span>
              </button>
            </div>
          </div>

          {/* Customer Name & Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Mobile number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
              />
            </div>
          </div>

          {/* Message on Cake */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1">
              Message on Cake (Custom Lettering)
            </label>
            <input
              type="text"
              placeholder="e.g. Happy Birthday Sahil!"
              value={messageOnCake}
              onChange={(e) => setMessageOnCake(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
            />
          </div>

          {/* Delivery Date & Panvel Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1">
                Date Needed
              </label>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1">
                Delivery Location / Area
              </label>
              <input
                type="text"
                placeholder="e.g. Navde, Sector 12 Panvel"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39]"
              />
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 bg-[#FAF7F2] border-t border-[#EAE0D3] space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl(orderWhatsAppText)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Order on WhatsApp</span>
            </a>

            <a
              href={`tel:+91${BUSINESS_INFO.phone}`}
              className="py-3 px-4 bg-[#2A170F] hover:bg-[#3E2317] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C58B39]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-center text-[#7A533E]">
            Sp Interprises · Navde, Panvel 410208 · Open 8 Hours Daily (10 AM - 6 PM)
          </p>
        </div>
      </div>
    </div>
  );
};
