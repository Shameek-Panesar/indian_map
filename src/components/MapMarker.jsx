import React from 'react';

const CATEGORY_COLORS = {
  'Architecture': '#E8700A',
  'Sculpture': '#2C3E7A',
  'Painting': '#B5451B',
  'Textiles': '#2A9D8F',
  'Craft': '#2A9D8F',
  'Manuscripts': '#6D597A',
  'Modern Art': '#E76F51',
  'Tribal Art': '#D4A017',
};

export default function MapMarker({ location, isSelected, isHighlighted, onSelect }) {
  const color = CATEGORY_COLORS[location.artForms?.[0]] ?? '#E8700A';
  const opacity = isHighlighted ? 1 : 0.18;

  return (
    <g
      transform={`translate(${location.coordinates.x}, ${location.coordinates.y})`}
      className="cursor-pointer group select-none"
      opacity={opacity}
      style={{ transition: 'opacity 0.3s' }}
      onClick={() => onSelect(location)}
      tabIndex={0}
      role="button"
      aria-label={`Explore ${location.name}`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(location); } }}
    >
      {/* Invisible hit target for smooth hover without jitter */}
      <circle r="18" fill="transparent" />

      {/* Selected glow ring (smooth pulsing halo centered on marker) */}
      {isSelected && (
        <circle
          r="16"
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="animate-pulse"
          style={{ transformBox: 'fill-box', transformOrigin: 'center', opacity: 0.7 }}
        />
      )}
      {isSelected && (
        <circle
          r="13"
          fill={color}
          opacity="0.2"
        />
      )}

      {/* Outer ring */}
      <circle
        r="10"
        fill="white"
        stroke={color}
        strokeWidth="2"
        className="group-hover:scale-125 transition-transform duration-200 ease-out"
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />

      {/* Inner fill */}
      <circle
        r="6"
        fill={isSelected ? color : 'white'}
        stroke={color}
        strokeWidth="2.5"
        className="group-hover:scale-125 transition-transform duration-200 ease-out"
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />

      {/* Center dot */}
      <circle r="2.5" fill={isSelected ? 'white' : color} />

      {/* Label */}
      <text
        y="20"
        textAnchor="middle"
        fill={isSelected ? color : '#2A2420'}
        fontSize="9"
        fontWeight={isSelected ? '700' : '500'}
        fontFamily="Plus Jakarta Sans, sans-serif"
        className="pointer-events-none select-none"
      >
        {location.name}
      </text>

      {/* Tooltip */}
      <g
        className="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200"
        style={{ transform: 'translateY(-38px)' }}
      >
        <rect x="-65" y="-28" width="130" height="30" rx="6" fill="white" stroke={color} strokeWidth="1.5" className="shadow-lg" />
        <text x="0" y="-16" textAnchor="middle" fill="#2A2420" fontSize="9.5" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">{location.name}</text>
        <text x="0" y="-5.5" textAnchor="middle" fill="#8B7D6B" fontSize="7.5" fontFamily="Plus Jakarta Sans, sans-serif">{location.artForms.join(' · ')}</text>
      </g>
    </g>
  );
}
