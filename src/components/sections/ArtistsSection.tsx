import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { site } from "@/content/site-content";

export function ArtistsSection() {
  return (
    <section id={site.artists.id} className="border-t border-gray-200 px-gutter py-section scroll-mt-24">
      <div className="mx-auto max-w-shell">
        <SectionHeading
          eyebrow={site.artists.eyebrow}
          title={site.artists.title}
          description={site.artists.description}
        />

        <div className="flex flex-col gap-8">
          {site.artists.items.map((artist, i) => (
            <ArtistCard
              key={artist.name}
              index={i}
              flip={i % 2 !== 0}
              {...artist}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
