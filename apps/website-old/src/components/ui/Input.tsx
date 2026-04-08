import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-forge-sm border border-forge-border/70 bg-surface/60 px-4 py-3 text-sm text-primary placeholder:text-muted/80 transition-colors hover:border-forge-border/90 focus:border-forge-accent focus:outline-none focus:ring-1 focus:ring-forge-accent ${className}`}
      {...props}
    />
  );
}

export function Textarea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`min-h-[140px] w-full resize-y rounded-forge-sm border border-forge-border/70 bg-surface/60 px-4 py-3 text-sm text-primary placeholder:text-muted/80 transition-colors hover:border-forge-border/90 focus:border-forge-accent focus:outline-none focus:ring-1 focus:ring-forge-accent ${className}`}
      {...props}
    />
  );
}
