/**
 * Zentrale Inhalte & Medien — hier Texte und Bilder pflegen.
 * Pfade unter `public/` ablegen (z. B. public/media/hero.jpg).
 */

export const site = {
  brand: {
    name: "Nadelwerk",
    shortName: "NW",
    /** Kurz für Header-Logo-Platzhalter */
    logoLabel: "NADELWERK",
  },
  nav: [
    { href: "/", label: "Start" },
    { href: "/#about", label: "Über uns" },
    { href: "/#arbeit", label: "Arbeit" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/booking", label: "Termin" },
  ],
  hero: {
    badge: {
      avatarsHint: "Stimmen aus dem Studio",
      text: "Was andere über uns sagen",
      href: "/#stimmen",
    },
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
  },
  stats: [
    { value: "8+", label: "Jahre Studio" },
    { value: "1200+", label: "Sessions" },
    { value: "100%", label: "Einweg-Material" },
  ],
  workTeaser: {
    id: "arbeit",
    eyebrow: "Auswahl",
    title: "Aktuelle Arbeit",
    body: "Ein Ausschnitt aus jüngeren Pieces — vollständige Galerie im Portfolio.",
    cta: { label: "Alle Arbeiten", href: "/portfolio" },
    items: [
      {
        title: "Fine Line Flora",
        category: "Arm",
        src: "https://images.unsplash.com/photo-1568515387631-1614ef9ffdd1?w=800&q=80",
        alt: "Feine florale Linientätowierung",
      },
      {
        title: "Blackwork Geometry",
        category: "Unterarm",
        src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80",
        alt: "Geometrisches Blackwork",
      },
      {
        title: "Custom Lettering",
        category: "Rippen",
        src: "https://images.unsplash.com/photo-1611501275019-1c6c016a3435?w=800&q=80",
        alt: "Schriftzug als Tätowierung",
      },
    ],
  },
  testimonial: {
    id: "stimmen",
    quote:
      "„Endlich ein Studio, das zuhört und nicht überredet. Das Ergebnis ist noch schöner als meine Skizze.“",
    name: "M. K.",
    role: "Kundin · Fine Line",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    items: [
      {
        q: "Wie läuft eine Beratung ab?",
        a: "Wir klären Platzierung, Größe und Stil. Danach bekommst du einen transparenten Ablauf mit Zeit- und Preisrahmen.",
      },
      {
        q: "Wie weit im Voraus soll ich buchen?",
        a: "Je nach Projekt 4–12 Wochen. Kleinere Termine manchmal kürzer — einfach Anfrage schicken.",
      },
      {
        q: "Ab welchem Alter?",
        a: "Ab 18 mit Ausweis. Für Minderjährige keine Tätowierung.",
      },
    ],
  },
  ctaBand: {
    statement: "Kein Motiv von der Stange.",
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
  portfolio: {
    title: "Portfolio",
    subtitle:
      "Ausgewählte Custom Pieces — jedes Motiv einmal, jeder Stil mit eigenem Gewicht.",
    categories: ["Alle", "Blackwork", "Fine Line", "Ornamental", "Custom"] as const,
    items: [
      {
        title: "Iron Bloom",
        style: "Blackwork" as const,
        placement: "Sleeve",
        src: "https://images.unsplash.com/photo-1565053390225-3c3400467fdb?w=1400&q=85",
        alt: "Großflächiges Blackwork Sleeve",
      },
      {
        title: "Celestial Map",
        style: "Fine Line" as const,
        placement: "Rippen",
        src: "https://images.unsplash.com/photo-1568515387631-1614ef9ffdd1?w=900&q=85",
        alt: "Fine Line Sternenkarte",
      },
      {
        title: "Sacred Geometry",
        style: "Ornamental" as const,
        placement: "Rücken",
        src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=900&q=85",
        alt: "Ornamentales Geometrie-Tattoo",
      },
      {
        title: "Medusa",
        style: "Blackwork" as const,
        placement: "Oberschenkel",
        src: "https://images.unsplash.com/photo-1590246814883-57c511a0d569?w=1400&q=85",
        alt: "Blackwork Medusa Portrait",
      },
      {
        title: "Botanical Sketch",
        style: "Fine Line" as const,
        placement: "Unterarm",
        src: "https://images.unsplash.com/photo-1611501275019-1c6c016a3435?w=900&q=85",
        alt: "Fine Line botanische Zeichnung",
      },
      {
        title: "Mandala Fragment",
        style: "Ornamental" as const,
        placement: "Schulter",
        src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=85",
        alt: "Ornamentales Mandala-Fragment",
      },
      {
        title: "Memento",
        style: "Custom" as const,
        placement: "Unterarm",
        src: "https://images.unsplash.com/photo-1565053390225-3c3400467fdb?w=1400&q=85",
        alt: "Custom Tattoo als persönliches Andenken",
      },
      {
        title: "Serpent",
        style: "Custom" as const,
        placement: "Nacken",
        src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=900&q=85",
        alt: "Custom Schlangen-Motiv",
      },
    ],
  },
  trust: {
    id: "studio",
    eyebrow: "Studio",
    title: "Was wir garantieren",
    items: [
      {
        icon: "hygiene" as const,
        label: "Hygiene",
        headline: "Einwegmaterial. Immer.",
        body: "Jede Nadel, jede Kartusche wird nach dem Termin entsorgt. Nichts wird sterilisiert und wiederverwendet. Kein Kompromiss.",
      },
      {
        icon: "custom" as const,
        label: "Custom Tattoos",
        headline: "Jedes Motiv einmal.",
        body: "Was wir für dich entwerfen, gehört dir. Das Motiv wird nicht an andere weitergegeben, nicht wiederholt, nicht verkauft.",
      },
      {
        icon: "consult" as const,
        label: "Beratung",
        headline: "Wir sagen auch Nein.",
        body: "Wenn ein Motiv nicht passt — falsche Platzierung, schlechte Umsetzbarkeit — sagen wir das. Ein ehrlicher Termin ist mehr wert als ein schlechtes Ergebnis.",
      },
      {
        icon: "quality" as const,
        label: "Qualität",
        headline: "Material ohne Abstriche.",
        body: "Markenfarben, präzise Nadeln, kalibrierte Maschinen. Was auf der Haut landet, ist das Beste was verfügbar ist.",
      },
      {
        icon: "experience" as const,
        label: "Erfahrung",
        headline: "Über 1.200 Sessions.",
        body: "Acht Jahre Studio. Kein Lernprojekt — handwerkliche Sicherheit, die du in der Ruhe der Ausführung merkst.",
      },
    ],
  },
  process: {
    id: "prozess",
    eyebrow: "Ablauf",
    title: "Wie wir arbeiten",
    description:
      "Jeder Termin beginnt lang bevor die Nadel die Haut berührt. Der Prozess ist das Fundament — hier passiert der Unterschied zwischen gut und dauerhaft gut.",
    steps: [
      {
        title: "Idee",
        detail: "Dein Ausgangspunkt",
        description:
          "Du schickst eine kurze Beschreibung — Motiv, Placement, ungefähre Größe. Kein Skizzenbuch nötig. Manchmal reicht ein Satz.",
      },
      {
        title: "Beratung",
        detail: "Gespräch zuerst",
        description:
          "Wir klären, was machbar ist, was nicht und warum. Ehrliche Einschätzung statt Ja zu allem. Hier entscheiden wir gemeinsam ob es passt.",
      },
      {
        title: "Design",
        detail: "Custom — kein Flash",
        description:
          "Der Entwurf entsteht exklusiv für dich. Du siehst ihn vor dem Termin. Feedback wird eingearbeitet, bis das Design sitzt.",
      },
      {
        title: "Termin",
        detail: "Wenn alles stimmt",
        description:
          "Erst wenn Design und Beratung abgeschlossen sind, wird geblockt. Keine überraschten Gesichter auf dem Stuhl — nur Konzentration.",
      },
      {
        title: "Tattoo",
        detail: "Handwerk ohne Kompromiss",
        description:
          "Saubere Vorbereitung, präzise Ausführung, Zeit für das Piece. Kein Druck, kein Blick auf die Uhr. Das Ergebnis ist permanent — die Session auch.",
      },
      {
        title: "Healing",
        detail: "Nach dem Termin",
        description:
          "Du bekommst klare Pflegeanweisungen. Bei Fragen erreichst du uns. Ein Tattoo ist erst fertig, wenn es verheilt ist.",
      },
    ],
  },
  artists: {
    id: "artists",
    eyebrow: "Das Studio",
    title: "Die Künstler",
    description:
      "Kein anonymes Studio. Jeder Artist hat einen eigenen Stil, eigene Grenzen und ein klares Verständnis davon, was gute Arbeit bedeutet.",
    items: [
      {
        name: "Caro Lindner",
        style: "Blackwork · Dark Ornamental",
        bio: "Caro arbeitet seit über acht Jahren mit Nadel und Tinte — und lehnt bis heute jeden Termin ab, bei dem die Idee nicht stimmt. Ihre Stärke liegt in großen, strukturierten Pieces, die den Körper als Architektur begreifen. Kein Motiv zweimal.",
        specialities: ["Custom Blackwork", "Ornamental Sleeves", "Dark Realism", "Cover-ups"],
        image: {
          src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=900&q=80",
          alt: "Tätowiererin Caro Lindner bei der Arbeit",
        },
        ctaHref: "/booking",
        portfolioHref: "/portfolio",
      },
      {
        name: "Marc Steiner",
        style: "Fine Line · Geometric",
        bio: "Marc kommt aus dem Grafikdesign und bringt diese Präzision in jedes Piece. Wo andere skalieren, verkleinert er. Minimalismus ist kein Stil — es ist Haltung. Wer ein kleines, perfektes Tattoo will, ist bei ihm richtig.",
        specialities: ["Fine Line", "Geometrie", "Mikrodetail", "Schrift & Lettering"],
        image: {
          src: "https://images.unsplash.com/photo-1568515387631-1614ef9ffdd1?w=900&q=80",
          alt: "Tätowierer Marc Steiner im Studio",
        },
        ctaHref: "/booking",
        portfolioHref: "/portfolio",
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
    contactCards: [
      {
        kind: "mail" as const,
        title: "Mail",
        line: "hallo@beispiel-studio.de",
        href: "mailto:hallo@beispiel-studio.de",
      },
      {
        kind: "location" as const,
        title: "Studio",
        line: "Musterstraße 12 · 10115 Berlin",
        href: "https://maps.google.com",
      },
    ],
  },
} as const;

export type SiteContent = typeof site;
