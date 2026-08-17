import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import {
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';

const ThemeSwitcher = ({ showLabel = true, size = 'md' }) => {
  const { currentTheme, toggleTheme, mounted } = useTheme();

  // Size variations
  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-3',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  if (!mounted) {
    return (
      <div className={`theme-bg-card theme-border border rounded-lg ${sizeClasses[size]} animate-pulse`}>
        <div className="w-8 h-5 bg-gray-200 rounded"></div>
      </div>
    );
  }

  const Icon = currentTheme === 'dark' ? SunIcon : MoonIcon;
  const label = currentTheme === 'dark' ? 'Light' : 'Dark';

  return (
    <button
      onClick={toggleTheme}
      className={`
        theme-bg-card theme-border theme-text-primary
        border rounded-lg ${sizeClasses[size]}
        hover:theme-hover theme-shadow-md
        flex items-center space-x-2 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
      `}
      aria-label={`Switch to ${label} theme`}
      title={`Switch to ${label} theme`}
    >
      <Icon className={`${iconSizes[size]} theme-text-primary-brand`} />
      {showLabel && (
        <span className="font-medium">{label}</span>
      )}
    </button>
  );
};

// Quick theme toggle button (simpler version)
export const QuickThemeToggle = ({ className = '' }) => {
  const { currentTheme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className={`w-8 h-8 bg-gray-200 rounded animate-pulse ${className}`}></div>;
  }

  const Icon = currentTheme === 'dark' ? SunIcon : MoonIcon;

  return (
    <button
      onClick={toggleTheme}
      className={`
        theme-bg-card theme-border border rounded-lg p-2
        hover:theme-hover theme-shadow-md
        transition-all duration-200 group
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        ${className}
      `}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Icon className="h-5 w-5 theme-text-primary-brand group-hover:scale-110 transition-transform duration-200" />
    </button>
  );
};

// Floating theme switcher (for page corners)
export const FloatingThemeSwitcher = ({ position = 'bottom-right' }) => {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-40`}>
      <ThemeSwitcher showLabel={false} size="md" position="top-left" />
    </div>
  );
};

export default ThemeSwitcher;