import Image from "next/image";
import Link from "next/link";

export type WorkCardProps = {
  title: string;
  category: string;
  src: string;
  alt: string;
  href?: string;
};

export function WorkCard({ title, category, src, alt, href }: WorkCardProps) {
  const inner = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-background">
        <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-transparent to-transparent opacity-80" />
      </div>
      <div className="space-y-1 p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">{category}</p>
        <p className="font-display text-lg font-bold uppercase tracking-tight text-heading">{title}</p>
      </div>
    </>
  );

  const cls =
    "group block overflow-hidden rounded-forge border border-forge-border/55 bg-surface/30 transition-colors hover:border-forge-accent/50";

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return <div className={cls}>{inner}</div>;
}
