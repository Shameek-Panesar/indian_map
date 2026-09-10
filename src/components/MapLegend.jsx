import React from 'react';

const items = [
  { label: 'Architecture', color: '#E8700A' },
  { label: 'Sculpture', color: '#2C3E7A' },
  { label: 'Painting', color: '#B5451B' },
  { label: 'Textiles & Craft', color: '#2A9D8F' },
  { label: 'Modern Art', color: '#E76F51' },
  { label: 'Tribal Art', color: '#D4A017' },
];

export default function MapLegend() {
  return (
    <div className="bg-white/90 backdrop-blur-sm border border-[#DDD5C4] rounded-xl px-4 py-2.5 shadow-sm flex flex-wrap items-center gap-x-5 gap-y-2">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B7D6B] border-r border-[#DDD5C4] pr-4">Legend</span>
      {items.map(it => (
        <div key={it.label} className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: it.color }} />
          <span className="text-[11px] text-[#8B7D6B]">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
