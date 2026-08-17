import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Logo = ({
  size = 'md',
  className = '',
  linkTo = '/',
  showName = true,
}) => {
  const { isDark } = useTheme();

  const imgSize = { sm: 'h-8', md: 'h-10', lg: 'h-14' };
  const titleSize = { sm: 'text-sm', md: 'text-base', lg: 'text-xl' };
  const subtitleSize = { sm: 'text-[8px]', md: 'text-[10px]', lg: 'text-xs' };

  const Content = () => (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo_and_icon.png"
        alt="Guardians Diagnostic Center logo"
        className={`w-auto ${imgSize[size]} flex-shrink-0`}
      />
      {showName && (
        <div className="flex flex-col leading-tight">
          {/* Exact navy from logo — lightened in dark mode for contrast */}
          <span
            className={`font-extrabold tracking-wider uppercase ${titleSize[size]}`}
            style={{ color: isDark ? '#7BBDE8' : '#1A3A6B' }}
          >
            Guardians
          </span>
          {/* Cyan from logo — same in both modes */}
          <span
            className={`font-semibold tracking-[0.18em] uppercase ${subtitleSize[size]}`}
            style={{ color: '#5BB3E4' }}
          >
            Diagnostic Center
          </span>
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="inline-flex items-center focus:outline-none">
        <Content />
      </Link>
    );
  }

  return <Content />;
};

export default Logo;
