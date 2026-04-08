import { forwardRef, type InputHTMLAttributes } from "react";
import { cx } from "../layout/cx";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const inputBase =
  "w-full rounded-forge-sm border border-forge-border bg-forge-black px-3 py-2.5 text-sm text-primary placeholder:text-muted transition-colors focus-visible:border-forge-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forge-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-forge-black disabled:cursor-not-allowed disabled:opacity-50";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type = "text", ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cx(inputBase, className)}
      {...rest}
    />
  );
});
