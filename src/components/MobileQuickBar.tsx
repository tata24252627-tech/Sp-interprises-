import React from 'react';
import { Phone, MessageCircle, Cake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

interface MobileQuickBarProps {
  onOpenOrderModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenOrderModal }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#EAE0D3] p-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={`tel:+91${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#2A170F] text-white rounded-xl text-center active:scale-95 transition-transform shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#C58B39] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Bakehouse</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={BUSINESS_INFO.whatsappUrl('Hello Sp Interprises! I would like to order a fresh cake in Navde, Panvel.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#25D366] text-white rounded-xl text-center active:scale-95 transition-transform shadow-xs"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Order cake button */}
        <button
          onClick={onOpenOrderModal}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#C58B39] text-[#2A170F] rounded-xl text-center active:scale-95 transition-transform shadow-xs font-semibold cursor-pointer"
        >
          <Cake className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Order Cake</span>
        </button>
      </div>
    </aside>
  );
};
