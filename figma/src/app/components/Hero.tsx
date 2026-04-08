import React from 'react';
import { Button } from './Button';
import { ArrowRight, Heart, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { IllLotus, IllDivider } from './Illustrations';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-6 pt-32 pb-16 w-full">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#9d4edd] opacity-[0.08] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2a2a2a] bg-[#141414]/80 backdrop-blur-sm text-xs uppercase tracking-widest text-[#a0a0a0] mb-8 md:mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9d4edd] shadow-[0_0_8px_rgba(157,78,221,0.8)] animate-pulse" />
          Ein Zeichen setzen
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.15] mb-6 text-[#f0f0f0]">
          Deine Haut.<br className="hidden sm:block" />
          <span className="text-[#9d4edd] drop-shadow-[0_0_15px_rgba(157,78,221,0.2)]"> Deine Geschichte.</span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-[#a0a0a0] font-light leading-relaxed max-w-2xl mb-10 md:mb-12">
          Wir überdecken die Spuren von Gewalt mit Kunst. Eine Initiative von Tätowiererinnen für Überlebende – für Heilung, Selbstbestimmung und einen Neuanfang.
        </p>

        {/* Buttons (Mobile First: Column -> Row) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 md:mb-20">
          <Button variant="primary" className="w-full sm:w-auto h-12 px-8">
            Termin anfragen
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto h-12 px-8 group">
            Bewegung unterstützen
            <Heart className="w-4 h-4 ml-2 text-[#a0a0a0] group-hover:text-[#f43f5e] transition-colors" />
          </Button>
        </div>

        {/* Visual: Minimal Fine Line Tattoo Illustration from System */}
        <div className="relative flex items-center justify-center mb-12 group">
          <div className="absolute inset-0 bg-[#9d4edd]/5 blur-2xl rounded-full scale-150 group-hover:scale-110 transition-transform duration-700" />
          <IllLotus className="w-48 h-48 md:w-64 md:h-64 text-[#f0f0f0] opacity-70 group-hover:opacity-100 transition-opacity duration-700 relative z-10" />
        </div>

        {/* Minimal Divider from System */}
        <div className="w-full max-w-[240px] mb-8 md:mb-12">
          <IllDivider className="text-[#333]" />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-[#666] hover:text-[#f0f0f0] transition-colors p-2">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#666] hover:text-[#f0f0f0] transition-colors p-2">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#666] hover:text-[#f0f0f0] transition-colors p-2">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
