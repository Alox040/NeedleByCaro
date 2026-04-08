import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "../../styles/globals.css";
import { site } from "@/content/site-content";
import { ThemeProvider } from "@website/ui";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.brand.name} · Tattoo Studio`,
    template: `%s · ${site.brand.name}`,
  },
  description: site.hero.subtitle,
  keywords: [
    "Tattoo",
    "Tattoo Studio",
    "Berlin",
    "Fine Line",
    "Blackwork",
    "Custom Tattoo",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.brand.name,
    title: `${site.brand.name} · Tattoo Studio`,
    description: site.hero.subtitle,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand.name} · Tattoo Studio`,
    description: site.hero.subtitle,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f14" },
    { media: "(prefers-color-scheme: light)", color: "#eef2f7" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${body.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="font-sans ds-page-bg">
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
