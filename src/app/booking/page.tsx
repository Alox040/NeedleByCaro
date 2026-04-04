import type { Metadata } from "next";
import { LocationIcon } from "@/components/icons/Location";
import { MailIcon } from "@/components/icons/Mail";
import { SiteShell } from "@/components/layout/SiteShell";
import { BookingForm } from "@/components/sections/BookingForm";
import { ContactCard } from "@/components/ui/ContactCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site-content";

export const metadata: Metadata = {
  title: site.booking.title,
};

function contactIcon(kind: "mail" | "location") {
  if (kind === "mail") return <MailIcon />;
  return <LocationIcon />;
}

export default function BookingPage() {
  return (
    <SiteShell>
      <main className="px-gutter py-section">
        <div className="mx-auto max-w-shell">
          <SectionHeading
            eyebrow="Kontakt"
            title={site.booking.title}
            description={site.booking.subtitle}
          />

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <BookingForm />

            <div className="space-y-4">
              {site.booking.contactCards.map((card) => (
                <ContactCard
                  key={card.href}
                  icon={contactIcon(card.kind)}
                  title={card.title}
                  line={card.line}
                  href={card.href}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
