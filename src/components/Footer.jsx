import React from 'react';
import { BookOpen, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#FAF7F2] text-[#2A2420] pt-16 pb-12 border-t border-[#DDD5C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#DDD5C4]">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2C3E7A] rounded-xl flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-[#2A2420] tracking-wide">KALA CHITRA</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#E8700A]">Mapping Indian Art</div>
              </div>
            </div>
            <p className="text-xs text-[#8B7D6B] leading-relaxed max-w-sm">
              An interactive digital museum dedicated to mapping 3,000 years of India's artistic, architectural, and cultural heritage across geography and time.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#2C3E7A] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#8B7D6B]">
              <li><a href="#hero" className="hover:text-[#E8700A] transition-colors">Exhibition Home</a></li>
              <li><a href="#map" className="hover:text-[#E8700A] transition-colors">Interactive Canvas Map</a></li>
              <li><a href="#movements" className="hover:text-[#E8700A] transition-colors">Movements & Traditions</a></li>
              <li><a href="#artists" className="hover:text-[#E8700A] transition-colors">The Atelier Masters</a></li>
              <li><a href="#routes" className="hover:text-[#E8700A] transition-colors">Artistic Pilgrimages</a></li>
            </ul>
          </div>

          {/* Academic Info (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#2C3E7A] uppercase tracking-wider">Project Credits</h4>
            <p className="text-xs text-[#8B7D6B] leading-relaxed">
              Designed as an interactive digital humanities project showcasing geographical cartography of South Asian art history.
            </p>
            <div className="p-3 rounded-xl bg-[#EDE6D3] border border-[#DDD5C4] text-[11px] text-[#2A2420]">
              <span className="font-bold text-[#E8700A] block mb-0.5">College Project Presentation</span>
              Title: "Mapping Indian Art — An Interactive Digital Museum"
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B7D6B]">
          <p>© {new Date().getFullYear()} Mapping Indian Art. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8EBF6] text-[#2C3E7A] hover:bg-[#E8700A] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
