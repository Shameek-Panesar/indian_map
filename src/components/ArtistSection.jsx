import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, ExternalLink, Calendar } from 'lucide-react';
import { artists } from '../data/artists';
import ImageWithFallback from './ImageWithFallback';

export default function ArtistSection({ onSelectArtist }) {
  const [selectedArtist, setSelectedArtist] = useState(artists[0]);

  if (!selectedArtist) return null;

  const keyWorksList = selectedArtist.keyWorks || [];

  return (
    <section id="artists" className="py-24 bg-[#F5EFE0] border-t border-[#D4C4A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-0.5 w-8 bg-[#D96B07]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D96B07]">Masters & Pioneers</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1C1917] leading-tight">
              The Atelier <span className="italic text-[#1A2B56]">Gallery</span>
            </h2>
          </div>
          <p className="text-sm text-[#786C5E] max-w-sm leading-relaxed font-normal">
            Spotlighting iconic Indian masters who redefined modernism, traditional iconography, and national identity.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Artist List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {artists.map((artist) => {
              const active = selectedArtist.id === artist.id;
              return (
                <motion.div
                  key={artist.id}
                  onClick={() => setSelectedArtist(artist)}
                  whileHover={{ x: 4 }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    active
                      ? 'bg-[#FAF3E0] border-[#D96B07] shadow-md'
                      : 'bg-[#FAF3E0]/60 border-[#D4C4A8] hover:border-[#1A2B56] hover:bg-[#FAF3E0]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#EBDCB8] shrink-0 border border-[#D4C4A8]">
                      <ImageWithFallback src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-serif font-bold text-base truncate ${active ? 'text-[#D96B07]' : 'text-[#1C1917]'}`}>
                        {artist.name}
                      </h3>
                      <p className="text-xs text-[#786C5E] truncate mt-0.5">{artist.movement}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Featured Artist Detail (8 cols) */}
          <div className="lg:col-span-8 bg-[#FAF3E0] border border-[#D4C4A8] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Image & Quick Info (5 cols) */}
              <div className="md:col-span-5 space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#EBDCB8] border border-[#D4C4A8] shadow-sm">
                  <ImageWithFallback
                    src={selectedArtist.image}
                    alt={selectedArtist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-[#F5EFE0] rounded-xl border border-[#D4C4A8] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#786C5E]">
                    <Calendar className="w-3.5 h-3.5 text-[#D96B07]" />
                    <span>{selectedArtist.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#786C5E]">
                    <MapPin className="w-3.5 h-3.5 text-[#1A2B56]" />
                    <span>{selectedArtist.region}</span>
                  </div>
                </div>
              </div>

              {/* Comprehensive Description & Works (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#FDE6C5] text-[#D96B07] text-xs font-bold uppercase tracking-wider mb-3">
                    {selectedArtist.movement}
                  </div>
                  <h3 className="font-serif text-3xl font-black text-[#1C1917] mb-3">
                    {selectedArtist.name}
                  </h3>
                  <p className="text-sm text-[#786C5E] leading-relaxed mb-4">
                    {selectedArtist.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif font-bold text-sm text-[#1A2B56] uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D96B07]" /> Major Works & Impact
                    </h4>
                    <ul className="space-y-2">
                      {keyWorksList.map((work, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#1C1917] font-semibold bg-[#F5EFE0] p-2.5 rounded-lg border border-[#D4C4A8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D96B07]" />
                          <span>{work}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D4C4A8] flex items-center justify-between">
                  <span className="text-xs text-[#786C5E] font-mono font-bold">Pioneer Collection</span>
                  <button
                    onClick={() => onSelectArtist?.(selectedArtist)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A2B56] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D96B07] transition-colors cursor-pointer"
                  >
                    <span>View Heritage Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
