"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import type { ThemeMode, ThemeProviderProps } from "./types";

type ThemeContextValue = {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredTheme(key: string): ThemeMode | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(key);
    if (v === "light" || v === "dark") return v;
  } catch {
    /* ignore */
  }
  return null;
}

function applyThemeToDocument(mode: ThemeMode, storageKey: string) {
  document.documentElement.dataset.theme = mode;
  document.documentElement.style.colorScheme = mode;
  try {
    window.localStorage.setItem(storageKey, mode);
  } catch {
    /* ignore */
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "website-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>(defaultTheme);

  useLayoutEffect(() => {
    const stored = readStoredTheme(storageKey);
    if (!stored) return;
    setThemeState(stored);
    applyThemeToDocument(stored, storageKey);
  }, [storageKey]);

  const setTheme = useCallback(
    (mode: ThemeMode) => {
      setThemeState(mode);
      applyThemeToDocument(mode, storageKey);
    },
    [storageKey],
  );

  const toggleTheme = useCallback(() => {
    setThemeState((t) => {
      const next: ThemeMode = t === "dark" ? "light" : "dark";
      applyThemeToDocument(next, storageKey);
      return next;
    });
  }, [storageKey]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
