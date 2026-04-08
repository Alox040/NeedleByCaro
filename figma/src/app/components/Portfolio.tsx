import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IllFace, IllBotanical, IllLotus, IllEye } from './Illustrations';
import { MovementBadge } from './UiGimmicks';

const portfolioItems = [
  {
    id: '01',
    title: "Transformation",
    category: "Movement Motiv",
    Illustration: IllFace,
  },
  {
    id: '02',
    title: "Organic Growth",
    category: "Minimal Tattoos",
    Illustration: IllBotanical,
  },
  {
    id: '03',
    title: "Inner Peace",
    category: "Line Art",
    Illustration: IllLotus,
  },
  {
    id: '04',
    title: "New Vision",
    category: "Symbol Tattoos",
    Illustration: IllEye,
  }
];

export function PortfolioSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute left-0 top-1/2 w-[600px] h-[600px] bg-[#9d4edd]/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-block">
              <MovementBadge text="Flash Collection" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#f0f0f0] mb-6">
              Verfügbare <span className="text-[#9d4edd]">Motive</span>
            </h2>
            <p className="text-[#a0a0a0] font-light text-lg leading-relaxed">
              Unsere ausgewählten Flash-Designs sind speziell darauf ausgelegt, Narben organisch in die Kunstwerke zu integrieren. Jedes Motiv ist minimalistisch, ausdrucksstark und trägt eine eigene Bedeutung.
            </p>
          </div>
          <button className="flex items-center text-[#f0f0f0] text-sm tracking-widest uppercase hover:text-[#9d4edd] transition-colors group pb-2">
            Alle ansehen
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-[#141414] border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Subtle hover gradient behind content */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Illustration Preview Area */}
              <div className="aspect-square bg-[#050505] relative flex items-center justify-center p-12 overflow-hidden border-b border-[#1a1a1a]">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#9d4edd]/0 group-hover:bg-[#9d4edd]/10 transition-colors duration-700 blur-2xl" />
                
                <item.Illustration className="w-full h-full text-[#444] group-hover:text-[#f0f0f0] transition-all duration-700 group-hover:scale-105 relative z-10" />
                
                {/* Subtle ID/Numbering */}
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#333] group-hover:text-[#666] transition-colors tracking-wider">
                  NO. {item.id}
                </span>
              </div>

              {/* Text & CTA Area */}
              <div className="p-6 relative z-10 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#888] font-medium block mb-2 group-hover:text-[#9d4edd] transition-colors">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-medium text-[#f0f0f0] mb-8 tracking-wide">
                    {item.title}
                  </h3>
                </div>
                
                {/* Animated CTA */}
                <div className="flex items-center text-sm font-medium text-[#555] group-hover:text-[#f0f0f0] transition-colors mt-auto">
                  Motiv anfragen
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}