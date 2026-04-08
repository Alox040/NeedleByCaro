import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IllFace, IllBotanical, IllLotus } from './Illustrations';
import { GlowDot } from './UiGimmicks';

const joinOptions = [
  {
    id: '01',
    title: "Tattoo stechen lassen",
    description: "Verwandle deine Geschichte in Kunst. Finde ein zertifiziertes Studio in deiner Nähe, das Teil unserer Bewegung ist und einen sicheren Raum bietet.",
    cta: "Studio finden",
    Illustration: IllBotanical,
  },
  {
    id: '02',
    title: "Motiv teilen",
    description: "Du bist Tätowierer:in? Stelle deine minimalistischen Flash-Designs zur Verfügung und hilf uns, das Portfolio für Überlebende zu erweitern.",
    cta: "Design einreichen",
    Illustration: IllLotus,
  },
  {
    id: '03',
    title: "Social unterstützen",
    description: "Teile unsere Mission. Jede Erwähnung hilft uns, mehr Menschen zu erreichen, Bewusstsein zu schaffen und gemeinsam das Stigma zu brechen.",
    cta: "Media Kit laden",
    Illustration: IllFace,
  }
];

export function JoinSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute left-1/2 bottom-0 w-[800px] h-[400px] bg-[#9d4edd]/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <GlowDot />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d4edd] font-medium block">
              Gemeinsam Heilen
            </span>
            <GlowDot />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#f0f0f0]">
            Werde Teil der <span className="text-zinc-600">Bewegung</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {joinOptions.map((option) => (
            <div 
              key={option.id} 
              className="group relative bg-[#050505] border border-[#1a1a1a] hover:border-[#333] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#9d4edd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Illustration Area */}
              <div className="h-48 w-full relative flex items-center justify-center p-8 overflow-hidden border-b border-[#111] bg-[#0A0A0A]">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#9d4edd]/0 group-hover:bg-[#9d4edd]/5 transition-colors duration-700 blur-xl" />
                
                <option.Illustration className="w-full h-full text-[#333] group-hover:text-[#f0f0f0] transition-all duration-700 group-hover:scale-105 relative z-10" />
                
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#333] group-hover:text-[#666] transition-colors tracking-wider">
                  OPT {option.id}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-10 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-medium text-[#f0f0f0] mb-4 tracking-wide">
                    {option.title}
                  </h3>
                  <p className="text-[#a0a0a0] font-light text-sm leading-relaxed mb-8 group-hover:text-[#c0c0c0] transition-colors">
                    {option.description}
                  </p>
                </div>
                
                {/* CTA */}
                <button className="flex items-center text-sm tracking-widest uppercase text-[#555] group-hover:text-[#9d4edd] transition-colors w-full pb-2 border-b border-[#222] group-hover:border-[#9d4edd]/30">
                  {option.cta}
                  <ArrowRight className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}