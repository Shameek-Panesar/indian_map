import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { facts } from '../data/facts';

export default function FactSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFact = () => setCurrentIndex((prev) => (prev + 1) % facts.length);
  const prevFact = () => setCurrentIndex((prev) => (prev - 1 + facts.length) % facts.length);

  const current = facts[currentIndex];

  if (!current) return null;

  return (
    <section className="py-24 bg-[#F5EFE0] border-t border-[#D4C4A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF3E0] border-2 border-[#D96B07] text-[#1C1917] rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDE6C5] text-[#D96B07] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Lightbulb className="w-4 h-4 text-[#D96B07]" />
              <span>Did You Know? · Fact #{currentIndex + 1} of {facts.length}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-relaxed text-[#1A2B56] italic">
                  "{current.title}"
                </h3>
                <p className="text-sm sm:text-base text-[#786C5E] leading-relaxed font-normal">
                  {current.fact}
                </p>
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#EBDCB8] text-[#1A2B56] text-xs font-mono font-bold">
                  Location: {current.location}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={prevFact}
                className="w-11 h-11 rounded-full border border-[#D4C4A8] bg-[#F5EFE0] flex items-center justify-center text-[#1A2B56] hover:bg-[#D96B07] hover:text-white transition-colors cursor-pointer"
                aria-label="Previous Fact"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextFact}
                className="w-11 h-11 rounded-full border border-[#D4C4A8] bg-[#F5EFE0] flex items-center justify-center text-[#1A2B56] hover:bg-[#D96B07] hover:text-white transition-colors cursor-pointer"
                aria-label="Next Fact"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
