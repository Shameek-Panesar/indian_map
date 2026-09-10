import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Palette } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function Hero() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const featuredWorks = [
    { title: "Nataraja Bronze", loc: "Thanjavur", cat: "Chola Lost-Wax Bronze", img: "./images/nataraja.png", accent: "#D96B07" },
    { title: "Taj Mahal", loc: "Agra", cat: "Mughal Architecture", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600", accent: "#1A2B56" },
    { title: "Ajanta Cave 1", loc: "Maharashtra", cat: "Ancient Vakataka Fresco", img: "./images/ajanta.png", accent: "#B5451B" },
  ];

  return (
    <section id="hero" className="min-h-screen bg-[#F5EFE0] bg-grid-paper flex flex-col overflow-hidden pt-20">

      {/* ─── Main Stage ─── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch py-10 lg:py-0">

        {/* LEFT: Editorial Headline Block */}
        <div className="flex flex-col justify-center py-16 pr-0 lg:pr-12 space-y-8">

          {/* Edition label */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-3">
            <div className="h-0.5 w-12 bg-[#D96B07]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D96B07]">
              Digital Museum — Vol. I
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <h1 className="font-serif font-black text-[#1C1917] leading-[0.92] tracking-tight">
              <span className="block text-6xl sm:text-8xl lg:text-9xl">MAP</span>
              <span className="block text-6xl sm:text-8xl lg:text-9xl text-[#D96B07]">OF</span>
              <span className="block text-5xl sm:text-7xl lg:text-8xl">INDIAN</span>
              <span className="block text-5xl sm:text-7xl lg:text-8xl italic text-[#1A2B56]">ART</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base sm:text-lg text-[#786C5E] leading-relaxed max-w-md font-normal">
            Explore 3,000 years of Indian artistic heritage — from ancient rock-cut cave frescos and lost-wax Chola bronzes to imperial Mughal miniatures and modern masters.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4">
            <button onClick={() => scroll('map')}
              className="group flex items-center gap-3 px-8 py-4 bg-[#1A2B56] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#D96B07] transition-all shadow-xl cursor-pointer">
              <MapPin className="w-4 h-4 text-[#FDE6C5]" />
              <span>Explore the Map</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scroll('movements')}
              className="flex items-center gap-2 px-8 py-4 border-2 border-[#D4C4A8] bg-[#FAF3E0] text-[#1C1917] rounded-full text-xs font-bold uppercase tracking-wider hover:border-[#1A2B56] hover:text-[#1A2B56] transition-all cursor-pointer shadow-sm">
              <Palette className="w-4 h-4 text-[#D96B07]" />
              Art Movements
            </button>
          </motion.div>

          {/* Stat bar */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="flex items-center gap-8 pt-4 border-t border-[#D4C4A8]">
            {[
              { n: '25+', label: 'Heritage Sites' },
              { n: '30+', label: 'Masterpieces' },
              { n: '7', label: 'Historical Eras' },
              { n: '8+', label: 'Art Forms' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-2xl font-black text-[#D96B07]">{s.n}</div>
                <div className="text-[10px] uppercase tracking-widest text-[#786C5E] font-bold mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Stacked Polaroid-style artwork gallery */}
        <div className="hidden lg:flex items-center justify-center relative py-16 pl-8">
          <div className="relative w-full max-w-md h-full flex items-center">
            {featuredWorks.map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, rotate: (i - 1) * 6, scale: 0.85 }}
                animate={{ opacity: 1, rotate: (i - 1) * 5, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
                whileHover={{ rotate: 0, scale: 1.06, zIndex: 20 }}
                className="absolute bg-[#FAF3E0] border border-[#D4C4A8] shadow-2xl cursor-pointer rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  width: 230,
                  padding: 12,
                  paddingBottom: 48,
                  left: `${i * 48}px`,
                  top: `${(i % 2 === 0 ? 20 : -20)}px`,
                  zIndex: 3 - i,
                  rotate: `${(i - 1) * 5}deg`,
                  transformOrigin: 'bottom center'
                }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#EBDCB8] rounded-lg border border-[#D4C4A8]">
                  <ImageWithFallback src={work.img} alt={work.title}
                    className="w-full h-full object-cover" />
                </div>
                <div className="mt-2.5 px-1">
                  <p className="font-serif text-sm font-bold text-[#1C1917] leading-tight">{work.title}</p>
                  <p className="text-[10px] font-semibold text-[#786C5E] mt-0.5">{work.loc}</p>
                  <div className="mt-1.5 inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
                    style={{ background: `${work.accent}20`, color: work.accent }}>
                    {work.cat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Bottom Marquee Ribbon ─── */}
      <div className="bg-[#EBDCB8] border-y border-[#D4C4A8] py-3.5 overflow-hidden">
        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.25em] text-[#1A2B56] whitespace-nowrap px-8 flex-wrap justify-center gap-y-0">
          {['Ancient Civilizations', 'Mughal Miniatures', 'Chola Bronzes', 'Bengal School', 'Rajput Paintings', 'Dravidian Temples', 'Progressive Artists', 'Tribal & Folk Art'].map((t, i) => (
            <React.Fragment key={t}>
              <span className="hover:text-[#D96B07] transition-colors cursor-default">{t}</span>
              {i < 7 && <span className="text-[#D96B07]">◆</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
