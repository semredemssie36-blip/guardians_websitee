import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BeakerIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CalendarDaysIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

/* ─── Service data ──────────────────────────────────────────────────── */
const services = [
  {
    id: 'laboratory',
    category: 'laboratory',
    name: 'Laboratory Services',
    tagline: 'Comprehensive blood and body fluid analysis',
    description:
      'Our laboratory provides a full range of clinical diagnostic tests using modern equipment and strict quality control. Results are reviewed and validated by qualified medical laboratory scientists.',
    icon: BeakerIcon,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    turnaround: 'Most results: same day',
    availability: 'Mon – Sat: 7:00 AM – 7:00 PM',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Glucose & HbA1c',
      'Lipid Profile (Cholesterol)',
      'Liver Function Tests (LFT)',
      'Kidney Function Tests (RFT)',
      'Thyroid Function Tests (TFT)',
      'Hepatitis B & C Screening',
      'HIV Screening',
      'Malaria Test',
      'Stool Examination',
      'Urinalysis',
      'Serology & Immunology',
      'Electrolytes',
      'Cardiac Enzymes',
    ],
    preparation: [
      'Fasting for 8–12 hours required for glucose, lipid, and liver function tests',
      'Drink water normally — staying hydrated helps with blood draw',
      'Inform staff of any medications you are currently taking',
      'Bring a referral letter or prescription if you have one',
      'Wear comfortable, loose-sleeved clothing for easy venipuncture',
    ],
    patientExpect: [
      'A trained phlebotomist will collect your blood sample',
      'The process takes approximately 5–10 minutes',
      'A small bandage will be applied after collection',
      'Results will be ready as indicated on your receipt',
      'Our staff will notify you when results are available',
    ],
    border: 'border-guardians-navy',
  },
  {
    id: 'xray',
    category: 'imaging',
    name: 'Digital X-Ray',
    tagline: 'High-quality digital imaging for accurate diagnosis',
    description:
      'Our digital X-ray system produces high-resolution images with lower radiation exposure than traditional X-ray. Images are reviewed by our radiology team and results are provided promptly.',
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    turnaround: 'Results: same day',
    availability: 'Mon – Sat: 7:00 AM – 7:00 PM',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Chest X-Ray (PA & Lateral)',
      'Abdominal X-Ray',
      'Spine X-Ray (Cervical, Thoracic, Lumbar)',
      'Pelvis & Hip X-Ray',
      'Limb X-Ray (Arms, Legs, Hands, Feet)',
      'Sinus X-Ray',
      'Skull X-Ray',
    ],
    preparation: [
      'Remove jewellery, metal objects, and clothing with zips or buttons in the area to be imaged',
      'Inform the radiographer if you are or may be pregnant',
      'No special fasting required unless advised',
      'Bring your referral letter from a doctor if available',
    ],
    patientExpect: [
      'You will be positioned by our radiographer for the best image quality',
      'You will be asked to hold still and may be asked to hold your breath briefly',
      'The exposure takes a fraction of a second — the process is quick and painless',
      'Radiation exposure is minimal and within safe clinical limits',
      'Results are typically ready within a few hours',
    ],
    border: 'border-guardians-cyan',
  },
  {
    id: 'ultrasound',
    category: 'imaging',
    name: 'Ultrasound',
    tagline: 'Safe, non-invasive imaging for soft tissue diagnosis',
    description:
      'Ultrasound uses sound waves to create real-time images of internal organs and structures. It is safe, painless, and does not use radiation. Our sonographers are qualified and experienced.',
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    turnaround: 'Results: same day',
    availability: 'Mon – Sat: 7:00 AM – 6:00 PM',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Abdominal Ultrasound (liver, gallbladder, kidneys, spleen)',
      'Pelvic Ultrasound',
      'Obstetric Ultrasound (pregnancy)',
      'Thyroid & Neck Ultrasound',
      'Breast Ultrasound',
      'Renal (Kidney) Ultrasound',
      'Scrotal Ultrasound',
      'Soft Tissue Ultrasound',
    ],
    preparation: [
      'Abdominal ultrasound: fast for 4–6 hours before the scan',
      'Pelvic ultrasound: drink 4–6 glasses of water 1 hour before — arrive with a full bladder',
      'Obstetric ultrasound: full bladder required in the first trimester',
      'Thyroid or breast ultrasound: no special preparation needed',
      'Wear comfortable, loose clothing',
    ],
    patientExpect: [
      'A gel will be applied to your skin — it may feel slightly cool',
      'The probe will be pressed gently against your skin',
      'The sonographer will move the probe to capture images',
      'The scan is completely painless and takes 15–30 minutes',
      'Preliminary findings are shared after the scan',
    ],
    border: 'border-guardians-navy',
  },
  {
    id: 'ecg',
    category: 'cardiac',
    name: 'ECG (Electrocardiogram)',
    tagline: 'Heart rhythm evaluation by qualified cardiologist',
    description:
      'An ECG records the electrical activity of your heart and helps detect arrhythmias, heart attacks, and other cardiac conditions. Results at Guardians are interpreted by our qualified cardiologist.',
    icon: HeartIcon,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    turnaround: 'Results: 1–2 hours',
    availability: 'Mon – Sat: 8:00 AM – 6:00 PM',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Resting 12-Lead ECG',
      'Pre-operative Cardiac Assessment',
      'Pre-employment ECG',
      'Routine Cardiac Screening',
    ],
    preparation: [
      'Avoid heavy exercise for at least 30 minutes before the test',
      'Do not apply lotions or oils to your chest area',
      'Wear comfortable, loose clothing that allows easy access to the chest',
      'Inform the technician of any chest pain, medications, or cardiac history',
      'Relax — the test is non-invasive and completely painless',
    ],
    patientExpect: [
      'You will lie still on a bed while electrodes are placed on your chest, arms, and legs',
      'The recording takes approximately 10 minutes',
      'The electrodes are removed painlessly after the test',
      'There are no risks or side effects',
      'Results are reviewed by our cardiologist within 1–2 hours',
    ],
    border: 'border-guardians-red',
  },
  {
    id: 'consultation',
    category: 'consultation',
    name: 'General Consultation',
    tagline: 'Medical assessment, guidance, and specialist referrals',
    description:
      'Our outpatient consultation service provides medical assessment, health guidance, and referrals. Guardians consultations support appropriate investigation ordering and help patients understand their results.',
    icon: UserGroupIcon,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    turnaround: 'Same-day consultations available',
    availability: 'Mon – Sat: 8:00 AM – 6:00 PM',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'General Medical Consultation',
      'Health Assessment & Review',
      'Diagnostic Investigation Ordering',
      'Result Interpretation & Explanation',
      'Specialist Referral',
      'Pre-employment Medical Certificate',
    ],
    preparation: [
      'Bring any previous medical reports, test results, or prescriptions',
      'Prepare a brief summary of your current symptoms and health concerns',
      'Bring a list of any medications you are currently taking',
      'Arrive a few minutes early to complete patient registration',
    ],
    patientExpect: [
      'A qualified doctor will conduct your consultation',
      'A thorough history and examination will be performed',
      'Appropriate investigations will be recommended if needed',
      'You will receive clear guidance on your health status',
      'A referral letter will be provided if specialist care is needed',
    ],
    border: 'border-guardians-cyan',
  },
  {
    id: 'screening',
    category: 'screening',
    name: 'Health Screening',
    tagline: 'Preventive health checks for early detection',
    description:
      'Our health screening service identifies risk factors and early signs of disease before symptoms develop. Regular screening is one of the most effective ways to protect your long-term health.',
    icon: ShieldCheckIcon,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
    turnaround: 'Full report: 1–2 days',
    availability: 'Mon – Sat: 7:00 AM – 5:00 PM',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tests: [
      'Basic Health Screening Package',
      'Comprehensive Health Screening Package',
      'Pre-Employment Screening',
      'Executive Health Package',
      'Women\'s Health Screening',
      'Senior Citizens Screening',
      'Corporate / Group Screening',
    ],
    preparation: [
      'Most packages require 8–12 hours fasting before arrival',
      'Drink water normally — avoid tea, coffee, and juice when fasting',
      'Bring valid photo ID and any previous medical records',
      'Wear comfortable clothing — some packages include a physical examination',
      'Allocate 1.5–3 hours depending on your package',
    ],
    patientExpect: [
      'A nurse will guide you through the screening process on arrival',
      'Samples are collected and tests performed in a structured sequence',
      'A complete written report is provided for all findings',
      'A doctor is available to discuss your results if needed',
      'Findings outside normal ranges are highlighted and explained',
    ],
    border: 'border-guardians-navy',
  },
];

/* ─── Category filter tabs ──────────────────────────────────────────── */
const categories = [
  { id: 'all',          label: 'All Services' },
  { id: 'laboratory',  label: 'Laboratory' },
  { id: 'imaging',     label: 'Imaging' },
  { id: 'cardiac',     label: 'Cardiac' },
  { id: 'consultation',label: 'Consultation' },
  { id: 'screening',   label: 'Screening' },
];

/* ─── Future services ───────────────────────────────────────────────── */
const futureServices = [
  {
    name: 'CT Scanning',
    description: 'High-resolution cross-sectional imaging for complex diagnosis.',
    timeframe: '2027–2028',
    icon: '🔬',
  },
  {
    name: 'MRI',
    description: 'Magnetic resonance imaging for detailed soft tissue evaluation.',
    timeframe: '2028',
    icon: '🧲',
  },
  {
    name: 'Mammography',
    description: 'Dedicated breast imaging for cancer screening and diagnosis.',
    timeframe: '2027',
    icon: '🩺',
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState(null);

  const filtered = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  const toggle = (id) => setExpandedService(expandedService === id ? null : id);

  return (
    <div className="theme-bg-background">

      {/* Hero */}
      <section className="relative min-h-[280px] sm:min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Guardians Diagnostic Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        <div className="relative flex items-center min-h-[280px] sm:min-h-[400px] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-white max-w-2xl">
              <p className="text-blue-200 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">Our Services</p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight">
                Diagnostic Services{' '}
                <span style={{ color: '#5BB3E4' }}>You Can Trust</span>
              </h1>
              <p className="text-blue-50/90 text-sm sm:text-lg mb-5 sm:mb-8 max-w-xl leading-relaxed">
                Professional diagnostic services with clear turnaround times, qualified staff,
                and accurate results — all available at our center in Addis Ababa.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                <Link to="/appointment" className="theme-btn-primary px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg font-semibold inline-flex items-center justify-center gap-2 theme-shadow-lg text-sm sm:text-base">
                  <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  Book a Service
                </Link>
                <Link to="/packages" className="bg-white/10 border border-white/50 text-white font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                  Health Packages
                  <ArrowRightIcon className="h-4 w-4 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-0 z-20 theme-bg-card border-b theme-border theme-shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  selectedCategory === cat.id
                    ? 'theme-bg-primary text-white theme-shadow-sm'
                    : 'theme-text-secondary hover:theme-bg-hover'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services list */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {filtered.map(service => {
            const isOpen = expandedService === service.id;
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className={`theme-bg-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen ? 'theme-shadow-xl border-guardians-cyan' : 'theme-shadow-md theme-border hover:theme-shadow-lg'
                }`}
              >
                {/* Service header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="h-48 lg:h-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Main info */}
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`${service.iconBg} p-3 rounded-xl flex-shrink-0`}>
                          <IconComp className={`h-6 w-6 ${service.iconColor}`} />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold theme-text-primary mb-1">{service.name}</h2>
                          <p className="text-sm theme-text-primary-brand font-medium mb-3">{service.tagline}</p>
                          <p className="theme-text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                          <div className="flex flex-wrap gap-3 text-xs">
                            <span className="flex items-center gap-1.5 theme-bg-surface px-3 py-1.5 rounded-full theme-text-secondary">
                              <ClockIcon className="h-3.5 w-3.5" />
                              {service.turnaround}
                            </span>
                            <span className="flex items-center gap-1.5 theme-bg-surface px-3 py-1.5 rounded-full theme-text-secondary">
                              <CalendarDaysIcon className="h-3.5 w-3.5" />
                              {service.availability}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick test list (first 4) */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tests.slice(0, 4).map((t, i) => (
                        <span key={i} className="theme-bg-surface theme-text-secondary text-xs px-2.5 py-1 rounded-md border theme-border">
                          {t}
                        </span>
                      ))}
                      {service.tests.length > 4 && (
                        <span className="theme-text-primary-brand text-xs px-2.5 py-1 font-medium">
                          +{service.tests.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Footer actions */}
                    <div className="mt-5 flex flex-wrap gap-3 items-center pt-4 border-t theme-border">
                      <Link
                        to="/appointment"
                        className="theme-btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5"
                      >
                        <CalendarDaysIcon className="h-4 w-4" />
                        Book This Service
                      </Link>
                      <button
                        onClick={() => toggle(service.id)}
                        className="inline-flex items-center gap-1.5 text-sm theme-text-primary-brand font-medium hover:underline"
                      >
                        {isOpen ? (
                          <><ChevronUpIcon className="h-4 w-4" /> Hide Patient Info</>
                        ) : (
                          <><InformationCircleIcon className="h-4 w-4" /> View Patient Info</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable patient info */}
                {isOpen && (
                  <div className="border-t theme-border theme-bg-surface">
                    <div className="p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

                      {/* Available tests */}
                      <div>
                        <h3 className="font-bold theme-text-primary text-sm mb-3 flex items-center gap-2">
                          <BeakerIcon className="h-4 w-4 theme-icon-navy" />
                          Available Tests
                        </h3>
                        <ul className="space-y-1.5">
                          {service.tests.map((t, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm theme-text-secondary">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Preparation */}
                      <div>
                        <h3 className="font-bold theme-text-primary text-sm mb-3 flex items-center gap-2">
                          <InformationCircleIcon className="h-4 w-4 theme-icon-cyan" />
                          How to Prepare
                        </h3>
                        <ul className="space-y-1.5">
                          {service.preparation.map((p, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm theme-text-secondary">
                              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                                {i + 1}
                              </span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What to expect */}
                      <div>
                        <h3 className="font-bold theme-text-primary text-sm mb-3 flex items-center gap-2">
                          <ShieldCheckIcon className="h-4 w-4 theme-icon-navy" />
                          What to Expect
                        </h3>
                        <ul className="space-y-1.5">
                          {service.patientExpect.map((e, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm theme-text-secondary">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {e}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5">
                          <Link
                            to="/patient-info"
                            className="theme-text-primary-brand text-sm font-medium inline-flex items-center gap-1 hover:underline"
                          >
                            Full Patient Guide
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Home Collection CTA banner */}
      <section className="py-14 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="p-8 lg:p-12 text-white"
                style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D2245 100%)' }}
              >
                <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-2">
                  Can't Visit Us?
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Home Sample Collection Available
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Our trained team comes to your home or office to collect samples.
                  Available for most laboratory tests. Same quality. Same results.
                </p>
                <Link
                  to="/home-collection"
                  className="bg-white font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors theme-shadow-md"
                  style={{ color: '#1A3A6B' }}
                >
                  Request Home Collection
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <div className="h-48 lg:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Home collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future services */}
      <section className="py-14 theme-bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
              Planned Expansion
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold theme-text-primary mb-2">
              Future Services
            </h2>
            <p className="theme-text-secondary max-w-xl mx-auto text-sm">
              These services are not yet available. They represent our growth roadmap as
              Guardians expands its capabilities over the coming years.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureServices.map((s, i) => (
              <div
                key={i}
                className="theme-bg-card rounded-2xl p-6 border-l-4 border-orange-400 theme-shadow-sm"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold theme-text-primary">{s.name}</h3>
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {s.timeframe}
                  </span>
                </div>
                <p className="text-sm theme-text-secondary leading-relaxed">{s.description}</p>
                <p className="text-xs theme-text-muted mt-3 italic">Not yet available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
