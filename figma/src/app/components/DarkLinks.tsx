import React from 'react';
import { Instagram, Calendar, Sparkles, BookOpen, Mail } from 'lucide-react';
import { IllFace } from './Illustrations';

// Custom Minimalist TikTok Icon
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

const links = [
  { title: 'Termin', icon: Calendar, href: '#termin' },
  { title: 'Instagram', icon: Instagram, href: '#instagram' },
  { title: 'TikTok', icon: TikTokIcon, href: '#tiktok' },
  { title: 'Bewegung', icon: Sparkles, href: '#bewegung' },
  { title: 'Portfolio', icon: BookOpen, href: '#portfolio' },
  { title: 'Kontakt', icon: Mail, href: '#kontakt' },
];

export function DarkLinks() {
  return (
    <section className="min-h-screen bg-[#050505] py-20 px-6 flex flex-col items-center justify-center relative overflow-hidden border-t border-[#1a1a1a]">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#9d4edd]/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#9d4edd]/3 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="w-full max-w-md relative z-10 flex flex-col items-center">
        {/* Avatar Area */}
        <div className="w-24 h-24 rounded-full border border-[#2a2a2a] bg-[#0a0a0a] flex items-center justify-center mb-6 overflow-hidden relative group shadow-2xl">
          {/* Inner hover glow */}
          <div className="absolute inset-0 bg-[#9d4edd]/0 group-hover:bg-[#9d4edd]/10 transition-colors duration-700 blur-md" />
          {/* Avatar Illustration (instead of photo) */}
          <IllFace className="w-16 h-16 text-[#555] group-hover:text-[#f0f0f0] transition-all duration-700 group-hover:scale-105 relative z-10" />
        </div>

        {/* Profile Info */}
        <h1 className="text-xl font-medium text-[#f0f0f0] mb-2 tracking-widest uppercase text-center">
          Not Your Canvas
        </h1>
        <p className="text-[#888] text-sm text-center mb-10 font-light max-w-[280px] leading-relaxed">
          Minimalistische Cover-Ups & eine Bewegung gegen Gewalt an Frauen.
        </p>

        {/* Links List */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="relative w-full flex items-center p-4 bg-[#0a0a0a] border border-[#222] hover:border-[#9d4edd]/40 hover:bg-[#111] rounded-full transition-all duration-500 group overflow-hidden shadow-lg hover:shadow-[#9d4edd]/5 hover:-translate-y-0.5"
            >
              {/* Subtle gradient sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#9d4edd]/0 via-[#9d4edd]/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none" />
              
              {/* Icon (Left aligned strictly) */}
              <div className="absolute left-2 w-10 h-10 rounded-full bg-[#141414] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#9d4edd]/30 group-hover:bg-[#1a1a1a] transition-all duration-500">
                <link.icon className="w-4 h-4 text-[#666] group-hover:text-[#9d4edd] transition-colors duration-500" />
              </div>
              
              {/* Text (Centered) */}
              <span className="w-full text-center text-[#d0d0d0] text-sm tracking-[0.15em] uppercase font-medium group-hover:text-[#f0f0f0] transition-colors">
                {link.title}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#444]">
            Berlin • Est. 2024
          </span>
        </div>
      </div>
    </section>
  );
}