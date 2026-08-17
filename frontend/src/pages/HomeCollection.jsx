import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  PhoneIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  ExclamationCircleIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

const availableTests = [
  'Complete Blood Count (CBC)',
  'Blood Glucose & HbA1c',
  'Lipid Profile',
  'Liver Function Tests',
  'Kidney Function Tests',
  'Thyroid Function Tests',
  'Hepatitis B & C Screening',
  'HIV Screening',
  'Urinalysis',
  'Stool Examination',
  'Electrolytes',
  'Serology & Immunology',
];

const timeSlots = [
  '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

const testOptions = [
  'Complete Blood Count (CBC)',
  'Blood Glucose / HbA1c',
  'Lipid Profile',
  'Liver Function Tests',
  'Kidney Function Tests',
  'Thyroid Function Tests',
  'Hepatitis B & C',
  'HIV Screening',
  'Urinalysis',
  'Multiple / Full Panel',
  'Health Screening Package',
  'Other — I will specify in notes',
];

const today = new Date().toISOString().split('T')[0];
const initialForm = { fullName: '', phone: '', email: '', address: '', date: '', time: '', testType: '', message: '' };

const HomeCollection = () => {
  const [form, setForm]         = useState(initialForm);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.phone.trim())    e.phone    = 'Phone number is required';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.address.trim())  e.address  = 'Collection address is required';
    if (!form.date)            e.date     = 'Please select a preferred date';
    if (!form.time)            e.time     = 'Please select a preferred time';
    if (!form.testType)        e.testType = 'Please select the test needed';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm theme-text-primary theme-bg-card focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200 bg-red-50'
        : 'theme-border focus:ring-blue-200 focus:border-guardians-cyan'
    }`;

  return (
    <div className="theme-bg-background">

      {/* Hero */}
      <section className="relative h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Home Sample Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white max-w-2xl">
              <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">Home Sample Collection</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                We Come{' '}
                <span style={{ color: '#5BB3E4' }}>to You</span>
              </h1>
              <p className="text-blue-50/90 text-lg mb-8 max-w-xl leading-relaxed">
                Professional sample collection at your home or office. Safe, convenient,
                and the same quality as visiting our center.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#request-form" className="theme-btn-primary px-7 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 theme-shadow-lg">
                  <HomeIcon className="h-5 w-5" /> Request Collection
                </a>
                <a href="tel:+251911234567" className="bg-white/10 border border-white/50 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" /> Call to Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">The Process</p>
            <h2 className="text-3xl font-bold theme-text-primary mb-3">How It Works</h2>
            <p className="theme-text-secondary max-w-xl mx-auto">Simple, clear, and professional from start to finish.</p>
          </div>

          {/* Desktop horizontal flow */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-10">
            <div className="absolute top-10 left-[10%] right-[10%] h-px"
              style={{ background: 'linear-gradient(to right, #1A3A6B33, #5BB3E4, #1A3A6B33)' }} />
            {[
              { n: '1', title: 'Request',    desc: 'Submit online or call us', icon: HomeIcon },
              { n: '2', title: 'Schedule',   desc: 'We confirm a time with you', icon: CalendarDaysIcon },
              { n: '3', title: 'We Arrive',  desc: 'Our trained team visits you', icon: MapPinIcon },
              { n: '4', title: 'Collection', desc: 'Samples collected safely', icon: ShieldCheckIcon },
              { n: '5', title: 'Results',    desc: 'Same quality & turnaround', icon: CheckCircleIcon },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div
                  className="w-20 h-20 rounded-full bg-white border-4 flex items-center justify-center theme-shadow-lg mb-4"
                  style={{ borderColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}
                >
                  <step.icon className="h-8 w-8" style={{ color: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }} />
                </div>
                <p className="font-bold theme-text-primary mb-1">{step.title}</p>
                <p className="text-xs theme-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="lg:hidden space-y-3 mb-8">
            {[
              { n: '1', title: 'Request',    desc: 'Submit online or call/WhatsApp us to schedule.' },
              { n: '2', title: 'Confirm',    desc: 'We contact you to confirm the date, time, and location.' },
              { n: '3', title: 'We Arrive',  desc: 'Our trained phlebotomist arrives at your address on time.' },
              { n: '4', title: 'Collection', desc: 'Samples are collected professionally and transported safely.' },
              { n: '5', title: 'Results',    desc: 'Results are ready within the standard turnaround time.' },
            ].map((s, i) => (
              <div key={i} className="theme-bg-card rounded-xl p-4 flex items-start gap-4 border-l-4 theme-shadow-sm"
                style={{ borderColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}>
                <span className="text-2xl font-black flex-shrink-0" style={{ color: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}>
                  {s.n}
                </span>
                <div>
                  <p className="font-bold theme-text-primary">{s.title}</p>
                  <p className="text-sm theme-text-secondary">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 theme-bg-card border theme-border rounded-full px-5 py-2.5 theme-shadow-sm">
              <ClockIcon className="h-4 w-4 theme-icon-cyan" />
              <span className="text-sm theme-text-secondary">Collection available daily: <strong className="theme-text-primary">7:00 AM – 6:00 PM</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits + available tests */}
      <section className="py-14 theme-bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Benefits */}
            <div>
              <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Why Choose Home Collection</p>
              <h2 className="text-2xl font-bold theme-text-primary mb-6">Convenient, Safe & Professional</h2>
              <div className="space-y-4">
                {[
                  { icon: HomeIcon,        title: 'No Need to Travel',       desc: 'Perfect for elderly patients, busy professionals, or anyone who finds clinic visits difficult.', border: 'border-guardians-navy' },
                  { icon: ShieldCheckIcon, title: 'Trained Professionals',   desc: 'All collections are performed by qualified phlebotomists following clinical safety standards.', border: 'border-guardians-cyan' },
                  { icon: CheckCircleIcon, title: 'Same Quality Results',    desc: 'Samples are transported immediately to our laboratory — same quality, same turnaround times.', border: 'border-guardians-navy' },
                  { icon: ClockIcon,       title: 'Flexible Scheduling',     desc: 'Choose a time that works for you — morning and afternoon slots available every day.', border: 'border-guardians-cyan' },
                ].map((item, i) => (
                  <div key={i} className={`theme-bg-card rounded-xl p-4 flex items-start gap-3 border-l-4 ${item.border} theme-shadow-sm`}>
                    <div className="theme-icon-bg-navy p-2.5 rounded-lg flex-shrink-0">
                      <item.icon className="h-5 w-5 theme-icon-navy" />
                    </div>
                    <div>
                      <p className="font-semibold theme-text-primary text-sm mb-0.5">{item.title}</p>
                      <p className="text-xs theme-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service area note */}
              <div className="mt-5 theme-bg-surface rounded-xl p-4 flex items-start gap-3 border theme-border">
                <InformationCircleIcon className="h-5 w-5 theme-icon-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold theme-text-primary text-sm mb-1">Service Area</p>
                  <p className="text-xs theme-text-secondary leading-relaxed">
                    Home collection is currently available within Addis Ababa. We will confirm
                    your specific area when we contact you to schedule. Additional fee may apply
                    depending on distance.
                  </p>
                </div>
              </div>
            </div>

            {/* Available tests */}
            <div>
              <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Available Tests</p>
              <h2 className="text-2xl font-bold theme-text-primary mb-6">Tests Available for Home Collection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {availableTests.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm theme-text-secondary theme-bg-surface rounded-lg px-3 py-2 border theme-border">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
              <p className="text-xs theme-text-muted">
                Imaging tests (X-ray, ultrasound, ECG) are not available for home collection —
                these require our center's equipment.{' '}
                <Link to="/services" className="theme-text-primary-brand hover:underline">View all services.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request-form" className="py-14 theme-bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Request Form</p>
            <h2 className="text-3xl font-bold theme-text-primary mb-3">Request Home Sample Collection</h2>
            <p className="theme-text-secondary">Fill in the form and we will contact you to confirm your appointment.</p>
          </div>

          <div className="theme-bg-card rounded-2xl p-6 lg:p-8 theme-shadow-lg border theme-border">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold theme-text-primary mb-2">Request Submitted!</h3>
                <p className="theme-text-secondary mb-2">
                  Thank you, <strong className="theme-text-primary">{form.fullName}</strong>.
                </p>
                <p className="theme-text-secondary mb-6">
                  We will call you at <strong className="theme-text-primary">{form.phone}</strong> to confirm
                  your collection appointment.
                </p>
                <div className="theme-bg-surface rounded-xl p-4 text-left space-y-2 mb-6 border theme-border">
                  {[
                    { label: 'Name', value: form.fullName },
                    { label: 'Date', value: form.date },
                    { label: 'Time', value: form.time },
                    { label: 'Test', value: form.testType },
                    { label: 'Address', value: form.address },
                  ].map((r, i) => (
                    <div key={i} className="flex gap-3 text-sm">
                      <span className="theme-text-muted w-16 flex-shrink-0">{r.label}</span>
                      <span className="theme-text-primary font-medium">{r.value}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => { setForm(initialForm); setSubmitted(false); }}
                  className="theme-btn-primary px-6 py-2.5 rounded-lg font-semibold">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm theme-text-secondary mb-6">
                  Fields marked <span className="text-red-500">*</span> are required.
                </p>
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium theme-text-primary mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" name="fullName" value={form.fullName} onChange={handleChange}
                        placeholder="Your full name" className={inputClass('fullName')} />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium theme-text-primary mb-1.5">Phone <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+251 9__ ___ ___" className={inputClass('phone')} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-1.5">Email <span className="text-xs theme-text-muted font-normal">(optional)</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com" className={inputClass('email')} />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-1.5">Collection Address <span className="text-red-500">*</span></label>
                    <input type="text" name="address" value={form.address} onChange={handleChange}
                      placeholder="Full address including sub-city, kebele, or landmark" className={inputClass('address')} />
                    {errors.address && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.address}</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium theme-text-primary mb-1.5">Preferred Date <span className="text-red-500">*</span></label>
                      <input type="date" name="date" value={form.date} onChange={handleChange}
                        min={today} className={inputClass('date')} />
                      {errors.date && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.date}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium theme-text-primary mb-1.5">Preferred Time <span className="text-red-500">*</span></label>
                      <select name="time" value={form.time} onChange={handleChange} className={inputClass('time')}>
                        <option value="">Select a time…</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.time && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.time}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-1.5">Test / Service Needed <span className="text-red-500">*</span></label>
                    <select name="testType" value={form.testType} onChange={handleChange} className={inputClass('testType')}>
                      <option value="">Select a test…</option>
                      {testOptions.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.testType && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.testType}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium theme-text-primary mb-1.5">Additional Notes</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      rows={3} placeholder="Any special instructions, multiple tests, or additional information…"
                      className={`${inputClass('message')} resize-none`} />
                  </div>
                  <div className="theme-bg-surface rounded-xl p-4 flex items-start gap-3 border theme-border">
                    <InformationCircleIcon className="h-5 w-5 theme-icon-cyan flex-shrink-0 mt-0.5" />
                    <p className="text-xs theme-text-secondary leading-relaxed">
                      After submitting, our team will call to confirm your appointment. Please
                      ensure fasting requirements are met if applicable — we will advise you when we confirm.
                    </p>
                  </div>
                  <button type="submit" className="w-full theme-btn-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 theme-shadow-lg">
                    <HomeIcon className="h-5 w-5" /> Submit Collection Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section className="py-10 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-white text-center sm:text-left">
            <h3 className="font-bold text-lg">Prefer to Schedule by Phone?</h3>
            <p className="text-blue-100 text-sm">Call or WhatsApp us directly and we will arrange everything for you.</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:+251911234567" className="bg-white font-bold px-5 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors" style={{ color: '#1A3A6B' }}>
              <PhoneIcon className="h-4 w-4" /> Call Now
            </a>
            <a href="https://wa.me/251911234567" className="bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-lg inline-flex items-center gap-2 transition-colors">
              <ChatBubbleLeftRightIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeCollection;
