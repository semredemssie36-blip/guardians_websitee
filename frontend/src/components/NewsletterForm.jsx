import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

/**
 * Reusable newsletter subscribe form.
 * Props:
 *   variant — 'inline' (Home, side-by-side input+button) | 'stacked' (Blog, col layout)
 */
const NewsletterForm = ({ variant = 'inline' }) => {
  const [email,     setEmail]     = useState('');
  const [error,     setError]     = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isValid = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!isValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="flex items-start gap-3 bg-white/10 rounded-xl px-5 py-4 border border-white/20">
        <CheckCircleIcon className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-white font-semibold text-sm">You're subscribed!</p>
          <p className="text-blue-200 text-xs mt-0.5">
            Thank you — we'll send health tips and updates to{' '}
            <strong className="text-white">{email}</strong>.
          </p>
          <button
            onClick={() => { setEmail(''); setSubmitted(false); }}
            className="text-blue-300 hover:text-white text-xs mt-2 underline transition-colors"
          >
            Subscribe a different email
          </button>
        </div>
      </div>
    );
  }

  /* ── Inline variant (Home page — input + button side by side) ── */
  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(''); }}
            placeholder="Your email address"
            aria-label="Email address for newsletter"
            className={`flex-1 px-4 py-3 rounded-l-lg text-gray-900 text-sm focus:outline-none ${
              error ? 'ring-2 ring-red-400' : ''
            }`}
          />
          <button
            type="submit"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-3 rounded-r-lg border-l border-white/20 transition-colors text-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
        {error
          ? <p className="text-red-300 text-xs mt-1.5">{error}</p>
          : <p className="text-blue-200 text-xs mt-2">No spam. Unsubscribe anytime.</p>
        }
      </form>
    );
  }

  /* ── Stacked variant (Blog page — input + button as separate row) ── */
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          placeholder="Your email address"
          aria-label="Email address for newsletter"
          className={`flex-1 px-4 py-3.5 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 ${
            error ? 'ring-2 ring-red-400' : 'focus:ring-blue-300'
          }`}
        />
        <button
          type="submit"
          className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 transition-colors text-sm whitespace-nowrap"
        >
          Subscribe
        </button>
      </div>
      {error
        ? <p className="text-red-300 text-xs mt-1.5">{error}</p>
        : <p className="text-blue-200 text-xs mt-2">No spam. Unsubscribe anytime.</p>
      }
    </form>
  );
};

export default NewsletterForm;
