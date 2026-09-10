import React, { useState } from 'react';
import { ImageOff, Landmark } from 'lucide-react';

export default function ImageWithFallback({ src, alt, className = "", category = "art" }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-[#25221E] border border-[#3D3730] flex flex-col items-center justify-center p-4 text-center select-none ${className}`}>
        <div className="w-10 h-10 rounded-full bg-[#363028] border border-[#52493D] flex items-center justify-center text-[#D4AF37] mb-2 shadow-inner">
          <Landmark className="w-5 h-5" />
        </div>
        <span className="text-xs font-serif text-[#C8BCAE] tracking-wider uppercase line-clamp-1">{alt || "Indian Visual Heritage"}</span>
        <span className="text-[10px] text-[#8C8070] mt-0.5">Heritage Digital Archive</span>
      </div>
    );
  }

  const resolvedSrc = (typeof src === 'string' && src.startsWith('/') && !src.startsWith('//'))
    ? '.' + src
    : src;

  return (
    <img
      src={resolvedSrc}
      alt={alt || "Indian Art Heritage"}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
