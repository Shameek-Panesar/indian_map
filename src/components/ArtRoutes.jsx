import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, ArrowRight, Check } from 'lucide-react';
import { routes } from '../data/routes';

export default function ArtRoutes({ activeRoute, onSelectRoute, onSelectLocation }) {
  return (
    <section id="routes" className="py-24 bg-[#FAF7F2] border-t border-[#DDD5C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#E8700A]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8700A]">Curated Journeys</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#2A2420] leading-tight">
              Artistic <span className="italic text-[#2C3E7A]">Pilgrimages</span>
            </h2>
          </div>
          <p className="text-sm text-[#8B7D6B] max-w-sm leading-relaxed">
            Follow themed geographic trails connecting India's most celebrated sacred caves, bronze temples, and royal miniature ateliers.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {routes.map((route) => {
            const isActive = activeRoute?.id === route.id;
            return (
              <motion.div
                key={route.id}
                whileHover={{ y: -4 }}
                className={`bg-white border rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm transition-all ${
                  isActive ? 'border-[#E8700A] ring-2 ring-[#E8700A]/20 shadow-md' : 'border-[#DDD5C4] hover:border-[#2C3E7A]'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#E8EBF6] text-[#2C3E7A] text-xs font-bold uppercase tracking-wider">
                      {route.theme}
                    </span>
                    <span className="text-xs text-[#8B7D6B] font-mono">{route.stops.length} Heritage Stops</span>
                  </div>

                  <h3 className="font-serif text-2xl font-black text-[#2A2420] mb-2">{route.name}</h3>
                  <p className="text-sm text-[#8B7D6B] leading-relaxed mb-6">{route.description}</p>

                  {/* Stops Timeline */}
                  <div className="space-y-3 mb-6 bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE6D3]">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8AC9C] block mb-2">Key Highlights</span>
                    <div className="flex flex-wrap gap-2">
                      {route.stops.map((stop, idx) => (
                        <button
                          key={idx}
                          onClick={() => onSelectLocation?.(stop.locationId)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#DDD5C4] hover:border-[#E8700A] text-xs font-semibold text-[#2A2420] transition-colors cursor-pointer"
                        >
                          <MapPin className="w-3 h-3 text-[#E8700A]" />
                          <span>{stop.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-[#EDE6D3] flex items-center justify-between">
                  <span className="text-xs text-[#8B7D6B] italic">{route.stops.length} Key Stops</span>
                  <button
                    onClick={() => onSelectRoute(isActive ? null : route)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#E8700A] text-white shadow-md'
                        : 'bg-[#2C3E7A] text-white hover:bg-[#E8700A]'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Route Active on Map</span>
                      </>
                    ) : (
                      <>
                        <Compass className="w-3.5 h-3.5" />
                        <span>Plot Route on Map</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
