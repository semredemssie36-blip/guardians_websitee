import React, { createContext, useContext, useEffect, useState } from 'react';

// Define theme configurations
const themes = {
  light: {
    name: 'Light',
    type: 'light',
    colors: {
      // Brand colors
      primary: '#1B365D',      // guardians-navy
      secondary: '#5CB3D9',    // guardians-cyan
      accent: '#FF4444',       // guardians-red
      success: '#10B981',      // green-500
      warning: '#F59E0B',      // orange-400
      
      // Background colors
      background: '#FFFFFF',
      surface: '#F9FAFB',      // gray-50
      card: '#FFFFFF',
      
      // Text colors
      textPrimary: '#111827',   // gray-900
      textSecondary: '#6B7280', // gray-500
      textMuted: '#9CA3AF',     // gray-400
      
      // Border colors
      border: '#E5E7EB',        // gray-200
      borderHover: '#D1D5DB',   // gray-300
      
      // Interactive states
      hover: '#F3F4F6',         // gray-100
      active: '#E5E7EB',        // gray-200
      
      // Status colors
      error: '#EF4444',         // red-500
      info: '#3B82F6',          // blue-500
    }
  },
  
  dark: {
    name: 'Dark',
    type: 'dark',
    colors: {
      // Brand colors (slightly adjusted for dark mode)
      primary: '#3B82F6',       // blue-500 (more visible in dark)
      secondary: '#06B6D4',     // cyan-500
      accent: '#EF4444',        // red-500
      success: '#10B981',       // green-500
      warning: '#F59E0B',       // amber-500
      
      // Background colors
      background: '#0F172A',    // slate-900
      surface: '#1E293B',       // slate-800
      card: '#334155',          // slate-700
      
      // Text colors
      textPrimary: '#F1F5F9',   // slate-100
      textSecondary: '#CBD5E1', // slate-300
      textMuted: '#64748B',     // slate-500
      
      // Border colors
      border: '#475569',        // slate-600
      borderHover: '#64748B',   // slate-500
      
      // Interactive states
      hover: '#475569',         // slate-600
      active: '#64748B',        // slate-500
      
      // Status colors
      error: '#EF4444',         // red-500
      info: '#3B82F6',          // blue-500
    }
  }
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