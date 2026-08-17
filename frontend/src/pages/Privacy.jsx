import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  LockClosedIcon,
  EyeIcon,
  UserIcon,
  DocumentTextIcon,
  TrashIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const lastUpdated = 'August 2026';

const sections = [
  {
    id: 'information-we-collect',
    icon: DocumentTextIcon,
    title: '1. Information We Collect',
    border: 'border-guardians-navy',
    content: [
      {
        subtitle: 'Personal Information',
        items: [
          'Full name and date of birth',
          'Phone number and email address',
          'Home or work address (for home collection services)',
          'Valid photo ID details (for patient registration)',
          'Emergency contact information (where provided)',
        ],
      },
      {
        subtitle: 'Medical & Health Information',
        items: [
          'Medical history and current health conditions (as disclosed)',
          'Referral letters and prescriptions',
          'Test and examination requests',
          'Diagnostic test results and reports',
          'Consultation notes',
        ],
      },
      {
        subtitle: 'Usage & Technical Information',
        items: [
          'Information submitted through our online appointment and inquiry forms',
          'Communication records (calls, WhatsApp, emails)',
          'Website usage data (pages visited, browser type) — collected anonymously',
        ],
      },
    ],
  },
  {
    id: 'how-we-use',
    icon: EyeIcon,
    title: '2. How We Use Your Information',
    border: 'border-guardians-cyan',
    content: [
      {
        subtitle: 'We use your information to:',
        items: [
          'Provide and deliver the diagnostic services you have requested',
          'Register you as a patient and manage your records',
          'Contact you to confirm appointments and deliver results',
          'Respond to your inquiries and messages',
          'Process corporate and group health screening programs',
          'Comply with legal and regulatory obligations under Ethiopian health law',
          'Improve our services based on anonymised usage patterns',
          'Send relevant health information and updates (only with your consent)',
        ],
      },
    ],
  },
  {
    id: 'sharing',
    icon: UserIcon,
    title: '3. Information Sharing',
    border: 'border-guardians-navy',
    content: [
      {
        subtitle: 'We do NOT share your information with:',
        items: [
          'Third-party advertisers or marketing companies',
          'Employers or corporate clients (individual results are never disclosed without consent)',
          'Any party not directly involved in your care without your explicit written consent',
        ],
      },
      {
        subtitle: 'We MAY share your information with:',
        items: [
          'Referring doctors or healthcare providers (with your consent or as clinically necessary)',
          'Laboratory or imaging partners involved in processing your tests',
          'Ethiopian regulatory and health authorities as required by law',
          'Emergency services where there is an immediate risk to life',
        ],
      },
    ],
  },
  {
    id: 'data-security',
    icon: LockClosedIcon,
    title: '4. Data Security',
    border: 'border-guardians-cyan',
    content: [
      {
        subtitle: 'How we protect your data:',
        items: [
          'Patient records are stored securely with access limited to authorised clinical staff',
          'Physical documents are stored in locked, restricted-access filing systems',
          'Digital records are protected by access controls and passwords',
          'Staff are trained in patient confidentiality and data protection obligations',
          'We retain records for a minimum of 7 years as required by Ethiopian health regulations',
          'Destroyed records are handled securely to prevent unauthorised access',
        ],
      },
    ],
  },
  {
    id: 'patient-rights',
    icon: ShieldCheckIcon,
    title: '5. Your Rights as a Patient',
    border: 'border-guardians-navy',
    content: [
      {
        subtitle: 'You have the right to:',
        items: [
          'Access a copy of your health records and test results at any time',
          'Request correction of any inaccurate information we hold about you',
          'Withdraw consent for non-essential uses of your data at any time',
          'Request deletion of your data where legally permissible',
          'Object to processing of your data for purposes beyond your care',
          'Receive clear information about how your data is used',
          'Lodge a complaint with the relevant Ethiopian health authority if you believe your rights have been violated',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    icon: GlobeAltIcon,
    title: '6. Website Cookies & Tracking',
    border: 'border-guardians-cyan',
    content: [
      {
        subtitle: 'Our website uses:',
        items: [
          'Essential cookies required for the website to function correctly',
          'Anonymous analytics to understand how visitors use our site (no personal data)',
          'No advertising or cross-site tracking cookies',
          'No third-party marketing pixels or social media trackers',
        ],
      },
    ],
  },
  {
    id: 'retention',
    icon: TrashIcon,
    title: '7. Data Retention',
    border: 'border-guardians-navy',
    content: [
      {
        subtitle: 'Retention periods:',
        items: [
          'Patient medical records: minimum 7 years from last contact (Ethiopian health law requirement)',
          'Appointment and inquiry records: 2 years',
          'Financial and billing records: 7 years',
          'Website form submissions: 1 year',
          'Records of deceased patients: as required by law or next-of-kin request',
          'After the retention period, records are securely and permanently destroyed',
        ],
      },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const Privacy = () => (
  <div className="theme-bg-background">

    {/* Hero */}
    <section className="relative h-[300px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Privacy Policy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2.5 rounded-xl">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <p className="font-semibold text-sm tracking-widest uppercase text-blue-200">
                Legal
              </p>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              Privacy{' '}
              <span style={{ color: '#5BB3E4' }}>Policy</span>
            </h1>
            <p className="text-blue-100 text-sm">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

      {/* Introduction */}
      <div className="theme-bg-card rounded-2xl p-6 border-l-4 border-guardians-navy theme-shadow-md mb-10">
        <h2 className="font-bold theme-text-primary text-lg mb-3">Introduction</h2>
        <p className="theme-text-secondary leading-relaxed mb-3">
          Guardians Diagnostic Center (<strong className="theme-text-primary">"Guardians"</strong>,
          "we", "us", or "our") is committed to protecting the privacy and confidentiality of
          your personal and health information. This Privacy Policy explains what information
          we collect, how we use it, and your rights as a patient and website visitor.
        </p>
        <p className="theme-text-secondary leading-relaxed mb-3">
          We operate in compliance with applicable Ethiopian health and data protection law.
          Your health information is treated with the highest level of confidentiality.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Important:</strong> By using Guardians' services or website, you consent
            to the collection and use of your information as described in this policy. If you
            do not agree, please contact us before using our services.
          </p>
        </div>
      </div>

      {/* Table of contents */}
      <div className="theme-bg-surface rounded-2xl p-6 border theme-border mb-10">
        <h3 className="font-bold theme-text-primary mb-4 text-sm uppercase tracking-widest">
          Contents
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm theme-text-primary-brand hover:underline inline-flex items-center gap-1.5"
            >
              <ArrowRightIcon className="h-3 w-3 flex-shrink-0" />
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map(s => (
          <section key={s.id} id={s.id} className="scroll-mt-20">
            <div className={`theme-bg-card rounded-2xl p-6 border-l-4 ${s.border} theme-shadow-sm`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="theme-icon-bg-navy p-2.5 rounded-xl">
                  <s.icon className="h-5 w-5 theme-icon-navy" />
                </div>
                <h2 className="text-lg font-bold theme-text-primary">{s.title}</h2>
              </div>
              {s.content.map((block, bi) => (
                <div key={bi} className={bi > 0 ? 'mt-5' : ''}>
                  <p className="font-semibold theme-text-primary text-sm mb-3">
                    {block.subtitle}
                  </p>
                  <ul className="space-y-2">
                    {block.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2.5 text-sm theme-text-secondary">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ backgroundColor: '#5BB3E4' }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Policy updates */}
      <div className="theme-bg-surface rounded-2xl p-6 border theme-border mt-10">
        <h3 className="font-bold theme-text-primary mb-2">Policy Updates</h3>
        <p className="text-sm theme-text-secondary leading-relaxed">
          We may update this Privacy Policy from time to time. When we make significant
          changes, we will update the "Last updated" date at the top of this page and, where
          appropriate, notify patients directly. We encourage you to review this policy
          periodically.
        </p>
      </div>

      {/* Contact Privacy Officer */}
      <div
        className="rounded-2xl p-6 mt-8 text-white"
        style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D2245 100%)' }}
      >
        <h3 className="font-bold text-lg mb-2">Questions About Your Privacy?</h3>
        <p className="text-blue-100 text-sm leading-relaxed mb-5">
          If you have any questions about this Privacy Policy or wish to exercise your
          patient rights, contact our Privacy Officer directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+251111234567"
            className="bg-white font-semibold px-5 py-2.5 rounded-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors text-sm"
            style={{ color: '#1A3A6B' }}
          >
            <PhoneIcon className="h-4 w-4" />
            Call Us
          </a>
          <a
            href="mailto:privacy@guardians-diagnostic.com"
            className="bg-white/15 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-lg inline-flex items-center gap-2 hover:bg-white/25 transition-colors text-sm"
          >
            <EnvelopeIcon className="h-4 w-4" />
            privacy@guardians-diagnostic.com
          </a>
        </div>
      </div>

      {/* Back links */}
      <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t theme-border">
        <Link to="/terms" className="text-sm theme-text-primary-brand hover:underline inline-flex items-center gap-1">
          <ArrowRightIcon className="h-3.5 w-3.5" /> Terms of Service
        </Link>
        <Link to="/contact" className="text-sm theme-text-primary-brand hover:underline inline-flex items-center gap-1">
          <ArrowRightIcon className="h-3.5 w-3.5" /> Contact Us
        </Link>
        <Link to="/" className="text-sm theme-text-primary-brand hover:underline inline-flex items-center gap-1">
          <ArrowRightIcon className="h-3.5 w-3.5" /> Back to Home
        </Link>
      </div>

    </div>
  </div>
);

export default Privacy;
