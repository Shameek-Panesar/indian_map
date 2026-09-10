import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, MapPin } from 'lucide-react';
import { movements } from '../data/movements';

const COLOR_MAP = [
  { bg: '#D96B07', light: '#FDE6C5' },
  { bg: '#1A2B56', light: '#E2E7F5' },
  { bg: '#B5451B', light: '#FCE8E0' },
  { bg: '#2A9D8F', light: '#D7F5F2' },
  { bg: '#6D597A', light: '#EDE8F2' },
  { bg: '#D4A017', light: '#FEF3D0' },
];

export default function MovementSection({ onSelectLocation }) {
  const scrollRef = useRef(null);
  const scroll = dir => scrollRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });

  return (
    <section id="movements" className="py-24 bg-[#F5EFE0] border-t border-[#D4C4A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-0.5 w-8 bg-[#D96B07]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D96B07]">Artistic Heritage</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1C1917] leading-tight">
              Movements & <span className="italic text-[#1A2B56]">Traditions</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-full border-2 border-[#D4C4A8] bg-[#FAF3E0] flex items-center justify-center text-[#786C5E] hover:border-[#D96B07] hover:text-[#D96B07] transition-colors cursor-pointer shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll(1)}
              className="w-11 h-11 rounded-full border-2 border-[#D4C4A8] bg-[#FAF3E0] flex items-center justify-center text-[#786C5E] hover:border-[#D96B07] hover:text-[#D96B07] transition-colors cursor-pointer shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll rail */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 scroll-smooth"
          style={{ scrollbarWidth: 'thin' }}>

          {movements.map((mov, i) => {
            const palette = COLOR_MAP[i % COLOR_MAP.length];
            const artistsList = mov.artists || [];
            return (
              <motion.div key={mov.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => mov.associatedLocationId && onSelectLocation?.(mov.associatedLocationId)}
                className="shrink-0 w-80 group bg-[#FAF3E0] border border-[#D4C4A8] rounded-3xl overflow-hidden hover:shadow-xl hover:border-[#D96B07] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Color accent header */}
                  <div className="h-2.5" style={{ background: palette.bg }} />

                  {/* Content */}
                  <div className="p-6 space-y-3.5">
                    {/* Period badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: palette.light, color: palette.bg }}>
                        {mov.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-black text-xl text-[#1C1917] group-hover:text-[#1A2B56] leading-tight transition-colors">
                      {mov.name}
                    </h3>

                    {/* Region */}
                    <p className="text-xs font-semibold text-[#786C5E] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D96B07]" />
                      <span>{mov.region}</span>
                    </p>

                    {/* Description */}
                    <p className="text-xs text-[#786C5E] leading-relaxed line-clamp-3">
                      {mov.description}
                    </p>
                  </div>
                </div>

                {/* Artists footer */}
                <div className="p-6 pt-0">
                  <div className="border-t border-[#D4C4A8] pt-3.5 mt-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#786C5E] mb-1.5 flex items-center gap-1">
                      <User className="w-3 h-3 text-[#D96B07]" /> Key Artists & Masters
                    </p>
                    <p className="text-xs text-[#1C1917] font-semibold leading-snug">
                      {artistsList.length ? artistsList.slice(0, 3).join(' · ') : 'Traditional Regional Guilds'}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
