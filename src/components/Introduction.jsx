import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Landmark, Compass, Palette, Feather, MapPin, Users } from 'lucide-react';

export default function Introduction() {
  const factors = [
    { title: "Geography", desc: "Mountain valleys, river basins, coastal ports, and deserts shaped distinct regional artistic vernaculars.", icon: Globe },
    { title: "Religion", desc: "Buddhism, Hinduism, Jainism, Islam, and animist beliefs inspired sacred art and temple architecture.", icon: Landmark },
    { title: "Trade Routes", desc: "The Silk Road and ancient spice routes fostered cross-cultural aesthetic exchanges across Asia.", icon: Compass },
    { title: "Dynasties", desc: "Chola, Mughal, Rajput, Vakataka, and Ganga royal patronage spawned imperial style schools and court ateliers.", icon: Palette },
    { title: "Local Materials", desc: "Sandstone, granite, marble, clay, and mineral vegetable dyes shaped regional material vocabularies.", icon: Feather },
    { title: "Cultural Exchange", desc: "Persian masters, European travelers, and indigenous artisan guilds created hybrid visual languages.", icon: MapPin },
    { title: "Folk & Tribal Arts", desc: "Indigenous weavers and clan artists passed sacred motifs and natural dye secrets through generations.", icon: Users },
  ];

  return (
    <section className="py-24 bg-[#F5EFE0] border-t border-[#D4C4A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="divider-ornament mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#786C5E] shrink-0 px-4">Historical Context</span>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-5xl sm:text-6xl font-black text-[#1C1917] leading-tight">
              Art Has a<br/>
              <span className="text-[#D96B07] italic">Geography.</span>
            </h2>
            <div className="w-16 h-1 bg-[#D96B07]" />
            <p className="text-base text-[#1C1917] leading-relaxed font-normal">
              Indian art is not a monolithic tradition. It developed as a vast, living visual tapestry across different provinces, river valleys, and royal courts over three millennia — each region forging its own distinct aesthetic language.
            </p>
            <p className="text-sm text-[#786C5E] leading-relaxed font-normal">
              This interactive digital canvas map helps you explore how architectural styles, pigment choices, lost-wax bronze casting, and traditional textile weaving were shaped by geography, religion, trade, and dynastic patronage.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-[#1A2B56] pl-5 py-3 bg-[#EBDCB8] rounded-r-2xl border-y border-r border-[#D4C4A8]">
              <p className="font-serif text-lg italic text-[#1A2B56] font-semibold">
                "Every region of India is a chapter in a vast visual manuscript."
              </p>
            </blockquote>
          </div>

          {/* Right Column: Factor Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {factors.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex gap-4 p-4 rounded-2xl bg-[#FAF3E0] border border-[#D4C4A8] hover:border-[#D96B07] hover:shadow-md transition-all group">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#FDE6C5] flex items-center justify-center text-[#D96B07] group-hover:bg-[#D96B07] group-hover:text-white transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#1C1917] group-hover:text-[#1A2B56]">{f.title}</h3>
                      <p className="text-xs text-[#786C5E] leading-relaxed mt-0.5">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
