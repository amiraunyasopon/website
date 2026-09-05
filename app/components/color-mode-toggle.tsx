"use client";

import { useColorMode } from "./providers";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <button
      className="h-8 min-w-8 rounded-md px-2 text-base transition-opacity hover:opacity-80"
      style={{
        backgroundColor: isDark ? "#fbd38d" : "#805ad5",
        color: isDark ? "#1a202c" : "#f4ede4",
      }}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleColorMode}
    >
      {isDark ? "☼" : "⏾"}
    </button>
  );
}
