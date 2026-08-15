import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Logo = ({ 
  size = 'md',
  className = '',
  linkTo = '/',
  showName = true
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16'
  };

  const guardiansFontSize = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  const diagnosticFontSize = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-sm'
  };

  const LogoContent = () => (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img
        className={`w-auto ${sizeClasses[size]} flex-shrink-0`}
        src="/logo_and_icon.png"
        alt="Guardians Diagnostic Center"
      />
      {showName && (
        <div className="flex flex-col leading-tight">
          {/* Light mode: dark navy #1B365D | Dark mode: light blue so it's visible */}
          <span
            className={`font-extrabold tracking-wide uppercase ${guardiansFontSize[size]}`}
            style={{ color: isDark ? '#3d0ab4' : '#3e0ab7' }}
          >
            Guardians
          </span>
          {/* Cyan stays the same — visible on both themes */}
          <span
            className={`font-semibold tracking-widest uppercase ${diagnosticFontSize[size]}`}
            style={{ color: '#5CB3D9' }}
          >
            Diagnostic Center
          </span>
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="flex items-center">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo;
