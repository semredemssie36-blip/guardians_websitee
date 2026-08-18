import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDaysIcon,
  PhoneIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  UserGroupIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  LanguageIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

/* ─── Doctor profiles ───────────────────────────────────────────────── */
const doctors = [
  {
    id: 1,
    name: 'Dr. Yohannes Tesfaye',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    position: 'Chief Medical Officer',
    specialization: 'Internal Medicine & General Medicine',
    qualifications: [
      'MD — Internal Medicine, Addis Ababa University',
      'Specialist in Internal Medicine',
      'Registered with Ethiopian Medical Association',
    ],
    experience: '12+ years clinical experience',
    biography:
      'Dr. Yohannes Tesfaye leads clinical operations at Guardians Diagnostic Center, overseeing quality standards, patient care protocols, and medical team coordination. He brings extensive experience in internal medicine and outpatient diagnostics.',
    areasOfService: [
      'General outpatient consultation',
      'Health assessment & review',
      'Investigation ordering & interpretation',
      'Specialist referrals',
      'Pre-employment medical certificates',
    ],
    availability: 'By appointment — Mon to Sat',
    languages: ['Amharic', 'English'],
    border: 'border-guardians-navy',
    accentColor: '#1A3A6B',
  },
  {
    id: 2,
    name: 'Dr. Mekdes Alemu',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    position: 'Head of Laboratory',
    specialization: 'Laboratory Medicine & Clinical Pathology',
    qualifications: [
      'MSc in Medical Laboratory Science, Jimma University',
      'Certified Clinical Pathologist',
      'Registered with Ethiopian Health Professionals Council',
    ],
    experience: '9+ years laboratory medicine',
    biography:
      'Dr. Mekdes Alemu manages all laboratory operations at Guardians, including quality control, reagent management, and validation of all test results before release to patients. She is committed to accuracy and patient safety in every result.',
    areasOfService: [
      'Hematology (CBC & differential)',
      'Clinical chemistry & biochemistry',
      'Serology & immunology',
      'Microbiology & stool examination',
      'Urinalysis',
    ],
    availability: 'Mon – Sat: 7:00 AM – 7:00 PM',
    languages: ['Amharic', 'English'],
    border: 'border-guardians-cyan',
    accentColor: '#5BB3E4',
  },
  {
    id: 3,
    name: 'Dr. Biruk Haile',
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    position: 'Radiologist & Imaging Specialist',
    specialization: 'Diagnostic Radiology & Ultrasound',
    qualifications: [
      'MD with Radiology Specialization, Black Lion Hospital',
      'Certified Diagnostic Sonographer',
      'Registered with Ethiopian Medical Association',
    ],
    experience: '8+ years diagnostic imaging',
    biography:
      'Dr. Biruk Haile interprets all digital X-ray and ultrasound scans at Guardians, producing detailed written reports released promptly to patients and referring clinicians.',
    areasOfService: [
      'Digital X-ray interpretation (chest, abdomen, skeletal)',
      'Abdominal & pelvic ultrasound',
      'Obstetric ultrasound',
      'Thyroid & breast ultrasound',
      'Renal & soft tissue ultrasound',
    ],
    availability: 'Mon – Sat: 7:00 AM – 6:00 PM',
    languages: ['Amharic', 'English'],
    border: 'border-guardians-navy',
    accentColor: '#1A3A6B',
  },
  {
    id: 4,
    name: 'Dr. Dawit Girma',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    position: 'Cardiologist',
    specialization: 'Cardiology & Electrocardiography',
    qualifications: [
      'MD with Cardiology Specialization, Addis Ababa University',
      'Advanced ECG Interpretation Certification',
      'Registered with Ethiopian Medical Association',
    ],
    experience: '10+ years cardiology practice',
    biography:
      'Dr. Dawit Girma reviews and interprets all ECG recordings at Guardians and provides formal cardiac assessment reports. He is available for consultations on cardiac symptoms, risk assessment, and specialist referrals.',
    areasOfService: [
      '12-lead ECG recording & interpretation',
      'Pre-operative cardiac assessment',
      'Cardiac risk factor evaluation',
      'Arrhythmia assessment',
      'Referral to specialist cardiac centres',
    ],
    availability: 'Selected days — call to confirm schedule',
    languages: ['Amharic', 'English'],
    border: 'border-guardians-red',
    accentColor: '#E8392A',
  },
  {
    id: 5,
    name: 'Dr. Tigist Bekele',
    photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    position: "Women's Health Specialist",
    specialization: "Women's Health & Obstetric Ultrasound",
    qualifications: [
      "MD with Obstetrics & Gynaecology Specialization",
      'Certified Obstetric Sonographer',
      'Registered with Ethiopian Medical Association',
    ],
    experience: "7+ years in women's health",
    biography:
      "Dr. Tigist Bekele leads obstetric and pelvic ultrasound services and supports women's health screening packages at Guardians. She provides a respectful, professional clinical environment for all female patients.",
    areasOfService: [
      'Obstetric ultrasound (all trimesters)',
      'Pelvic & gynaecological ultrasound',
      "Women's health screening packages",
      'Hormonal & reproductive health assessment',
      'Breast ultrasound',
    ],
    availability: 'Mon – Fri: 8:00 AM – 5:00 PM',
    languages: ['Amharic', 'English', 'Oromiffa'],
    border: 'border-guardians-cyan',
    accentColor: '#5BB3E4',
  },
  {
    id: 6,
    name: 'Dr. Samuel Worku',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    position: 'Occupational Health Officer',
    specialization: 'Occupational Medicine & Pre-employment Screening',
    qualifications: [
      'MD with Occupational Health Qualification',
      'Certified Occupational Health Practitioner',
      'Registered with Ethiopian Health Professionals Council',
    ],
    experience: '6+ years occupational & corporate health',
    biography:
      'Dr. Samuel Worku leads all corporate and pre-employment health screening programs at Guardians. He works closely with HR teams, employers, and regulatory bodies to ensure compliance and workplace health standards.',
    areasOfService: [
      'Pre-employment medical screening',
      'Annual employee health checks',
      'Occupational hazard-specific assessments',
      'Fitness-for-work certificates',
      'Institutional & group screening programs',
    ],
    availability: 'Mon – Fri, group bookings by arrangement',
    languages: ['Amharic', 'English'],
    border: 'border-guardians-navy',
    accentColor: '#1A3A6B',
  },
];

/* ─── Specialties overview ──────────────────────────────────────────── */
const specialties = [
  { name: 'Laboratory Medicine',  desc: 'Clinical pathology, hematology, biochemistry, microbiology, and serology.',        icon: '🔬', border: 'border-guardians-navy' },
  { name: 'Diagnostic Radiology', desc: 'Digital X-ray and ultrasound imaging interpreted by qualified radiologists.',        icon: '🩻', border: 'border-guardians-cyan' },
  { name: 'Cardiology',           desc: 'ECG recording and cardiac assessment by an experienced cardiologist.',               icon: '❤️', border: 'border-guardians-red'  },
  { name: 'General Medicine',     desc: 'Outpatient consultation, health assessment, investigation ordering, and referrals.', icon: '🩺', border: 'border-guardians-navy' },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const Doctors = () => {
  const [expandedId, setExpandedId] = useState(null);
  const toggle = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className="theme-bg-background">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[320px] sm:min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Guardians Medical Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        <div className="relative flex items-center min-h-[320px] sm:min-h-[400px] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-white max-w-2xl">
              <p className="text-blue-200 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
                Our Medical Team
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight">
                Qualified Professionals{' '}
                <span style={{ color: '#5BB3E4' }}>You Can Trust</span>
              </h1>
              <p className="text-blue-50/90 text-sm sm:text-lg mb-5 sm:mb-8 max-w-xl leading-relaxed">
                Guardians is staffed by qualified, experienced medical professionals committed
                to delivering accurate results and compassionate patient care.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                <Link
                  to="/appointment"
                  className="theme-btn-primary px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg font-semibold inline-flex items-center justify-center gap-2 theme-shadow-lg text-sm sm:text-base"
                >
                  <CalendarDaysIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  Book a Consultation
                </Link>
                <a
                  href="tel:+251911234567"
                  className="bg-white/10 border border-white/50 text-white font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  Call for Guidance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Verified notice ───────────────────────────────────────── */}
      <div className="theme-bg-surface border-b theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <ShieldCheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm theme-text-secondary">
              <strong className="theme-text-primary">Verified professional information only.</strong>{' '}
              All team members listed on this page are qualified medical professionals.
              Full credentials are verified before publication.
            </p>
          </div>
        </div>
      </div>

      {/* ── Specialties overview ──────────────────────────────────── */}
      <section className="py-14 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
              Medical Specialties
            </p>
            <h2 className="text-3xl font-bold theme-text-primary mb-3">Areas of Expertise</h2>
            <p className="theme-text-secondary max-w-xl mx-auto">
              Our team covers all key disciplines needed for a comprehensive diagnostic center.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialties.map((s, i) => (
              <div
                key={i}
                className={`theme-bg-card rounded-2xl p-5 border-l-4 ${s.border} theme-shadow-md hover:theme-shadow-lg transition-all`}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold theme-text-primary mb-2">{s.name}</h3>
                <p className="text-sm theme-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctor profiles ───────────────────────────────────────── */}
      <section className="py-14 theme-bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
              Our Team
            </p>
            <h2 className="text-3xl font-bold theme-text-primary mb-3">Meet the Guardians Team</h2>
            <p className="theme-text-secondary max-w-xl mx-auto">
              Experienced, qualified medical professionals dedicated to accurate diagnostics
              and compassionate patient care.
            </p>
          </div>

          <div className="space-y-5">
            {doctors.map((doc) => {
              const isOpen = expandedId === doc.id;
              return (
                <div
                  key={doc.id}
                  className={`theme-bg-card rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'border-guardians-cyan theme-shadow-xl'
                      : 'theme-border theme-shadow-md hover:theme-shadow-lg'
                  }`}
                >
                  {/* ── Profile header ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-0">

                    {/* Photo column */}
                    <div className="flex items-center justify-center theme-bg-surface border-b sm:border-b-0 sm:border-r theme-border py-6 px-4 relative">
                      <div
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ backgroundColor: doc.accentColor }}
                      />
                      <div className="w-28 h-28 rounded-full border-4 border-white theme-shadow-lg overflow-hidden flex-shrink-0">
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Main info — 3 cols */}
                    <div className="sm:col-span-3 p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1 min-w-0">

                          {/* Name */}
                          <h3 className="text-xl font-bold theme-text-primary mb-0.5">
                            {doc.name}
                          </h3>

                          {/* Position */}
                          <p
                            className="font-semibold text-base mb-1"
                            style={{ color: doc.accentColor }}
                          >
                            {doc.position}
                          </p>

                          {/* Specialization */}
                          <p className="theme-text-secondary text-sm mb-3">
                            {doc.specialization}
                          </p>

                          {/* Experience badge */}
                          <span className="inline-flex items-center gap-1.5 theme-bg-surface theme-text-secondary text-xs px-3 py-1.5 rounded-full border theme-border mb-4">
                            <StarIcon className="h-3.5 w-3.5 flex-shrink-0" />
                            {doc.experience}
                          </span>

                          {/* Biography */}
                          <p className="text-sm theme-text-secondary leading-relaxed mb-4 line-clamp-2">
                            {doc.biography}
                          </p>

                          {/* Availability + languages */}
                          <div className="flex flex-wrap items-center gap-4 text-xs theme-text-muted">
                            <span className="flex items-center gap-1.5">
                              <ClockIcon className="h-3.5 w-3.5 flex-shrink-0" />
                              {doc.availability}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <LanguageIcon className="h-3.5 w-3.5 flex-shrink-0" />
                              {doc.languages.join(' · ')}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <Link
                            to="/appointment"
                            className="theme-btn-primary px-4 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <CalendarDaysIcon className="h-4 w-4" />
                            Book
                          </Link>
                          <button
                            onClick={() => toggle(doc.id)}
                            className="inline-flex items-center gap-1 text-xs font-medium theme-text-primary-brand hover:underline"
                          >
                            {isOpen ? (
                              <><ChevronUpIcon className="h-3.5 w-3.5" />Hide Profile</>
                            ) : (
                              <><ChevronDownIcon className="h-3.5 w-3.5" />Full Profile</>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Expanded full profile ── */}
                  {isOpen && (
                    <div className="border-t theme-border theme-bg-surface px-5 sm:px-8 py-7">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Qualifications */}
                        <div>
                          <h4 className="font-bold theme-text-primary mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                            <AcademicCapIcon className="h-4 w-4 theme-icon-navy flex-shrink-0" />
                            Qualifications
                          </h4>
                          <ul className="space-y-2.5">
                            {doc.qualifications.map((q, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm theme-text-secondary">
                                <span
                                  className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                                  style={{ backgroundColor: doc.accentColor }}
                                >
                                  {i + 1}
                                </span>
                                {q}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Areas of service */}
                        <div>
                          <h4 className="font-bold theme-text-primary mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                            <ShieldCheckIcon className="h-4 w-4 theme-icon-cyan flex-shrink-0" />
                            Areas of Service
                          </h4>
                          <ul className="space-y-2.5">
                            {doc.areasOfService.map((area, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm theme-text-secondary">
                                <span
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                                  style={{ backgroundColor: doc.accentColor }}
                                />
                                {area}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Full biography */}
                      <div className="mt-7 pt-6 border-t theme-border">
                        <h4 className="font-bold theme-text-primary mb-3 text-sm uppercase tracking-widest">
                          Biography
                        </h4>
                        <p className="text-sm theme-text-secondary leading-relaxed">
                          {doc.biography}
                        </p>
                      </div>

                      {/* Book CTA */}
                      <div className="mt-6 flex flex-wrap gap-3 items-center">
                        <Link
                          to="/appointment"
                          className="theme-btn-primary px-6 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2"
                        >
                          <CalendarDaysIcon className="h-4 w-4" />
                          Book with {doc.name.split(' ')[1]}
                        </Link>
                        <button
                          onClick={() => toggle(doc.id)}
                          className="text-sm theme-text-secondary hover:theme-text-primary font-medium inline-flex items-center gap-1"
                        >
                          <ChevronUpIcon className="h-3.5 w-3.5" />
                          Close Profile
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why our team ──────────────────────────────────────────── */}
      <section className="py-14 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
                Our Standards
              </p>
              <h2 className="text-3xl font-bold theme-text-primary mb-6 leading-tight">
                Why You Can Trust Our Medical Team
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: AcademicCapIcon,
                    title: 'Qualified & Licensed',
                    desc: 'All clinical staff hold recognized qualifications and are registered with the appropriate Ethiopian medical professional bodies.',
                    border: 'border-guardians-navy',
                  },
                  {
                    icon: ShieldCheckIcon,
                    title: 'Verified Before Publishing',
                    desc: 'Every team member listed on this site has been professionally confirmed. We do not publish unverified profiles.',
                    border: 'border-guardians-cyan',
                  },
                  {
                    icon: UserGroupIcon,
                    title: 'Experienced in Diagnostics',
                    desc: 'Our team has direct experience in clinical diagnostics, laboratory medicine, imaging, and patient care.',
                    border: 'border-guardians-navy',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`theme-bg-card rounded-xl p-4 border-l-4 ${item.border} theme-shadow-sm flex items-start gap-3`}
                  >
                    <div className="theme-icon-bg-navy p-2.5 rounded-lg flex-shrink-0">
                      <item.icon className="h-5 w-5 theme-icon-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold theme-text-primary mb-1">{item.title}</h3>
                      <p className="text-sm theme-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Medical professionals"
                className="rounded-2xl theme-shadow-2xl w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-14 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Speak with Our Team?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Book a consultation appointment or call us — our medical team is ready to help
            you with your diagnostic needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/appointment"
              className="bg-white font-bold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors theme-shadow-lg"
              style={{ color: '#1A3A6B' }}
            >
              <CalendarDaysIcon className="h-5 w-5" />
              Book a Consultation
            </Link>
            <a
              href="tel:+251911234567"
              className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Doctors;
