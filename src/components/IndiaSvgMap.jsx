import React, { useState } from 'react';
import MapMarker from './MapMarker';
import { ZoomIn, ZoomOut, RotateCcw, Compass, MapPin } from 'lucide-react';

export default function IndiaSvgMap({
  locations = [],
  selectedLocation = null,
  highlightedLocationIds = [],
  onSelectLocation,
  activeRoute = null
}) {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Canvas size matches map.jpeg exactly (736 x 863 pixels)
  const CANVAS_WIDTH = 736;
  const CANVAS_HEIGHT = 863;

  // Active route SVG path string generator
  const routePathString = activeRoute?.pathCoordinates?.length > 1
    ? activeRoute.pathCoordinates.reduce((acc, pt, idx) => idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`, '')
    : '';

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.2));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-[#FAF7F2] border border-[#DDD5C4] shadow-xl select-none">
      
      {/* Top Floating Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#DDD5C4] shadow-md">
        <button
          onClick={handleZoomIn}
          className="p-1.5 hover:bg-[#FDE8C8] text-[#2A2420] rounded-full transition-colors cursor-pointer"
          title="Zoom In"
          aria-label="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-1.5 hover:bg-[#FDE8C8] text-[#2A2420] rounded-full transition-colors cursor-pointer"
          title="Zoom Out"
          aria-label="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetZoom}
          className="p-1.5 hover:bg-[#FDE8C8] text-[#2A2420] rounded-full transition-colors cursor-pointer"
          title="Reset View"
          aria-label="Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Map Badge */}
      <div className="absolute top-4 left-4 z-20 bg-[#1A2B56] text-white px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center gap-2">
        <Compass className="w-4 h-4 text-[#E8700A]" />
        <span>Official Map of India</span>
      </div>

      {/* Interactive Map SVG with map.jpeg background */}
      <div className="w-full overflow-auto flex items-center justify-center p-2 sm:p-4">
        <svg
          viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
          className="w-full h-auto max-h-[850px] transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center'
          }}
          aria-label="Interactive Map of India plotted on map.jpeg"
        >
          <defs>
            {/* Route Glow Filter */}
            <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Official Image Map (map.jpeg) */}
          <image
            href="./map.jpeg"
            x="0"
            y="0"
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            preserveAspectRatio="xMidYMid meet"
            className="rounded-2xl"
          />

          {/* Active Route Overlay Layer */}
          {activeRoute && routePathString && (
            <g id="active-route-overlay" filter="url(#routeGlow)">
              {/* Outer glowing path */}
              <path
                d={routePathString}
                fill="none"
                stroke="#E8700A"
                strokeWidth="8"
                opacity="0.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Inner animated dashed path */}
              <path
                d={routePathString}
                fill="none"
                stroke="#E8700A"
                strokeWidth="4"
                strokeDasharray="12 8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="400"
                  to="0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          )}

          {/* Location Markers Layer */}
          <g id="location-markers-overlay">
            {locations.map(loc => (
              <MapMarker
                key={loc.id}
                location={loc}
                isSelected={selectedLocation?.id === loc.id}
                isHighlighted={!highlightedLocationIds.length || highlightedLocationIds.includes(loc.id)}
                onSelect={onSelectLocation}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Map Footer Note */}
      <div className="bg-[#EDE6D3] border-t border-[#DDD5C4] px-6 py-3 flex items-center justify-between text-xs text-[#786C5E]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#E8700A]" />
          <span className="font-bold text-[#1C1917]">Interactive Cartography</span>
          <span>· Plotted on official map.jpeg</span>
        </div>
        <span className="font-semibold">{locations.length} Locations Plotted</span>
      </div>
    </div>
  );
}
