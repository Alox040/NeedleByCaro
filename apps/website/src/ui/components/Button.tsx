import Link from "next/link";
import type { LinkProps } from "next/link";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import { cx } from "../layout/cx";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md";

type Shared = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsAnchor = Shared &
  Omit<LinkProps, "href" | "className" | "children"> & {
    href: string;
  };

type ButtonAsNative = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsNative;

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-forge-accent text-forge-white hover:bg-forge-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forge-accent focus-visible:ring-offset-2 focus-visible:ring-offset-forge-black",
  outline:
    "border border-forge-border bg-transparent text-forge-white hover:border-forge-accent hover:bg-forge-section focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forge-accent focus-visible:ring-offset-2 focus-visible:ring-offset-forge-black",
  ghost:
    "border border-transparent bg-transparent text-forge-grey hover:bg-forge-section hover:text-forge-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forge-accent focus-visible:ring-offset-2 focus-visible:ring-offset-forge-black",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "rounded-forge-sm px-3 py-2 text-xs font-medium uppercase tracking-wider",
  md: "rounded-forge-sm px-4 py-2.5 text-sm font-medium",
};

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cx(
    "inline-flex items-center justify-center gap-2 text-center transition-colors disabled:pointer-events-none disabled:opacity-50",
    variantClass[variant],
    sizeClass[size],
    className,
  );
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = "primary", size = "md", className, children } = props;
    const classes = buttonClasses(variant, size, className);

    if ("href" in props && typeof props.href === "string") {
      const {
        href,
        prefetch,
        replace,
        scroll,
        variant: _v,
        size: _s,
        className: _c,
        children: _ch,
        ...anchorRest
      } = props;
      return (
        <Link
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          prefetch={prefetch}
          replace={replace}
          scroll={scroll}
          className={classes}
          {...anchorRest}
        >
          {children}
        </Link>
      );
    }

    const {
      type = "button",
      disabled,
      variant: _v2,
      size: _s2,
      className: _c2,
      children: _ch2,
      ...buttonRest
    } = props as ButtonAsNative;

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        className={classes}
        {...buttonRest}
      >
        {children}
      </button>
    );
  },
);
