import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  PhoneIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

/* ─── Quick nav items ───────────────────────────────────────────────── */
const navItems = [
  { id: 'blood-test',   label: 'Blood Tests' },
  { id: 'ultrasound',   label: 'Ultrasound' },
  { id: 'xray',         label: 'X-Ray' },
  { id: 'ecg',          label: 'ECG' },
  { id: 'samples',      label: 'Sample Types' },
  { id: 'what-to-bring',label: 'What to Bring' },
  { id: 'appointments', label: 'Appointments' },
  { id: 'results',      label: 'Results' },
];

/* ─── Section helper components ────────────────────────────────────── */
const SectionHeader = ({ id, eyebrow, title, description }) => (
  <div className="mb-8">
    <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-1">
      {eyebrow}
    </p>
    <h2 id={id} className="text-2xl lg:text-3xl font-bold theme-text-primary mb-3">
      {title}
    </h2>
    {description && (
      <p className="theme-text-secondary leading-relaxed max-w-2xl">{description}</p>
    )}
  </div>
);

const CheckList = ({ items, cols = 2 }) => (
  <ul className={`grid grid-cols-1 ${cols === 2 ? 'sm:grid-cols-2' : ''} gap-2.5`}>
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5 text-sm theme-text-secondary">
        <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const NumberedList = ({ items }) => (
  <ol className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-sm theme-text-secondary">
        <span
          className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}
        >
          {i + 1}
        </span>
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ol>
);

const InfoCard = ({ icon: Icon, title, description, border = 'border-guardians-navy' }) => (
  <div className={`theme-bg-card rounded-xl p-4 border-l-4 ${border} theme-shadow-sm flex items-start gap-3`}>
    <div className="theme-icon-bg-navy p-2 rounded-lg flex-shrink-0">
      <Icon className="h-5 w-5 theme-icon-navy" />
    </div>
    <div>
      <p className="font-semibold theme-text-primary text-sm mb-0.5">{title}</p>
      <p className="text-xs theme-text-secondary leading-relaxed">{description}</p>
    </div>
  </div>
);

const WarningBox = ({ children }) => (
  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 my-5">
    <ExclamationTriangleIcon className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
    <p className="text-sm text-amber-800 leading-relaxed">{children}</p>
  </div>
);

const NoteBox = ({ children }) => (
  <div className="theme-bg-primary-5 border theme-border rounded-xl p-4 flex items-start gap-3 my-5">
    <InformationCircleIcon className="h-5 w-5 theme-icon-cyan flex-shrink-0 mt-0.5" />
    <p className="text-sm theme-text-secondary leading-relaxed">{children}</p>
  </div>
);

/* ─── Component ─────────────────────────────────────────────────────── */
const PatientInfo = () => {
  const [activeSection, setActiveSection] = useState('blood-test');
  const observerRef = useRef(null);

  /* Highlight active nav item as user scrolls */
  useEffect(() => {
    const sections = navItems.map(n => document.getElementById(n.id)).filter(Boolean);
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach(s => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="theme-bg-background">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Patient Information"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white max-w-2xl">
              <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">
                Patient Guide
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Patient{' '}
                <span style={{ color: '#5BB3E4' }}>Information</span>
              </h1>
              <p className="text-blue-50/90 text-lg max-w-xl leading-relaxed">
                Everything you need to know before your visit — preparation guides,
                what to bring, and what to expect at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky quick-nav ──────────────────────────────────────── */}
      <div className="sticky top-0 z-20 theme-bg-card border-b theme-border theme-shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2.5 scrollbar-none">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeSection === item.id
                    ? 'theme-bg-primary text-white'
                    : 'theme-text-secondary hover:theme-bg-hover'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Page body ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">

        {/* ════════════════════════════════════════════════════════
            1. BLOOD TESTS
        ════════════════════════════════════════════════════════ */}
        <section id="blood-test" className="scroll-mt-20">
          <SectionHeader
            id="blood-test"
            eyebrow="Laboratory"
            title="Preparing for a Blood Test"
            description="Proper preparation before a blood test significantly affects accuracy. Follow these guidelines for reliable results."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold theme-text-primary mb-4">General Preparation</h3>
              <CheckList items={[
                'Fast for 8–12 hours before glucose, lipid, and liver function tests',
                'You may drink water normally during fasting',
                'Avoid tea, coffee, juice, and food during fasting',
                'Take regular medications as usual unless advised otherwise',
                'Inform staff of all medications you are currently taking',
                'Avoid heavy exercise for at least 12 hours before the test',
                'Wear loose-sleeved clothing for easy arm access',
                'Bring your referral letter or prescription if you have one',
              ]} />
              <WarningBox>
                Do not stop any prescribed medications without consulting your doctor first.
                Inform our staff of all medications at the time of collection.
              </WarningBox>
            </div>
            <div>
              <h3 className="font-bold theme-text-primary mb-4">Test-Specific Fasting Requirements</h3>
              <div className="space-y-2">
                {[
                  { test: 'Blood Glucose (Random)', fast: 'No fasting required', color: 'text-green-600', bg: 'bg-green-50' },
                  { test: 'Fasting Blood Glucose', fast: '8–12 hours fasting', color: 'text-orange-600', bg: 'bg-orange-50' },
                  { test: 'HbA1c', fast: 'No fasting required', color: 'text-green-600', bg: 'bg-green-50' },
                  { test: 'Lipid Profile', fast: '9–12 hours fasting', color: 'text-red-600', bg: 'bg-red-50' },
                  { test: 'Liver Function Tests', fast: '8–10 hours fasting', color: 'text-orange-600', bg: 'bg-orange-50' },
                  { test: 'Kidney Function Tests', fast: 'No fasting required', color: 'text-green-600', bg: 'bg-green-50' },
                  { test: 'Complete Blood Count', fast: 'No fasting required', color: 'text-green-600', bg: 'bg-green-50' },
                  { test: 'Thyroid Function', fast: 'No fasting required', color: 'text-green-600', bg: 'bg-green-50' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between theme-bg-card rounded-lg px-4 py-2.5 border theme-border text-sm">
                    <span className="theme-text-primary font-medium">{row.test}</span>
                    <span className={`${row.bg} ${row.color} font-semibold text-xs px-2.5 py-1 rounded-full`}>
                      {row.fast}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            2. ULTRASOUND
        ════════════════════════════════════════════════════════ */}
        <section id="ultrasound" className="scroll-mt-20">
          <SectionHeader
            id="ultrasound"
            eyebrow="Imaging"
            title="Preparing for an Ultrasound"
            description="Preparation for ultrasound varies by the type of scan. Follow the instructions specific to your scan type."
          />
          <div className="space-y-4">
            {[
              {
                type: 'Abdominal Ultrasound',
                border: 'border-guardians-navy',
                instructions: [
                  'Fast for 4–6 hours before the scan',
                  'You may drink water normally',
                  'Avoid gas-producing foods the day before (beans, cabbage, carbonated drinks)',
                  'Wear loose, comfortable clothing',
                ],
              },
              {
                type: 'Pelvic Ultrasound (Transabdominal)',
                border: 'border-guardians-cyan',
                instructions: [
                  'Drink 4–6 glasses of water 1 hour before the scan',
                  'Arrive with a full bladder — do not urinate before the scan',
                  'A full bladder improves image quality significantly',
                  'Wear comfortable clothing with easy access to the lower abdomen',
                ],
              },
              {
                type: 'Obstetric Ultrasound (Pregnancy)',
                border: 'border-guardians-navy',
                instructions: [
                  'First trimester: arrive with a full bladder',
                  'Second and third trimester: full bladder is not required',
                  'Bring your previous scan reports and antenatal records',
                  'You may eat and drink normally',
                ],
              },
              {
                type: 'Thyroid & Neck Ultrasound',
                border: 'border-guardians-cyan',
                instructions: [
                  'No special preparation required',
                  'Remove necklaces and any neck jewellery before arriving',
                  'Wear a low-collared shirt or blouse',
                ],
              },
              {
                type: 'Breast Ultrasound',
                border: 'border-guardians-red',
                instructions: [
                  'No special preparation required',
                  'Do not apply deodorant, lotion, or powder on the day of the scan',
                  'Wear a two-piece outfit for easy access',
                ],
              },
              {
                type: 'Renal (Kidney) Ultrasound',
                border: 'border-guardians-navy',
                instructions: [
                  'Drink 4–6 glasses of water 1 hour before',
                  'Arrive with a moderately full bladder',
                  'Avoid heavy meals for 2 hours before the scan',
                ],
              },
            ].map((scan, i) => (
              <div key={i} className={`theme-bg-card rounded-xl p-5 border-l-4 ${scan.border} theme-shadow-sm`}>
                <h3 className="font-bold theme-text-primary mb-3">{scan.type}</h3>
                <CheckList items={scan.instructions} cols={1} />
              </div>
            ))}
          </div>
          <NoteBox>
            Ultrasound uses sound waves — it is completely safe, has no radiation, and is
            painless. A gel is applied to the skin to help transmit the sound waves.
          </NoteBox>
        </section>

        {/* ════════════════════════════════════════════════════════
            3. X-RAY
        ════════════════════════════════════════════════════════ */}
        <section id="xray" className="scroll-mt-20">
          <SectionHeader
            id="xray"
            eyebrow="Imaging"
            title="Preparing for a Digital X-Ray"
            description="X-ray preparation is minimal. Follow these steps to ensure a clear image and a smooth visit."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold theme-text-primary mb-4">Before Your X-Ray</h3>
              <CheckList items={[
                'Remove all jewellery, piercings, and metal accessories in the area to be imaged',
                'Wear loose clothing without metal zips, buttons, or underwire',
                'Inform the radiographer if you are pregnant or may be pregnant',
                'No fasting is required unless specifically instructed',
                'Bring your referral letter if available',
                'Inform staff of any previous X-rays in the same area',
                'If your chest is being imaged, avoid wearing underwire bras',
              ]} />
            </div>
            <div>
              <h3 className="font-bold theme-text-primary mb-4">What to Expect</h3>
              <NumberedList items={[
                'You will be positioned by the radiographer for the best image quality.',
                'You will be asked to hold still for a brief moment during the exposure.',
                'For a chest X-ray, you will be asked to take a deep breath and hold it.',
                'The X-ray exposure lasts a fraction of a second — it is completely painless.',
                'Radiation exposure is minimal and within established safe clinical limits.',
                'Images are processed digitally and are available within a few hours.',
              ]} />
              <WarningBox>
                Always inform staff if you are pregnant or trying to conceive before any
                X-ray procedure. Pregnant patients will be assessed individually.
              </WarningBox>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            4. ECG
        ════════════════════════════════════════════════════════ */}
        <section id="ecg" className="scroll-mt-20">
          <SectionHeader
            id="ecg"
            eyebrow="Cardiac"
            title="Preparing for an ECG"
            description="An ECG is quick, painless, and requires very little preparation. Here is what to know before your appointment."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold theme-text-primary mb-4">Preparation Guidelines</h3>
              <CheckList items={[
                'Avoid heavy physical exercise for at least 30 minutes before the test',
                'Do not smoke or consume caffeine for at least 1 hour before',
                'Do not apply creams, lotions, or oils to the chest area',
                'Wear a loose two-piece outfit — electrodes need access to the chest',
                'Inform the technician of any cardiac medications you take',
                'Tell staff about any pacemaker or implanted cardiac device',
                'Avoid heavy meals immediately before the test',
                'Rest quietly for 5–10 minutes on arrival before the recording begins',
              ]} />
            </div>
            <div>
              <h3 className="font-bold theme-text-primary mb-4">During the ECG</h3>
              <NumberedList items={[
                'You will lie flat on a bed in a calm, private room.',
                'Small electrodes (sticky patches) are placed on your chest, arms, and legs.',
                'The recording takes approximately 10 minutes.',
                'You must lie still and breathe normally during the recording.',
                'The electrodes are removed painlessly at the end.',
                'Results are reviewed by our cardiologist within 1–2 hours.',
              ]} />
              <NoteBox>
                An ECG records electrical signals only — it does not send electricity into
                your body. It is completely safe and there are no risks or side effects.
              </NoteBox>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            5. SAMPLE COLLECTION TYPES
        ════════════════════════════════════════════════════════ */}
        <section id="samples" className="scroll-mt-20">
          <SectionHeader
            id="samples"
            eyebrow="Sample Collection"
            title="Sample Collection Information"
            description="Different tests require different types of samples. Here is what each collection involves and how to prepare."
          />
          <div className="space-y-4">
            {[
              {
                icon: '🩸',
                title: 'Blood Sample (Venipuncture)',
                border: 'border-guardians-navy',
                desc: 'A qualified phlebotomist draws blood from a vein in your arm using a sterile needle.',
                prep: 'Follow fasting instructions if required. Drink water. Wear loose sleeves.',
              },
              {
                icon: '🧪',
                title: 'Urine Sample',
                border: 'border-guardians-cyan',
                desc: 'A mid-stream urine sample is collected in a sterile container provided by our staff.',
                prep: 'Clean the area well before collection. Collect the mid-stream portion. Avoid contamination.',
              },
              {
                icon: '🔬',
                title: 'Stool Sample',
                border: 'border-guardians-navy',
                desc: 'A small stool sample is collected in a sterile container provided by our laboratory.',
                prep: 'Avoid antibiotics for 1 week before if possible. Collect fresh sample on the morning of the test.',
              },
              {
                icon: '🩺',
                title: 'Swab Sample (Throat/Nasal)',
                border: 'border-guardians-cyan',
                desc: 'A sterile swab collects cells or secretions from the throat, nose, or wound area.',
                prep: 'Do not eat, drink, or use mouthwash for 1 hour before a throat swab. Blow your nose before a nasal swab.',
              },
              {
                icon: '🏠',
                title: 'Home Sample Collection',
                border: 'border-guardians-red',
                desc: 'Our trained phlebotomist visits your home or office to collect blood and urine samples.',
                prep: 'Same preparation rules apply. Confirm fasting requirements when scheduling.',
              },
            ].map((s, i) => (
              <div key={i} className={`theme-bg-card rounded-xl p-5 border-l-4 ${s.border} theme-shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4`}>
                <div className="sm:col-span-1 flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">{s.icon}</span>
                  <h3 className="font-bold theme-text-primary text-sm mt-1">{s.title}</h3>
                </div>
                <div className="sm:col-span-1">
                  <p className="text-xs theme-text-muted uppercase tracking-wide font-semibold mb-1">What it involves</p>
                  <p className="text-sm theme-text-secondary leading-relaxed">{s.desc}</p>
                </div>
                <div className="sm:col-span-1">
                  <p className="text-xs theme-text-muted uppercase tracking-wide font-semibold mb-1">Preparation</p>
                  <p className="text-sm theme-text-secondary leading-relaxed">{s.prep}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/home-collection"
              className="theme-text-primary-brand font-semibold inline-flex items-center gap-2 hover:underline"
            >
              Learn More About Home Collection
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            6. WHAT TO BRING
        ════════════════════════════════════════════════════════ */}
        <section id="what-to-bring" className="scroll-mt-20">
          <SectionHeader
            id="what-to-bring"
            eyebrow="Checklist"
            title="What to Bring to Your Appointment"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold theme-text-primary mb-4">Required Documents</h3>
              <div className="space-y-2.5">
                {[
                  { item: 'Valid photo ID', note: 'National ID, passport, or driving licence — required to register', required: true },
                  { item: 'Referral letter or prescription', note: 'Bring if your doctor referred you for specific tests', required: false },
                  { item: 'Previous test results', note: 'Relevant to your current tests if available', required: false },
                  { item: 'Health insurance card', note: 'If applicable — contact us first to confirm coverage', required: false },
                  { item: 'Corporate authorization letter', note: 'Required if your employer is covering the cost', required: false },
                ].map((item, i) => (
                  <div key={i} className={`theme-bg-card rounded-xl p-4 flex items-start gap-3 theme-shadow-sm border-l-4 ${item.required ? 'border-guardians-navy' : 'border-guardians-cyan'}`}>
                    <CheckCircleIcon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${item.required ? 'text-guardians-navy' : 'text-green-500'}`} />
                    <div>
                      <p className="font-semibold theme-text-primary text-sm">
                        {item.item}
                        {item.required && (
                          <span className="ml-2 bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">
                            Required
                          </span>
                        )}
                      </p>
                      <p className="text-xs theme-text-secondary mt-0.5">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold theme-text-primary mb-4">General Tips</h3>
              <div className="space-y-3">
                {[
                  { icon: InformationCircleIcon, title: 'Arrive a few minutes early', desc: 'Allow time to register and complete any forms on arrival.', border: 'border-guardians-navy' },
                  { icon: InformationCircleIcon, title: 'Bring your medication list', desc: 'If you take regular medications, bring a list or the packaging.', border: 'border-guardians-cyan' },
                  { icon: InformationCircleIcon, title: 'Wear comfortable clothing', desc: 'Loose clothing makes blood draw, ECG, and imaging much easier.', border: 'border-guardians-navy' },
                  { icon: InformationCircleIcon, title: 'Bring a companion if needed', desc: 'You are welcome to bring a family member or friend for support.', border: 'border-guardians-cyan' },
                ].map((tip, i) => (
                  <InfoCard key={i} {...tip} />
                ))}
              </div>
              <WarningBox>
                Without valid photo ID, we may not be able to process your registration
                or release your results. Please ensure you bring identification.
              </WarningBox>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            7. APPOINTMENTS
        ════════════════════════════════════════════════════════ */}
        <section id="appointments" className="scroll-mt-20">
          <SectionHeader
            id="appointments"
            eyebrow="Scheduling"
            title="Appointment Information"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              { title: 'Walk-Ins Welcome',        desc: 'You can visit without an appointment during working hours. Appointments reduce waiting time.', border: 'border-guardians-navy' },
              { title: 'How to Book',             desc: 'Online via our Appointment page, by phone (+251 911 234 567), or WhatsApp — we confirm within a few hours.', border: 'border-guardians-cyan' },
              { title: 'Cancellations',           desc: 'Please notify us as early as possible to cancel or reschedule. Call or WhatsApp us directly.', border: 'border-guardians-navy' },
              { title: 'Group Bookings',          desc: 'For corporate or family groups, contact us in advance for coordinated scheduling.', border: 'border-guardians-cyan' },
              { title: 'Preparation Confirmation', desc: 'We will confirm any preparation requirements (fasting, full bladder) when we confirm your appointment.', border: 'border-guardians-navy' },
              { title: 'Emergency Walk-Ins',      desc: 'Emergency and urgent testing is available. Call our emergency line for immediate assistance.', border: 'border-guardians-red' },
            ].map((card, i) => (
              <div key={i} className={`theme-bg-card rounded-xl p-5 border-l-4 ${card.border} theme-shadow-sm`}>
                <h3 className="font-semibold theme-text-primary text-sm mb-2">{card.title}</h3>
                <p className="text-sm theme-text-secondary leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/appointment" className="theme-btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 theme-shadow-md">
              <CalendarDaysIcon className="h-4 w-4" /> Book Appointment
            </Link>
            <Link to="/home-collection" className="theme-btn-outline px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
              Request Home Collection
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            8. RESULTS
        ════════════════════════════════════════════════════════ */}
        <section id="results" className="scroll-mt-20">
          <SectionHeader
            id="results"
            eyebrow="Test Results"
            title="Receiving Your Results"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
            <div>
              <h3 className="font-bold theme-text-primary mb-4">Typical Turnaround Times</h3>
              <div className="theme-bg-card rounded-xl overflow-hidden border theme-border theme-shadow-sm">
                <div className="theme-bg-primary px-4 py-2.5 grid grid-cols-2 text-white text-xs font-bold uppercase tracking-wide">
                  <span>Test Type</span>
                  <span className="text-right">Ready In</span>
                </div>
                {[
                  { test: 'Complete Blood Count', time: 'Same day (2–4 hrs)', color: 'text-green-600 bg-green-50' },
                  { test: 'Blood Glucose', time: 'Same day (1–2 hrs)', color: 'text-green-600 bg-green-50' },
                  { test: 'Lipid Profile', time: 'Same day (3–5 hrs)', color: 'text-green-600 bg-green-50' },
                  { test: 'Liver & Kidney Function', time: 'Same day (4–6 hrs)', color: 'text-green-600 bg-green-50' },
                  { test: 'Thyroid Function', time: '1–2 days', color: 'text-blue-600 bg-blue-50' },
                  { test: 'Hepatitis & HIV', time: 'Same day (3–6 hrs)', color: 'text-green-600 bg-green-50' },
                  { test: 'Digital X-Ray', time: 'Same day (2–4 hrs)', color: 'text-green-600 bg-green-50' },
                  { test: 'Ultrasound', time: 'Same day (1–3 hrs)', color: 'text-green-600 bg-green-50' },
                  { test: 'ECG', time: '1–2 hours', color: 'text-green-600 bg-green-50' },
                  { test: 'Health Screening Package', time: '1–2 days', color: 'text-purple-600 bg-purple-50' },
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-2 px-4 py-3 text-sm ${i % 2 === 0 ? '' : 'theme-bg-surface'}`}>
                    <span className="theme-text-primary font-medium">{row.test}</span>
                    <span className={`text-right font-semibold text-xs self-center`}>
                      <span className={`${row.color} px-2.5 py-1 rounded-full`}>{row.time}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold theme-text-primary mb-4">How to Receive Your Results</h3>
              <div className="space-y-3">
                {[
                  { title: 'Collect at Our Center', desc: 'Bring your patient receipt and valid ID to collect your printed results report.', border: 'border-guardians-navy' },
                  { title: 'Phone Notification', desc: 'We call you when your results are ready — please ensure we have your correct phone number.', border: 'border-guardians-cyan' },
                  { title: 'Authorized Collection', desc: 'A family member may collect on your behalf with a written authorization letter and their ID.', border: 'border-guardians-navy' },
                  { title: 'Doctor Review', desc: 'A consultation with our doctor to discuss your results is available on request.', border: 'border-guardians-cyan' },
                ].map((item, i) => (
                  <div key={i} className={`theme-bg-card rounded-xl p-4 border-l-4 ${item.border} theme-shadow-sm`}>
                    <p className="font-semibold theme-text-primary text-sm mb-1">{item.title}</p>
                    <p className="text-sm theme-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <NoteBox>
                Your results are strictly confidential. We will not share them with any
                third party without your explicit written consent.
              </NoteBox>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/results" className="theme-btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 theme-shadow-md">
              Results Information <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </div>

      {/* ── Emergency ─────────────────────────────────────────────── */}
      <section className="py-10 bg-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-white">
          <div>
            <p className="font-bold text-lg">Need Urgent Assistance?</p>
            <p className="text-red-100 text-sm">
              Call our emergency line for urgent diagnostic services — available 24/7.
            </p>
          </div>
          <a
            href="tel:+251911000911"
            className="bg-white text-red-700 font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-red-50 transition-colors"
          >
            <PhoneIcon className="h-5 w-5" /> +251 911 000 911
          </a>
        </div>
      </section>

    </div>
  );
};

export default PatientInfo;
