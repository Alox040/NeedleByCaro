import React from 'react';
import { Sparkles, Quote } from 'lucide-react';
import { IllLotus, IllEye, IllBotanical, IllFace } from './Illustrations';

// 1. Subtle Line Divider with Icon
export function SectionDivider({ icon: Icon = IllLotus }: { icon?: React.ElementType }) {
  return (
    <div className="w-full flex items-center justify-center py-16 md:py-24 opacity-60">
      <div className="h-px bg-gradient-to-r from-transparent via-[#222] to-transparent w-full max-w-xs md:max-w-md"></div>
      <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#444] mx-4 md:mx-6 flex-shrink-0" />
      <div className="h-px bg-gradient-to-r from-transparent via-[#222] to-transparent w-full max-w-xs md:max-w-md"></div>
    </div>
  );
}

// 2. Quote Highlight (Standalone Section)
export function QuoteHighlight({ quote, author }: { quote: string; author: string }) {
  return (
    <section className="py-24 md:py-32 px-6 relative flex flex-col items-center justify-center text-center bg-[#050505]">
      {/* Top Vertical Line */}
      <div className="absolute top-0 left-1/2 w-px h-16 bg-gradient-to-b from-[#333] to-transparent -translate-x-1/2" />
      
      {/* Small Glowing Accent behind quote */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#9d4edd]/5 blur-3xl rounded-full pointer-events-none" />
      
      <Quote className="w-6 h-6 text-[#333] mb-8" />
      
      <h3 className="text-2xl md:text-4xl font-light tracking-wide text-[#d0d0d0] max-w-3xl mx-auto leading-relaxed italic relative z-10">
        "{quote}"
      </h3>
      
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="h-px w-8 bg-[#333]" />
        <span className="text-xs uppercase tracking-[0.2em] text-[#666] font-medium">
          {author}
        </span>
      </div>

      {/* Bottom Vertical Line */}
      <div className="absolute bottom-0 left-1/2 w-px h-16 bg-gradient-to-t from-[#333] to-transparent -translate-x-1/2" />
    </section>
  );
}

// 3. Movement Tag / Badge
export function MovementBadge({ text = "Not Your Canvas" }: { text?: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222] bg-[#0a0a0a] group hover:border-[#333] transition-colors cursor-default shadow-sm shadow-black/50">
      <Sparkles className="w-3 h-3 text-[#666] group-hover:text-[#9d4edd] transition-colors" />
      <span className="text-[9px] uppercase tracking-[0.3em] text-[#888] group-hover:text-[#d0d0d0] transition-colors font-medium relative top-[0.5px]">
        {text}
      </span>
    </div>
  );
}

// 4. Subtle Glow Dot Accent (can be placed anywhere)
export function GlowDot({ className = "" }: { className?: string }) {
  return (
    <span className={`relative flex h-1.5 w-1.5 ${className}`}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9d4edd] opacity-40"></span>
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#9d4edd] opacity-80"></span>
    </span>
  );
}
