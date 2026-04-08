import React from 'react';
import { cn } from '../utils/cn';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

// Common base card style
const baseCardStyles = "flex flex-col relative overflow-hidden rounded-lg bg-[#141414] border border-[#2a2a2a] transition-all hover:border-[#3a3a3a] hover:bg-[#1a1a1a]";

export function TattooCard({ 
  imageUrl, 
  title, 
  tags, 
  className 
}: { 
  imageUrl: string; 
  title: string; 
  tags: string[]; 
  className?: string 
}) {
  return (
    <div className={cn(baseCardStyles, className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-black group">
        <ImageWithFallback 
          src={imageUrl} 
          alt={title}
          className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
      </div>
      <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col gap-2">
        <h3 className="text-[#f0f0f0] text-xl font-medium tracking-wide">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs text-[#a0a0a0] uppercase tracking-widest border border-[#333] px-2 py-1 rounded-sm bg-[#0a0a0a]/50 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function IllustrationCard({
  illustration: Illustration,
  title,
  tags,
  className
}: {
  illustration: React.ElementType;
  title: string;
  tags: string[];
  className?: string;
}) {
  return (
    <div className={cn(baseCardStyles, className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#050505] flex items-center justify-center p-12 group">
        {/* Soft glow behind illustration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#9d4edd]/0 via-[#9d4edd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <Illustration className="w-full h-full text-[#444] group-hover:text-[#f0f0f0] group-hover:scale-[1.03] transition-all duration-700 drop-shadow-[0_0_15px_rgba(255,255,255,0.02)]" />
      </div>
      <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col gap-2 bg-gradient-to-t from-[#111] via-[#141414]/90 to-transparent">
        <h3 className="text-[#f0f0f0] text-xl font-medium tracking-wide">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs text-[#a0a0a0] uppercase tracking-widest border border-[#333] px-2 py-1 rounded-sm bg-[#0a0a0a]/50 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MovementCard({ 
  headline, 
  description, 
  className 
}: { 
  headline: string; 
  description: string; 
  className?: string 
}) {
  return (
    <div className={cn(baseCardStyles, "p-8 group", className)}>
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#9d4edd]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-lg z-0" />
      <div className="relative z-10 flex flex-col gap-4 h-full justify-between">
        <div>
          <div className="w-12 h-1 bg-[#9d4edd] mb-6 rounded-full shadow-[0_0_10px_rgba(157,78,221,0.5)]" />
          <h3 className="text-2xl md:text-3xl text-[#f0f0f0] font-semibold leading-tight tracking-tight">
            {headline}
          </h3>
        </div>
        <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed font-light mt-4">
          {description}
        </p>
      </div>
    </div>
  );
}

export function QuoteCard({ 
  quote, 
  author, 
  className 
}: { 
  quote: string; 
  author?: string; 
  className?: string 
}) {
  return (
    <div className={cn("relative p-8 rounded-lg bg-[#0a0a0a] border border-[#222] flex flex-col items-center justify-center text-center gap-6", className)}>
      <Quote className="text-[#333] w-12 h-12" />
      <p className="text-xl md:text-2xl italic text-[#f0f0f0] font-light leading-relaxed max-w-2xl">
        "{quote}"
      </p>
      {author && (
        <span className="text-sm text-[#9d4edd] uppercase tracking-[0.2em] font-medium mt-2">
          {author}
        </span>
      )}
    </div>
  );
}