import { Link } from 'react-router-dom';
import {
  HeartIcon,
  EyeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

/* ─── Values ────────────────────────────────────────────────────────── */
const values = [
  {
    icon: HeartIcon,
    title: 'Compassionate Care',
    description: 'Every patient is treated with empathy, respect, and dignity throughout their healthcare journey.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality & Accuracy',
    description: 'We maintain high standards of quality in our diagnostic services, ensuring reliable results.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: UserGroupIcon,
    title: 'Professional Excellence',
    description: 'Our qualified medical team is committed to continuous learning and excellence in patient care.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: ClockIcon,
    title: 'Accessibility',
    description: 'We strive to make quality healthcare accessible and convenient for all members of our community.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

/* ─── Commitments ───────────────────────────────────────────────────── */
const commitments = [
  {
    number: '01',
    title: 'Accurate Results, Every Time',
    description: 'We use modern equipment and rigorous quality control to deliver reliable, accurate diagnostic results.',
    border: 'border-guardians-navy',
  },
  {
    number: '02',
    title: 'Clear Turnaround Times',
    description: 'We respect your time. You always know when to expect your results — no guessing.',
    border: 'border-guardians-cyan',
  },
  {
    number: '03',
    title: 'Respectful, Dignified Treatment',
    description: 'Every patient is treated with professionalism and compassion regardless of background or condition.',
    border: 'border-guardians-red',
  },
  {
    number: '04',
    title: 'Clear Communication',
    description: 'We ensure you understand your results, your options, and your next steps — in plain language.',
    border: 'border-guardians-cyan',
  },
  {
    number: '05',
    title: 'Privacy & Confidentiality',
    description: 'Your health information is protected and shared only with your explicit consent.',
    border: 'border-guardians-navy',
  },
];

/* ─── Future vision ─────────────────────────────────────────────────── */
const futurePlans = [
  {
    icon: BuildingOffice2Icon,
    title: 'Advanced Imaging',
    description: 'CT scanning, MRI, and mammography services planned as the center grows.',
    timeframe: '2027–2028',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    border: 'border-guardians-navy',
  },
  {
    icon: UserGroupIcon,
    title: 'Specialized Clinics',
    description: "Dedicated clinics for cardiology, women's health, and pediatrics.",
    timeframe: '2028',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    border: 'border-guardians-cyan',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Expanded Laboratory',
    description: 'Broader molecular diagnostics, genetic testing, and specialized panels.',
    timeframe: '2027',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    border: 'border-guardians-navy',
  },
  {
    icon: EyeIcon,
    title: 'Regional Network',
    description: 'Satellite diagnostic centers across Ethiopia to serve more communities.',
    timeframe: '2029+',
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    border: 'border-guardians-cyan',
  },
  {
    icon: ClockIcon,
    title: 'Online Patient Portal',
    description: 'Secure digital access to results, appointments, and health records.',
    timeframe: '2027',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
    border: 'border-guardians-navy',
  },
  {
    icon: HeartIcon,
    title: 'Hospital Services',
    description: 'Long-term vision to grow into a full-service hospital.',
    timeframe: '2030+',
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    border: 'border-guardians-red',
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const About = () => (
  <div className="theme-bg-background">

    {/* ── Hero ─────────────────────────────────────────────────────── */}
    <section className="relative h-[480px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="About Guardians Diagnostic Center"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/15" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-2xl">
            <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">
              About Guardians
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Professional. Accessible.{' '}
              <span style={{ color: '#5BB3E4' }}>Trustworthy.</span>
            </h1>
            <p className="text-lg text-blue-50/90 mb-8 leading-relaxed max-w-xl">
              Learn about our mission, values, and commitment to providing quality
              diagnostic healthcare in Addis Ababa, Ethiopia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/appointment" className="theme-btn-primary px-7 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 theme-shadow-lg">
                <CalendarDaysIcon className="h-5 w-5" />
                Book Appointment
              </Link>
              <Link to="/services" className="bg-white/10 border border-white/50 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2">
                Our Services
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Who We Are ───────────────────────────────────────────────── */}
    <section className="py-20 theme-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Who We Are</p>
            <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 leading-tight">
              A Professional Diagnostic Center Built for Ethiopia
            </h2>
            <p className="theme-text-secondary text-lg leading-relaxed mb-5">
              Guardians Diagnostic Center is a modern diagnostic healthcare provider based in
              Addis Ababa, Ethiopia. We are committed to making quality diagnostic services
              accessible, reliable, and convenient for individuals, families, and organizations
              across the country.
            </p>
            <p className="theme-text-secondary leading-relaxed mb-8">
              We combine modern medical equipment with a team of qualified, experienced
              healthcare professionals to deliver accurate results and compassionate patient care
              — all under one roof. Whether you need a routine laboratory test, diagnostic
              imaging, or a comprehensive health screening package, Guardians is here to support
              your health journey.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Professional', sub: 'Qualified medical team', border: 'border-guardians-navy' },
                { label: 'Accessible', sub: 'Convenient & affordable', border: 'border-guardians-cyan' },
                { label: 'Trustworthy', sub: 'Accurate & reliable', border: 'border-guardians-red' },
              ].map((p, i) => (
                <div key={i} className={`theme-bg-card rounded-xl p-3 border-l-4 ${p.border} theme-shadow-sm text-center`}>
                  <p className="font-bold theme-text-primary text-sm">{p.label}</p>
                  <p className="text-xs theme-text-muted mt-0.5">{p.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Guardians Diagnostic Center"
              className="rounded-2xl theme-shadow-2xl w-full h-[420px] object-cover"
            />
            <div className="hidden sm:flex absolute -bottom-5 -left-5 theme-bg-card p-4 rounded-xl theme-shadow-lg border-l-4 border-guardians-navy items-center gap-3">
              <div className="theme-icon-bg-navy p-2.5 rounded-lg">
                <ShieldCheckIcon className="h-6 w-6 theme-icon-navy" />
              </div>
              <div>
                <p className="font-bold theme-text-primary text-sm">Est. 2026</p>
                <p className="text-xs theme-text-secondary">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Mission ──────────────────────────────────────────────────── */}
    <section className="py-20 theme-bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Medical professionals"
              className="rounded-2xl theme-shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Our Mission</p>
            <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 leading-tight">
              Providing Excellence in Healthcare Diagnostics
            </h2>
            <p className="theme-text-secondary text-lg leading-relaxed mb-6">
              Our mission is to deliver the highest quality diagnostic services with compassion,
              accuracy, and professionalism — supporting healthcare providers and patients with
              reliable, timely, and comprehensive diagnostic solutions.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Patient-Centered Care', sub: 'Every decision prioritizes patient comfort and outcomes', border: 'border-guardians-navy' },
                { title: 'Advanced Technology', sub: 'Modern equipment ensuring accurate and reliable results', border: 'border-guardians-cyan' },
                { title: 'Professional Excellence', sub: 'Continuous training and development of our medical team', border: 'border-guardians-red' },
              ].map((c, i) => (
                <div key={i} className={`theme-bg-card p-4 rounded-xl theme-shadow-sm border-l-4 ${c.border} flex items-start gap-3`}>
                  <CheckCircleIcon className="h-5 w-5 theme-icon-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold theme-text-primary text-sm">{c.title}</p>
                    <p className="text-xs theme-text-secondary mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Vision ───────────────────────────────────────────────────── */}
    <section className="py-20 theme-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Our Vision</p>
            <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 leading-tight">
              Leading Healthcare Diagnostics in Ethiopia
            </h2>
            <p className="theme-text-secondary text-lg leading-relaxed mb-7">
              Our vision is to become Ethiopia's most trusted diagnostic healthcare provider —
              a center of excellence that sets the standard for accuracy, accessibility, and
              patient experience.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Be the most trusted diagnostic center in Ethiopia', icon: ShieldCheckIcon, border: 'border-guardians-navy' },
                { title: 'Make quality diagnostics accessible to every Ethiopian', icon: UserGroupIcon, border: 'border-guardians-cyan' },
                { title: 'Continuously raise the standard of healthcare diagnostics', icon: EyeIcon, border: 'border-guardians-red' },
                { title: 'Grow into a regional network serving more communities', icon: BuildingOffice2Icon, border: 'border-guardians-navy' },
              ].map((v, i) => (
                <div key={i} className={`theme-bg-card p-4 rounded-xl theme-shadow-sm border-l-4 ${v.border} flex items-center gap-3`}>
                  <div className="theme-icon-bg-navy p-2 rounded-lg flex-shrink-0">
                    <v.icon className="h-5 w-5 theme-icon-navy" />
                  </div>
                  <p className="theme-text-primary font-medium text-sm">{v.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Vision"
              className="rounded-2xl theme-shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="hidden sm:flex absolute -bottom-5 -right-5 theme-bg-card p-4 rounded-xl theme-shadow-lg border-l-4 border-guardians-cyan items-center gap-3">
              <div className="theme-icon-bg-cyan p-2.5 rounded-lg">
                <EyeIcon className="h-5 w-5 theme-icon-cyan" />
              </div>
              <div>
                <p className="font-bold theme-text-primary text-sm">Our Vision</p>
                <p className="text-xs theme-text-secondary">Ethiopia's most trusted diagnostics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Values ───────────────────────────────────────────────────── */}
    <section className="py-20 theme-bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Our Values</p>
          <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">What Drives Us Every Day</h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            Our core values guide every patient interaction, every test result, and every decision we make.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="theme-bg-card rounded-2xl p-6 text-center theme-shadow-md hover:theme-shadow-xl transition-all duration-300 border-t-4"
              style={{ borderColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}
            >
              <div className={`${v.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                <v.icon className={`h-8 w-8 ${v.color}`} />
              </div>
              <h3 className="font-bold theme-text-primary mb-2">{v.title}</h3>
              <p className="text-sm theme-text-secondary leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Road map (honest, forward-looking) ───────────────────────── */}
    <section className="py-20 theme-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Our Journey</p>
          <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">Growing to Serve You Better</h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            Guardians launched in 2026 with a clear roadmap for growth. Here is where we are and where we are heading.
          </p>
        </div>

        <div className="space-y-10">
          {/* 2026 — Launch (current) */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden theme-shadow-lg border-l-4 border-guardians-navy h-64">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="2026 Launch"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-guardians-navy text-white font-bold px-4 py-1.5 rounded-lg text-sm">2026</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Now Open</span>
              </div>
              <h3 className="text-2xl font-bold theme-text-primary mb-3">Foundation & Launch</h3>
              <p className="theme-text-secondary leading-relaxed">
                Guardians Diagnostic Center opens with comprehensive laboratory services,
                digital X-ray, ultrasound, ECG, general consultation, and health screening
                packages — serving individuals, families, and organizations in Addis Ababa.
              </p>
            </div>
          </div>

          {/* Planned expansions */}
          {[
            {
              year: '2027',
              title: 'Expansion Phase 1',
              desc: 'Addition of advanced diagnostic imaging services, expanded laboratory capabilities, and an online patient portal.',
              img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            },
            {
              year: '2028',
              title: 'Specialized Clinics',
              desc: 'Launch of specialized medical clinics including cardiology, women\'s health, and expanded consultation services.',
              img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            },
            {
              year: '2029+',
              title: 'Regional Network',
              desc: 'Expansion of satellite diagnostic centers across Ethiopia to serve more communities with accessible, quality care.',
              img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col gap-8 items-center ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden border-l-4 border-orange-400 h-64">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="theme-bg-surface theme-text-secondary font-bold px-4 py-1.5 rounded-lg text-sm border theme-border">
                    {item.year}
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">Planned</span>
                </div>
                <h3 className="text-2xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Our commitment to patients ────────────────────────────────── */}
    <section className="py-20 theme-bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Our Commitment</p>
          <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">Our Commitment to Patients</h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            Every patient who visits Guardians deserves the best possible care. These are the promises we make and keep.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-4">
            {commitments.map((c, i) => (
              <div key={i} className={`theme-bg-card rounded-xl p-5 theme-shadow-sm border-l-4 ${c.border} flex items-start gap-4`}>
                <span className="text-3xl font-black theme-text-primary-brand opacity-25 flex-shrink-0 leading-none mt-0.5">
                  {c.number}
                </span>
                <div>
                  <h3 className="font-bold theme-text-primary mb-1">{c.title}</h3>
                  <p className="text-sm theme-text-secondary leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Commitment to patients"
              className="rounded-2xl theme-shadow-2xl w-full h-[480px] object-cover"
            />
            <div className="hidden sm:flex absolute -bottom-5 -right-5 theme-bg-card p-4 rounded-xl theme-shadow-lg border-l-4 border-guardians-cyan items-center gap-3">
              <div className="theme-icon-bg-cyan p-2.5 rounded-lg">
                <CheckCircleIcon className="h-5 w-5 theme-icon-cyan" />
              </div>
              <div>
                <p className="font-bold theme-text-primary text-sm">Patient-First</p>
                <p className="text-xs theme-text-secondary">Always our top priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Future Vision grid ────────────────────────────────────────── */}
    <section className="py-20 theme-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Looking Ahead</p>
          <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-3">Planned Future Services</h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            These services are not yet available. They represent our growth roadmap as Guardians
            expands over the coming years.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {futurePlans.map((p, i) => (
            <div key={i} className={`theme-bg-card rounded-2xl p-5 border-l-4 ${p.border} theme-shadow-sm hover:theme-shadow-md transition-all`}>
              <div className={`${p.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <p.icon className={`h-6 w-6 ${p.iconColor}`} />
              </div>
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h3 className="font-bold theme-text-primary">{p.title}</h3>
                <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {p.timeframe}
                </span>
              </div>
              <p className="text-sm theme-text-secondary leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="rounded-2xl p-8 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D2245 100%)' }}
        >
          <h3 className="text-xl font-bold mb-3">Building for the Future, Serving You Today</h3>
          <p className="text-blue-100 max-w-xl mx-auto mb-6 text-sm">
            Our website and systems are designed to grow alongside Guardians — flexible enough to
            expand as we add new services, locations, and capabilities over time.
          </p>
          <Link
            to="/services"
            className="bg-white font-bold px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2 theme-shadow-lg"
            style={{ color: '#1A3A6B' }}
          >
            Explore Current Services
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────────────────── */}
    <section className="py-16 theme-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Experience Quality Healthcare?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
          Book an appointment and experience professional, accurate, and caring diagnostic
          services in Addis Ababa.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/appointment"
            className="bg-white font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2 theme-shadow-lg"
            style={{ color: '#1A3A6B' }}
          >
            <CalendarDaysIcon className="h-5 w-5" />
            Book Your Appointment
          </Link>
          <Link
            to="/contact"
            className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>

  </div>
);

export default About;
