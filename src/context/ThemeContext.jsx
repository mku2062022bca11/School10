import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('green');

  const themes = {
    green: {
      primary: '#10b981',
      primaryDark: '#059669',
      primaryLight: '#34d399',
    },
    blue: {
      primary: '#3b82f6',
      primaryDark: '#2563eb',
      primaryLight: '#60a5fa',
    },
    purple: {
      primary: '#8b5cf6',
      primaryDark: '#7c3aed',
      primaryLight: '#a78bfa',
    },
    red: {
      primary: '#ef4444',
      primaryDark: '#dc2626',
      primaryLight: '#f87171',
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('qb365-theme');
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const colors = themes[theme];
    
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
    root.style.setProperty('--color-primary-light', colors.primaryLight);
    
    localStorage.setItem('qb365-theme', theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (themes[newTheme]) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};