import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function InquiryForm() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background Subtle Accent for the Form Area */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#9d4edd]/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d4edd] font-medium block mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#f0f0f0] mb-4">
            Lass uns deine <span className="text-[#666]">Idee</span> besprechen
          </h2>
          <p className="text-[#a0a0a0] font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Fülle das Formular aus, um einen Termin oder eine Beratung anzufragen. Unser Raum ist sicher, diskret und auf deine Bedürfnisse ausgerichtet.
          </p>
        </div>

        <form className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 md:p-10 shadow-2xl relative">
          {/* Form Inner Glow Hint */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#9d4edd]/5 to-transparent opacity-50 rounded-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            {/* Grid for Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-medium block">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Dein Name" 
                  className="w-full bg-[#050505] border border-[#222] rounded-lg px-4 py-3 text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#9d4edd]/50 focus:ring-1 focus:ring-[#9d4edd]/20 transition-all duration-500 font-light"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-medium block">
                  E-Mail
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="deine.email@beispiel.de" 
                  className="w-full bg-[#050505] border border-[#222] rounded-lg px-4 py-3 text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#9d4edd]/50 focus:ring-1 focus:ring-[#9d4edd]/20 transition-all duration-500 font-light"
                />
              </div>
            </div>

            {/* Grid for Size & Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="size" className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-medium block">
                  Größe (ca.)
                </label>
                <input 
                  type="text" 
                  id="size"
                  placeholder="z.B. 10x10 cm" 
                  className="w-full bg-[#050505] border border-[#222] rounded-lg px-4 py-3 text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#9d4edd]/50 focus:ring-1 focus:ring-[#9d4edd]/20 transition-all duration-500 font-light"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="position" className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-medium block">
                  Körperstelle
                </label>
                <input 
                  type="text" 
                  id="position"
                  placeholder="z.B. Rechter Unterarm" 
                  className="w-full bg-[#050505] border border-[#222] rounded-lg px-4 py-3 text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#9d4edd]/50 focus:ring-1 focus:ring-[#9d4edd]/20 transition-all duration-500 font-light"
                />
              </div>
            </div>

            {/* Textarea for Idea */}
            <div className="space-y-2">
              <label htmlFor="idea" className="text-[10px] uppercase tracking-[0.2em] text-[#666] font-medium block">
                Tattoo Idee & Hintergrund
              </label>
              <textarea 
                id="idea"
                rows={4}
                placeholder="Beschreibe deine Idee oder was dir bei diesem Motiv wichtig ist..." 
                className="w-full bg-[#050505] border border-[#222] rounded-lg px-4 py-3 text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#9d4edd]/50 focus:ring-1 focus:ring-[#9d4edd]/20 transition-all duration-500 font-light resize-none"
              ></textarea>
            </div>

            {/* Custom Checkbox for Movement Motif */}
            <div className="pt-4 border-t border-[#1a1a1a]">
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-5 h-5 border border-[#333] rounded-sm bg-[#050505] peer-checked:bg-[#9d4edd]/20 peer-checked:border-[#9d4edd]/50 transition-all duration-300 group-hover:border-[#555]"></div>
                  <Check className="absolute inset-0 w-5 h-5 text-[#9d4edd] opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none p-0.5" strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#d0d0d0] text-sm font-medium tracking-wide group-hover:text-[#f0f0f0] transition-colors">
                    Bewegungsmotiv Interesse
                  </span>
                  <span className="text-[#666] text-xs mt-1 leading-relaxed">
                    Ich interessiere mich für eines der ausgewählten Flash-Motive der Bewegung (z.B. für ein Cover-Up oder Healing-Tattoo).
                  </span>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button 
                type="button" 
                className="w-full md:w-auto px-8 py-4 bg-[#111] hover:bg-[#1a1a1a] border border-[#333] hover:border-[#9d4edd]/50 rounded-lg text-[#f0f0f0] text-sm tracking-widest uppercase font-medium transition-all duration-500 group flex items-center justify-center"
              >
                Termin anfragen
                <ArrowRight className="w-4 h-4 ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-[#9d4edd] transition-all duration-300" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}