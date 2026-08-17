import { Link } from 'react-router-dom';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  PhoneIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

/* ─── Individual packages ───────────────────────────────────────────── */
const packages = [
  {
    id: 'basic',
    name: 'Basic Health Screening',
    badge: null,
    price: 'From ETB 2,500',
    priceNote: 'Indicative price — contact us for exact quote',
    target: 'Adults 18–40, routine check',
    duration: '1.5 – 2 hours',
    reportTime: 'Same day',
    description:
      'Essential tests for routine health monitoring. Ideal for young adults or anyone wanting a general health overview.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Complete Blood Count (CBC)',
      'Random Blood Glucose',
      'Lipid Profile',
      'Liver Function Tests',
      'Kidney Function Tests',
      'Urinalysis',
      'HIV Screening',
      'Hepatitis B Screening',
    ],
    includes: ['Written results report', 'Doctor review available', 'Same-day results'],
    border: 'border-guardians-navy',
    accent: '#1A3A6B',
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Screening',
    badge: 'Most Popular',
    price: 'From ETB 6,500',
    priceNote: 'Indicative price — contact us for exact quote',
    target: 'Adults 40+, or anyone seeking full assessment',
    duration: '2.5 – 3 hours',
    reportTime: '1–2 days',
    description:
      'A full health assessment covering all major organ systems. Recommended for adults over 40 or anyone seeking comprehensive insight into their health status.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Complete Blood Count',
      'Fasting Blood Glucose & HbA1c',
      'Full Lipid Profile',
      'Liver Function Tests',
      'Kidney Function Tests',
      'Thyroid Function Tests (TSH, T3, T4)',
      'Cardiac Enzymes',
      'Electrolytes',
      'Urinalysis',
      'Stool Examination',
      'HIV & Hepatitis B & C',
      'Chest X-Ray',
      'ECG',
      'Abdominal Ultrasound',
    ],
    includes: ['Full written report', 'Doctor consultation included', 'Results in 1–2 days', 'Findings summary'],
    border: 'border-guardians-cyan',
    accent: '#5BB3E4',
  },
  {
    id: 'preemployment',
    name: 'Pre-Employment Screening',
    badge: null,
    price: 'From ETB 3,000',
    priceNote: 'Indicative price — contact us for exact quote',
    target: 'Job applicants, employment medicals',
    duration: '2 – 2.5 hours',
    reportTime: 'Same day – 1 day',
    description:
      'Required medical tests for employment and occupational health clearance. Meets standard requirements for most employers in Ethiopia.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Physical Examination',
      'Chest X-Ray',
      'Complete Blood Count',
      'Blood Glucose',
      'Urinalysis',
      'HIV Screening',
      'Hepatitis B Screening',
      'Stool Examination',
    ],
    includes: ['Official medical certificate', 'Stamped results report', 'Suitable for most employers'],
    border: 'border-guardians-navy',
    accent: '#1A3A6B',
  },
  {
    id: 'executive',
    name: 'Executive Health Package',
    badge: 'Premium',
    price: 'From ETB 12,500',
    priceNote: 'Indicative price — contact us for exact quote',
    target: 'Senior professionals, executives',
    duration: '3 – 4 hours',
    reportTime: '1–2 days',
    description:
      'Our most comprehensive package — a thorough evaluation of all body systems with cardiologist review, full imaging, and a personal consultation with your results.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'All Comprehensive Package tests +',
      'PSA (men) / CA-125 (women)',
      'Full Blood Count with Differential',
      'Vitamin D & B12 Levels',
      'Iron Studies',
      'C-Reactive Protein (CRP)',
      'Pelvic or Abdominal Ultrasound',
      'Echocardiogram (if indicated)',
      'Specialist Cardiologist Review',
    ],
    includes: ['Priority scheduling', 'Personal results consultation', 'Cardiologist ECG review', 'Premium results booklet'],
    border: 'border-guardians-cyan',
    accent: '#5BB3E4',
  },
  {
    id: 'womens',
    name: "Women's Health Screening",
    badge: null,
    price: 'From ETB 5,500',
    priceNote: 'Indicative price — contact us for exact quote',
    target: 'Women 25+',
    duration: '2 – 3 hours',
    reportTime: '1–2 days',
    description:
      "A health screening package focused on women's specific health needs — covering hormonal health, reproductive health, and general wellness.",
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Complete Blood Count',
      'Blood Glucose & HbA1c',
      'Lipid Profile',
      'Thyroid Function Tests',
      'Hormonal Panel (FSH, LH, Estradiol)',
      'CA-125 (Ovarian Marker)',
      'Iron Studies',
      'Pelvic Ultrasound',
      'Urinalysis',
      'HIV & Hepatitis Screening',
    ],
    includes: ['Women\'s health report', 'Doctor consultation', 'Results in 1–2 days'],
    border: 'border-guardians-red',
    accent: '#E8392A',
  },
  {
    id: 'senior',
    name: 'Senior Citizen Screening',
    badge: null,
    price: 'From ETB 4,800',
    priceNote: 'Indicative price — contact us for exact quote',
    target: 'Adults 60+',
    duration: '2.5 – 3 hours',
    reportTime: '1–2 days',
    description:
      'Tailored for older adults, this package focuses on age-related health risks and chronic disease monitoring for proactive health management.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Complete Blood Count',
      'Fasting Blood Glucose & HbA1c',
      'Full Lipid Profile',
      'Kidney & Liver Function',
      'Thyroid Function Tests',
      'Electrolytes',
      'Bone Profile (Calcium, Phosphate)',
      'Vitamin D',
      'Chest X-Ray',
      'ECG',
      'Abdominal Ultrasound',
    ],
    includes: ['Senior health report', 'Doctor consultation', 'Chronic disease monitoring focus'],
    border: 'border-guardians-navy',
    accent: '#1A3A6B',
  },
];

/* ─── Corporate packages ────────────────────────────────────────────── */
const corporatePackages = [
  {
    name: 'Business Package',
    price: 'From ETB 2,200',
    unit: 'per employee',
    minGroup: 'Min. 10 employees',
    tests: ['CBC', 'Blood Glucose', 'Chest X-Ray', 'HIV & Hepatitis', 'Urinalysis', 'Physical Exam'],
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise Package',
    price: 'From ETB 1,800',
    unit: 'per employee',
    minGroup: 'Min. 50 employees',
    tests: ['CBC', 'Blood Glucose', 'Chest X-Ray', 'HIV & Hepatitis', 'Urinalysis'],
    badge: null,
  },
];

/* ─── Benefits ──────────────────────────────────────────────────────── */
const benefits = [
  { icon: ShieldCheckIcon, title: 'Preventive Care', desc: 'Detect health risks before symptoms appear.' },
  { icon: ClockIcon,       title: 'Time Efficient',  desc: 'All tests in one visit, one report.' },
  { icon: UserGroupIcon,   title: 'Expert Analysis', desc: 'Results reviewed by qualified professionals.' },
  { icon: HeartIcon,       title: 'Peace of Mind',   desc: 'Know your health status with confidence.' },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const HealthPackages = () => (
  <div className="theme-bg-background">

    {/* Hero */}
    <section className="relative min-h-[280px] sm:min-h-[400px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Health Packages"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
      <div className="relative flex items-center min-h-[280px] sm:min-h-[400px] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-white max-w-2xl">
            <p className="text-blue-200 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">Health Packages</p>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight">
              Preventive Health{' '}
              <span style={{ color: '#5BB3E4' }}>Screening Packages</span>
            </h1>
            <p className="text-blue-50/90 text-sm sm:text-lg mb-5 sm:mb-8 max-w-xl leading-relaxed">
              Comprehensive health screening packages for individuals, families, and organizations.
              Prices shown are indicative — contact us for exact quotes.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
              <Link to="/appointment" className="theme-btn-primary px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg font-semibold inline-flex items-center justify-center gap-2 theme-shadow-lg text-sm sm:text-base">
                <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" /> Book a Package
              </Link>
              <a href="tel:+251911234567" className="bg-white/10 border border-white/50 text-white font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" /> Call for Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Price note banner */}
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <p className="text-amber-800 text-sm text-center">
          <strong>Note:</strong> All prices are indicative starting prices. Final pricing depends on selected tests and group size.
          Contact us for an accurate quote: <a href="tel:+251911234567" className="font-semibold underline">+251 911 234 567</a>
        </p>
      </div>
    </div>

    {/* Benefits */}
    <section className="py-14 theme-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="theme-bg-card rounded-2xl p-5 text-center theme-shadow-md border-t-4"
              style={{ borderColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}>
              <div className="theme-icon-bg-navy w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <b.icon className="h-6 w-6 theme-icon-navy" />
              </div>
              <h3 className="font-bold theme-text-primary text-sm mb-1">{b.title}</h3>
              <p className="text-xs theme-text-secondary leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Individual packages */}
    <section className="py-14 theme-bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Individual Packages</p>
          <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">
            Choose the Right Package for You
          </h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            All packages include a written results report. A doctor consultation is available
            for all packages upon request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`theme-bg-card rounded-2xl overflow-hidden theme-shadow-lg hover:theme-shadow-2xl transition-all duration-300 flex flex-col border-t-4 relative`}
              style={{ borderColor: pkg.accent }}
            >
              {pkg.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                    style={{ backgroundColor: pkg.accent }}
                  >
                    <StarIcon className="h-3 w-3" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold theme-text-primary text-lg mb-1">{pkg.name}</h3>
                <p className="text-xs theme-text-muted mb-3">{pkg.target}</p>
                <p className="text-sm theme-text-secondary leading-relaxed mb-4">{pkg.description}</p>

                {/* Meta row */}
                <div className="flex gap-3 mb-4 flex-wrap">
                  <span className="flex items-center gap-1 text-xs theme-text-secondary">
                    <ClockIcon className="h-3.5 w-3.5" /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs theme-text-secondary">
                    <CheckCircleIcon className="h-3.5 w-3.5 text-green-500" /> Results: {pkg.reportTime}
                  </span>
                </div>

                {/* Tests */}
                <ul className="space-y-1.5 mb-4 flex-1">
                  {pkg.tests.slice(0, 5).map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm theme-text-secondary">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {t}
                    </li>
                  ))}
                  {pkg.tests.length > 5 && (
                    <li className="text-xs theme-text-primary-brand font-medium pl-6">
                      +{pkg.tests.length - 5} more tests included
                    </li>
                  )}
                </ul>

                {/* Includes chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pkg.includes.map((inc, i) => (
                    <span key={i} className="theme-bg-surface theme-text-secondary text-xs px-2.5 py-1 rounded-md border theme-border">
                      {inc}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="border-t theme-border pt-4 space-y-2">
                  <div>
                    <p className="font-bold theme-text-primary text-xl">{pkg.price}</p>
                    <p className="text-xs theme-text-muted">{pkg.priceNote}</p>
                  </div>
                  <Link
                    to="/appointment"
                    className="theme-btn-primary w-full py-3 rounded-lg text-sm font-semibold text-center block"
                  >
                    Book This Package
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Corporate packages */}
    <section className="py-14 theme-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">For Organizations</p>
          <h2 className="text-3xl font-bold theme-text-primary mb-3">Corporate Screening Packages</h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            Discounted group rates for companies, NGOs, schools, and government institutions.
            Minimum group sizes apply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-3xl mx-auto">
          {corporatePackages.map((pkg, i) => (
            <div
              key={i}
              className="theme-bg-card rounded-2xl p-7 theme-shadow-lg border-t-4 relative"
              style={{ borderColor: i === 0 ? '#5BB3E4' : '#1A3A6B' }}
            >
              {pkg.badge && (
                <span className="absolute top-4 right-4 bg-guardians-cyan text-white text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.badge}
                </span>
              )}
              <h3 className="font-bold theme-text-primary text-xl mb-1">{pkg.name}</h3>
              <p className="text-xs theme-text-muted mb-4">{pkg.minGroup}</p>
              <ul className="space-y-1.5 mb-6">
                {pkg.tests.map((t, ti) => (
                  <li key={ti} className="flex items-center gap-2 text-sm theme-text-secondary">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="border-t theme-border pt-4 space-y-2">
                <div>
                  <p className="font-bold theme-text-primary text-xl">{pkg.price}</p>
                  <p className="text-xs theme-text-muted">{pkg.unit} — indicative price</p>
                </div>
                <Link to="/corporate" className="theme-btn-primary w-full py-3 rounded-lg text-sm font-semibold text-center block">
                  Get a Corporate Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/corporate" className="theme-text-primary-brand font-semibold inline-flex items-center gap-2 hover:underline">
            View Full Corporate Services
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 theme-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Package to Choose?</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Call us or send a message — our team will help you find the right package for your
          health needs and budget.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/appointment" className="bg-white font-bold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors theme-shadow-lg" style={{ color: '#1A3A6B' }}>
            <CalendarDaysIcon className="h-5 w-5" /> Book Now
          </Link>
          <a href="tel:+251911234567" className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" /> Call Us
          </a>
        </div>
      </div>
    </section>

  </div>
);

export default HealthPackages;
