import React from 'react';
import { Instagram, ArrowRight, MessageSquare, Hash } from 'lucide-react';

// Custom Minimalist TikTok Icon to match Lucide style
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const socialCards = [
  {
    platform: 'Instagram',
    handle: '@notyourcanvas',
    icon: Instagram,
    stats: '12.4K Follower',
    description: 'Heilungsgeschichten, Flash-Drops & Einblicke in unsere Sessions.',
    colSpan: 'lg:col-span-1 md:col-span-2 sm:col-span-1',
  },
  {
    platform: 'TikTok',
    handle: '@notyourcanvas',
    icon: TikTokIcon,
    stats: '8.2K Follower',
    description: 'Behind the Scenes: Der behutsame Prozess des Cover-Ups.',
    colSpan: 'col-span-1',
  },
  {
    platform: 'Community',
    handle: '#NotYourCanvas',
    icon: MessageSquare,
    stats: '500+ Posts',
    description: 'Echte Stimmen, Gedanken und Erfahrungen von Überlebenden.',
    colSpan: 'col-span-1',
  }
];

export function SocialSection() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#9d4edd]/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#f0f0f0] mb-6">
              Teil der <span className="text-[#9d4edd]">Community</span> werden
            </h2>
            <p className="text-[#a0a0a0] font-light text-lg leading-relaxed">
              Wir teilen unsere Geschichten, um anderen Mut zu machen. Verfolge die Bewegung, teile deine Erfahrungen und finde Unterstützung in unserem Netzwerk – komplett fotofrei und im Fokus der Kunst.
            </p>
          </div>
          <button className="flex items-center text-[#f0f0f0] text-sm tracking-widest uppercase hover:text-[#9d4edd] transition-colors group pb-2">
            Folge der Bewegung
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialCards.map((card) => (
            <div 
              key={card.platform}
              className={`group relative bg-[#0a0a0a] border border-[#222] hover:border-[#333] rounded-2xl p-8 flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:-translate-y-1 ${card.colSpan}`}
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/0 via-transparent to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />
              
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#141414] border border-[#2a2a2a] flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:border-[#3a3a3a] transition-all duration-500 group-hover:scale-110">
                  <card.icon className="w-6 h-6 text-[#888] group-hover:text-[#f0f0f0] transition-colors duration-500" />
                </div>
                <ArrowRight className="w-5 h-5 text-[#333] group-hover:text-[#9d4edd] group-hover:-rotate-45 transition-all duration-300" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-[#f0f0f0] tracking-wide">{card.platform}</span>
                  <span className="w-1 h-1 rounded-full bg-[#333]" />
                  <span className="text-xs text-[#a0a0a0] tracking-wider">{card.handle}</span>
                </div>
                
                <h3 className="text-[#a0a0a0] font-light leading-relaxed mb-8 group-hover:text-[#d0d0d0] transition-colors">
                  {card.description}
                </h3>
                
                <div className="inline-flex items-center px-3 py-1.5 rounded-sm bg-[#111] border border-[#222] text-xs font-mono text-[#666] uppercase tracking-widest group-hover:border-[#333] group-hover:text-[#888] transition-colors">
                  {card.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}