import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDaysIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ExclamationCircleIcon,
  ClockIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

const services = [
  'Complete Blood Count (CBC)',
  'Blood Glucose / HbA1c',
  'Lipid Profile',
  'Liver Function Tests',
  'Kidney Function Tests',
  'Thyroid Function Tests',
  'Hepatitis B & C Screening',
  'HIV Screening',
  'Chest X-Ray',
  'Abdominal Ultrasound',
  'Pelvic Ultrasound',
  'Obstetric Ultrasound',
  'ECG',
  'General Consultation',
  'Basic Health Screening Package',
  'Comprehensive Screening Package',
  'Pre-Employment Screening',
  'Executive Health Package',
  "Women's Health Package",
  'Senior Citizen Package',
  'Other / Multiple Services',
];

const timeSlots = [
  '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
];

const today = new Date().toISOString().split('T')[0];

const initialForm = {
  fullName: '', phone: '', email: '',
  service: '', date: '', time: '', message: '',
};

const Appointment = () => {
  const [form, setForm]       = useState(initialForm);
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim())   e.fullName = 'Full name is required';
    if (!form.phone.trim())      e.phone    = 'Phone number is required';
    else if (!/^[+\d\s\-()]{7,}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.service)           e.service  = 'Please select a service';
    if (!form.date)              e.date     = 'Please select a preferred date';
    if (!form.time)              e.time     = 'Please select a preferred time';
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

  const labelClass = 'block text-sm font-medium theme-text-primary mb-1.5';

  if (submitted) {
    return (
      <div className="theme-bg-background min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold theme-text-primary mb-3">Request Received!</h2>
          <p className="theme-text-secondary mb-2 leading-relaxed">
            Thank you, <strong className="theme-text-primary">{form.fullName}</strong>.
            Your appointment request has been submitted successfully.
          </p>
          <p className="theme-text-secondary mb-8 leading-relaxed">
            Our team will contact you at <strong className="theme-text-primary">{form.phone}</strong> to
            confirm your appointment. This usually happens within a few hours during working hours.
          </p>

          <div className="theme-bg-surface rounded-2xl p-5 mb-8 text-left space-y-2 border theme-border">
            <h3 className="font-semibold theme-text-primary mb-3 text-sm">Your Request Summary</h3>
            {[
              { label: 'Name',    value: form.fullName },
              { label: 'Phone',   value: form.phone },
              { label: 'Service', value: form.service },
              { label: 'Date',    value: form.date },
              { label: 'Time',    value: form.time },
            ].map((row, i) => (
              <div key={i} className="flex gap-3 text-sm">
                <span className="theme-text-muted w-16 flex-shrink-0">{row.label}</span>
                <span className="theme-text-primary font-medium">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { setForm(initialForm); setSubmitted(false); }}
              className="theme-btn-outline px-6 py-3 rounded-xl font-semibold"
            >
              Book Another
            </button>
            <Link to="/" className="theme-btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
              Back to Home
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="theme-bg-background">

      {/* Hero */}
      <section className="relative h-[320px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Book Appointment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white max-w-xl">
              <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">
                Book an Appointment
              </p>
              <h1 className="text-4xl font-bold mb-3 leading-tight">
                Schedule Your{' '}
                <span style={{ color: '#5BB3E4' }}>Visit</span>
              </h1>
              <p className="text-blue-50/90 text-base">
                Fill in the form below and our team will confirm your appointment
                within a few hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Sidebar ── */}
            <div className="space-y-5">

              {/* How it works */}
              <div className="theme-bg-card rounded-2xl p-5 border-l-4 border-guardians-navy theme-shadow-md">
                <h3 className="font-bold theme-text-primary mb-4">How It Works</h3>
                <div className="space-y-3">
                  {[
                    { n: '1', t: 'Submit Request',    d: 'Fill in the form with your details and preferred time.' },
                    { n: '2', t: 'We Confirm',        d: 'Our team calls to confirm your appointment.' },
                    { n: '3', t: 'Visit or Prepare',  d: 'Follow preparation instructions for your test.' },
                    { n: '4', t: 'Receive Results',   d: 'Get your results with a professional report.' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}
                      >
                        {step.n}
                      </span>
                      <div>
                        <p className="text-sm font-semibold theme-text-primary">{step.t}</p>
                        <p className="text-xs theme-text-secondary leading-relaxed">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prefer to call */}
              <div className="theme-bg-card rounded-2xl p-5 border-l-4 border-green-500 theme-shadow-md">
                <h3 className="font-bold theme-text-primary mb-3">Prefer to Call or Message?</h3>
                <div className="space-y-2">
                  <a href="tel:+251911234567" className="flex items-center gap-2.5 text-sm theme-text-secondary hover:theme-text-primary-brand transition-colors">
                    <PhoneIcon className="h-4 w-4 text-green-600 flex-shrink-0" />
                    +251 911 234 567
                  </a>
                  <a href="tel:+251111234567" className="flex items-center gap-2.5 text-sm theme-text-secondary hover:theme-text-primary-brand transition-colors">
                    <PhoneIcon className="h-4 w-4 text-green-600 flex-shrink-0" />
                    +251 11 123 4567
                  </a>
                  <a href="https://wa.me/251911234567" className="flex items-center gap-2.5 text-sm theme-text-secondary hover:theme-text-primary-brand transition-colors">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-green-600 flex-shrink-0" />
                    WhatsApp us
                  </a>
                </div>
              </div>

              {/* Working hours */}
              <div className="theme-bg-card rounded-2xl p-5 border-l-4 border-guardians-cyan theme-shadow-md">
                <h3 className="font-bold theme-text-primary mb-3 flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 theme-icon-cyan" />
                  Working Hours
                </h3>
                <div className="space-y-1.5 text-sm theme-text-secondary">
                  <div className="flex justify-between">
                    <span>Mon – Fri</span>
                    <span className="font-medium theme-text-primary">7:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium theme-text-primary">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium theme-text-primary">9:00 AM – 2:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Home collection */}
              <div className="theme-bg-card rounded-2xl p-5 border-l-4 border-purple-400 theme-shadow-md">
                <h3 className="font-bold theme-text-primary mb-2 flex items-center gap-2">
                  <HomeIcon className="h-4 w-4 text-purple-600" />
                  Home Collection Available
                </h3>
                <p className="text-sm theme-text-secondary mb-3">
                  Can't come to us? Request home sample collection instead.
                </p>
                <Link to="/home-collection" className="text-sm theme-text-primary-brand font-semibold inline-flex items-center gap-1 hover:underline">
                  Request Home Collection
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Need help choosing */}
              <div className="theme-bg-surface rounded-2xl p-5 border theme-border">
                <p className="text-sm theme-text-secondary leading-relaxed">
                  <strong className="theme-text-primary">Not sure which service to choose?</strong>{' '}
                  Visit our{' '}
                  <Link to="/services" className="theme-text-primary-brand font-medium hover:underline">
                    Services page
                  </Link>{' '}
                  or{' '}
                  <Link to="/packages" className="theme-text-primary-brand font-medium hover:underline">
                    Health Packages
                  </Link>{' '}
                  for details.
                </p>
              </div>

            </div>

            {/* ── Form ── */}
            <div className="lg:col-span-2">
              <div className="theme-bg-card rounded-2xl p-6 lg:p-8 theme-shadow-lg border theme-border">
                <h2 className="text-xl font-bold theme-text-primary mb-1">Appointment Request</h2>
                <p className="text-sm theme-text-secondary mb-7">
                  Fields marked <span className="text-red-500">*</span> are required.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Abebe Girma"
                        className={inputClass('fullName')}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className={labelClass}>
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+251 9__ ___ ___"
                        className={inputClass('phone')}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>
                      Email Address <span className="text-xs theme-text-muted font-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className={labelClass}>
                      Service / Test Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass('service')}
                    >
                      <option value="">Select a service…</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.service}
                      </p>
                    )}
                  </div>

                  {/* Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        min={today}
                        className={inputClass('date')}
                      />
                      {errors.date && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.date}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className={labelClass}>
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className={inputClass('time')}
                      >
                        <option value="">Select a time…</option>
                        {timeSlots.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass}>
                      Additional Notes <span className="text-xs theme-text-muted font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any special requests, health concerns, or additional information…"
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  {/* Note */}
                  <div className="theme-bg-surface rounded-xl p-4 flex items-start gap-3 border theme-border">
                    <InformationCircleIcon className="h-5 w-5 theme-icon-cyan flex-shrink-0 mt-0.5" />
                    <p className="text-xs theme-text-secondary leading-relaxed">
                      This is a <strong className="theme-text-primary">request form</strong>, not an instant booking.
                      Our team will contact you to confirm your appointment. Walk-ins are also welcome
                      during working hours.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full theme-btn-primary py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 theme-shadow-lg"
                  >
                    <CalendarDaysIcon className="h-5 w-5" />
                    Submit Appointment Request
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section className="py-10 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-white text-center sm:text-left">
              <h3 className="font-bold text-lg">Prefer Immediate Assistance?</h3>
              <p className="text-blue-100 text-sm">Call or WhatsApp us directly — we respond quickly.</p>
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
        </div>
      </section>

    </div>
  );
};

export default Appointment;
