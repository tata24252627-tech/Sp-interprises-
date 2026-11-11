import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO, FLAVOR_OPTIONS } from '../data/bakeryData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    flavor: FLAVOR_OPTIONS[0],
    weight: '1.0 kg',
    isEggless: true,
    eventDate: '',
    deliveryType: 'delivery',
    address: 'Navde, Panvel',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formattedWhatsAppText = `Hello Sp Interprises! I would like to inquire about a custom cake order:
• Name: ${formData.name || 'Customer'}
• Phone: ${formData.phone || 'N/A'}
• Flavor: ${formData.flavor}
• Weight: ${formData.weight} (${formData.isEggless ? '100% Eggless' : 'Regular Sponge'})
• Event Date: ${formData.eventDate || 'Upcoming'}
• Delivery: ${formData.deliveryType === 'delivery' ? `Delivery to ${formData.address}` : 'Self Pickup at Navde Bakehouse'}
• Message / Note: ${formData.message || 'None'}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Navde, Panvel, Maharashtra 410208'
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] border-t border-[#EAE0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C58B39] mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#2A170F] tracking-tight">
            Contact Sp Interprises & Custom Inquiries
          </h2>
          <p className="mt-3 text-base text-[#4D2D1F]/80">
            Have an upcoming birthday, anniversary, wedding, or festival in Panvel? 
            Fill out our inquiry form or click to call us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE0D3] shadow-sm space-y-6">
              <h3 className="text-xl font-display font-bold text-[#2A170F]">
                Bakehouse Contact Details
              </h3>

              {/* Click-to-call Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE0D3]">
                <div className="w-10 h-10 rounded-xl bg-[#2A170F] text-[#C58B39] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase font-semibold text-[#7A533E]">Phone / Call Us</p>
                  <a
                    href={`tel:+91${BUSINESS_INFO.phone}`}
                    className="text-lg font-bold text-[#2A170F] hover:text-[#C58B39] transition-colors block font-mono"
                  >
                    +91 {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-[#7A533E]">
                    Tap above for instant click-to-call connection
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE0D3]">
                <div className="w-10 h-10 rounded-xl bg-[#2A170F] text-[#C58B39] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-xs uppercase font-semibold text-[#7A533E]">Bakehouse Address</p>
                  <p className="font-bold text-[#2A170F]">{BUSINESS_INFO.name}</p>
                  <p className="text-[#4D2D1F]">{BUSINESS_INFO.address}</p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#C58B39] hover:underline pt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE0D3]">
                <div className="w-10 h-10 rounded-xl bg-[#2A170F] text-[#C58B39] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-xs uppercase font-semibold text-[#7A533E]">Operating Hours</p>
                  <p className="font-semibold text-[#2A170F]">{BUSINESS_INFO.hours}</p>
                  <p className="text-xs text-[#7A533E]">
                    Ready to take fresh daily orders & inquiries
                  </p>
                </div>
              </div>

              {/* WhatsApp direct chat button */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsappUrl('Hello Sp Interprises! I want to inquire about custom cakes in Navde, Panvel.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm rounded-xl shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Baker on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Custom Cake Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#EAE0D3] shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#2A170F]">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#4D2D1F]/80 max-w-md mx-auto">
                  Thank you, <strong className="text-[#2A170F]">{formData.name || 'Friend'}</strong>! 
                  Our baker at <strong className="text-[#2A170F]">Sp Interprises</strong> will review your custom cake request and call you back shortly.
                </p>

                <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EAE0D3] text-left text-xs max-w-md mx-auto space-y-1.5 text-[#4D2D1F]">
                  <p className="font-semibold text-[#2A170F]">Order Summary:</p>
                  <p>• Flavor: {formData.flavor} ({formData.weight})</p>
                  <p>• Sponge: {formData.isEggless ? '100% Eggless' : 'Regular'}</p>
                  <p>• Location: {formData.address}</p>
                  {formData.message && <p>• Message: "{formData.message}"</p>}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={BUSINESS_INFO.whatsappUrl(formattedWhatsAppText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Copy to WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 bg-[#FAF7F2] hover:bg-[#F5EFEB] text-[#2A170F] font-semibold text-xs rounded-xl border border-[#EAE0D3] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-display font-bold text-[#2A170F]">
                    Custom Cake Inquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A533E] mt-1">
                    Fill in your event details and our Navde kitchen will confirm flavor, size, and availability.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sahil Pimparkar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 8108360585"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                      Cake Flavor / Style
                    </label>
                    <select
                      value={formData.flavor}
                      onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39] focus:bg-white"
                    >
                      {FLAVOR_OPTIONS.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                      Weight / Servings
                    </label>
                    <select
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39] focus:bg-white"
                    >
                      <option value="0.5 kg (4-6 guests)">0.5 kg (4–6 guests)</option>
                      <option value="1.0 kg (8-12 guests)">1.0 kg (8–12 guests)</option>
                      <option value="1.5 kg (12-16 guests)">1.5 kg (12–16 guests)</option>
                      <option value="2.0 kg (18-22 guests)">2.0 kg (18–22 guests)</option>
                      <option value="3.0 kg+ Multi-Tier">3.0 kg+ Multi-Tier</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                      Event Date & Time
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                      Fulfillment Mode
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, deliveryType: 'delivery' })}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                          formData.deliveryType === 'delivery'
                            ? 'bg-[#2A170F] text-white border-[#2A170F]'
                            : 'bg-[#FAF7F2] text-[#4D2D1F] border-[#EAE0D3]'
                        }`}
                      >
                        Home Delivery
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, deliveryType: 'pickup' })}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                          formData.deliveryType === 'pickup'
                            ? 'bg-[#2A170F] text-white border-[#2A170F]'
                            : 'bg-[#FAF7F2] text-[#4D2D1F] border-[#EAE0D3]'
                        }`}
                      >
                        Navde Pickup
                      </button>
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                {formData.deliveryType === 'delivery' && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                      Delivery Address in Panvel (Society / Landmark / PIN) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Flat 302, Sai Sagar Apt, Navde Colony, Panvel 410208"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39] focus:bg-white"
                    />
                  </div>
                )}

                {/* Message on Cake & Special Requests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D2D1F] mb-1.5">
                    Message on Cake & Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Write 'Happy Birthday Riya!' in dark chocolate, less sugar cream, add blue butterfly garnish."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EAE0D3] rounded-xl text-[#2A170F] focus:outline-none focus:ring-2 focus:ring-[#C58B39] focus:bg-white"
                  />
                </div>

                {/* 100% Eggless Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="egglessCheck"
                    checked={formData.isEggless}
                    onChange={(e) => setFormData({ ...formData, isEggless: e.target.checked })}
                    className="w-4 h-4 rounded text-[#C58B39] focus:ring-[#C58B39] border-gray-300"
                  />
                  <label htmlFor="egglessCheck" className="text-xs font-medium text-[#2A170F] flex items-center gap-1.5 cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                    <span>Please make this 100% Eggless (Vegetarian Sponge)</span>
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#2A170F] hover:bg-[#3E2317] text-white font-semibold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C58B39]" />
                    <span>Send Custom Cake Inquiry</span>
                  </button>
                  <p className="text-[11px] text-center text-[#7A533E] mt-2">
                    Need immediate confirmation? Call <strong className="text-[#2A170F]">8108360585</strong> directly.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
