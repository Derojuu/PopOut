"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { useTheme } from "@/hooks/use-theme";

/** Swaps the sun and moon glyphs and flips the `dark` class on <html>. */
export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Icon name={isDark ? "sun" : "moon"} className="h-4 w-4" />
    </Button>
  );
}
