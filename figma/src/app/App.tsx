import React from 'react';
import { Button } from './components/Button';
import { IllustrationCard, MovementCard, QuoteCard } from './components/Cards';
import { Hero } from './components/Hero';
import { MovementSection } from './components/MovementSection';
import { PortfolioSection } from './components/Portfolio';
import { SocialSection } from './components/SocialSection';
import { JoinSection } from './components/JoinSection';
import { InquiryForm } from './components/InquiryForm';
import { DarkLinks } from './components/DarkLinks';
import { SectionDivider, QuoteHighlight, MovementBadge, GlowDot } from './components/UiGimmicks';
import { ChevronRight, ArrowRight, Instagram, Menu, Play, Star } from 'lucide-react';
import { IllBotanical, IllFace, IllLotus, IllEye, IllMoon, IllDivider } from './components/Illustrations';

// Simple grid helper
const Section = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
  <section className="py-24 border-t border-[#1a1a1a]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight text-[#f0f0f0] mb-4">{title}</h2>
        <p className="text-[#a0a0a0] font-light max-w-2xl text-lg">{description}</p>
      </div>
      {children}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] font-sans antialiased overflow-x-hidden selection:bg-[#9d4edd]/30 selection:text-white">
      
      {/* Navigation (Design System Preview) */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest uppercase">
            Not Your <span className="text-[#9d4edd]">Canvas</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#" className="text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">Manifesto</a>
            <a href="#" className="text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">Tattoos</a>
            <a href="#" className="text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">Story</a>
            <Button variant="primary" size="sm" className="ml-4">Join Movement</Button>
          </div>
          <Button variant="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      <main className="">
        {/* Main Landing Hero */}
        <Hero />

        <SectionDivider icon={IllLotus} />

        {/* Movement Section (Die Idee hinter dem Motiv) */}
        <MovementSection />

        <SectionDivider icon={IllEye} />

        {/* Portfolio Section (Verfügbare Motive) */}
        <PortfolioSection />

        {/* Standalone Quote Highlight Gimmick */}
        <QuoteHighlight 
          quote="Wir überschreiben Narben nicht. Wir integrieren sie in eine neue Geschichte."
          author="The Movement"
        />

        {/* Social Media & Community Section */}
        <SocialSection />

        <SectionDivider icon={IllFace} />

        {/* Join Section */}
        <JoinSection />

        <SectionDivider icon={IllBotanical} />

        {/* Inquiry Form */}
        <InquiryForm />

        <SectionDivider icon={IllLotus} />

        {/* Linktree Style Page / "Dark Links" */}
        <DarkLinks />

        {/* Header / Intro for the Design System Preview */}
        <header className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-[#1a1a1a]">
          <div className="inline-block border border-[#2a2a2a] rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-[#a0a0a0] mb-8 bg-[#141414]">
            Design System / UI Kit
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
            Dark. Minimal.<br/>
            <span className="text-[#9d4edd] drop-shadow-[0_0_20px_rgba(157,78,221,0.3)]">Emotional.</span>
          </h1>
          <p className="text-xl text-[#a0a0a0] font-light max-w-3xl leading-relaxed">
            A brutal yet elegant design system for a young tattoo artist starting a movement against violence towards women. Focused on dark surfaces, deep accents, and powerful typography.
          </p>
        </header>

        {/* 1. Colors */}
        <Section title="Colors" description="A deep black foundation, elevated by dark grey surfaces, soft whites, and an emotional violet accent.">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="group">
              <div className="aspect-square bg-[#0a0a0a] border border-[#222] rounded-lg mb-4 flex items-end p-4">
                <span className="text-xs text-[#a0a0a0] uppercase tracking-widest">Background</span>
              </div>
              <div className="font-mono text-sm">#0A0A0A</div>
            </div>
            <div className="group">
              <div className="aspect-square bg-[#141414] border border-[#222] rounded-lg mb-4 flex items-end p-4">
                <span className="text-xs text-[#a0a0a0] uppercase tracking-widest">Surface</span>
              </div>
              <div className="font-mono text-sm">#141414</div>
            </div>
            <div className="group">
              <div className="aspect-square bg-[#2a2a2a] border border-[#333] rounded-lg mb-4 flex items-end p-4">
                <span className="text-xs text-[#a0a0a0] uppercase tracking-widest">Border</span>
              </div>
              <div className="font-mono text-sm">#2A2A2A</div>
            </div>
            <div className="group">
              <div className="aspect-square bg-[#f0f0f0] border border-[#444] rounded-lg mb-4 flex items-end p-4">
                <span className="text-xs text-[#0a0a0a] font-medium uppercase tracking-widest">Text High</span>
              </div>
              <div className="font-mono text-sm">#F0F0F0</div>
            </div>
            <div className="group">
              <div className="aspect-square bg-[#9d4edd] border border-[#7b2cbf] shadow-[0_0_15px_rgba(157,78,221,0.2)] rounded-lg mb-4 flex items-end p-4">
                <span className="text-xs text-white font-medium uppercase tracking-widest">Accent</span>
              </div>
              <div className="font-mono text-sm text-[#9d4edd]">#9D4EDD</div>
            </div>
            <div className="group hidden md:block">
              <div className="aspect-square bg-[#f43f5e] border border-[#e11d48] shadow-[0_0_15px_rgba(244,63,94,0.15)] rounded-lg mb-4 flex items-end p-4">
                <span className="text-xs text-white font-medium uppercase tracking-widest">Highlight</span>
              </div>
              <div className="font-mono text-sm text-[#f43f5e]">#F43F5E</div>
            </div>
          </div>
        </Section>

        {/* 2. Typography */}
        <Section title="Typography" description="Modern sans serif. Strong, unapologetic headlines contrasting with calm, readable body text.">
          <div className="space-y-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-baseline border-b border-[#1a1a1a] pb-8">
              <div className="text-[#a0a0a0] text-sm uppercase tracking-widest">Hero / H1</div>
              <div className="text-5xl md:text-7xl font-bold tracking-tighter">My Body, My Rules.</div>
            </div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-baseline border-b border-[#1a1a1a] pb-8">
              <div className="text-[#a0a0a0] text-sm uppercase tracking-widest">Section / H2</div>
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">The Movement</div>
            </div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-baseline border-b border-[#1a1a1a] pb-8">
              <div className="text-[#a0a0a0] text-sm uppercase tracking-widest">Body Text</div>
              <div className="text-[#a0a0a0] text-lg font-light leading-relaxed">
                We believe in transforming trauma into power. Every line drawn is a reclamation of space, every drop of ink a statement of autonomy. This is not just a tattoo studio.
              </div>
            </div>
          </div>
        </Section>

        {/* 3. Buttons */}
        <Section title="Buttons" description="Interactive elements with subtle glows and thin borders, heavily relying on hover states to feel alive.">
          <div className="flex flex-wrap items-center gap-8 p-12 bg-black rounded-xl border border-[#1a1a1a]">
            <Button variant="primary">
              Support the Cause
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button variant="secondary">
              Read Manifesto
            </Button>
            
            <Button variant="ghost">
              View Gallery
            </Button>

            <Button variant="icon">
              <Instagram className="w-5 h-5" />
            </Button>
            
            <Button variant="icon">
              <Play className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </Section>

        {/* Illustrations */}
        <Section title="Illustrations" description="A scalable fineline tattoo art system. Minimal, monochrome, and highly symbolic. Avoiding photography to focus on essence and emotion.">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-8 bg-[#141414] border border-[#2a2a2a] rounded-xl flex flex-col items-center justify-center gap-6 group hover:border-[#3a3a3a] transition-colors">
              <IllBotanical className="w-20 h-20 text-[#666] group-hover:text-[#f0f0f0] transition-colors" />
              <span className="text-xs text-[#a0a0a0] uppercase tracking-widest font-medium">Botanical</span>
            </div>
            <div className="p-8 bg-[#141414] border border-[#2a2a2a] rounded-xl flex flex-col items-center justify-center gap-6 group hover:border-[#3a3a3a] transition-colors">
              <IllFace className="w-20 h-20 text-[#666] group-hover:text-[#f0f0f0] transition-colors" />
              <span className="text-xs text-[#a0a0a0] uppercase tracking-widest font-medium">Face</span>
            </div>
            <div className="p-8 bg-[#141414] border border-[#2a2a2a] rounded-xl flex flex-col items-center justify-center gap-6 group hover:border-[#3a3a3a] transition-colors">
              <IllLotus className="w-20 h-20 text-[#666] group-hover:text-[#f0f0f0] transition-colors" />
              <span className="text-xs text-[#a0a0a0] uppercase tracking-widest font-medium">Lotus</span>
            </div>
            <div className="p-8 bg-[#141414] border border-[#2a2a2a] rounded-xl flex flex-col items-center justify-center gap-6 group hover:border-[#3a3a3a] transition-colors">
              <IllEye className="w-20 h-20 text-[#666] group-hover:text-[#f0f0f0] transition-colors" />
              <span className="text-xs text-[#a0a0a0] uppercase tracking-widest font-medium">Eye</span>
            </div>
          </div>
          <div className="mt-6 p-12 bg-[#050505] rounded-xl border border-[#1a1a1a] flex items-center justify-center">
            <IllDivider className="w-full max-w-sm text-[#444]" />
          </div>
        </Section>

        {/* 4. Cards */}
        <Section title="Cards" description="Containers for content. Now utilizing the custom minimalist illustration system.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Illustration Card 1 */}
            <IllustrationCard 
              illustration={IllBotanical}
              title="Growth #04"
              tags={["Botanical", "Fineline"]}
            />

            {/* Movement Card */}
            <MovementCard 
              headline="Eradicate Silence"
              description="A global initiative to provide free cover-up tattoos for survivors of domestic violence, turning scars into symbols of strength and survival."
            />
            
            {/* Illustration Card 2 */}
            <IllustrationCard 
              illustration={IllMoon}
              title="Phases"
              tags={["Geometric", "Dark"]}
            />
          </div>
          
          <div className="mt-8">
            <QuoteCard 
              quote="We don't just ink skin. We rewrite the narrative of ownership over our own bodies."
              author="Founder, Not Your Canvas"
            />
          </div>
        </Section>

        {/* 5. Hero Layout Example */}
        <Section title="Hero Layout" description="A full-width section showcasing how the elements come together.">
          <div className="relative min-h-[600px] flex items-center rounded-2xl overflow-hidden border border-[#222]">
            {/* Background Gradient & Illustration */}
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#050505]">
              <IllEye className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[150%] max-w-3xl text-[#1a1a1a] opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
            </div>
            
            <div className="relative z-10 p-12 md:p-24 max-w-3xl flex flex-col items-start gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#333] bg-[#141414]/50 backdrop-blur-sm text-xs uppercase tracking-widest text-[#a0a0a0]">
                <span className="w-2 h-2 rounded-full bg-[#f43f5e] shadow-[0_0_8px_rgba(244,63,94,0.6)] animate-pulse" />
                Live Campaign
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
                Your body is <br/>
                <span className="text-[#9d4edd]">a masterpiece.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#a0a0a0] font-light leading-relaxed max-w-xl">
                Join our collective of artists standing against violence. We're offering a safe space and transformative art for survivors.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Button variant="primary" size="lg">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#555]">
          <div className="font-medium tracking-widest uppercase text-[#a0a0a0]">
            Not Your Canvas © 2026
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#f0f0f0] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#f0f0f0] transition-colors">TikTok</a>
            <a href="#" className="hover:text-[#f0f0f0] transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
