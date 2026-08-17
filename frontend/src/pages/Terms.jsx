import { Link } from 'react-router-dom';
import {
  ScaleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  UserIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const lastUpdated   = 'August 2026';
const effectiveDate = 'August 2026';

const sections = [
  {
    id: 'acceptance',
    icon: DocumentTextIcon,
    title: '1. Acceptance of Terms',
    border: 'border-guardians-navy',
    paragraphs: [
      'By visiting our center, using our website, booking an appointment, or using any Guardians Diagnostic Center service, you agree to be bound by these Terms of Service.',
      'If you do not agree to these terms, please do not use our services. We reserve the right to update these terms at any time — continued use of our services constitutes acceptance of the updated terms.',
    ],
  },
  {
    id: 'services-scope',
    icon: ShieldCheckIcon,
    title: '2. Scope of Services',
    border: 'border-guardians-cyan',
    paragraphs: [
      'Guardians Diagnostic Center provides diagnostic healthcare services including laboratory testing, digital X-ray, ultrasound, ECG, general consultation, health screening packages, home sample collection, and corporate health programs.',
      'We are a diagnostic center, not a hospital. Our services are focused on diagnostics, health screening, and outpatient consultation. We do not provide inpatient care, surgery, or emergency trauma services.',
      'We reserve the right to modify, add, or discontinue any service at any time. Discontinued services will be communicated to affected patients in advance where possible.',
    ],
  },
  {
    id: 'appointments',
    icon: CalendarDaysIcon,
    title: '3. Appointments & Bookings',
    border: 'border-guardians-navy',
    paragraphs: [
      'Appointment requests submitted online, by phone, or by WhatsApp are requests only — not confirmed bookings. Appointments are confirmed only after our team contacts you to verify your details and preparation requirements.',
      'We aim to confirm all appointment requests within a few hours during working hours (Monday–Saturday, 7:00 AM – 8:00 PM).',
      'Patients should arrive at least 5 minutes before their scheduled appointment to allow for registration. Late arrivals may need to be rescheduled depending on availability.',
      'Please notify us as early as possible if you need to cancel or reschedule. Walk-ins are welcome during working hours, subject to availability.',
    ],
  },
  {
    id: 'payment',
    icon: CreditCardIcon,
    title: '4. Payment & Fees',
    border: 'border-guardians-cyan',
    paragraphs: [
      'All prices displayed on our website are indicative starting prices in Ethiopian Birr (ETB). Final pricing depends on the specific tests requested, package selected, and group size for corporate bookings.',
      'Payment is due at the time of service. We currently accept cash (ETB) and bank transfers. Mobile payment options are being added and will be communicated when available.',
      'We do not charge a cancellation fee. However, for group and corporate bookings, please notify us at least 24 hours in advance of any cancellation to avoid administrative charges.',
      'Receipts are issued for all payments. Please retain your receipt as it is required to collect your results.',
    ],
  },
  {
    id: 'patient-rights',
    icon: UserIcon,
    title: '5. Patient Rights & Responsibilities',
    border: 'border-guardians-navy',
    lists: [
      {
        subtitle: 'As a patient, you have the right to:',
        items: [
          'Receive professional, respectful, and dignified care',
          'Receive clear information about your tests, results, and next steps',
          'Consent to or refuse any procedure (with understanding of the consequences)',
          'Access your health records and results at any time',
          'Have your health information kept strictly confidential',
          'Make a complaint if you are dissatisfied with our services',
        ],
      },
      {
        subtitle: 'As a patient, you are responsible for:',
        items: [
          'Providing accurate and complete health information at registration',
          'Following preparation instructions given before your appointment',
          'Bringing valid photo ID and relevant documents to your appointment',
          'Notifying us of any changes to your contact details',
          'Treating our staff with respect at all times',
          'Informing us of any allergies or adverse reactions during or after procedures',
        ],
      },
    ],
  },
  {
    id: 'website-use',
    icon: GlobeAltIcon,
    title: '6. Website Use',
    border: 'border-guardians-cyan',
    paragraphs: [
      'Our website is provided for informational purposes. The health content published on this site is for general educational purposes only and does not constitute medical advice.',
      'You may not use our website for any unlawful purpose, to transmit harmful content, or to attempt to disrupt the operation of our systems.',
      'All content on this website — including text, images, logos, and design — is the property of Guardians Diagnostic Center and may not be reproduced without written permission.',
      'We are not responsible for the content or practices of any third-party websites linked from our site.',
    ],
  },
  {
    id: 'privacy',
    icon: LockClosedIcon,
    title: '7. Privacy & Confidentiality',
    border: 'border-guardians-navy',
    paragraphs: [
      'Your health information is treated with the highest level of confidentiality in accordance with Ethiopian health law and our Privacy Policy.',
      'We will not share your personal or health information with any third party — including your employer — without your explicit written consent, except as required by law.',
      'For full details on how we collect, use, and protect your data, please read our Privacy Policy.',
    ],
    link: { to: '/privacy', label: 'Read Our Privacy Policy' },
  },
  {
    id: 'liability',
    icon: ExclamationTriangleIcon,
    title: '8. Limitation of Liability',
    border: 'border-guardians-cyan',
    paragraphs: [
      'Guardians Diagnostic Center provides diagnostic services to support clinical decision-making. Diagnostic results should always be interpreted in the context of a clinical assessment by a qualified healthcare provider.',
      'We are not liable for clinical decisions made by third-party healthcare providers based on our results, or for outcomes arising from failure to follow preparation instructions.',
      'In the event of a laboratory error or procedural failure on our part, we will re-perform the relevant test at no charge and take appropriate corrective action.',
      'Our liability in all cases is limited to the value of the specific service provided. We do not accept liability for indirect or consequential losses.',
    ],
  },
  {
    id: 'complaints',
    icon: DocumentTextIcon,
    title: '9. Complaints & Dispute Resolution',
    border: 'border-guardians-navy',
    paragraphs: [
      'If you are dissatisfied with any aspect of our service, we encourage you to contact us directly first so we can resolve the matter promptly.',
      'All complaints are taken seriously and will be acknowledged within 2 business days. We aim to provide a full response within 7 business days.',
      'If we are unable to resolve your complaint directly, you may refer the matter to the relevant Ethiopian health regulatory authority.',
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const Terms = () => (
  <div className="theme-bg-background">

    {/* Hero */}
    <section className="relative h-[300px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Terms of Service"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2.5 rounded-xl">
                <ScaleIcon className="h-6 w-6 text-white" />
              </div>
              <p className="font-semibold text-sm tracking-widest uppercase text-blue-200">
                Legal
              </p>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-2 leading-tight">
              Terms of{' '}
              <span style={{ color: '#5BB3E4' }}>Service</span>
            </h1>
            <p className="text-blue-100 text-sm">
              Last updated: {lastUpdated} &nbsp;·&nbsp; Effective: {effectiveDate}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

      {/* Introduction */}
      <div className="theme-bg-card rounded-2xl p-6 border-l-4 border-guardians-navy theme-shadow-md mb-10">
        <h2 className="font-bold theme-text-primary text-lg mb-3">Introduction</h2>
        <p className="theme-text-secondary leading-relaxed mb-3">
          These Terms of Service govern your use of Guardians Diagnostic Center's services,
          website, and facilities. Please read them carefully before using our services.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Please note:</strong> These terms form a legally binding agreement
            between you and Guardians Diagnostic Center. By using our services or website,
            you confirm that you have read, understood, and agree to these terms.
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
      <div className="space-y-6">
        {sections.map(s => (
          <section key={s.id} id={s.id} className="scroll-mt-20">
            <div className={`theme-bg-card rounded-2xl p-6 border-l-4 ${s.border} theme-shadow-sm`}>

              {/* Section heading */}
              <div className="flex items-center gap-3 mb-5">
                <div className="theme-icon-bg-navy p-2.5 rounded-xl">
                  <s.icon className="h-5 w-5 theme-icon-navy" />
                </div>
                <h2 className="text-lg font-bold theme-text-primary">{s.title}</h2>
              </div>

              {/* Paragraphs */}
              {s.paragraphs && (
                <div className="space-y-3">
                  {s.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-sm theme-text-secondary leading-relaxed">{p}</p>
                  ))}
                </div>
              )}

              {/* Lists */}
              {s.lists && (
                <div className="space-y-5">
                  {s.lists.map((list, li) => (
                    <div key={li} className={li > 0 ? 'pt-4 border-t theme-border' : ''}>
                      <p className="font-semibold theme-text-primary text-sm mb-3">
                        {list.subtitle}
                      </p>
                      <ul className="space-y-2">
                        {list.items.map((item, ii) => (
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
              )}

              {/* Optional internal link */}
              {s.link && (
                <div className="mt-4 pt-4 border-t theme-border">
                  <Link
                    to={s.link.to}
                    className="theme-text-primary-brand text-sm font-semibold inline-flex items-center gap-1.5 hover:underline"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                    {s.link.label}
                  </Link>
                </div>
              )}

            </div>
          </section>
        ))}
      </div>

      {/* Emergency notice */}
      <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-800 mb-1">Medical Emergency</p>
            <p className="text-sm text-red-700 leading-relaxed">
              If you are experiencing a medical emergency, call emergency services immediately.
              Guardians' 24/7 emergency diagnostic line:{' '}
              <a href="tel:+251911000911" className="font-bold underline">
                +251 911 000 911
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Agreement acknowledgment */}
      <div className="mt-8 theme-bg-surface rounded-2xl p-6 border theme-border text-center">
        <p className="theme-text-secondary text-sm leading-relaxed max-w-2xl mx-auto">
          By using Guardians Diagnostic Center's services, you acknowledge that you have
          read and understood these Terms of Service and agree to be bound by them. If you
          have any questions, please contact us before using our services.
        </p>
      </div>

      {/* Contact */}
      <div
        className="rounded-2xl p-6 mt-8 text-white"
        style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D2245 100%)' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <PhoneIcon className="h-6 w-6 mx-auto mb-2 text-blue-200" />
            <p className="text-white font-semibold text-sm">Phone</p>
            <a href="tel:+251911234567" className="text-blue-200 text-sm hover:text-white transition-colors">
              +251 911 234 567
            </a>
          </div>
          <div>
            <EnvelopeIcon className="h-6 w-6 mx-auto mb-2 text-blue-200" />
            <p className="text-white font-semibold text-sm">Email</p>
            <a href="mailto:legal@guardians-diagnostic.com" className="text-blue-200 text-sm hover:text-white transition-colors break-all">
              legal@guardians-diagnostic.com
            </a>
          </div>
          <div>
            <ScaleIcon className="h-6 w-6 mx-auto mb-2 text-blue-200" />
            <p className="text-white font-semibold text-sm">Questions?</p>
            <Link to="/contact" className="text-blue-200 text-sm hover:text-white transition-colors inline-flex items-center gap-1 justify-center">
              Contact Us <ArrowRightIcon className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Back links */}
      <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t theme-border">
        <Link to="/privacy" className="text-sm theme-text-primary-brand hover:underline inline-flex items-center gap-1">
          <ArrowRightIcon className="h-3.5 w-3.5" /> Privacy Policy
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

export default Terms;
