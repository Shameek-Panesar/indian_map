import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Palette, Sparkles, Compass, MapPin } from 'lucide-react';

export default function Statistics() {
  const stats = [
    { label: 'Documented Heritage Sites', value: '25+', icon: MapPin, desc: 'Across 18 Indian states and union territories', color: '#E8700A' },
    { label: 'Curated Masterpieces', value: '30+', icon: Sparkles, desc: 'Bronzes, frescos, textiles, and architecture', color: '#2C3E7A' },
    { label: 'Artistic Eras & Dynasties', value: '7', icon: Landmark, desc: 'From Indus Valley to Modernist movements', color: '#B5451B' },
    { label: 'Distinct Art Forms', value: '8+', icon: Palette, desc: 'Miniatures, loss-wax bronzes, rock-cut reliefs', color: '#2A9D8F' },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#DDD5C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-[#DDD5C4] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm" style={{ background: stat.color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-4xl sm:text-5xl font-black text-[#2A2420]">{stat.value}</div>
                    <div className="font-serif font-bold text-sm text-[#2C3E7A] mt-1">{stat.label}</div>
                    <p className="text-xs text-[#8B7D6B] mt-1 leading-relaxed">{stat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
