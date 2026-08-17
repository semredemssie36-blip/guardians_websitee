import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  CalendarDaysIcon,
  ClockIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ShareIcon,
  PhoneIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { getArticleBySlug, articles } from '../data/articles';

/* ─── Category colour map ───────────────────────────────────────────── */
const categoryColors = {
  'Prevention':     'bg-green-100 text-green-800',
  'Diagnostic Info':'bg-blue-100  text-blue-800',
  'Health Tips':    'bg-orange-100 text-orange-800',
  'Wellness':       'bg-purple-100 text-purple-800',
};

/* ─── Render body text — newlines become paragraphs/bullets ─────────── */
const BodyText = ({ text }) => {
  const lines = text.split('\n').filter(l => l.trim() !== '');
  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        // bullet items starting with •
        if (line.trimStart().startsWith('•')) {
          return (
            <div key={i} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#5BB3E4' }} />
              <p className="text-base theme-text-secondary leading-relaxed">
                {line.replace(/^[\s•]+/, '')}
              </p>
            </div>
          );
        }
        // numbered items  "1. text"
        if (/^\d+\./.test(line.trimStart())) {
          const num   = line.match(/^(\d+)\./)[1];
          const rest  = line.replace(/^\d+\.\s*/, '');
          return (
            <div key={i} className="flex items-start gap-3">
              <span
                className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: Number(num) % 2 === 1 ? '#1A3A6B' : '#5BB3E4' }}
              >
                {num}
              </span>
              <p className="text-base theme-text-secondary leading-relaxed">{rest}</p>
            </div>
          );
        }
        // ✓ / ✗ lines
        if (line.startsWith('✓') || line.startsWith('✗')) {
          const isGood = line.startsWith('✓');
          return (
            <p key={i} className={`text-base font-semibold leading-relaxed ${isGood ? 'text-green-700' : 'text-red-600'}`}>
              {line}
            </p>
          );
        }
        // plain paragraph
        return (
          <p key={i} className="text-base theme-text-secondary leading-relaxed">
            {line}
          </p>
        );
      })}
    </div>
  );
};

/* ─── Component ─────────────────────────────────────────────────────── */
const ArticleDetail = () => {
  const { slug }   = useParams();
  const navigate   = useNavigate();
  const article    = getArticleBySlug(slug);

  // scroll to top on mount / slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // 404 state
  if (!article) {
    return (
      <div className="theme-bg-background min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-6xl mb-4">📰</p>
          <h2 className="text-2xl font-bold theme-text-primary mb-3">Article Not Found</h2>
          <p className="theme-text-secondary mb-6">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="theme-btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // prev / next articles
  const currentIndex = articles.findIndex(a => a.slug === slug);
  const prevArticle  = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle  = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  // related — same category, exclude self
  const related = articles
    .filter(a => a.category === article.category && a.slug !== slug)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: article.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="theme-bg-background">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[320px] sm:h-[420px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative sm:absolute sm:inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 pt-16 sm:pt-0">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Category badge */}
            <div className="mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[article.category]}`}>
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full theme-icon-bg-navy flex items-center justify-center">
                  <BookOpenIcon className="h-3.5 w-3.5" style={{ color: '#5BB3E4' }} />
                </div>
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDaysIcon className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4" />
                {article.readTime}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 hover:text-white transition-colors ml-auto"
                aria-label="Share article"
              >
                <ShareIcon className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article body ──────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Main content ── */}
          <article className="lg:col-span-2">

            {/* Excerpt / lead */}
            <p className="text-lg theme-text-secondary leading-relaxed border-l-4 border-guardians-cyan pl-5 mb-10 italic">
              {article.excerpt}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {article.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-xl font-bold theme-text-primary mb-4 flex items-center gap-2">
                    <span
                      className="w-1 h-6 rounded-full flex-shrink-0"
                      style={{ backgroundColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}
                    />
                    {section.heading}
                  </h2>
                  <BodyText text={section.body} />
                </section>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t theme-border">
              <div className="flex items-center gap-2 flex-wrap">
                <TagIcon className="h-4 w-4 theme-text-muted flex-shrink-0" />
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="theme-bg-surface theme-text-secondary text-xs px-3 py-1 rounded-full border theme-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  to={`/blog/${prevArticle.slug}`}
                  className="theme-bg-card rounded-xl p-4 border theme-border theme-shadow-sm hover:theme-shadow-md transition-all group flex items-start gap-3"
                >
                  <ArrowLeftIcon className="h-5 w-5 theme-text-muted group-hover:theme-text-primary-brand flex-shrink-0 mt-0.5 transition-colors" />
                  <div className="min-w-0">
                    <p className="text-xs theme-text-muted mb-1">Previous</p>
                    <p className="text-sm font-semibold theme-text-primary group-hover:theme-text-primary-brand line-clamp-2 transition-colors">
                      {prevArticle.title}
                    </p>
                  </div>
                </Link>
              ) : <div />}

              {nextArticle ? (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="theme-bg-card rounded-xl p-4 border theme-border theme-shadow-sm hover:theme-shadow-md transition-all group flex items-start gap-3 text-right"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs theme-text-muted mb-1">Next</p>
                    <p className="text-sm font-semibold theme-text-primary group-hover:theme-text-primary-brand line-clamp-2 transition-colors">
                      {nextArticle.title}
                    </p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 theme-text-muted group-hover:theme-text-primary-brand flex-shrink-0 mt-0.5 transition-colors" />
                </Link>
              ) : <div />}
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-1 space-y-6">

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: 'linear-gradient(135deg, #1A3A6B 0%, #0D2245 100%)' }}
            >
              <h3 className="font-bold text-lg mb-2">Ready to Take Action?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Book an appointment at Guardians Diagnostic Center today — professional,
                accurate diagnostic services in Addis Ababa.
              </p>
              <Link
                to="/appointment"
                className="bg-white font-bold px-5 py-2.5 rounded-lg text-sm inline-flex items-center gap-2 hover:bg-blue-50 transition-colors w-full justify-center"
                style={{ color: '#1A3A6B' }}
              >
                Book Appointment
              </Link>
              <a
                href="tel:+251911234567"
                className="mt-3 bg-white/15 border border-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-lg inline-flex items-center gap-2 hover:bg-white/25 transition-colors w-full justify-center"
              >
                <PhoneIcon className="h-4 w-4" />
                +251 911 234 567
              </a>
            </div>

            {/* Patient info link */}
            <div className="theme-bg-card rounded-2xl p-5 border-l-4 border-guardians-cyan theme-shadow-sm">
              <h3 className="font-bold theme-text-primary mb-2">Patient Preparation Guide</h3>
              <p className="text-sm theme-text-secondary leading-relaxed mb-3">
                Preparing for a test? Our full patient guide covers everything you need to know before visiting.
              </p>
              <Link
                to="/patient-info"
                className="theme-text-primary-brand text-sm font-semibold inline-flex items-center gap-1 hover:underline"
              >
                View Patient Guide <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div>
                <h3 className="font-bold theme-text-primary mb-4 text-sm uppercase tracking-widest">
                  Related Articles
                </h3>
                <div className="space-y-3">
                  {related.map(a => (
                    <Link
                      key={a.slug}
                      to={`/blog/${a.slug}`}
                      className="theme-bg-card rounded-xl overflow-hidden border theme-border theme-shadow-sm hover:theme-shadow-md transition-all group flex gap-3 p-3"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={a.image}
                          alt={a.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${categoryColors[a.category]}`}>
                          {a.category}
                        </span>
                        <p className="text-xs font-semibold theme-text-primary mt-1 line-clamp-2 group-hover:theme-text-primary-brand transition-colors leading-snug">
                          {a.title}
                        </p>
                        <p className="text-xs theme-text-muted mt-0.5">{a.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <Link
              to="/blog"
              className="theme-btn-outline w-full py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              All Articles
            </Link>
          </aside>

        </div>
      </div>

    </div>
  );
};

export default ArticleDetail;
