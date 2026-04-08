import React from 'react';
import { cn } from '../utils/cn';

interface IllProps extends React.SVGProps<SVGSVGElement> {}

// Reusable base props to enforce the "fineline tattoo" look.
// non-scaling-stroke ensures the line stays exactly 1px thin, regardless of how large the SVG is scaled!
const lineArtProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1",
  vectorEffect: "non-scaling-stroke",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IllBotanical({ className, ...props }: IllProps) {
  return (
    <svg viewBox="0 0 100 100" className={cn("w-full h-full text-[#a0a0a0]", className)} {...props}>
      {/* Hand-drawn organic stem */}
      <path d="M50 100 Q 48 70 55 20" {...lineArtProps} />
      {/* Leaves */}
      <path d="M49 80 Q 25 75 20 50 Q 35 45 50 65" {...lineArtProps} />
      <path d="M52 60 Q 75 55 80 30 Q 65 25 53 45" {...lineArtProps} />
      <path d="M51 40 Q 35 30 25 15 Q 40 10 53 25" {...lineArtProps} />
      {/* Delicate dot accents common in fineline */}
      <circle cx="55" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="57" cy="6" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IllFace({ className, ...props }: IllProps) {
  return (
    <svg viewBox="0 0 100 100" className={cn("w-full h-full text-[#a0a0a0]", className)} {...props}>
      {/* Continuous line abstract profile */}
      <path d="M30 10 Q 45 15 50 30 T 45 50 Q 40 55 45 65 T 55 75 Q 60 85 50 95" {...lineArtProps} />
      <path d="M45 50 Q 55 55 60 45" {...lineArtProps} />
      <path d="M45 65 Q 55 65 65 55" {...lineArtProps} />
      {/* Surrounding geometric/healing elements */}
      <circle cx="50" cy="50" r="40" {...lineArtProps} strokeDasharray="2 6" strokeWidth="0.5" />
      <path d="M70 20 Q 80 30 75 45" {...lineArtProps} />
      <circle cx="75" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IllLotus({ className, ...props }: IllProps) {
  return (
    <svg viewBox="0 0 100 100" className={cn("w-full h-full text-[#a0a0a0]", className)} {...props}>
      {/* Center petal */}
      <path d="M50 90 C 35 70, 45 40, 50 30 C 55 40, 65 70, 50 90" {...lineArtProps} />
      {/* Side petals */}
      <path d="M50 85 C 20 80, 10 55, 25 45 C 35 40, 45 60, 50 85" {...lineArtProps} />
      <path d="M50 85 C 80 80, 90 55, 75 45 C 65 40, 55 60, 50 85" {...lineArtProps} />
      {/* Outer petals */}
      <path d="M25 45 C 10 50, 5 65, 20 75" {...lineArtProps} />
      <path d="M75 45 C 90 50, 95 65, 80 75" {...lineArtProps} />
      {/* Accents */}
      <circle cx="50" cy="18" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="50" cy="10" r="1" fill="currentColor" stroke="none" />
      <path d="M50 30 L 50 80" {...lineArtProps} strokeWidth="0.5" strokeDasharray="2 4" />
    </svg>
  );
}

export function IllEye({ className, ...props }: IllProps) {
  return (
    <svg viewBox="0 0 100 100" className={cn("w-full h-full text-[#a0a0a0]", className)} {...props}>
      {/* Geometric eye shape */}
      <path d="M10 50 Q 50 20 90 50 Q 50 80 10 50" {...lineArtProps} />
      {/* Iris & Pupil */}
      <circle cx="50" cy="50" r="15" {...lineArtProps} />
      <circle cx="50" cy="50" r="5" fill="currentColor" stroke="none" />
      {/* Mystical fineline accents */}
      <line x1="50" y1="10" x2="50" y2="25" {...lineArtProps} />
      <line x1="50" y1="90" x2="50" y2="75" {...lineArtProps} />
      <line x1="10" y1="50" x2="25" y2="50" {...lineArtProps} />
      <line x1="90" y1="50" x2="75" y2="50" {...lineArtProps} />
      
      <circle cx="20" cy="20" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="80" cy="80" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IllMoon({ className, ...props }: IllProps) {
  return (
    <svg viewBox="0 0 100 100" className={cn("w-full h-full text-[#a0a0a0]", className)} {...props}>
      {/* Crescent Moon */}
      <path d="M45 20 A 35 35 0 1 0 75 80 A 45 45 0 1 1 45 20" {...lineArtProps} />
      {/* Geometric grid lines typical in minimalist tattoos */}
      <line x1="50" y1="5" x2="50" y2="95" {...lineArtProps} strokeDasharray="1 5" />
      <line x1="5" y1="50" x2="95" y2="50" {...lineArtProps} strokeDasharray="1 5" />
      {/* Tiny star / spark */}
      <path d="M80 20 Q 80 25 85 25 Q 80 25 80 30 Q 80 25 75 25 Q 80 25 80 20 Z" {...lineArtProps} />
    </svg>
  );
}

export function IllDivider({ className, ...props }: IllProps) {
  return (
    <svg viewBox="0 0 200 20" preserveAspectRatio="xMidYMid meet" className={cn("w-full text-[#a0a0a0]", className)} {...props}>
      <line x1="0" y1="10" x2="85" y2="10" {...lineArtProps} strokeWidth="0.5" />
      {/* Classic fineline 4-point star in the center */}
      <path d="M100 2 Q 100 10 108 10 Q 100 10 100 18 Q 100 10 92 10 Q 100 10 100 2 Z" {...lineArtProps} />
      <line x1="115" y1="10" x2="200" y2="10" {...lineArtProps} strokeWidth="0.5" />
    </svg>
  );
}
