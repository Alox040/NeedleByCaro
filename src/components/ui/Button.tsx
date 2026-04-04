import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forge-accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-forge-accent text-forge-white hover:bg-forge-accent-hover focus-visible:outline-forge-white",
  secondary:
    "border border-forge-border/90 bg-transparent text-forge-white hover:border-forge-accent hover:text-forge-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
