import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin } from 'lucide-react';

const REGIONS = [
  {
    name: 'North India',
    tag: 'Courtly Miniatures & Marble Architecture',
    desc: 'Home to Mughal imperial ateliers, Pahari hill paintings, and the architectural brilliance of Fatehpur Sikri and Agra.',
    highlights: ['Mughal Miniatures', 'Pahari Painting', 'Indo-Islamic Architecture'],
    color: '#E8700A',
    bg: '#FDE8C8',
    count: '8 Locations'
  },
  {
    name: 'South India',
    tag: 'Dravidian Temples & Sacred Chola Bronzes',
    desc: 'Defined by towering gopurams, intricate loss-wax bronze casting, and the royal patronage of Chola, Vijayanagara, and Nayaka dynasties.',
    highlights: ['Chola Bronzes', 'Dravidian Architecture', 'Thanjavur Painting'],
    color: '#2C3E7A',
    bg: '#E8EBF6',
    count: '7 Locations'
  },
  {
    name: 'West India',
    tag: 'Rock-Cut Caves & Textile Traditions',
    desc: 'Famed for ancient monastic fresco complexes at Ajanta & Ellora, Solanki stepwells, and Bandhani dye arts.',
    highlights: ['Ajanta Frescos', 'Ellora Rock-Cut', 'Rajasthani Miniatures'],
    color: '#B5451B',
    bg: '#FCE8E0',
    count: '6 Locations'
  },
  {
    name: 'East & Northeast',
    tag: 'Terracotta Temples & Tribal Weaving',
    desc: 'Rich in Bishnupur terracotta reliefs, Bengal School modernism, Kalighat pats, and indigenous Northeast textile traditions.',
    highlights: ['Terracotta Temples', 'Bengal School', 'Tribal Crafts'],
    color: '#2A9D8F',
    bg: '#D7F5F2',
    count: '5 Locations'
  },
];

export default function RegionExplorer({ onFilterRegion }) {
  return (
    <section className="py-24 bg-[#F7F2E8] border-t border-[#DDD5C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#E8700A]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8700A]">Regional Atlas</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#2A2420] leading-tight">
              Explore by <span className="italic text-[#2C3E7A]">Region</span>
            </h2>
          </div>
          <p className="text-sm text-[#8B7D6B] max-w-sm leading-relaxed">
            Select a geographic zone to filter locations and explore regional stylistic traits.
          </p>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONS.map((region, idx) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => onFilterRegion?.(region.name)}
              className="bg-white border border-[#DDD5C4] rounded-3xl p-6 flex flex-col justify-between hover:border-[#E8700A] hover:shadow-lg transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-3 h-3 rounded-full" style={{ background: region.color }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B7D6B] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#EDE6D3]">
                    {region.count}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-black text-[#2A2420] group-hover:text-[#2C3E7A] transition-colors mb-1">
                  {region.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#E8700A] mb-3">{region.tag}</p>
                <p className="text-xs text-[#8B7D6B] leading-relaxed mb-6">{region.desc}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#EDE6D3]">
                <div className="flex flex-wrap gap-1.5">
                  {region.highlights.map(h => (
                    <span key={h} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: region.bg, color: region.color }}>
                      {h}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-[#2C3E7A] group-hover:text-[#E8700A] pt-2 transition-colors">
                  <span>Explore Region</span>
                  <Compass className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
