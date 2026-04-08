import React from 'react';
import { Button } from './Button';
import { ArrowRight, Quote as QuoteIcon } from 'lucide-react';
import { IllFace, IllBotanical } from './Illustrations';

export function MovementSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-[#1a1a1a]">
      {/* Background elements for depth */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#9d4edd]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Column: Illustration */}
          <div className="relative group order-2 lg:order-1">
            {/* Subtle card container for the illustration */}
            <div className="aspect-[4/5] md:aspect-square bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8 md:p-16 flex items-center justify-center relative overflow-hidden transition-colors duration-700 group-hover:border-[#3a3a3a]">
              {/* Animated Background Glow inside the card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#9d4edd]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Minimalist Continuous Line Illustration from System */}
              <IllFace className="w-full h-full text-[#f0f0f0] opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
            </div>
            
            {/* Caption for illustration */}
            <div className="absolute -bottom-6 right-4 md:-right-8 bg-[#0a0a0a] border border-[#2a2a2a] px-4 py-2 rounded-sm text-xs uppercase tracking-[0.2em] text-[#666] flex items-center gap-2 shadow-xl">
              <span className="w-1 h-1 bg-[#9d4edd] rounded-full" />
              Motiv: Transformation
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#f0f0f0] leading-[1.1] mb-8">
              Die Idee hinter<br />
              <span className="text-[#9d4edd]">dem Motiv</span>
            </h2>

            {/* Custom Minimal Divider */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#9d4edd] to-transparent mb-10 rounded-full" />

            <div className="space-y-6 text-[#a0a0a0] font-light text-lg leading-relaxed mb-12">
              <p>
                <strong className="text-[#f0f0f0] font-medium">Bedeutung:</strong> Jede Linie dieses Entwurfs steht für den Weg von der Verletzlichkeit zur Stärke. Die durchbrochenen geometrischen Formen symbolisieren die Risse in unserer Vergangenheit, aus denen neue, organische Stärke wächst. 
              </p>
              <p>
                <strong className="text-[#f0f0f0] font-medium">Symbolik:</strong> Das Motiv verzichtet bewusst auf plakative Darstellungen. Die feinen Fineline-Strukturen und abstrakten botanischen Elemente repräsentieren Heilung und das Wiederaneignen des eigenen Körpers – ein stilles, aber kraftvolles Statement.
              </p>
              <p>
                <strong className="text-[#f0f0f0] font-medium">Community:</strong> Du bist nicht allein. Wer dieses Motiv trägt, wird Teil eines unsichtbaren, aber starken Netzwerks von Überlebenden und Verbündeten. Es ist ein Zeichen der Solidarität, das uns über Grenzen hinweg verbindele.
              </p>
            </div>

            {/* Quote Box */}
            <div className="relative pl-6 border-l-2 border-[#2a2a2a] mb-12 py-2">
              <QuoteIcon className="absolute -top-2 -left-3 w-6 h-6 text-[#1a1a1a] bg-[#0a0a0a]" />
              <p className="text-xl italic text-[#d0d0d0] font-light leading-relaxed">
                "Ein Tattoo ändert nicht die Vergangenheit, aber es gibt uns die Macht zurück, zu entscheiden, welche Geschichte unsere Haut heute erzählt."
              </p>
            </div>

            {/* CTA */}
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Teil der Bewegung werden
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
