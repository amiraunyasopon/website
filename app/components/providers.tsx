"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ColorMode = "dark" | "light";

const ColorModeContext = createContext<{
  colorMode: ColorMode;
  toggleColorMode: () => void;
}>({
  colorMode: "dark",
  toggleColorMode: () => undefined,
});

export function useColorMode() {
  return useContext(ColorModeContext);
}

export default function Providers({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode>("dark");

  useEffect(() => {
    const savedMode = window.localStorage.getItem("color-mode");
    if (savedMode === "light" || savedMode === "dark") {
      window.requestAnimationFrame(() => setColorMode(savedMode));
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", colorMode === "light");
    document.documentElement.classList.toggle("dark", colorMode === "dark");
    window.localStorage.setItem("color-mode", colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        toggleColorMode: () => setColorMode((mode) => (mode === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}
