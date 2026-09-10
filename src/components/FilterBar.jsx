import React from 'react';
import { Search, Filter, Calendar, X } from 'lucide-react';

export default function FilterBar({ searchQuery, onSearchChange, activeArtForm, onArtFormChange, activePeriod, onPeriodChange, onResetFilters }) {
  const artForms = ['All', 'Architecture', 'Sculpture', 'Painting', 'Textiles', 'Manuscripts', 'Craft', 'Modern Art', 'Tribal Art'];
  const periods = ['All Periods', 'Ancient', 'Classical', 'Medieval', 'Early Modern', 'Colonial', 'Modern', 'Contemporary'];
  const hasFilters = searchQuery !== '' || activeArtForm !== 'All' || activePeriod !== 'All Periods';

  return (
    <div className="bg-[#FAF3E0] border border-[#D4C4A8] rounded-2xl p-5 shadow-sm mb-6 space-y-4">
      {/* Row 1: Search + Period */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#786C5E]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Search locations, artists, artworks, traditions…"
            className="w-full pl-10 pr-9 py-3 rounded-xl border border-[#D4C4A8] bg-[#F5EFE0] text-sm text-[#1C1917] placeholder-[#A09382] focus:outline-none focus:border-[#D96B07] focus:ring-2 focus:ring-[#D96B07]/20 transition-all font-medium"
          />
          {searchQuery && (
            <button onClick={() => onSearchChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A09382] hover:text-[#1C1917]">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#786C5E] shrink-0" />
          <select
            value={activePeriod}
            onChange={e => onPeriodChange(e.target.value)}
            className="px-4 py-3 rounded-xl border border-[#D4C4A8] bg-[#F5EFE0] text-sm text-[#1C1917] font-semibold focus:outline-none focus:border-[#D96B07] cursor-pointer"
          >
            {periods.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          {hasFilters && (
            <button onClick={onResetFilters}
              className="flex items-center gap-1 px-3.5 py-3 rounded-xl bg-[#FDE6C5] text-[#B5451B] border border-[#F0C898] text-xs font-bold hover:bg-[#D96B07] hover:text-white transition-colors cursor-pointer">
              <X className="w-3.5 h-3.5" /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Row 2: Art Form filter chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <span className="text-xs font-bold text-[#786C5E] uppercase tracking-wider shrink-0 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        {artForms.map(af => {
          const active = activeArtForm === af;
          return (
            <button key={af} onClick={() => onArtFormChange(af)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                active
                  ? 'bg-[#D96B07] text-white shadow-md'
                  : 'bg-[#EBDCB8] text-[#786C5E] hover:bg-[#D4C4A8] hover:text-[#1C1917]'
              }`}>
              {af}
            </button>
          );
        })}
      </div>
    </div>
  );
}
