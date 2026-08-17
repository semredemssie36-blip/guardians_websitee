import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  CalendarDaysIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BeakerIcon,
  MapPinIcon,
  EnvelopeIcon,
  BookOpenIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

/* ─── Hero slides ──────────────────────────────────────────────────── */
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    eyebrow: 'Laboratory • Imaging • ECG • Consultation',
    title: 'Reliable Diagnostics,',
    accent: 'Better Health',
    description:
      'Professional diagnostic services with accurate testing and patient-focused care — all under one roof in Addis Ababa.',
  },
  {
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    eyebrow: 'Home Sample Collection Available',
    title: 'We Come',
    accent: 'to You',
    description:
      'Can\'t make it to our center? Our trained team collects samples at your home or office — safe, professional, and convenient.',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    eyebrow: 'Pre-Employment • Employee Health • On-Site Services',
    title: 'Corporate Health',
    accent: 'Solutions',
    description:
      'Comprehensive workplace health programs for companies, NGOs, schools, factories, and government institutions.',
  },
  {
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    eyebrow: 'Basic • Comprehensive • Pre-Employment • Executive',
    title: 'Health Screening',
    accent: 'Packages',
    description:
      'Preventive health screening packages designed for individuals, families, and organizations — starting from ETB 2,500.',
  },
];

/* ─── Services ─────────────────────────────────────────────────────── */
const services = [
  {
    name: 'Laboratory Services',
    description: 'Hematology, biochemistry, microbiology, serology, urinalysis, and more.',
    icon: BeakerIcon,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    link: '/services',
  },
  {
    name: 'Digital X-Ray',
    description: 'High-quality digital imaging with reduced radiation and fast results.',
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    link: '/services',
  },
  {
    name: 'Ultrasound',
    description: 'Abdominal, pelvic, pregnancy, thyroid, and cardiac ultrasound imaging.',
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    link: '/services',
  },
  {
    name: 'ECG',
    description: 'Electrocardiogram for heart rhythm evaluation, interpreted by our cardiologist.',
    icon: HeartIcon,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    link: '/services',
  },
  {
    name: 'General Consultation',
    description: 'Outpatient consultations, health assessments, and specialist referrals.',
    icon: UserGroupIcon,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    link: '/services',
  },
  {
    name: 'Health Screening',
    description: 'Preventive screening packages for early detection and peace of mind.',
    icon: ShieldCheckIcon,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
    link: '/packages',
  },
];

/* ─── Why choose us ────────────────────────────────────────────────── */
const reasons = [
  {
    icon: ShieldCheckIcon,
    title: 'Advanced Equipment',
    description: 'Modern diagnostic technology for accurate and fast results.',
  },
  {
    icon: UserGroupIcon,
    title: 'Qualified Team',
    description: 'Experienced medical professionals committed to quality care.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Accurate Results',
    description: 'Rigorous quality control on every test and report we produce.',
  },
  {
    icon: ClockIcon,
    title: 'Timely Service',
    description: 'Clear turnaround times so you always know when to expect results.',
  },
];

/* ─── Patient journey steps ────────────────────────────────────────── */
const journeySteps = [
  {
    number: '01',
    title: 'Book',
    description: 'Request online, call, or WhatsApp us. Walk-ins are also welcome.',
    color: 'text-guardians-navy',
    border: 'border-guardians-navy',
  },
  {
    number: '02',
    title: 'Prepare',
    description: 'We provide clear preparation instructions for your specific test.',
    color: 'text-guardians-cyan',
    border: 'border-guardians-cyan',
  },
  {
    number: '03',
    title: 'Visit',
    description: 'Come to our center or request home collection — your choice.',
    color: 'text-guardians-navy',
    border: 'border-guardians-navy',
  },
  {
    number: '04',
    title: 'Results',
    description: 'Receive your results with a clear, professional report.',
    color: 'text-guardians-cyan',
    border: 'border-guardians-cyan',
  },
];

/* ─── Blog preview ─────────────────────────────────────────────────── */
const articles = [
  {
    title: 'Why Regular Health Screenings Matter',
    category: 'Prevention',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    readTime: '5 min read',
    author: 'Guardians Medical Team',
  },
  {
    title: 'Understanding Your Blood Test Results',
    category: 'Diagnostic Info',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    readTime: '8 min read',
    author: 'Guardians Medical Team',
  },
  {
    title: 'How to Prepare for Common Lab Tests',
    category: 'Health Tips',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    readTime: '6 min read',
    author: 'Guardians Medical Team',
  },
];

/* ─── Component ────────────────────────────────────────────────────── */
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % heroSlides.length),
      5500
    );
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () =>
    setCurrentSlide((p) => (p + 1) % heroSlides.length);

  return (
    <div className="theme-bg-background">

      {/* ══════════════════════════════════════════════════════════════
          HERO CAROUSEL
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[580px] lg:h-[660px] overflow-hidden" aria-label="Hero">
        {/* Slides */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            aria-hidden={i !== currentSlide}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            {/* Gradient: stronger on left for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
          </div>
        ))}

        {/* Slide content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              {/* Eyebrow */}
              <p className="text-xs font-semibold tracking-widest uppercase text-blue-200 mb-3">
                {heroSlides[currentSlide].eyebrow}
              </p>
              {/* Headline */}
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-5">
                {heroSlides[currentSlide].title}
                <br />
                <span style={{ color: '#5BB3E4' }}>
                  {heroSlides[currentSlide].accent}
                </span>
              </h1>
              {/* Description */}
              <p className="text-lg text-blue-50/90 mb-8 leading-relaxed max-w-xl">
                {heroSlides[currentSlide].description}
              </p>
              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/appointment"
                  className="theme-btn-primary px-7 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 theme-shadow-lg"
                >
                  <CalendarDaysIcon className="h-5 w-5" />
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-sm border border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2"
                >
                  Explore Services
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white p-2.5 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white p-2.5 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white w-6 h-2.5' : 'bg-white/45 w-2.5 h-2.5'
                }`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          QUICK ACTION CARDS  (overlap hero)
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative -mt-8 sm:-mt-14 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Call */}
            <a
              href="tel:+251911234567"
              className="theme-bg-card rounded-2xl p-5 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 group flex items-center gap-4 border-l-4 border-green-500 hover:border-green-600"
            >
              <div className="bg-green-50 group-hover:bg-green-500 p-3.5 rounded-xl transition-colors flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="font-bold theme-text-primary text-base">Call Us</p>
                <p className="theme-text-primary-brand font-semibold text-sm truncate">+251 911 234 567</p>
                <p className="text-xs theme-text-muted">Always ready to help</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/251911234567"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-bg-card rounded-2xl p-5 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 group flex items-center gap-4 border-l-4 border-green-500 hover:border-green-600"
            >
              <div className="bg-green-50 group-hover:bg-green-500 p-3.5 rounded-xl transition-colors flex-shrink-0">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="font-bold theme-text-primary text-base">WhatsApp</p>
                <p className="theme-text-primary-brand font-semibold text-sm truncate">+251 911 234 567</p>
                <p className="text-xs theme-text-muted">Chat with us anytime</p>
              </div>
            </a>

            {/* Book Appointment */}
            <Link
              to="/appointment"
              className="theme-bg-card rounded-2xl p-5 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 group flex items-center gap-4 border-l-4 border-guardians-navy hover:border-guardians-cyan"
            >
              <div className="theme-icon-bg-navy group-hover:bg-guardians-navy p-3.5 rounded-xl transition-colors flex-shrink-0">
                <CalendarDaysIcon className="h-6 w-6 theme-icon-navy group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="font-bold theme-text-primary text-base">Book Appointment</p>
                <p className="theme-text-primary-brand font-semibold text-sm">Schedule your visit</p>
                <p className="text-xs theme-text-muted">Quick & easy online</p>
              </div>
            </Link>

            {/* Home Collection */}
            <Link
              to="/home-collection"
              className="theme-bg-card rounded-2xl p-5 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 group flex items-center gap-4 border-l-4 border-purple-500 hover:border-purple-600"
            >
              <div className="bg-purple-50 group-hover:bg-purple-500 p-3.5 rounded-xl transition-colors flex-shrink-0">
                <HomeIcon className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="font-bold theme-text-primary text-base">Home Collection</p>
                <p className="theme-text-primary-brand font-semibold text-sm">We come to you</p>
                <p className="text-xs theme-text-muted">Safe & convenient</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHO WE ARE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div>
              <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
                Who We Are
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 leading-tight">
                Your Trusted Partner in{' '}
                <span className="highlight-word">Healthcare</span>{' '}
                Diagnostics
              </h2>
              <p className="theme-text-secondary text-lg leading-relaxed mb-5">
                Guardians Diagnostic Center is a professional diagnostic healthcare provider
                in Addis Ababa, Ethiopia. We are committed to making quality diagnostic
                services accessible, reliable, and convenient for individuals, families,
                and organizations.
              </p>
              <p className="theme-text-secondary leading-relaxed mb-8">
                From routine laboratory tests to digital X-ray, ultrasound, and ECG — all
                under one roof, with clear turnaround times and results you can trust.
              </p>

              {/* Three honest pillars */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { label: 'Professional', sub: 'Qualified medical team', border: 'border-guardians-navy' },
                  { label: 'Accessible', sub: 'Convenient & clear', border: 'border-guardians-cyan' },
                  { label: 'Trustworthy', sub: 'Accurate results', border: 'border-guardians-red' },
                ].map((p, i) => (
                  <div key={i} className={`theme-bg-card rounded-xl p-3 border-l-4 ${p.border} theme-shadow-sm text-center`}>
                    <p className="font-bold theme-text-primary text-sm">{p.label}</p>
                    <p className="text-xs theme-text-muted mt-0.5">{p.sub}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="theme-btn-primary px-7 py-3.5 rounded-lg inline-flex items-center gap-2 theme-shadow-md font-semibold"
              >
                Learn About Us
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Guardians Diagnostic Center facility"
                className="rounded-2xl theme-shadow-2xl w-full object-cover h-[420px]"
              />
              {/* Floating badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 theme-bg-card p-4 rounded-xl theme-shadow-lg border-l-4 border-guardians-navy items-center gap-3">
                <div className="theme-icon-bg-navy p-2.5 rounded-lg">
                  <ShieldCheckIcon className="h-6 w-6 theme-icon-navy" />
                </div>
                <div>
                  <p className="font-bold theme-text-primary text-sm">Based in Addis Ababa</p>
                  <p className="text-xs theme-text-secondary">Serving individuals & organizations</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
              Our Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">
              Comprehensive{' '}
              <span className="highlight-word">Diagnostic</span> Services
            </h2>
            <p className="theme-text-secondary max-w-xl mx-auto">
              All services are currently available at our center in Addis Ababa, with modern
              equipment and qualified medical staff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={i}
                to={s.link}
                className="theme-bg-card rounded-2xl p-6 theme-shadow-md hover:theme-shadow-xl transition-all duration-300 group border border-transparent hover:border-guardians-cyan flex gap-4 items-start"
              >
                <div className={`${s.iconBg} p-3 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform`}>
                  <s.icon className={`h-7 w-7 ${s.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-semibold theme-text-primary mb-1 group-hover:theme-text-primary-brand transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm theme-text-secondary leading-relaxed">{s.description}</p>
                  <span className="theme-text-primary-brand text-xs font-medium mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRightIcon className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="theme-btn-outline px-7 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PATIENT JOURNEY — How It Works
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
              Your Journey
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">
              How It Works
            </h2>
            <p className="theme-text-secondary max-w-xl mx-auto">
              From booking to receiving your results — a simple, clear process at every step.
            </p>
          </div>

          {/* Desktop — horizontal with connecting line */}
          <div className="hidden lg:grid grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div
              className="absolute top-10 left-[12.5%] right-[12.5%] h-px"
              style={{ background: 'linear-gradient(to right, #1A3A6B33, #5BB3E4, #1A3A6B33)' }}
            />
            {journeySteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                {/* Circle */}
                <div
                  className="w-20 h-20 rounded-full bg-white border-4 flex items-center justify-center theme-shadow-lg mb-4"
                  style={{ borderColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}
                >
                  <span
                    className="text-2xl font-black"
                    style={{ color: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="font-bold theme-text-primary text-lg mb-2">{step.title}</h3>
                <p className="text-sm theme-text-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile — vertical */}
          <div className="lg:hidden space-y-4">
            {journeySteps.map((step, i) => (
              <div
                key={i}
                className={`theme-bg-card rounded-xl p-5 border-l-4 ${step.border} theme-shadow-md flex items-start gap-4`}
              >
                <span className={`text-3xl font-black flex-shrink-0 leading-none mt-1 ${step.color}`}>
                  {step.number}
                </span>
                <div>
                  <h3 className="font-bold theme-text-primary mb-1">{step.title}</h3>
                  <p className="text-sm theme-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/appointment"
              className="theme-btn-primary px-7 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 theme-shadow-md"
            >
              <CalendarDaysIcon className="h-5 w-5" />
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary">
              Trusted. Reliable.{' '}
              <span className="highlight-word">Always Here</span> for You.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="theme-bg-card rounded-2xl p-6 text-center theme-shadow-md hover:theme-shadow-xl transition-all duration-300 border-t-4"
                style={{ borderColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}
              >
                <div className="theme-icon-bg-navy w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
                  <r.icon className="h-6 w-6 theme-icon-navy" />
                </div>
                <h3 className="font-bold theme-text-primary mb-2">{r.title}</h3>
                <p className="text-sm theme-text-secondary leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          HEALTH PACKAGES  (preview)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
              Health Packages
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">
              Screening{' '}
              <span className="highlight-word">Packages</span> for Everyone
            </h2>
            <p className="theme-text-secondary max-w-xl mx-auto">
              Preventive health screening packages for individuals, families, and organizations —
              from essential checks to comprehensive assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                name: 'Basic Health Screening',
                price: 'From ETB 2,500',
                description: 'Essential tests for routine health monitoring. Ideal for adults 18–40.',
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                badge: null,
                tests: ['Complete Blood Count', 'Blood Sugar', 'Lipid Profile', 'Urine Analysis'],
              },
              {
                name: 'Comprehensive Screening',
                price: 'From ETB 6,500',
                description: 'Full assessment for overall well-being. Recommended for adults 40+.',
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                badge: 'Most Popular',
                tests: ['Full Blood Panel', 'Thyroid Function', 'Cardiac Markers', 'Chest X-Ray', 'ECG', 'Ultrasound'],
              },
              {
                name: 'Pre-Employment Screening',
                price: 'From ETB 3,000',
                description: 'Required medical tests for employment and occupational health clearance.',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                badge: null,
                tests: ['Physical Examination', 'Chest X-Ray', 'CBC & Urine', 'HIV & Hepatitis Screening'],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className="theme-bg-card rounded-2xl overflow-hidden theme-shadow-lg hover:theme-shadow-2xl transition-all duration-300 relative flex flex-col"
              >
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-guardians-navy text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <StarIcon className="h-3 w-3" />
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <div className="h-44 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold theme-text-primary text-lg mb-1">{pkg.name}</h3>
                  <p className="text-sm theme-text-secondary mb-4 leading-relaxed">{pkg.description}</p>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {pkg.tests.map((t, ti) => (
                      <li key={ti} className="flex items-center gap-2 text-sm theme-text-secondary">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t theme-border">
                    <span className="font-bold theme-text-primary-brand text-lg">{pkg.price}</span>
                    <Link
                      to="/packages"
                      className="theme-btn-primary px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      View Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="theme-btn-primary px-7 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 theme-shadow-md"
            >
              See All Packages
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CORPORATE SERVICES
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Corporate health services"
                className="rounded-2xl theme-shadow-2xl w-full object-cover h-[420px]"
              />
            </div>

            {/* Text */}
            <div>
              <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
                Corporate Services
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-5">
                Healthcare{' '}
                <span className="highlight-word">Solutions</span> for Organizations
              </h2>
              <p className="theme-text-secondary text-lg leading-relaxed mb-6">
                We provide workplace health solutions for companies, NGOs, schools, factories,
                and government institutions — helping organizations keep their teams healthy,
                productive, and compliant.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Pre-Employment Screening',
                  'Employee Health Checks',
                  'Occupational Health',
                  'On-Site Mobile Clinic',
                  'Institutional Screening',
                  'Periodic Checkups',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm theme-text-secondary">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/corporate"
                  className="theme-btn-primary px-7 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 theme-shadow-md"
                >
                  Corporate Services
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  to="/appointment"
                  className="theme-btn-outline px-7 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          HOME SAMPLE COLLECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div className="text-white">
              <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-2">
                Home Sample Collection
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-5">
                We Come{' '}
                <span style={{ color: '#5BB3E4' }}>to You</span>
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Can't make it to our center? Our trained team comes to your home or office to
                collect samples — safe, professional, and at your convenience.
              </p>

              {/* Steps */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { n: '1', t: 'Request', d: 'Submit online, call, or WhatsApp' },
                  { n: '2', t: 'Schedule', d: 'We confirm a convenient time' },
                  { n: '3', t: 'Collection', d: 'Our team visits your location' },
                  { n: '4', t: 'Results', d: 'Same quality, same turnaround' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-l-4 border-guardians-cyan">
                    <p className="text-xl font-bold text-blue-200 mb-0.5">{s.n}</p>
                    <p className="font-semibold text-white text-sm mb-0.5">{s.t}</p>
                    <p className="text-blue-100 text-xs">{s.d}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/home-collection"
                className="bg-white font-bold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors theme-shadow-lg"
                style={{ color: '#1A3A6B' }}
              >
                <HomeIcon className="h-5 w-5" />
                Request Home Collection
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Home sample collection"
                className="rounded-2xl shadow-2xl w-full object-cover h-[420px]"
              />
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg border-l-4 items-center gap-3"
                style={{ borderColor: '#5BB3E4' }}>
                <div className="theme-icon-bg-cyan p-2.5 rounded-lg">
                  <ClockIcon className="h-5 w-5 theme-icon-cyan" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Available Daily</p>
                  <p className="text-xs text-gray-600">7:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          HEALTH ARTICLES  (preview)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
              Health Resources
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">
              Health{' '}
              <span className="highlight-word">Education</span>
            </h2>
            <p className="theme-text-secondary max-w-xl mx-auto">
              Helpful articles and guides from our medical team to support informed health decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {articles.map((a, i) => (
              <article key={i} className="theme-bg-card rounded-2xl overflow-hidden theme-shadow-md hover:theme-shadow-xl transition-all duration-300 border border-transparent hover:border-guardians-cyan">
                <div className="h-44 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="theme-icon-bg-navy theme-text-primary-brand text-xs font-semibold px-2.5 py-1 rounded-full">
                      {a.category}
                    </span>
                    <span className="text-xs theme-text-muted">{a.readTime}</span>
                  </div>
                  <h3 className="font-bold theme-text-primary mb-3 leading-snug">{a.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-guardians-navy/10 flex items-center justify-center">
                      <BookOpenIcon className="h-3.5 w-3.5 theme-text-primary-brand" />
                    </div>
                    <span className="text-xs theme-text-secondary">{a.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="theme-btn-outline px-7 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              View All Articles
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CALL TO ACTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 lg:p-14 text-center text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D2245 100%)' }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3"
              style={{ background: '#5BB3E4' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 translate-y-1/2 -translate-x-1/3"
              style={{ background: '#5BB3E4' }} />

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Take Care of Your Health?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Book an appointment today and experience professional, accurate, and caring
                diagnostic services in Addis Ababa.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/appointment"
                  className="bg-white font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2 theme-shadow-lg"
                  style={{ color: '#1A3A6B' }}
                >
                  <CalendarDaysIcon className="h-5 w-5" />
                  Book an Appointment
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2"
                >
                  Explore Services
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LOCATION & CONTACT
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
              Find Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">
              Location &amp;{' '}
              <span className="highlight-word">Contact</span>
            </h2>
            <p className="theme-text-secondary max-w-xl mx-auto">
              Visit us in Addis Ababa or get in touch — we are always ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden theme-shadow-xl min-h-80">
              <iframe
                title="Guardians Diagnostic Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7969!3d9.0154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNTUuNCJOIDM4wrA0Nyc0OS4wIkU!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {[
                {
                  icon: MapPinIcon,
                  title: 'Our Address',
                  lines: ['Bole Sub-City, Addis Ababa', 'Near Bole International Airport', 'Ethiopia'],
                  border: 'border-guardians-navy',
                  iconBg: 'theme-icon-bg-navy',
                  iconClass: 'theme-icon-navy',
                },
                {
                  icon: PhoneIcon,
                  title: 'Phone & WhatsApp',
                  lines: ['+251 911 234 567', '+251 11 123 4567'],
                  border: 'border-green-500',
                  iconBg: 'bg-green-50',
                  iconClass: 'text-green-600',
                },
                {
                  icon: EnvelopeIcon,
                  title: 'Email',
                  lines: ['info@guardians-diagnostic.com'],
                  border: 'border-guardians-cyan',
                  iconBg: 'theme-icon-bg-cyan',
                  iconClass: 'theme-icon-cyan',
                },
                {
                  icon: ClockIcon,
                  title: 'Working Hours',
                  lines: ['Mon – Fri: 7:00 AM – 8:00 PM', 'Saturday: 8:00 AM – 6:00 PM', 'Sunday: 9:00 AM – 2:00 PM'],
                  border: 'border-purple-400',
                  iconBg: 'bg-purple-50',
                  iconClass: 'text-purple-600',
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`theme-bg-card rounded-xl p-4 flex items-start gap-4 theme-shadow-sm border-l-4 ${c.border}`}
                >
                  <div className={`${c.iconBg} p-2.5 rounded-lg flex-shrink-0`}>
                    <c.icon className={`h-5 w-5 ${c.iconClass}`} />
                  </div>
                  <div>
                    <p className="font-semibold theme-text-primary text-sm mb-0.5">{c.title}</p>
                    {c.lines.map((l, li) => (
                      <p key={li} className="text-sm theme-text-secondary">{l}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                <a
                  href="tel:+251911234567"
                  className="theme-btn-primary flex-1 py-3 rounded-lg font-semibold text-center inline-flex items-center justify-center gap-2 theme-shadow-md"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call Now
                </a>
                <Link
                  to="/contact"
                  className="theme-btn-outline flex-1 py-3 rounded-lg font-semibold text-center inline-flex items-center justify-center gap-2"
                >
                  Get Directions
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NEWSLETTER + EMERGENCY
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Newsletter */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100 mb-5">
                Subscribe for health tips, service updates, and news from Guardians.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 text-sm focus:outline-none"
                />
                <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-3 rounded-r-lg border-l border-white/20 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
              <p className="text-blue-200 text-xs mt-2">No spam. Unsubscribe anytime.</p>
            </div>

            {/* Emergency */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Emergency</h3>
              <p className="text-blue-100 mb-5">
                For urgent diagnostic services, our emergency line is available 24/7.
              </p>
              <a
                href="tel:+251911000911"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 transition-colors theme-shadow-lg"
              >
                <PhoneIcon className="h-5 w-5" />
                Emergency: +251 911 000 911
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
