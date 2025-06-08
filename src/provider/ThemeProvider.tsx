"use client";

import { createContext, useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  isMounted: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useNextTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <NextThemesProvider {...props} attribute="class" defaultTheme="system" enableSystem>
        {children}
      </NextThemesProvider>
    );
  }

  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="system" enableSystem>
      <ThemeContext.Provider value={{ theme: theme || "system", setTheme, isMounted: mounted }}>
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
}
