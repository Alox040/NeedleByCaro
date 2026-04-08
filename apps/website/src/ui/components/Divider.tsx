import type { HTMLAttributes } from "react";
import { cx } from "../layout/cx";

export type DividerProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
} & (
  | ({ orientation?: "horizontal" } & HTMLAttributes<HTMLHRElement>)
  | ({ orientation: "vertical" } & HTMLAttributes<HTMLSpanElement>)
);

/**
 * Trennlinie — nur `border-forge-border`.
 */
export function Divider(props: DividerProps) {
  const { orientation = "horizontal", className, ...rest } = props;

  if (orientation === "vertical") {
    const spanRest = rest as HTMLAttributes<HTMLSpanElement>;
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={cx(
          "inline-block h-auto min-h-[1em] w-px shrink-0 self-stretch border-0 border-l border-forge-border",
          className,
        )}
        {...spanRest}
      />
    );
  }

  const hrRest = rest as HTMLAttributes<HTMLHRElement>;
  return (
    <hr
      role="separator"
      className={cx("w-full border-0 border-t border-forge-border", className)}
      {...hrRest}
    />
  );
}
