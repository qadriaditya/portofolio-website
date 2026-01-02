"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Detect system preference and load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);

    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme) {
      setIsDark(storedTheme === "dark");
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  // Apply theme to document - memoized to prevent unnecessary updates
  useEffect(() => {
    if (!isMounted) return;

    const htmlElement = document.documentElement;

    // Use requestAnimationFrame untuk smooth transitions
    requestAnimationFrame(() => {
      if (isDark) {
        htmlElement.classList.add("dark");
        htmlElement.style.colorScheme = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        htmlElement.classList.remove("dark");
        htmlElement.style.colorScheme = "light";
        localStorage.setItem("theme", "light");
      }
    });
  }, [isDark, isMounted]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
