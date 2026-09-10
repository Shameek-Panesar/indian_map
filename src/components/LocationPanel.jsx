import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, BookOpen, Sparkles, User, Lightbulb, ArrowRight, Tag } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import ArtworkCard from './ArtworkCard';
import { artworks as allArtworks } from '../data/artworks';
import { artists as allArtists } from '../data/artists';

export default function LocationPanel({ location, onClose, onArtistClick }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!location) return null;

  const works = allArtworks.filter(a => a.locationId === location.id || location.artworks?.includes(a.id));
  const artists = allArtists.filter(a => a.associatedLocationId === location.id || location.artists?.includes(a.id));

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'artworks', label: `Works (${works.length})`, icon: Sparkles },
    { id: 'artists', label: `Artists (${artists.length})`, icon: User },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2A2420]/40 backdrop-blur-[2px]"
        />

        <motion.aside
          initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 240 }}
          className="relative w-full max-w-xl bg-white shadow-2xl flex flex-col h-full z-10 overflow-y-auto"
          aria-label={`Details for ${location.name}`}
        >
          {/* Hero banner image */}
          <div className="relative h-52 bg-[#EDE6D3] shrink-0">
            <ImageWithFallback src={location.image} alt={location.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2420]/70 to-transparent" />
            <button onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 border border-white flex items-center justify-center text-[#2A2420] hover:bg-[#F7F2E8] transition-colors cursor-pointer"
              aria-label="Close">
              <X className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 left-5 right-12">
              <h3 className="font-serif text-2xl font-black text-white leading-tight">{location.name}</h3>
              <div className="flex items-center gap-1.5 text-[#FDE8C8] text-xs mt-0.5">
                <MapPin className="w-3 h-3" />
                <span>{location.state}, {location.region}</span>
              </div>
            </div>
          </div>

          {/* Metadata strip */}
          <div className="bg-[#EDE6D3] border-b border-[#DDD5C4] px-5 py-3 flex items-center justify-between text-xs shrink-0">
            <span className="text-[#2C3E7A] font-bold">{location.period}</span>
            <div className="flex gap-2 flex-wrap justify-end">
              {location.artForms.map(af => (
                <span key={af} className="px-2 py-0.5 rounded-full bg-[#E8700A] text-white font-bold uppercase tracking-wider">{af}</span>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-[#DDD5C4] px-5 pt-4 pb-0 flex gap-1 shrink-0">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                    active ? 'border-[#E8700A] text-[#E8700A]' : 'border-transparent text-[#8B7D6B] hover:text-[#2A2420]'
                  }`}>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="flex-1 p-5 space-y-6 overflow-y-auto">

            {activeTab === 'overview' && (
              <div className="space-y-5">
                {/* Description */}
                <p className="text-sm text-[#2A2420] leading-relaxed">{location.description}</p>

                {/* Historical context */}
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C3E7A] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#E8700A]" /> Historical Context
                  </h4>
                  <div className="bg-[#FAF7F2] border border-[#EDE6D3] rounded-xl p-4">
                    <p className="text-sm text-[#2A2420] leading-relaxed">{location.historicalContext}</p>
                  </div>
                </div>

                {/* Did You Know */}
                {location.facts?.[0] && (
                  <div className="flex gap-3 p-4 bg-[#FDE8C8] border border-[#F0C898] rounded-xl">
                    <Lightbulb className="w-5 h-5 text-[#E8700A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B5451B] block mb-1">Did You Know?</span>
                      <p className="text-sm text-[#2A2420] leading-relaxed italic">"{location.facts[0]}"</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'artworks' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {works.map(w => <ArtworkCard key={w.id} artwork={w} />)}
              </div>
            )}

            {activeTab === 'artists' && (
              <div className="space-y-3">
                {artists.length ? artists.map(a => (
                  <button key={a.id} onClick={() => onArtistClick?.(a)}
                    className="w-full text-left p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C4] hover:border-[#E8700A] hover:shadow-sm flex items-center justify-between group transition-all">
                    <div>
                      <p className="font-serif font-bold text-base text-[#2A2420] group-hover:text-[#E8700A]">{a.name}</p>
                      <p className="text-xs text-[#8B7D6B]">{a.movement} · {a.period}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#DDD5C4] group-hover:text-[#E8700A] group-hover:translate-x-1 transition-transform" />
                  </button>
                )) : (
                  <p className="text-sm text-[#8B7D6B] italic text-center py-8">No individual artists recorded for this regional tradition.</p>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-[#EDE6D3] p-5 shrink-0 flex items-center justify-between">
            <span className="text-xs text-[#B8AC9C] font-mono">#{location.id}</span>
            <button onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#2C3E7A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E8700A] transition-colors cursor-pointer">
              Close Panel
            </button>
          </div>
        </motion.aside>
      </div>
    </AnimatePresence>
  );
}
