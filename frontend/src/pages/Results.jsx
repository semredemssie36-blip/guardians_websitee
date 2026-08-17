import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  InformationCircleIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  UserIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

/* ─── Turnaround times ──────────────────────────────────────────────── */
const turnaroundData = [
  { test: 'Complete Blood Count (CBC)',          time: 'Same day (2–4 hrs)',   badge: 'green' },
  { test: 'Blood Glucose (Random)',               time: 'Same day (1–2 hrs)',   badge: 'green' },
  { test: 'Fasting Blood Glucose & HbA1c',       time: 'Same day (3–5 hrs)',   badge: 'green' },
  { test: 'Lipid Profile',                        time: 'Same day (3–5 hrs)',   badge: 'green' },
  { test: 'Liver Function Tests',                 time: 'Same day (4–6 hrs)',   badge: 'green' },
  { test: 'Kidney Function Tests',                time: 'Same day (4–6 hrs)',   badge: 'green' },
  { test: 'Thyroid Function (TSH, T3, T4)',       time: '1–2 days',             badge: 'blue'  },
  { test: 'Hepatitis B & C Screening',            time: 'Same day (3–6 hrs)',   badge: 'green' },
  { test: 'HIV Screening',                        time: 'Same day (2–4 hrs)',   badge: 'green' },
  { test: 'Electrolytes',                         time: 'Same day (3–5 hrs)',   badge: 'green' },
  { test: 'Cardiac Enzymes',                      time: 'Same day (4–6 hrs)',   badge: 'green' },
  { test: 'Urinalysis',                           time: 'Same day (1–2 hrs)',   badge: 'green' },
  { test: 'Stool Examination',                    time: 'Same day (2–4 hrs)',   badge: 'green' },
  { test: 'Digital X-Ray',                        time: 'Same day (2–4 hrs)',   badge: 'green' },
  { test: 'Ultrasound (all types)',               time: 'Same day (1–3 hrs)',   badge: 'green' },
  { test: 'ECG',                                  time: '1–2 hours',            badge: 'green' },
  { test: 'Basic Screening Package',              time: 'Same day',             badge: 'green' },
  { test: 'Comprehensive Screening Package',      time: '1–2 days',             badge: 'purple'},
  { test: 'Pre-Employment Screening',             time: 'Same day – 1 day',     badge: 'blue'  },
  { test: 'Executive Health Package',             time: '1–2 days',             badge: 'purple'},
];

const badgeClasses = {
  green:  'bg-green-100 text-green-700',
  blue:   'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
};

/* ─── Collection methods ────────────────────────────────────────────── */
const methods = [
  {
    icon: UserIcon,
    title: 'Collect at Our Center',
    description: 'Visit us with your patient receipt and a valid photo ID during working hours. Results are printed and handed to you directly.',
    steps: ['Bring your patient receipt', 'Present valid photo ID', 'Collect your printed report at reception'],
    hours: 'Mon–Sat: 7 AM – 7 PM | Sun: 9 AM – 2 PM',
    border: 'border-guardians-navy',
    iconBg: 'theme-icon-bg-navy',
    iconClass: 'theme-icon-navy',
  },
  {
    icon: PhoneIcon,
    title: 'Phone Notification',
    description: 'We will call you when your results are ready. Please ensure we have your correct phone number when registering.',
    steps: ['We call you when results are ready', 'You then visit to collect your report', 'Alternatively arrange authorized collection'],
    hours: 'Notifications sent during working hours',
    border: 'border-green-500',
    iconBg: 'bg-green-50',
    iconClass: 'text-green-600',
  },
  {
    icon: DocumentTextIcon,
    title: 'Authorized Collection',
    description: 'A family member or trusted person may collect your results on your behalf with proper authorization.',
    steps: ['Write a signed authorization letter', 'Authorized person brings their own photo ID', 'Your patient receipt must also be presented'],
    hours: 'Same hours as center collection',
    border: 'border-guardians-cyan',
    iconBg: 'theme-icon-bg-cyan',
    iconClass: 'theme-icon-cyan',
  },
  {
    icon: CalendarDaysIcon,
    title: 'Doctor Review Available',
    description: 'Book a consultation to discuss your results with our doctor. Included in all health screening packages.',
    steps: ['Request when booking or at collection', 'Doctor explains each result clearly', 'Recommendations and referrals provided if needed'],
    hours: 'By appointment — call to schedule',
    border: 'border-purple-400',
    iconBg: 'bg-purple-50',
    iconClass: 'text-purple-600',
  },
];

/* ─── Collection rules ──────────────────────────────────────────────── */
const rules = [
  {
    icon: ShieldCheckIcon,
    title: 'Photo ID Required',
    description: 'Valid photo ID (national ID, passport, or driving licence) is required to collect results. This protects your privacy.',
    border: 'border-guardians-navy',
  },
  {
    icon: UserIcon,
    title: 'Authorized Collection Only',
    description: 'Results will only be released to you or a person with your written authorization. We do not release to unauthorized individuals.',
    border: 'border-guardians-cyan',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Strictly Confidential',
    description: 'Your results are never shared with third parties — including employers — without your explicit written consent.',
    border: 'border-guardians-red',
  },
  {
    icon: ClockIcon,
    title: 'Record Retention',
    description: 'Guardians retains patient records and results for a minimum of 7 years in compliance with Ethiopian health regulations.',
    border: 'border-guardians-navy',
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const Results = () => (
  <div className="theme-bg-background">

    {/* Hero */}
    <section className="relative min-h-[240px] sm:min-h-[340px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Test Results"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
      <div className="relative flex items-center min-h-[240px] sm:min-h-[340px] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-white max-w-2xl">
            <p className="text-blue-200 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
              Test Results
            </p>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Your{' '}
              <span style={{ color: '#5BB3E4' }}>Results</span>{' '}
              — Clearly Delivered
            </h1>
            <p className="text-blue-50/90 text-sm sm:text-lg max-w-xl leading-relaxed">
              Understand how and when to receive your diagnostic results, and
              what to do once you have them.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Future portal notice */}
    <div className="theme-bg-amber-50 border-b border-amber-200 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-start gap-3">
          <InformationCircleIcon className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Online results portal coming in a future phase.</strong>{' '}
            Currently, all results are collected in person at our center or via an
            authorized representative. We will notify you by phone when your results are ready.
          </p>
        </div>
      </div>
    </div>

    {/* Turnaround times */}
    <section className="py-14 theme-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
            Turnaround Times
          </p>
          <h2 className="text-3xl font-bold theme-text-primary mb-3">
            When Will Your Results Be Ready?
          </h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            We provide clear turnaround times for every test. Times shown are from sample
            collection to result availability. We will notify you by phone.
          </p>
        </div>

        <div className="theme-bg-card rounded-2xl overflow-hidden border theme-border theme-shadow-lg max-w-4xl mx-auto">
          {/* Table header */}
          <div
            className="grid grid-cols-2 px-5 py-3 text-white text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: '#1A3A6B' }}
          >
            <span>Test / Service</span>
            <span className="text-right">Turnaround Time</span>
          </div>
          {/* Rows */}
          {turnaroundData.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 px-5 py-3.5 items-center border-b theme-border last:border-b-0 ${
                i % 2 === 0 ? 'theme-bg-card' : 'theme-bg-surface'
              }`}
            >
              <span className="text-sm theme-text-primary font-medium">{row.test}</span>
              <span className="text-right">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClasses[row.badge]}`}>
                  {row.time}
                </span>
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs theme-text-muted mt-4">
          Times are indicative. Complex or repeat tests may take longer. We will always
          inform you of any delays.
        </p>
      </div>
    </section>

    {/* How to receive results */}
    <section className="py-14 theme-bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
            Collection Methods
          </p>
          <h2 className="text-3xl font-bold theme-text-primary mb-3">
            How to Receive Your Results
          </h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            Choose the method that works best for you. All results come with a
            printed, professionally formatted report.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methods.map((m, i) => (
            <div
              key={i}
              className={`theme-bg-card rounded-2xl p-6 border-l-4 ${m.border} theme-shadow-md hover:theme-shadow-xl transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${m.iconBg} p-3 rounded-xl flex-shrink-0`}>
                  <m.icon className={`h-6 w-6 ${m.iconClass}`} />
                </div>
                <div>
                  <h3 className="font-bold theme-text-primary text-lg">{m.title}</h3>
                  <p className="text-sm theme-text-secondary leading-relaxed mt-1">{m.description}</p>
                </div>
              </div>

              {/* Steps */}
              <ol className="space-y-1.5 mb-4">
                {m.steps.map((step, si) => (
                  <li key={si} className="flex items-start gap-2.5 text-sm theme-text-secondary">
                    <span
                      className="w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#1A3A6B' }}
                    >
                      {si + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="flex items-center gap-2 text-xs theme-text-muted border-t theme-border pt-3 mt-3">
                <ClockIcon className="h-3.5 w-3.5 flex-shrink-0" />
                {m.hours}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Collection rules */}
    <section className="py-14 theme-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
            Policies
          </p>
          <h2 className="text-3xl font-bold theme-text-primary mb-3">
            Results Collection Policy
          </h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            These policies protect the privacy and security of your health information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rules.map((r, i) => (
            <div
              key={i}
              className={`theme-bg-card rounded-2xl p-5 border-t-4 theme-shadow-md`}
              style={{ borderColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}
            >
              <div className="theme-icon-bg-navy w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <r.icon className="h-6 w-6 theme-icon-navy" />
              </div>
              <h3 className="font-bold theme-text-primary mb-2">{r.title}</h3>
              <p className="text-sm theme-text-secondary leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Future portal notice (detailed) */}
    <section className="py-14 theme-bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="theme-bg-card rounded-2xl p-7 border-2 border-orange-300 theme-shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
              <ExclamationTriangleIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-bold theme-text-primary text-lg">
                  Online Results Portal — Coming in a Future Phase
                </h3>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                  Not Yet Available
                </span>
              </div>
              <p className="theme-text-secondary leading-relaxed mb-4">
                We are planning a secure online portal that will allow patients to
                access their results digitally — from anywhere, at any time. This
                feature is on our development roadmap and will be integrated with
                Guardians' existing systems in a future phase.
              </p>
              <p className="theme-text-secondary text-sm leading-relaxed mb-5">
                <strong className="theme-text-primary">Planned features include:</strong>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {[
                  '24/7 secure online result access',
                  'PDF download of results report',
                  'Share results directly with your doctor',
                  'Full results history in one place',
                  'SMS and email notifications',
                  'Appointment history & tracking',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm theme-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <p className="text-xs theme-text-muted">
                We will announce the launch of the online portal to all registered
                patients. In the meantime, please collect results in person at our center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Help CTA */}
    <section className="py-14 theme-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="theme-bg-card rounded-2xl p-6 text-center border theme-border">
            <PhoneIcon className="h-8 w-8 theme-icon-navy mx-auto mb-3" />
            <p className="font-bold theme-text-primary mb-1">Call Us</p>
            <a href="tel:+251911234567" className="theme-text-primary-brand font-semibold text-sm hover:underline">
              +251 911 234 567
            </a>
            <p className="text-xs theme-text-muted mt-1">Mon–Sat: 7 AM – 8 PM</p>
          </div>
          <div className="theme-bg-card rounded-2xl p-6 text-center border theme-border">
            <EnvelopeIcon className="h-8 w-8 theme-icon-cyan mx-auto mb-3" />
            <p className="font-bold theme-text-primary mb-1">Email Us</p>
            <a href="mailto:results@guardians-diagnostic.com" className="theme-text-primary-brand font-semibold text-sm hover:underline break-all">
              results@guardians-diagnostic.com
            </a>
            <p className="text-xs theme-text-muted mt-1">We respond within 24 hours</p>
          </div>
          <div className="theme-bg-card rounded-2xl p-6 text-center border theme-border">
            <DocumentTextIcon className="h-8 w-8 theme-icon-navy mx-auto mb-3" />
            <p className="font-bold theme-text-primary mb-1">Patient Info Guide</p>
            <Link
              to="/patient-info#results"
              className="theme-text-primary-brand font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              View Guide <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
            <p className="text-xs theme-text-muted mt-1">Full results preparation guide</p>
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default Results;
