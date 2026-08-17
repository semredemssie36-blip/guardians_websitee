import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us',           href: '/about' },
    { name: 'Services',           href: '/services' },
    { name: 'Health Packages',    href: '/packages' },
    { name: 'Corporate Services', href: '/corporate' },
    { name: 'Doctors',            href: '/doctors' },
  ];

  const patientLinks = [
    { name: 'Patient Information',  href: '/patient-info' },
    { name: 'Test Results',         href: '/results' },
    { name: 'Home Collection',      href: '/home-collection' },
    { name: 'FAQ',                  href: '/faq' },
    { name: 'Blog & Resources',     href: '/blog' },
  ];

  const socials = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ backgroundColor: '#0D1E38' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo on dark bg — force light text */}
            <div className="mb-4">
              <Logo size="md" linkTo="/" showName={true} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted partner in healthcare diagnostics. Professional, accurate, and caring
              medical services for individuals and organizations in Addis Ababa, Ethiopia.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#5BB3E4' }}>›</span>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Patient Resources
            </h3>
            <ul className="space-y-2.5">
              {patientLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#5BB3E4' }}>›</span>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#5BB3E4' }} />
                <span className="text-gray-400">Bole Sub-City, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 flex-shrink-0" style={{ color: '#5BB3E4' }} />
                <a href="tel:+251911234567" className="text-gray-400 hover:text-white transition-colors">
                  +251 911 234 567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 flex-shrink-0" style={{ color: '#5BB3E4' }} />
                <a href="tel:+251111234567" className="text-gray-400 hover:text-white transition-colors">
                  +251 11 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeIcon className="h-4 w-4 flex-shrink-0" style={{ color: '#5BB3E4' }} />
                <a href="mailto:info@guardians-diagnostic.com" className="text-gray-400 hover:text-white transition-colors">
                  info@guardians-diagnostic.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#5BB3E4' }} />
                <div className="text-gray-400">
                  <p>Mon – Fri: 7:00 AM – 8:00 PM</p>
                  <p>Sat: 8:00 AM – 6:00 PM</p>
                  <p>Sun: 9:00 AM – 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Emergency strip */}
        <div className="py-5 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4 bg-red-900/20 border border-red-500/25 rounded-xl px-5 py-4">
            <div>
              <p className="font-semibold text-red-400 text-sm">24/7 Emergency Line</p>
              <p className="text-gray-400 text-xs mt-0.5">For urgent diagnostic services</p>
            </div>
            <a
              href="tel:+251911000911"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors inline-flex items-center gap-2 text-sm"
            >
              <PhoneIcon className="h-4 w-4" />
              +251 911 000 911
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Guardians Diagnostic Center. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
