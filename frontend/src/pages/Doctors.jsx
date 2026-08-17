import { Link } from 'react-router-dom';
import {
  CalendarDaysIcon,
  PhoneIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  UserGroupIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

/* ─── Specialties overview ──────────────────────────────────────────── */
const specialties = [
  { name: 'Laboratory Medicine',  desc: 'Clinical pathology, hematology, biochemistry, microbiology, and serology.',          icon: '🔬', border: 'border-guardians-navy' },
  { name: 'Diagnostic Radiology', desc: 'Digital X-ray and ultrasound imaging interpreted by qualified radiologists.',          icon: '🩻', border: 'border-guardians-cyan' },
  { name: 'Cardiology',           desc: 'ECG recording and cardiac assessment by an experienced cardiologist.',                 icon: '❤️', border: 'border-guardians-red'  },
  { name: 'General Medicine',     desc: 'Outpatient consultation, health assessment, investigation ordering, and referrals.',   icon: '🩺', border: 'border-guardians-navy' },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const Doctors = () => (
  <div className="theme-bg-background">

    {/* Hero */}
    <section className="relative h-[400px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Guardians Medical Team"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-2xl">
            <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">
              Our Medical Team
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Qualified Professionals{' '}
              <span style={{ color: '#5BB3E4' }}>You Can Trust</span>
            </h1>
            <p className="text-blue-50/90 text-lg mb-8 max-w-xl leading-relaxed">
              Guardians is staffed by qualified, experienced medical professionals committed
              to delivering accurate results and compassionate patient care.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="theme-btn-primary px-7 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 theme-shadow-lg"
              >
                <CalendarDaysIcon className="h-5 w-5" />
                Book a Consultation
              </Link>
              <a
                href="tel:+251911234567"
                className="bg-white/10 border border-white/50 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                <PhoneIcon className="h-5 w-5" />
                Call for Guidance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Verified team notice */}
    <div className="theme-bg-surface border-b theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <ShieldCheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
          <p className="text-sm theme-text-secondary">
            <strong className="theme-text-primary">Professional verification:</strong>{' '}
            Only verified, licensed medical professionals are listed on this page.
            Full team profiles will be published as staff join Guardians.
          </p>
        </div>
      </div>
    </div>

    {/* Specialties */}
    <section className="py-14 theme-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
            Medical Specialties
          </p>
          <h2 className="text-3xl font-bold theme-text-primary mb-3">Areas of Expertise</h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            Our team covers all key areas required for a comprehensive diagnostic center.
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

    {/* Team placeholder — honest, professional */}
    <section className="py-14 theme-bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">
            Our Team
          </p>
          <h2 className="text-3xl font-bold theme-text-primary mb-3">Meet the Guardians Team</h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            Full individual profiles — including photos, qualifications, and biographies —
            will be published once each team member has been verified and has joined Guardians.
          </p>
        </div>

        {/* Info card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="theme-bg-card rounded-2xl p-6 border-l-4 border-guardians-cyan theme-shadow-md flex items-start gap-4">
            <InformationCircleIcon className="h-6 w-6 theme-icon-cyan flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold theme-text-primary mb-1">Team Profiles Coming Soon</h3>
              <p className="text-sm theme-text-secondary leading-relaxed">
                Guardians is committed to publishing only verified professional information.
                We are finalizing staff onboarding and will publish complete team profiles —
                including names, qualifications, experience, and areas of service — as each
                team member is officially confirmed.
              </p>
              <p className="text-sm theme-text-secondary leading-relaxed mt-2">
                In the meantime, you can contact us directly to speak with a member of our
                medical team or ask about our staff qualifications.
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder cards — represent roles without fake personal data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              role: 'Chief Medical Officer',
              specialty: 'Internal Medicine & General Medicine',
              responsibility: 'Oversees all clinical operations, quality standards, and patient care protocols at Guardians.',
              availability: 'Available for consultation by appointment',
              border: 'border-guardians-navy',
            },
            {
              role: 'Head of Laboratory',
              specialty: 'Laboratory Medicine & Clinical Pathology',
              responsibility: 'Manages all laboratory operations, quality control, and result validation.',
              availability: 'Mon – Sat',
              border: 'border-guardians-cyan',
            },
            {
              role: 'Imaging & Radiology',
              specialty: 'Diagnostic Radiology',
              responsibility: 'Interprets all digital X-ray and ultrasound images with detailed written reports.',
              availability: 'Mon – Sat',
              border: 'border-guardians-navy',
            },
            {
              role: 'Cardiologist',
              specialty: 'Cardiology & ECG',
              responsibility: 'Reviews and interprets all ECG recordings and provides cardiac assessment reports.',
              availability: 'Available specific days — call to confirm',
              border: 'border-guardians-red',
            },
            {
              role: "Women's Health Specialist",
              specialty: "Women's Health & Obstetric Ultrasound",
              responsibility: "Performs obstetric and pelvic ultrasound, and supports women's health screening packages.",
              availability: 'Mon – Fri',
              border: 'border-guardians-cyan',
            },
            {
              role: 'Occupational Health Officer',
              specialty: 'Occupational Health & Pre-employment Screening',
              responsibility: 'Leads all corporate and pre-employment health screening programs.',
              availability: 'Available for group bookings',
              border: 'border-guardians-navy',
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`theme-bg-card rounded-2xl overflow-hidden theme-shadow-md hover:theme-shadow-xl transition-all duration-300 flex flex-col border-t-4`}
              style={{ borderColor: i % 3 === 0 ? '#1A3A6B' : i % 3 === 1 ? '#5BB3E4' : '#E8392A' }}
            >
              {/* Avatar placeholder */}
              <div className="h-44 theme-bg-surface flex items-center justify-center">
                <div className="w-20 h-20 rounded-full theme-bg-primary-10 border-4 border-white theme-shadow-md flex items-center justify-center">
                  <UserGroupIcon className="h-9 w-9 theme-icon-navy" />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="text-xs theme-text-muted uppercase tracking-wider mb-1">Position</p>
                  <h3 className="font-bold theme-text-primary text-lg leading-tight">{card.role}</h3>
                </div>

                <div className="mb-3">
                  <p className="text-xs theme-text-muted uppercase tracking-wider mb-1">Specialty</p>
                  <p className="text-sm theme-text-primary-brand font-medium">{card.specialty}</p>
                </div>

                <p className="text-sm theme-text-secondary leading-relaxed mb-4 flex-1">
                  {card.responsibility}
                </p>

                <div className="flex items-center gap-2 text-xs theme-text-muted pt-3 border-t theme-border">
                  <CalendarDaysIcon className="h-3.5 w-3.5 flex-shrink-0" />
                  {card.availability}
                </div>

                <Link
                  to="/appointment"
                  className="mt-4 theme-btn-primary w-full py-2.5 rounded-lg text-sm font-semibold text-center block"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why our team */}
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
                  desc: 'We do not publish unverified profiles. Every team member listed on this site has been professionally confirmed.',
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
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Medical professionals"
              className="rounded-2xl theme-shadow-2xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
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

export default Doctors;
