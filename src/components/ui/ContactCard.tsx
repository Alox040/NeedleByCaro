import type { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  line: string;
  href: string;
};

export function ContactCard({ icon, title, line, href }: ContactCardProps) {
  return (
    <a
      href={href}
      className="flex gap-4 rounded-forge border border-forge-border/55 bg-surface/30 p-5 transition-colors hover:border-forge-accent/50 md:p-6"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-forge-accent/35 text-forge-accent">
        {icon}
      </span>
      <span className="space-y-1">
        <span className="block text-xs font-bold uppercase tracking-wider text-muted">{title}</span>
        <span className="block font-medium text-primary">{line}</span>
      </span>
    </a>
  );
}
