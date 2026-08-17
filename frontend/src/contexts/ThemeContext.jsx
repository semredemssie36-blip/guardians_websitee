import React, { createContext, useContext, useEffect, useState } from 'react';

// ─── Theme configurations ────────────────────────────────────────────────────
// Brand colors are extracted directly from the Guardians logo:
//   Navy  #1A3A6B  — "GUARDIANS" wordmark and stethoscope earpieces
//   Cyan  #5BB3E4  — Stethoscope body and "DIAGNOSTIC CENTER" text
//   Red   #E8392A  — Medical cross
const themes = {
  light: {
    name: 'Light',
    type: 'light',
    colors: {
      primary:       '#1A3A6B', // guardians-navy
      secondary:     '#5BB3E4', // guardians-cyan
      accent:        '#E8392A', // guardians-red (logo cross)
      success:       '#10B981',
      warning:       '#F59E0B',
      background:    '#FFFFFF',
      surface:       '#F7FAFD', // very light blue-tinted white
      card:          '#FFFFFF',
      textPrimary:   '#111827',
      textSecondary: '#4B5563',
      textMuted:     '#9CA3AF',
      border:        '#E2EAF2', // blue-tinted border
      borderHover:   '#C8D8EA',
      hover:         '#EBF4FA',
      active:        '#D8ECF7',
      error:         '#E8392A',
      info:          '#2563EB',
    },
  },

  dark: {
    name: 'Dark',
    type: 'dark',
    colors: {
      primary:       '#4A90D9', // lightened navy for dark bg
      secondary:     '#5BB3E4', // cyan stays same
      accent:        '#E8392A',
      success:       '#10B981',
      warning:       '#F59E0B',
      background:    '#0D1B2E', // deep navy-dark
      surface:       '#162035',
      card:          '#1E2D44',
      textPrimary:   '#F0F6FF',
      textSecondary: '#A8BBCF',
      textMuted:     '#5C7A94',
      border:        '#2A3F57',
      borderHover:   '#3A5270',
      hover:         '#1E2D44',
      active:        '#243450',
      error:         '#F07060',
      info:          '#60A5FA',
    },
  },
};

// Create theme context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('guardiansTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // Save theme to localStorage and apply CSS variables
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('guardiansTheme', currentTheme);
    
    // Apply CSS custom properties
    const root = document.documentElement;
    const theme = themes[currentTheme];
    
    // Set CSS variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Add theme class to document
    document.documentElement.className = `theme-${currentTheme}`;
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme.colors.primary);
    }
  }, [currentTheme, mounted]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const toggleTheme = () => {
    // Simple toggle between light and dark
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  const theme = themes[currentTheme];

  const value = {
    currentTheme,
    theme,
    themes,
    changeTheme,
    toggleTheme,
    isDark: theme.type === 'dark',
    mounted
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Helper function to get theme-aware class names
export const getThemeClass = (baseClass, themeVariant) => {
  return `${baseClass} ${themeVariant || ''}`;
};

export default ThemeContext;