import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Theme-aware card component that maintains the border-l-4 system
const ThemeCard = ({
  children,
  className = '',
  borderColor = 'secondary', // primary, secondary, accent, success, warning, error
  hover = true,
  shadow = 'lg',
  padding = 'md',
  ...props
}) => {
  const { mounted } = useTheme();

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowClasses = {
    none: '',
    sm: 'theme-shadow-sm',
    md: 'theme-shadow-md',
    lg: 'theme-shadow-lg',
    xl: 'theme-shadow-xl',
    '2xl': 'theme-shadow-2xl',
  };

  const borderColorClasses = {
    primary: 'theme-border-l-primary',
    secondary: 'theme-border-l-secondary theme-border-l-secondary-hover',
    accent: 'theme-border-l-accent',
    success: 'theme-border-l-success',
    warning: 'theme-border-l-warning',
    error: 'border-l-4 border-red-500',
  };

  if (!mounted) {
    return (
      <div className={`bg-gray-200 rounded-2xl animate-pulse ${paddingClasses[padding]} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`
        theme-card rounded-2xl
        ${borderColorClasses[borderColor]}
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${hover ? 'hover:theme-shadow-xl hover:-translate-y-1' : ''}
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Theme-aware button component
export const ThemeButton = ({
  children,
  variant = 'primary', // primary, secondary, outline-primary, outline-secondary
  size = 'md',
  className = '',
  ...props
}) => {
  const { mounted } = useTheme();

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'theme-btn-primary',
    secondary: 'theme-btn-secondary',
    'outline-primary': 'theme-btn-outline-primary',
    'outline-secondary': 'bg-transparent theme-text-secondary-brand border-2 theme-border-secondary hover:theme-bg-secondary hover:text-white',
  };

  if (!mounted) {
    return (
      <div className={`bg-gray-200 rounded animate-pulse ${sizeClasses[size]} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <button
      className={`
        rounded-lg font-semibold transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

// Theme-aware input component
export const ThemeInput = ({
  className = '',
  ...props
}) => {
  const { mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={`bg-gray-200 rounded animate-pulse h-12 ${className}`} />
    );
  }

  return (
    <input
      className={`
        theme-input rounded-lg px-4 py-3 border
        focus:outline-none focus:ring-2 focus:ring-offset-2
        transition-colors duration-200
        ${className}
      `}
      {...props}
    />
  );
};

// Theme-aware text component
export const ThemeText = ({
  children,
  variant = 'primary', // primary, secondary, muted, primary-brand, secondary-brand, accent
  className = '',
  as: Component = 'p',
  ...props
}) => {
  const { mounted } = useTheme();

  const variantClasses = {
    primary: 'theme-text-primary',
    secondary: 'theme-text-secondary',
    muted: 'theme-text-muted',
    'primary-brand': 'theme-text-primary-brand',
    'secondary-brand': 'theme-text-secondary-brand',
    accent: 'theme-text-accent',
    success: 'theme-success',
    warning: 'theme-warning',
    error: 'theme-error',
    info: 'theme-info',
  };

  if (!mounted) {
    return (
      <Component className={`text-gray-400 ${className}`} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// Theme-aware section background
export const ThemeSection = ({
  children,
  background = 'background', // background, surface, card
  className = '',
  ...props
}) => {
  const { mounted } = useTheme();

  const backgroundClasses = {
    background: 'theme-bg-background',
    surface: 'theme-bg-surface',
    card: 'theme-bg-card',
  };

  if (!mounted) {
    return (
      <section className={`bg-gray-100 ${className}`} {...props}>
        {children}
      </section>
    );
  }

  return (
    <section
      className={`${backgroundClasses[background]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default ThemeCard;