import type { ReactNode } from "react";

export type ThemeMode = "dark" | "light";

export type ThemeProviderProps = {
  children: ReactNode;
  /** Initial theme before hydration; default dark */
  defaultTheme?: ThemeMode;
  /** Optional storage key for persisted preference */
  storageKey?: string;
};
