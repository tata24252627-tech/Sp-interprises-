import React from 'react';
import { Sparkles, Cake, Cookie, Leaf, Truck, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onOpenOrderModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const services = [
    {
      id: 'birthday-wedding',
      icon: Cake,
      title: 'Custom Birthday & Wedding Cakes',
      subtitle: 'Bespoke Tiers & Theme Designs',
      description:
        'Transform your milestones into edible art. From elegant tiered wedding cakes adorned with edible gold leaf to fun themed birthday cakes, custom photoprints, and multi-flavored stacks crafted to your vision.',
      badge: 'Bespoke Customizer',
      highlights: [
        'Single to multi-tier wedding centerpieces',
        'Kids themes, cartoon & superhero designs',
        'Custom photo edible prints & fondant figurines',
        'Flavor blending: Belgian chocolate, red velvet, fruit',
      ],
      image: '/src/assets/images/cake_custom_wedding_1794384754655.jpg',
      ctaText: 'Design Custom Cake',
    },
    {
      id: 'pastries-cupcakes',
      icon: Cookie,
      title: 'Fresh Pastries & Gourmet Cupcakes',
      subtitle: 'Daily Fresh Counter Delights',
      description:
        'Indulge in French-inspired delicate pastries, rich chocolate mousse cups, whipped cream tartlets, and handcrafted cupcakes. Perfect for afternoon tea, family tea-time, or party dessert tables.',
      badge: 'Baked Fresh Every Morning',
      highlights: [
        'Decadent Belgian mousse & ganache tartlets',
        'Fluffy buttercream swirl cupcakes in gift boxes',
        'Assorted mini party platters for celebrations',
        'Always baked the same morning for peak flavor',
      ],
      image: '/src/assets/images/cake_pastries_cupcakes_1794384756065.jpg',
      ctaText: 'Order Pastry Box',
    },
    {
      id: 'eggless-cakes',
      icon: Leaf,
      title: '100% Eggless Cakes (Our Specialty)',
      subtitle: 'Pure Veg, Exceptionally Soft & Rich',
      description:
        'Our signature pride in Panvel. Crafted with genuine condensed milk, pure dairy butter, and artisanal techniques that yield sponge as light and cloud-soft as traditional baking—without a trace of egg.',
      badge: 'Certified Eggless Kitchen',
      highlights: [
        'Zero compromise on fluffiness or richness',
        'Dedicated eggless preparation counters',
        'Available across ALL chocolate, fruit & custom flavors',
        'A favorite choice for traditional Indian celebrations',
      ],
      image: '/src/assets/images/cake_eggless_fresh_fruit_1794384755397.jpg',
      ctaText: 'Explore Eggless Cakes',
    },
    {
      id: 'fast-delivery',
      icon: Truck,
      title: 'Fast & Safe Home Delivery',
      subtitle: 'Doorstep Care Across Navde & Panvel',
      description:
        'Special cakes require gentle handling. Our delivery team uses shock-absorbent cake cradles and temperature-controlled transport to ensure your delicate cake arrives picture-perfect at your venue or home.',
      badge: 'Shock-Absorbed Transport',
      highlights: [
        'Direct delivery across Navde, New/Old Panvel & Kalamboli',
        'Kamothe, Khandeshwar & Taloja coverage',
        'On-time delivery for midnight birthday surprises',
        'Real-time delivery coordination via WhatsApp',
      ],
      image: '/src/assets/images/cake_belgian_truffle_1794384754194.jpg',
      ctaText: 'Check Delivery Areas',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-y border-[#EAE0D3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C58B39] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Offerings & Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2A170F] tracking-tight">
            Crafted with Passion for Panvel's Sweetest Celebrations
          </h2>
          <p className="mt-3 text-base text-[#4D2D1F]/80">
            From daily sweet cravings to grand milestone moments, Sp Interprises brings you 
            bakery excellence rooted in local craftsmanship and uncompromising ingredient quality.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#FAF7F2] rounded-2xl border border-[#EAE0D3] overflow-hidden flex flex-col justify-between hover:border-[#C58B39]/50 transition-all duration-300 hover:shadow-md group"
              >
                {/* Image slot with scrim */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#EAE0D3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category text in image */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold text-white/95 bg-[#2A170F]/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                      {service.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-xl bg-[#C58B39] text-[#2A170F] flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[#F7E9CE] uppercase tracking-wider font-semibold">
                        {service.subtitle}
                      </p>
                      <h3 className="text-lg sm:text-xl font-display font-bold leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-sm text-[#4D2D1F]/90 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-[#EAE0D3]/70">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#2A170F]">
                        <Check className="w-3.5 h-3.5 text-[#C58B39] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        if (service.id === 'fast-delivery') {
                          const el = document.getElementById('where-to-buy');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          onOpenOrderModal(service.title);
                        }
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-[#2A170F] border border-[#EAE0D3] hover:border-[#C58B39] hover:bg-[#FAF7F2] font-semibold text-xs rounded-xl transition-colors shadow-2xs"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C58B39]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
