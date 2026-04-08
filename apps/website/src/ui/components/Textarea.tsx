import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cx } from "../layout/cx";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const textareaBase =
  "min-h-24 w-full resize-y rounded-forge-sm border border-forge-border bg-forge-black px-3 py-2.5 text-sm text-primary placeholder:text-muted transition-colors focus-visible:border-forge-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forge-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-forge-black disabled:cursor-not-allowed disabled:opacity-50";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, ...rest }, ref) {
    return (
      <textarea
        ref={ref}
        className={cx(textareaBase, className)}
        {...rest}
      />
    );
  },
);
