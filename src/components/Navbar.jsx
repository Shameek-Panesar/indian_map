import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Exhibition', href: '#hero' },
    { name: 'Canvas Map', href: '#map' },
    { name: 'Movements', href: '#movements' },
    { name: 'Atelier', href: '#artists' },
    { name: 'Pilgrimages', href: '#routes' },
  ];

  const scroll = (href) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#FAF3E0]/95 backdrop-blur-md border-b border-[#D4C4A8] py-3.5 shadow-sm'
        : 'bg-[#F5EFE0]/90 py-5 border-b border-[#D4C4A8]/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Monogram & Title */}
        <a href="#hero" onClick={e => { e.preventDefault(); scroll('#hero'); }}
          className="flex items-center gap-3.5 group cursor-pointer">
          <div className="w-10 h-10 bg-[#1A2B56] rounded-xl flex items-center justify-center group-hover:bg-[#D96B07] transition-colors shadow-sm">
            <BookOpen className="w-5 h-5 text-[#FAF3E0]" />
          </div>
          <div>
            <div className="font-serif text-xl font-extrabold text-[#1C1917] tracking-wider leading-none group-hover:text-[#1A2B56] transition-colors">
              KALA CHITRA
            </div>
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#D96B07] mt-1">
              Mapping Indian Art
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href}
              onClick={e => { e.preventDefault(); scroll(link.href); }}
              className="text-xs font-bold uppercase tracking-widest text-[#786C5E] hover:text-[#1A2B56] transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button onClick={() => scroll('#map')}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D96B07] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E8700A] transition-colors shadow-md cursor-pointer">
            <Compass className="w-4 h-4" />
            <span>Explore Map</span>
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border border-[#D4C4A8] rounded-xl text-[#1C1917] bg-[#FAF3E0]">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF3E0] border-t border-[#D4C4A8] px-6 py-5 space-y-1 shadow-xl">
          {navLinks.map(link => (
            <a key={link.name} href={link.href}
              onClick={e => { e.preventDefault(); scroll(link.href); }}
              className="block py-3 text-sm font-bold uppercase tracking-widest text-[#1C1917] border-b border-[#EBDCB8] hover:text-[#D96B07]">
              {link.name}
            </a>
          ))}
          <button onClick={() => scroll('#map')}
            className="w-full mt-3 py-3 rounded-xl bg-[#D96B07] text-white font-bold uppercase text-xs tracking-wider">
            Explore Map
          </button>
        </div>
      )}
    </header>
  );
}
