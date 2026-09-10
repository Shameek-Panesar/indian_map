import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Calendar, MapPin } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function ArtworkCard({ artwork }) {
  const [flip, setFlip] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-[#FAF3E0] border border-[#D4C4A8] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#D96B07] transition-all cursor-pointer"
      onClick={() => setFlip(!flip)}
    >
      {!flip ? (
        <>
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden bg-[#EBDCB8]">
            <ImageWithFallback src={artwork.image} alt={artwork.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          {/* Info */}
          <div className="p-3.5">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-serif font-bold text-sm text-[#1C1917] leading-tight">{artwork.name}</h4>
              <Eye className="w-3.5 h-3.5 text-[#A09382] group-hover:text-[#D96B07] shrink-0 mt-0.5 transition-colors" />
            </div>
            <div className="flex flex-wrap gap-2 mt-2 text-[11px] text-[#786C5E] font-medium">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#D96B07]" />{artwork.period}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#1A2B56]" />{artwork.medium}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="p-4 bg-[#FAF3E0] h-full min-h-[180px] flex flex-col gap-2">
          <h4 className="font-serif font-bold text-sm text-[#1C1917]">{artwork.name}</h4>
          <p className="text-xs text-[#786C5E] leading-relaxed flex-1">{artwork.description}</p>
          <p className="text-[10px] font-bold text-[#D96B07] uppercase tracking-wider">{artwork.style}</p>
          <span className="text-[9px] font-bold text-[#A09382]">Tap to flip back</span>
        </div>
      )}
    </motion.div>
  );
}
