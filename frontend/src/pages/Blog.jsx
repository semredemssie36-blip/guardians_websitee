import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  ClockIcon,
  ArrowRightIcon,
  BookOpenIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

/* ─── Articles data ─────────────────────────────────────────────────── */
const articles = [
  {
    id: 1,
    title: 'Why Regular Health Screenings Are So Important',
    category: 'Prevention',
    excerpt:
      'Preventive health screenings can detect conditions like diabetes, hypertension, and certain cancers before symptoms appear — giving you the best chance of effective treatment.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '5 min read',
    tags: ['Screening', 'Prevention', 'Wellness'],
    featured: true,
  },
  {
    id: 2,
    title: 'Understanding Your Blood Test Results',
    category: 'Diagnostic Info',
    excerpt:
      'A complete blood count report can look overwhelming at first. Here is a plain-language guide to the most common values, what they measure, and what they mean for your health.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '8 min read',
    tags: ['Laboratory', 'Blood Test', 'Results'],
    featured: true,
  },
  {
    id: 3,
    title: 'How to Prepare for Common Lab Tests',
    category: 'Health Tips',
    excerpt:
      'Proper preparation before a blood test or urine test significantly affects the accuracy of results. Learn what to do — and what to avoid — the night before your test.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '6 min read',
    tags: ['Preparation', 'Lab Tests', 'Tips'],
    featured: true,
  },
  {
    id: 4,
    title: 'What Is an Ultrasound and When Do You Need One?',
    category: 'Diagnostic Info',
    excerpt:
      'Ultrasound is one of the most versatile and safe diagnostic tools available. Find out how it works, what conditions it helps diagnose, and what to expect during the procedure.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '7 min read',
    tags: ['Ultrasound', 'Imaging', 'Diagnostic'],
    featured: false,
  },
  {
    id: 5,
    title: 'The Importance of Knowing Your Cholesterol Levels',
    category: 'Prevention',
    excerpt:
      'High cholesterol has no symptoms — but it quietly raises your risk of heart attack and stroke. Here is why getting a lipid profile test matters and what the numbers mean.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '6 min read',
    tags: ['Cholesterol', 'Heart Health', 'Prevention'],
    featured: false,
  },
  {
    id: 6,
    title: 'When Should You Get an ECG?',
    category: 'Diagnostic Info',
    excerpt:
      'An electrocardiogram is a quick, painless test that records your heart\'s electrical activity. Learn when doctors recommend one and what conditions it can detect.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '5 min read',
    tags: ['ECG', 'Cardiology', 'Heart'],
    featured: false,
  },
  {
    id: 7,
    title: 'Diabetes Screening: Who Should Get Tested and When',
    category: 'Prevention',
    excerpt:
      'Type 2 diabetes often develops silently for years. Understanding your risk factors and getting screened regularly is one of the most impactful steps you can take for your health.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '7 min read',
    tags: ['Diabetes', 'Screening', 'Blood Glucose'],
    featured: false,
  },
  {
    id: 8,
    title: 'Understanding Thyroid Function Tests',
    category: 'Diagnostic Info',
    excerpt:
      'TSH, T3, T4 — thyroid tests can be confusing. This guide explains what each marker measures, what abnormal results might indicate, and when a thyroid test is recommended.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '8 min read',
    tags: ['Thyroid', 'Hormones', 'Lab Tests'],
    featured: false,
  },
  {
    id: 9,
    title: 'Healthy Lifestyle Tips for Preventing Chronic Disease',
    category: 'Wellness',
    excerpt:
      'Chronic diseases like heart disease, diabetes, and hypertension are largely preventable. Simple, consistent lifestyle changes can dramatically reduce your risk.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '6 min read',
    tags: ['Lifestyle', 'Chronic Disease', 'Wellness'],
    featured: false,
  },
  {
    id: 10,
    title: 'What to Expect During Your First Lab Visit',
    category: 'Health Tips',
    excerpt:
      'Visiting a diagnostic center for the first time can feel uncertain. Here is a step-by-step walkthrough of what to bring, what happens when you arrive, and what comes next.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '5 min read',
    tags: ['First Visit', 'Patient Guide', 'Tips'],
    featured: false,
  },
  {
    id: 11,
    title: 'Corporate Health Programs: Benefits for Employers',
    category: 'Wellness',
    excerpt:
      'Investing in employee health screening reduces absenteeism, improves morale, and keeps your workforce productive. Here is why more Ethiopian companies are making it a priority.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '6 min read',
    tags: ['Corporate', 'Workplace Health', 'Productivity'],
    featured: false,
  },
  {
    id: 12,
    title: 'Pre-Employment Medical: What Tests Are Required?',
    category: 'Health Tips',
    excerpt:
      'Most employers in Ethiopia require a pre-employment medical clearance. We break down exactly which tests are typically included and how to prepare for your appointment.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
    readTime: '5 min read',
    tags: ['Pre-Employment', 'Screening', 'Workplace'],
    featured: false,
  },
];

const categories = [
  { id: 'all',           label: 'All Articles',   count: articles.length },
  { id: 'Prevention',    label: 'Prevention',      count: articles.filter(a => a.category === 'Prevention').length },
  { id: 'Diagnostic Info', label: 'Diagnostic Info', count: articles.filter(a => a.category === 'Diagnostic Info').length },
  { id: 'Health Tips',   label: 'Health Tips',     count: articles.filter(a => a.category === 'Health Tips').length },
  { id: 'Wellness',      label: 'Wellness',         count: articles.filter(a => a.category === 'Wellness').length },
];

const categoryColors = {
  'Prevention':     'bg-green-100 text-green-800',
  'Diagnostic Info':'bg-blue-100 text-blue-800',
  'Health Tips':    'bg-orange-100 text-orange-800',
  'Wellness':       'bg-purple-100 text-purple-800',
};

/* ─── Component ─────────────────────────────────────────────────────── */
const Blog = () => {
  const [search,   setSearch]   = useState('');
  const [category, setCategory] = useState('all');

  const filtered = articles.filter(a => {
    const matchCat = category === 'all' || a.category === category;
    const q = search.toLowerCase();
    const matchSearch = !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const featured  = filtered.filter(a => a.featured);
  const rest      = filtered.filter(a => !a.featured);
  const showFeatured = category === 'all' && !search;

  return (
    <div className="theme-bg-background">

      {/* Hero */}
      <section className="relative h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Health Resources"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white max-w-2xl">
              <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">
                Health Resources
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Health{' '}
                <span style={{ color: '#5BB3E4' }}>Education</span>{' '}
                & Guides
              </h1>
              <p className="text-blue-50/90 text-lg max-w-xl leading-relaxed">
                Articles, preparation guides, and health information from the Guardians
                medical team — to help you make informed decisions about your health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Filter bar */}
      <div className="sticky top-0 z-20 theme-bg-card border-b theme-border theme-shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 theme-text-muted" />
              <input
                type="search"
                placeholder="Search articles…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border theme-border theme-bg-surface theme-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-guardians-cyan"
              />
            </div>
            {/* Category pills */}
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 flex items-center gap-1.5 ${
                    category === cat.id
                      ? 'theme-bg-primary text-white theme-shadow-sm'
                      : 'theme-text-secondary hover:theme-bg-hover'
                  }`}
                >
                  {cat.label}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    category === cat.id ? 'bg-white/20 text-white' : 'theme-bg-surface theme-text-muted'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {filtered.length === 0 ? (
            /* Empty state */
            <div className="text-center py-20">
              <BookOpenIcon className="h-12 w-12 theme-text-muted mx-auto mb-4" />
              <h3 className="text-lg font-semibold theme-text-primary mb-2">No articles found</h3>
              <p className="theme-text-secondary mb-5">
                Try a different search term or category.
              </p>
              <button
                onClick={() => { setSearch(''); setCategory('all'); }}
                className="theme-btn-primary px-5 py-2.5 rounded-lg font-semibold"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              {/* Featured — only when no filter active */}
              {showFeatured && featured.length > 0 && (
                <div className="mb-14">
                  <div className="flex items-center gap-3 mb-7">
                    <h2 className="text-xl font-bold theme-text-primary">Featured Articles</h2>
                    <div className="flex-1 h-px theme-bg-surface" />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Large card */}
                    <div className="lg:col-span-2 theme-bg-card rounded-2xl overflow-hidden theme-shadow-lg hover:theme-shadow-xl transition-all duration-300 border border-transparent hover:border-guardians-cyan flex flex-col">
                      <div className="h-56 overflow-hidden relative">
                        <img
                          src={featured[0].image}
                          alt={featured[0].title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured[0].category]}`}>
                          {featured[0].category}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs theme-text-muted mb-3">
                          <span className="flex items-center gap-1"><CalendarDaysIcon className="h-3.5 w-3.5" />{featured[0].date}</span>
                          <span className="flex items-center gap-1"><ClockIcon className="h-3.5 w-3.5" />{featured[0].readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold theme-text-primary mb-2 leading-snug flex-1">
                          {featured[0].title}
                        </h3>
                        <p className="text-sm theme-text-secondary leading-relaxed mb-4">{featured[0].excerpt}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {featured[0].tags.map((t, i) => (
                            <span key={i} className="text-xs theme-bg-surface theme-text-secondary px-2 py-0.5 rounded-md border theme-border">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="theme-text-primary-brand text-sm font-semibold inline-flex items-center gap-1">
                          Read Article <ArrowRightIcon className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* 2 smaller cards stacked */}
                    <div className="space-y-6">
                      {featured.slice(1, 3).map(a => (
                        <div key={a.id} className="theme-bg-card rounded-2xl overflow-hidden theme-shadow-md hover:theme-shadow-xl transition-all duration-300 border border-transparent hover:border-guardians-cyan flex gap-4">
                          <div className="w-28 flex-shrink-0 overflow-hidden">
                            <img src={a.image} alt={a.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="p-4 flex flex-col justify-between py-4 flex-1 min-w-0">
                            <div>
                              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[a.category]}`}>
                                {a.category}
                              </span>
                              <h3 className="font-semibold theme-text-primary text-sm mt-2 mb-1 leading-snug line-clamp-2">
                                {a.title}
                              </h3>
                            </div>
                            <div className="flex items-center justify-between text-xs theme-text-muted">
                              <span>{a.readTime}</span>
                              <span className="theme-text-primary-brand font-semibold inline-flex items-center gap-0.5">
                                Read <ArrowRightIcon className="h-3 w-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* All / filtered articles */}
              <div>
                {showFeatured && (
                  <div className="flex items-center gap-3 mb-7">
                    <h2 className="text-xl font-bold theme-text-primary">All Articles</h2>
                    <div className="flex-1 h-px theme-bg-surface" />
                  </div>
                )}
                {!showFeatured && (
                  <p className="theme-text-secondary text-sm mb-7">
                    Showing <strong className="theme-text-primary">{filtered.length}</strong> article{filtered.length !== 1 ? 's' : ''}
                    {search && <> for "<strong className="theme-text-primary">{search}</strong>"</>}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(showFeatured ? rest : filtered).map(a => (
                    <article
                      key={a.id}
                      className="theme-bg-card rounded-2xl overflow-hidden theme-shadow-md hover:theme-shadow-xl transition-all duration-300 border border-transparent hover:border-guardians-cyan flex flex-col"
                    >
                      <div className="h-44 overflow-hidden relative">
                        <img
                          src={a.image}
                          alt={a.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[a.category]}`}>
                          {a.category}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs theme-text-muted mb-3">
                          <span className="flex items-center gap-1"><CalendarDaysIcon className="h-3.5 w-3.5" />{a.date}</span>
                          <span className="flex items-center gap-1"><ClockIcon className="h-3.5 w-3.5" />{a.readTime}</span>
                        </div>
                        <h3 className="font-bold theme-text-primary mb-2 leading-snug flex-1">{a.title}</h3>
                        <p className="text-sm theme-text-secondary leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {a.tags.slice(0, 2).map((t, i) => (
                            <span key={i} className="text-xs theme-bg-surface theme-text-secondary px-2 py-0.5 rounded-md border theme-border">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t theme-border">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full theme-icon-bg-navy flex items-center justify-center">
                              <BookOpenIcon className="h-3.5 w-3.5 theme-icon-navy" />
                            </div>
                            <span className="text-xs theme-text-secondary">Guardians Medical Team</span>
                          </div>
                          <span className="theme-text-primary-brand text-xs font-semibold inline-flex items-center gap-1">
                            Read <ArrowRightIcon className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-2">Newsletter</p>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Get Health Tips in Your Inbox
              </h2>
              <p className="text-blue-100 leading-relaxed">
                Subscribe to receive new articles, health guides, and updates from
                the Guardians medical team — no spam, unsubscribe anytime.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3.5 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 transition-colors text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-blue-200 text-xs mt-2">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Have a question CTA */}
      <section className="py-12 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold theme-text-primary mb-2">
            Have a Health Question?
          </h3>
          <p className="theme-text-secondary mb-6 max-w-md mx-auto">
            Our medical team is available by phone or appointment to answer
            your specific health and diagnostic questions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/appointment"
              className="theme-btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 theme-shadow-md"
            >
              <CalendarDaysIcon className="h-4 w-4" />
              Book Consultation
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
      </section>

    </div>
  );
};

export default Blog;
