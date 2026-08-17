import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

/* ─── FAQ data ──────────────────────────────────────────────────────── */
const faqData = {
  general: {
    label: 'General',
    icon: '🏥',
    questions: [
      {
        q: 'What is Guardians Diagnostic Center?',
        a: 'Guardians Diagnostic Center is a professional diagnostic healthcare provider based in Addis Ababa, Ethiopia. We offer laboratory services, digital X-ray, ultrasound, ECG, general consultation, and health screening packages for individuals, families, and organizations.',
      },
      {
        q: 'Where is Guardians located?',
        a: 'We are located in Bole Sub-City, Addis Ababa, Ethiopia — near Bole International Airport. Our full address and directions are available on the Contact page.',
      },
      {
        q: 'What are your opening hours?',
        a: 'Monday – Friday: 7:00 AM – 8:00 PM | Saturday: 8:00 AM – 6:00 PM | Sunday: 9:00 AM – 2:00 PM. Emergency services are available 24/7 by calling our emergency line.',
      },
      {
        q: 'Do I need a referral letter to visit?',
        a: 'No. You can visit Guardians without a referral letter for most services. However, some specialist tests or consultations may benefit from a referral — our staff can advise you when you arrive.',
      },
      {
        q: 'Is Guardians open on public holidays?',
        a: 'We operate on a reduced schedule on public holidays. We recommend calling ahead on Ethiopian public holidays to confirm availability.',
      },
    ],
  },
  appointments: {
    label: 'Appointments',
    icon: '📅',
    questions: [
      {
        q: 'Do I need an appointment?',
        a: 'Appointments are recommended to reduce waiting time, but walk-ins are welcome during working hours. For health screening packages and consultations, booking in advance is strongly recommended.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'You can book online through our Appointment page, call us at +251 911 234 567, or send us a WhatsApp message. We will confirm your appointment and provide any preparation instructions.',
      },
      {
        q: 'How quickly will you confirm my appointment?',
        a: 'We aim to confirm all appointment requests within a few hours during working hours. You will receive a call or message to confirm your date, time, and any preparation needed.',
      },
      {
        q: 'Can I cancel or reschedule an appointment?',
        a: 'Yes. Please contact us as early as possible to cancel or reschedule — at least a few hours before your scheduled time. You can call or WhatsApp us directly.',
      },
      {
        q: 'Can I book for someone else (family member, employee)?',
        a: 'Yes. When booking, provide the details of the patient who will be attending. For corporate group bookings, contact our corporate team for arrangements.',
      },
    ],
  },
  tests: {
    label: 'Tests & Procedures',
    icon: '🔬',
    questions: [
      {
        q: 'What laboratory tests do you offer?',
        a: 'We offer a comprehensive range including Complete Blood Count, blood glucose, lipid profile, liver and kidney function, thyroid function, hepatitis B & C, HIV screening, urinalysis, stool examination, electrolytes, cardiac enzymes, and more.',
      },
      {
        q: 'Do you offer imaging services?',
        a: 'Yes. We offer digital X-ray and ultrasound (abdominal, pelvic, obstetric, thyroid, breast, and more). CT and MRI are planned for future expansion.',
      },
      {
        q: 'What does an ECG involve?',
        a: 'An ECG (electrocardiogram) records your heart\'s electrical activity using small electrodes placed on your chest, arms, and legs. It is completely painless, takes about 10 minutes, and the results are reviewed by our cardiologist.',
      },
      {
        q: 'How long does a typical appointment take?',
        a: 'Blood tests usually take 15–30 minutes including sample collection. Ultrasound takes 20–45 minutes. Health screening packages may take 1.5–3 hours depending on the package. We will inform you of the expected duration when you book.',
      },
      {
        q: 'Can children get tests at Guardians?',
        a: 'Yes. We serve patients of all ages. For children, we ensure a calm and supportive environment. A parent or guardian must accompany children during all procedures.',
      },
    ],
  },
  preparation: {
    label: 'Test Preparation',
    icon: '📋',
    questions: [
      {
        q: 'Do I need to fast before my blood test?',
        a: 'Fasting (8–12 hours) is required for blood glucose, lipid profile, and liver function tests. For a complete blood count or HIV test, fasting is not required. We will confirm fasting requirements when you book.',
      },
      {
        q: 'Can I drink water while fasting?',
        a: 'Yes. You should drink water normally while fasting — staying hydrated helps with blood draw. Avoid tea, coffee, juice, and any food during the fasting period.',
      },
      {
        q: 'What should I bring to my appointment?',
        a: 'Please bring a valid photo ID (national ID, passport, or driving licence), any referral letter or doctor\'s prescription (if you have one), and previous test results if relevant. Payment method should also be prepared.',
      },
      {
        q: 'How do I prepare for an ultrasound?',
        a: 'Preparation depends on the type: Abdominal ultrasound — fast for 4–6 hours. Pelvic ultrasound — drink 4–6 glasses of water 1 hour before and arrive with a full bladder. Thyroid or breast ultrasound — no preparation needed. We will advise you when booking.',
      },
      {
        q: 'What should I wear to my appointment?',
        a: 'Wear comfortable, loose clothing. For blood tests, wear loose-sleeved clothing for easy arm access. For ECG or chest X-ray, avoid clothing with metal zips or underwire. For ultrasound, wear clothing that allows easy access to the area being scanned.',
      },
    ],
  },
  results: {
    label: 'Results & Reports',
    icon: '📄',
    questions: [
      {
        q: 'When will my results be ready?',
        a: 'Most blood test results are ready the same day. Imaging results (X-ray, ultrasound) are typically ready within a few hours. Full health screening reports take 1–2 days. We will confirm your specific turnaround time when you book.',
      },
      {
        q: 'How do I receive my results?',
        a: 'You can collect your printed results report at our center. We will notify you by phone or SMS when they are ready. Online result access is planned for a future phase.',
      },
      {
        q: 'Can someone else collect my results for me?',
        a: 'Yes, but the authorized person must bring a written authorization letter from you and their own valid photo ID. We cannot release results to unauthorized individuals to protect your privacy.',
      },
      {
        q: 'Can a doctor review my results with me?',
        a: 'Yes. A doctor consultation is available for all health screening packages and by request for individual tests. Our general consultation service can help you understand and act on your results.',
      },
      {
        q: 'How long do you keep test results on file?',
        a: 'We retain patient records and results for a minimum of 7 years in accordance with Ethiopian health regulations. You can request copies of previous results at any time.',
      },
    ],
  },
  payment: {
    label: 'Payment',
    icon: '💳',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash (Ethiopian Birr) and bank transfers. We are working to add mobile payment options (Telebirr, CBE Birr) in the near future. Please confirm payment options when booking.',
      },
      {
        q: 'Do you accept health insurance?',
        a: 'We are in the process of establishing agreements with health insurance providers. Please contact us directly to check if your specific insurance is accepted.',
      },
      {
        q: 'Do you offer discounts for group or corporate bookings?',
        a: 'Yes. We offer competitive group rates for corporate organizations. Contact our corporate team for a quote tailored to your organization\'s size and needs.',
      },
      {
        q: 'Is there a cancellation fee?',
        a: 'We do not charge a cancellation fee if you notify us in advance. We appreciate early notice so we can allocate the appointment slot to other patients.',
      },
    ],
  },
  homecollection: {
    label: 'Home Collection',
    icon: '🏠',
    questions: [
      {
        q: 'Is home sample collection available?',
        a: 'Yes. We offer home sample collection for most laboratory tests within Addis Ababa. You can request online, by phone, or via WhatsApp.',
      },
      {
        q: 'Which tests are available for home collection?',
        a: 'Most blood tests and urinalysis are available for home collection. Imaging tests (X-ray, ultrasound) and ECG require our center\'s equipment and are not available for home collection.',
      },
      {
        q: 'Is there an extra charge for home collection?',
        a: 'A home collection fee may apply depending on your location within Addis Ababa. We will confirm the fee when we contact you to schedule.',
      },
      {
        q: 'What time is home collection available?',
        a: 'Home sample collection is available daily from 7:00 AM to 6:00 PM. Please request your preferred time slot when submitting your request.',
      },
      {
        q: 'How do I prepare at home for sample collection?',
        a: 'The same preparation rules apply as for in-center visits — fasting if required, water is fine. Our team will remind you of preparation instructions when they confirm your appointment.',
      },
    ],
  },
  corporate: {
    label: 'Corporate Services',
    icon: '🏢',
    questions: [
      {
        q: 'Do you offer corporate health screening programs?',
        a: 'Yes. We provide comprehensive health screening programs for companies, NGOs, schools, factories, and government institutions — including pre-employment, annual employee screening, and occupational health services.',
      },
      {
        q: 'What is the minimum group size for corporate packages?',
        a: 'Our Business Package is available from 10 employees, and our Enterprise Package from 50 employees. Smaller groups can still access individual packages at standard pricing.',
      },
      {
        q: 'Can you come to our premises for on-site screening?',
        a: 'Yes. For groups of 50 or more employees, we offer mobile on-site collection and basic screening services. Contact our corporate team to discuss logistics and pricing.',
      },
      {
        q: 'How do we get a corporate quote?',
        a: 'Submit an inquiry through our Corporate Services page or call us directly. Our corporate team will contact you within 1 business day to discuss your needs and provide a tailored quote.',
      },
      {
        q: 'Are individual employee results kept confidential?',
        a: 'Yes. Individual results are strictly confidential and provided only to the patient. Organizations receive only aggregate summary statistics where required — never individual patient data without consent.',
      },
    ],
  },
};

/* ─── Component ─────────────────────────────────────────────────────── */
const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex,      setOpenIndex]      = useState(null);
  const [search,         setSearch]         = useState('');

  // Build flat search results across all categories
  const searchResults = search.trim()
    ? Object.entries(faqData).flatMap(([catKey, cat]) =>
        cat.questions
          .filter(
            faq =>
              faq.q.toLowerCase().includes(search.toLowerCase()) ||
              faq.a.toLowerCase().includes(search.toLowerCase()),
          )
          .map(faq => ({ ...faq, catKey, catLabel: cat.label })),
      )
    : [];

  const isSearching = search.trim().length > 0;
  const currentFAQs = faqData[activeCategory]?.questions ?? [];

  const toggleFAQ = key => setOpenIndex(openIndex === key ? null : key);

  return (
    <div className="theme-bg-background">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[240px] sm:min-h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="FAQ"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        <div className="relative flex items-center min-h-[240px] sm:min-h-[340px] py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-white max-w-2xl">
              <p className="text-blue-200 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
                Help &amp; Information
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                Frequently Asked{' '}
                <span style={{ color: '#5BB3E4' }}>Questions</span>
              </h1>
              <p className="text-blue-50/90 text-sm sm:text-lg max-w-xl leading-relaxed">
                Find answers to the most common questions about our services,
                appointments, test preparation, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search bar ────────────────────────────────────────────── */}
      <div className="theme-bg-surface border-b theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="max-w-xl mx-auto relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 theme-text-muted" />
            <input
              type="search"
              placeholder="Search all questions…"
              value={search}
              onChange={e => { setSearch(e.target.value); setOpenIndex(null); }}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border theme-border theme-bg-card theme-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-guardians-cyan theme-shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Search results ── */}
          {isSearching ? (
            <div className="max-w-3xl mx-auto">
              {searchResults.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-4xl mb-4">🔍</p>
                  <h3 className="text-lg font-bold theme-text-primary mb-2">No results found</h3>
                  <p className="theme-text-secondary mb-5">
                    Try different keywords, or browse the categories below.
                  </p>
                  <button
                    onClick={() => setSearch('')}
                    className="theme-btn-primary px-5 py-2.5 rounded-lg font-semibold"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <>
                  <p className="theme-text-secondary text-sm mb-6">
                    Found <strong className="theme-text-primary">{searchResults.length}</strong> result
                    {searchResults.length !== 1 ? 's' : ''} for "
                    <strong className="theme-text-primary">{search}</strong>"
                  </p>
                  <div className="space-y-3">
                    {searchResults.map((faq, i) => {
                      const key = `search-${i}`;
                      const isOpen = openIndex === key;
                      return (
                        <div key={key} className="theme-bg-card rounded-xl border theme-border theme-shadow-sm overflow-hidden">
                          <button
                            onClick={() => toggleFAQ(key)}
                            className="w-full flex items-start justify-between gap-4 p-5 text-left hover:theme-bg-hover transition-colors"
                          >
                            <div className="flex-1 min-w-0">
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block ${
                                { general:'bg-blue-100 text-blue-700', appointments:'bg-green-100 text-green-700', tests:'bg-purple-100 text-purple-700', preparation:'bg-orange-100 text-orange-700', results:'bg-teal-100 text-teal-700', payment:'bg-yellow-100 text-yellow-700', homecollection:'bg-pink-100 text-pink-700', corporate:'bg-indigo-100 text-indigo-700' }[faq.catKey] ?? 'bg-gray-100 text-gray-700'
                              }`}>
                                {faq.catLabel}
                              </span>
                              <p className="font-semibold theme-text-primary text-sm leading-snug">{faq.q}</p>
                            </div>
                            {isOpen
                              ? <ChevronUpIcon className="h-5 w-5 theme-text-primary-brand flex-shrink-0 mt-0.5" />
                              : <ChevronDownIcon className="h-5 w-5 theme-text-muted flex-shrink-0 mt-0.5" />
                            }
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 border-t theme-border theme-bg-surface">
                              <p className="text-sm theme-text-secondary leading-relaxed pt-4">{faq.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          ) : (
            /* ── Category browse ── */
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <p className="text-xs font-semibold theme-text-muted uppercase tracking-widest mb-3 px-1">
                  Categories
                </p>
                <nav className="space-y-1">
                  {Object.entries(faqData).map(([key, cat]) => (
                    <button
                      key={key}
                      onClick={() => { setActiveCategory(key); setOpenIndex(null); }}
                      className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                        activeCategory === key
                          ? 'theme-bg-primary text-white theme-shadow-sm'
                          : 'theme-text-secondary hover:theme-bg-hover'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-base leading-none">{cat.icon}</span>
                        {cat.label}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                        activeCategory === key
                          ? 'bg-white/20 text-white'
                          : 'theme-bg-surface theme-text-muted'
                      }`}>
                        {cat.questions.length}
                      </span>
                    </button>
                  ))}
                </nav>

                {/* Contact nudge */}
                <div className="mt-6 theme-bg-surface rounded-xl p-4 border theme-border">
                  <p className="text-sm font-semibold theme-text-primary mb-1">
                    Didn't find your answer?
                  </p>
                  <p className="text-xs theme-text-secondary mb-3 leading-relaxed">
                    Contact us directly — our team is happy to help.
                  </p>
                  <Link
                    to="/contact"
                    className="theme-text-primary-brand text-xs font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    Ask a Question <ArrowRightIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* FAQ accordion panel */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{faqData[activeCategory].icon}</span>
                  <h2 className="text-xl font-bold theme-text-primary">
                    {faqData[activeCategory].label}
                  </h2>
                  <span className="theme-bg-surface theme-text-muted text-xs px-2.5 py-1 rounded-full border theme-border">
                    {currentFAQs.length} questions
                  </span>
                </div>

                <div className="space-y-2">
                  {currentFAQs.map((faq, i) => {
                    const key = `${activeCategory}-${i}`;
                    const isOpen = openIndex === key;
                    return (
                      <div
                        key={key}
                        className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                          isOpen
                            ? 'border-guardians-cyan theme-shadow-md'
                            : 'theme-border theme-shadow-sm'
                        } theme-bg-card`}
                      >
                        <button
                          onClick={() => toggleFAQ(key)}
                          className="w-full flex items-start justify-between gap-4 p-5 text-left hover:theme-bg-hover transition-colors"
                          aria-expanded={isOpen}
                        >
                          <p className={`font-semibold text-sm leading-snug ${
                            isOpen ? 'theme-text-primary-brand' : 'theme-text-primary'
                          }`}>
                            {faq.q}
                          </p>
                          {isOpen
                            ? <ChevronUpIcon className="h-5 w-5 theme-text-primary-brand flex-shrink-0 mt-0.5" />
                            : <ChevronDownIcon className="h-5 w-5 theme-text-muted flex-shrink-0 mt-0.5" />
                          }
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 border-t theme-border theme-bg-surface">
                            <p className="text-sm theme-text-secondary leading-relaxed pt-4">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Still have questions ───────────────────────────────────── */}
      <section className="py-12 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="theme-bg-card rounded-2xl p-8 border theme-border theme-shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold theme-text-primary mb-1">Still Have a Question?</h3>
              <p className="theme-text-secondary text-sm">
                Our team is available by phone, WhatsApp, or in person during working hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="theme-btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 theme-shadow-md"
              >
                <CalendarDaysIcon className="h-4 w-4" />
                Ask a Question
              </Link>
              <a
                href="tel:+251911234567"
                className="theme-btn-outline px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
              >
                <PhoneIcon className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency ─────────────────────────────────────────────── */}
      <section className="py-8 bg-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div>
            <p className="font-bold">24/7 Emergency Line</p>
            <p className="text-red-100 text-sm">For urgent diagnostic needs, we are always available.</p>
          </div>
          <a
            href="tel:+251911000911"
            className="bg-white text-red-700 font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-red-50 transition-colors"
          >
            <PhoneIcon className="h-4 w-4" /> +251 911 000 911
          </a>
        </div>
      </section>

    </div>
  );
};

export default FAQ;
