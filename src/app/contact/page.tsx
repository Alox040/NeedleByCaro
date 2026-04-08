import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site-content";
import { ContactSection, SocialSection } from "@website/ui/sections";

export const metadata: Metadata = {
  title: "Kontakt",
  description: site.contactBlock.body,
  openGraph: {
    title: `Kontakt · ${site.brand.name}`,
    description: site.contactBlock.body,
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <ContactSection
          id={site.contactBlock.id}
          eyebrow={site.contactBlock.eyebrow}
          title={site.contactBlock.title}
          body={site.contactBlock.body}
          form={{
            nameLabel: site.booking.form.name,
            emailLabel: site.booking.form.email,
            messageLabel: site.booking.form.message,
            submitLabel: site.booking.form.submit,
            note: site.booking.form.note,
          }}
          instagram={site.contactBlock.instagram}
          bookingCta={site.contactBlock.bookingCta}
          bookingSecondaryCta={site.contactBlock.bookingSecondaryCta}
        />
        <SocialSection
          id={site.socialIntro.id}
          title={site.socialIntro.title}
          body={site.socialIntro.body}
          links={site.footer.social}
        />
      </main>
    </SiteShell>
  );
}
