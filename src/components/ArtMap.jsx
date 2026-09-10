import React from 'react';
import IndiaSvgMap from './IndiaSvgMap';
import FilterBar from './FilterBar';
import MapLegend from './MapLegend';
import LocationPanel from './LocationPanel';
import { Compass, Info, Tag } from 'lucide-react';

export default function ArtMap({ locations = [], selectedLocation = null, onSelectLocation, onCloseLocation, searchQuery, onSearchChange, activeArtForm, onArtFormChange, activePeriod, onPeriodChange, onResetFilters, activeRoute = null, onArtistClick }) {

  const filtered = locations.filter(loc => {
    if (activeArtForm !== 'All' && !loc.artForms.includes(activeArtForm)) return false;
    if (activePeriod !== 'All Periods' && !loc.period.toLowerCase().includes(activePeriod.toLowerCase())) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return loc.name.toLowerCase().includes(q) || loc.state.toLowerCase().includes(q)
        || loc.historicalContext.toLowerCase().includes(q) || loc.artForms.some(a => a.toLowerCase().includes(q))
        || loc.facts.some(f => f.toLowerCase().includes(q));
    }
    return true;
  }).map(l => l.id);

  return (
    <section id="map" className="py-20 bg-[#F7F2E8] border-t border-[#DDD5C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#E8700A]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8700A]">Interactive Cartography</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#2A2420] leading-tight">
              The Art <span className="italic text-[#2C3E7A]">Map</span>
            </h2>
          </div>
          <p className="text-sm text-[#8B7D6B] max-w-xs leading-relaxed">
            Click any marker on the map to open a location's complete heritage profile.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar searchQuery={searchQuery} onSearchChange={onSearchChange} activeArtForm={activeArtForm} onArtFormChange={onArtFormChange} activePeriod={activePeriod} onPeriodChange={onPeriodChange} onResetFilters={onResetFilters} />

        {/* Active filter banner */}
        {(activeArtForm !== 'All' || activePeriod !== 'All Periods' || searchQuery || activeRoute) && (
          <div className="mb-4 px-4 py-2.5 bg-[#FDE8C8] border border-[#F0C898] rounded-xl flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-[#B5451B] font-semibold">
              <Info className="w-4 h-4" />
              {filtered.length} of {locations.length} locations shown
              {activeRoute && ` · Route: ${activeRoute.name}`}
            </span>
            <button onClick={onResetFilters} className="text-[#E8700A] text-xs font-bold hover:underline">Clear</button>
          </div>
        )}

        {/* Map Canvas */}
        <div className="bg-white rounded-3xl border border-[#DDD5C4] shadow-lg overflow-hidden">
          {/* Top stripe */}
          <div className="bg-[#EDE6D3] border-b border-[#DDD5C4] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#2A2420]">
              <Compass className="w-4 h-4 text-[#E8700A]" />
              <span className="text-xs font-bold uppercase tracking-widest">India Art Heritage Map</span>
            </div>
            <span className="text-xs text-[#8B7D6B] font-semibold">{locations.length} locations · Click to explore</span>
          </div>

          {/* Map area */}
          <div className="p-6 sm:p-8 bg-[#FAF7F2]">
            <IndiaSvgMap
              locations={locations}
              selectedLocation={selectedLocation}
              highlightedLocationIds={filtered}
              onSelectLocation={onSelectLocation}
              activeRoute={activeRoute}
            />
          </div>

          {/* Legend footer */}
          <div className="px-6 py-4 bg-white border-t border-[#EDE6D3] flex justify-center">
            <MapLegend />
          </div>
        </div>
      </div>

      {/* Location Panel */}
      {selectedLocation && (
        <LocationPanel location={selectedLocation} onClose={onCloseLocation} onArtistClick={onArtistClick} />
      )}
    </section>
  );
}
