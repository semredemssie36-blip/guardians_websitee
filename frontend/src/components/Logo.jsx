import { Link } from 'react-router-dom';

const Logo = ({ 
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  linkTo = '/'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'

  };

  const LogoImage = () => (
    <img 
      className={`w-20 ${sizeClasses[size]} ${className}`}
      src="/logo_and_icon.png"
      alt="Guardians Diagnostic Center" 
    />
  );

  // If linkTo is provided, wrap in Link component
  if (linkTo) {
    return (
      <Link to={linkTo} className="flex items-center">
        <LogoImage />
      </Link>
    );
  }

  // Return just the image
  return <LogoImage />;
};

export default Logo;