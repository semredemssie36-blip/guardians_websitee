import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSwitcher, { QuickThemeToggle } from './ThemeSwitcher';
import Logo from './Logo';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { mounted } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navigation = [
    { name: 'Home',      href: '/' },
    { name: 'About',     href: '/about' },
    { name: 'Services',  href: '/services' },
    { name: 'Packages',  href: '/packages' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Doctors',   href: '/doctors' },
    { name: 'Resources', href: '/blog' },
    { name: 'Contact',   href: '/contact' },
  ];

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      {/* ─── TOP INFO BAR ─────────────────────────────────────────── */}
      <div className="theme-bg-primary text-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">

            {/* Left — contact details */}
            <div className="flex items-center divide-x divide-white/20">
              <a
                href="tel:+251911234567"
                className="flex items-center gap-1.5 pr-5 hover:text-blue-200 transition-colors"
              >
                <PhoneIcon className="h-3.5 w-3.5 flex-shrink-0" />
                <span>+251 911 234 567</span>
              </a>
              <a
                href="tel:+251111234567"
                className="flex items-center gap-1.5 px-5 hover:text-blue-200 transition-colors"
              >
                <PhoneIcon className="h-3.5 w-3.5 flex-shrink-0" />
                <span>+251 11 123 4567</span>
              </a>
              <a
                href="mailto:info@guardians-diagnostic.com"
                className="flex items-center gap-1.5 pl-5 hover:text-blue-200 transition-colors"
              >
                <EnvelopeIcon className="h-3.5 w-3.5 flex-shrink-0" />
                <span>info@guardians-diagnostic.com</span>
              </a>
            </div>

            {/* Right — hours + socials */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5 text-blue-100">
                <ClockIcon className="h-3.5 w-3.5 flex-shrink-0" />
                <span>Mon – Sat: 7:00 AM – 8:00 PM</span>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Telegram */}
                <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                   aria-label="Telegram" className="text-white/70 hover:text-white transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                   aria-label="YouTube" className="text-white/70 hover:text-white transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── MAIN NAVIGATION ──────────────────────────────────────── */}
      <header
        className={`theme-bg-card sticky top-0 z-50 transition-shadow duration-200 ${
          scrolled ? 'theme-shadow-lg' : 'border-b theme-border'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Logo size="md" linkTo="/" />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  isActive(item.href)
                    ? 'theme-text-primary-brand'
                    : 'theme-text-secondary hover:theme-text-primary-brand hover:theme-bg-hover'
                }`}
              >
                {item.name}
                {/* Active underline indicator */}
                {isActive(item.href) && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ backgroundColor: '#1A3A6B' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop right side — theme toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {mounted && <ThemeSwitcher showLabel={false} size="sm" />}
            <Link
              to="/appointment"
              className="theme-btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2 theme-shadow-md"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick WhatsApp action on mobile */}
            <a
              href="https://wa.me/251911234567"
              className="p-2 rounded-lg bg-green-500 text-white theme-shadow-sm"
              aria-label="WhatsApp"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            {mounted && <QuickThemeToggle />}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg theme-text-secondary hover:theme-bg-hover transition-colors"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* ─── MOBILE MENU OVERLAY ──────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in panel */}
          <div className="absolute inset-y-0 right-0 w-full max-w-sm theme-bg-card shadow-2xl flex flex-col">

            {/* Panel header */}
            <div className="flex items-center justify-between px-5 py-4 border-b theme-border">
              <Logo size="sm" linkTo="/" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg theme-text-secondary hover:theme-bg-hover transition-colors"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'theme-text-primary-brand theme-bg-primary-10 font-semibold'
                        : 'theme-text-primary hover:theme-bg-hover'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Panel footer — CTA + theme */}
            <div className="px-4 py-5 border-t theme-border space-y-3">
              {mounted && (
                <div className="flex items-center justify-between theme-bg-surface rounded-xl px-4 py-3">
                  <span className="text-sm theme-text-secondary font-medium">Display theme</span>
                  <ThemeSwitcher showLabel={true} size="sm" />
                </div>
              )}

              <Link
                to="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="theme-btn-primary w-full py-3.5 rounded-xl font-semibold text-center block theme-shadow-lg"
              >
                Book Appointment
              </Link>

              {/* Quick contact row */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+251911234567"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border theme-border theme-text-primary text-sm font-medium hover:theme-bg-hover transition-colors"
                >
                  <PhoneIcon className="h-4 w-4 theme-icon-navy" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/251911234567"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
