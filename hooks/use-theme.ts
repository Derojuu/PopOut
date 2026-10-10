"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "popout-theme";

function readInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readInitialTheme());
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      const root = document.documentElement;
      root.classList.toggle("dark", next === "dark");
      root.style.colorScheme = next;
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage can be unavailable in private modes; the class toggle still applies.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme, mounted };
}
