import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes } from '../config/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('spus-theme');
    return themes.find(t => t.id === saved) || themes[0];
  });

  useEffect(() => {
    const root = document.documentElement;
    const theme = currentTheme;
    
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-background', theme.background);
    root.style.setProperty('--color-surface', theme.surface);
    root.style.setProperty('--color-surfaceAlt', theme.surfaceAlt);
    root.style.setProperty('--color-text', theme.text);
    root.style.setProperty('--color-textMuted', theme.textMuted);
    root.style.setProperty('--color-border', theme.border);
    root.style.setProperty('--hero-overlay', theme.heroOverlay);
    root.style.setProperty('--cta-gradient', theme.ctaGradient);
    root.style.setProperty('--font-display', `"${theme.displayFont}"`);
    root.style.setProperty('--font-body', `"${theme.bodyFont}"`);
    
    localStorage.setItem('spus-theme', theme.id);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
