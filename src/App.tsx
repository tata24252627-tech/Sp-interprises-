/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { MenuShowcase } from './components/MenuShowcase';
import { CakeCustomizer } from './components/CakeCustomizer';
import { WhereToBuy } from './components/WhereToBuy';
import { AboutUs } from './components/AboutUs';
import { BusinessHours } from './components/BusinessHours';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCakeName, setModalCakeName] = useState<string>('Royal Belgian Dark Truffle Cake');
  const [modalWeight, setModalWeight] = useState<string>('1.0 kg');
  const [modalPrice, setModalPrice] = useState<number>(1050);

  const handleOpenOrderModal = (cakeName?: string, weight?: string, price?: number) => {
    if (cakeName) setModalCakeName(cakeName);
    if (weight) setModalWeight(weight);
    if (price) setModalPrice(price);
    setIsModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A170F]">
      {/* 1. Header & Navigation */}
      <Header onOpenOrderModal={() => handleOpenOrderModal()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* 3. Services & Products Offered */}
        <Services onOpenOrderModal={handleOpenOrderModal} />

        {/* Interactive Menu & Cake Catalog */}
        <MenuShowcase onOpenOrderModal={handleOpenOrderModal} />

        {/* Interactive Cake Customizer & Calculator */}
        <CakeCustomizer onOpenOrderModal={handleOpenOrderModal} />

        {/* Where To Buy & Store Locator (#where-to-buy reference) */}
        <WhereToBuy onOpenOrderModal={handleOpenOrderModal} />

        {/* 4. About Us / Our Story */}
        <AboutUs />

        {/* 5. Business Hours */}
        <BusinessHours onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* 6. Contact Section & Custom Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Quick Action Bar (Responsive <= 15% Viewport Cap) */}
      <MobileQuickBar onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Order & Customization Pop-Up Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={handleCloseOrderModal}
        initialCakeName={modalCakeName}
        initialWeight={modalWeight}
        initialPrice={modalPrice}
      />
    </div>
  );
}
