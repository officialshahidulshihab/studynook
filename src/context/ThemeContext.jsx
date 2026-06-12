"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ dark: true, setDark: () => {} });

function getInitialTheme() {
  if (typeof window === "undefined") return true;
  const stored = localStorage.getItem("theme");
  return stored ? stored === "dark" : true;
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    
    const body = document.body;
    body.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);