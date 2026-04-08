/**
 * Content-Mapping (Figma Theme) — zentrale Texte & Medien.
 * Bilder: externe URLs (Unsplash) gemäß next.config remotePatterns.
 */

export const site = {
  brand: {
    name: "Nadelwerk",
    shortName: "NW",
    logoLabel: "NADELWERK",
  },
  nav: [
    { href: "/", label: "Start" },
    { href: "/about", label: "Über uns" },
    { href: "/gallery", label: "Arbeit" },
    { href: "/movement", label: "Haltung" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Kontakt" },
    { href: "/booking", label: "Termin" },
  ],
  hero: {
    titleLine1: "HAUT.",
    titleAccent: "KUNST.",
    titleLine2: "FÜR IMMER.",
    subtitle:
      "Fine Line, Blackwork und Custom Pieces — ruhig, präzise, respektvoll. Du bringst die Idee, wir übersetzen sie in Linie und Schatten.",
    primaryCta: { label: "Idee einreichen", href: "/booking" },
    secondaryCta: { label: "Arbeiten ansehen", href: "/portfolio" },
    image: {
      src: "https://images.unsplash.com/photo-1590246814883-57c511a0d569?w=1200&q=80",
      alt: "Tätowiererin bei der Arbeit im Studio",
    },
  },
  about: {
    id: "about",
    eyebrow: "Über uns",
    title: "Ruhige Hände. Klare Linie.",
    body:
      "Wir arbeiten hygienisch nach Standards, mit Zeit für dein Motiv und deinen Körper. Kein Druck, kein Rauschen — nur ehrliche Beratung und handwerkliche Sorgfalt.",
    beliefStatement: "Kein Motiv von der Stange.",
  },
  movement: {
    id: "haltung",
    title: "Gewalt hat keinen Platz.",
    body:
      "Tattoo bedeutet Nähe und Vertrauen — zwischen Artist und Mensch, nie mit Druck oder Grenzüberschreitung. Wer unsicher ist, macht Pause. Wer respektlos ist, wird gebeten zu gehen. Das Studio ist ein geschützter Raum.",
  },
  movementPage: {
    supplement:
      "Wenn du dich unwohl fühlst, sprich es an — sofort. Wir glauben an klare Grenzen, respektvollen Umgang und dass gute Arbeit nur dort entsteht, wo sich alle sicher sind.",
  },
  socialIntro: {
    id: "community",
    title: "Dranbleiben",
    body: "Neue Arbeit, kurze Einblicke in Sessions und Studio-Updates — ohne Lärm, ohne Druck.",
  },
  contactBlock: {
    id: "kontakt",
    eyebrow: "Kontakt",
    title: "Idee oder Frage?",
    body: "Schick uns eine kurze Nachricht — Motiv, Stil, Körperstelle. Wir melden uns per Mail.",
    instagram: { label: "Instagram", href: "https://instagram.com" },
    bookingCta: { label: "Termin anfragen", href: "/booking" },
    bookingSecondaryCta: { label: "Idee beschreiben", href: "/booking" },
  },
  ctaBand: {
    body: "Beschreib deine Idee kurz — Placement, Größe, Stil. Wir antworten ehrlich, ob und wie wir das umsetzen.",
    cta: { label: "Idee beschreiben", href: "/booking" },
    note: "Keine Mindestgröße. Keine Walk-Ins. Anfragen jederzeit.",
  },
  footer: {
    tagline: "Tattoo · Berlin",
    email: "hallo@beispiel-studio.de",
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "TikTok", href: "https://tiktok.com" },
    ],
  },
  gallery: {
    title: "Aktuelle Arbeit",
    subtitle:
      "Ein Ausschnitt aus jüngeren Pieces — vollständige Galerie im Portfolio.",
    previewEyebrow: "Vorschau",
    previewTitle: "Aktuelle Arbeit",
    previewDescription:
      "Ein Ausschnitt aus jüngeren Pieces — vollständige Galerie im Portfolio.",
    previewFooterCta: { label: "Alle Arbeiten", href: "/portfolio" },
    items: [
      {
        title: "Fine Line Flora",
        style: "Arm" as const,
        placement: "Arm",
        src: "https://images.unsplash.com/photo-1568515387631-1614ef9ffdd1?w=800&q=80",
        alt: "Feine florale Linientätowierung",
      },
      {
        title: "Blackwork Geometry",
        style: "Unterarm" as const,
        placement: "Unterarm",
        src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80",
        alt: "Geometrisches Blackwork",
      },
      {
        title: "Custom Lettering",
        style: "Rippen" as const,
        placement: "Rippen",
        src: "https://images.unsplash.com/photo-1611501275019-1c6c016a3435?w=800&q=80",
        alt: "Schriftzug als Tätowierung",
      },
    ],
  },
  bookingPage: {
    title: "Termin",
    subtitle:
      "So planen wir mit dir — transparent, ohne Druck. Die eigentliche Anfrage läuft über das Kontaktformular.",
    cta: { label: "Zum Kontaktformular", href: "/contact" },
    note: "Wir antworten per Mail. Für dringende Rückfragen nutze die Mail-Adresse im Footer.",
    info: [
      {
        title: "1 · Kurz beschreiben",
        body: "Motiv, Stil, ungefähre Größe und Körperstelle — ein paar Sätze reichen. Referenzbilder optional.",
      },
      {
        title: "2 · Rückmeldung",
        body: "Wir melden uns mit ehrlicher Einschätzung: ob es passt, was wir brauchen und wie der Zeitrahmen aussieht.",
      },
      {
        title: "3 · Design & Termin",
        body: "Erst wenn das Design steht und du zufrieden bist, wird ein Termin festgelegt — kein Blindbuchung.",
      },
      {
        title: "Studio",
        body: "Musterstraße 12 · 10115 Berlin. Termine nur nach Absprache — keine Walk-ins.",
      },
    ],
  },
  booking: {
    title: "Termin & Kontakt",
    subtitle:
      "Beschreibe kurz Motiv, ungefähre Größe und Körperstelle. Wir antworten per Mail.",
    form: {
      name: "Name",
      email: "E-Mail",
      phone: "Telefon (optional)",
      message: "Dein Projekt",
      submit: "Anfrage senden",
      note: "Demo-Formular ohne Backend — Anbindung z. B. an Formspark oder Resend später möglich.",
    },
  },
} as const;

export type SiteContent = typeof site;
