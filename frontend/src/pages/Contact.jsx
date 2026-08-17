import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

const serviceTypes = [
  'General Inquiry',
  'Appointment Request',
  'Test Results Inquiry',
  'Home Sample Collection',
  'Corporate Services',
  'Health Packages',
  'Other',
];

const departments = [
  {
    name: 'General Inquiries',
    email: 'info@guardians-diagnostic.com',
    phone: '+251 11 123 4567',
    hours: 'Mon – Sat: 7 AM – 8 PM',
    border: 'border-guardians-navy',
  },
  {
    name: 'Appointments',
    email: 'appointments@guardians-diagnostic.com',
    phone: '+251 911 234 567',
    hours: 'Mon – Sat: 7 AM – 6 PM',
    border: 'border-guardians-cyan',
  },
  {
    name: 'Corporate Services',
    email: 'corporate@guardians-diagnostic.com',
    phone: '+251 911 234 567',
    hours: 'Mon – Fri: 8 AM – 5 PM',
    border: 'border-guardians-navy',
  },
  {
    name: 'Test Results',
    email: 'results@guardians-diagnostic.com',
    phone: '+251 11 123 4567',
    hours: 'Mon – Sat: 8 AM – 6 PM',
    border: 'border-guardians-cyan',
  },
];

const initialForm = { name: '', phone: '', email: '', serviceType: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm]     = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.phone.trim())   e.phone   = 'Phone number is required';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
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
      <section className="relative h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Contact Guardians"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white max-w-2xl">
              <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">Contact Us</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                We Are Here to{' '}
                <span style={{ color: '#5BB3E4' }}>Help</span>
              </h1>
              <p className="text-blue-50/90 text-lg max-w-xl leading-relaxed">
                Reach us by phone, WhatsApp, email, or visit us at our center in Addis Ababa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick action cards — overlap hero */}
      <section className="relative -mt-10 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Book Appointment', sub: 'Schedule your visit', icon: CalendarDaysIcon, href: '/appointment', as: 'link', bg: 'bg-guardians-navy', border: 'border-guardians-navy', iconBg: 'bg-white/20', iconColor: 'text-white' },
              { label: 'WhatsApp',         sub: '+251 911 234 567',     icon: ChatBubbleLeftRightIcon, href: 'https://wa.me/251911234567', as: 'a', bg: 'bg-green-600', border: 'border-green-600', iconBg: 'bg-white/20', iconColor: 'text-white' },
              { label: 'Home Collection',  sub: 'We come to you',       icon: HomeIcon, href: '/home-collection', as: 'link', bg: 'theme-bg-card', border: 'border-purple-400', iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
              { label: 'Get Directions',   sub: 'Bole, Addis Ababa',    icon: MapPinIcon, href: 'https://maps.google.com', as: 'a', bg: 'theme-bg-card', border: 'border-guardians-cyan', iconBg: 'theme-icon-bg-cyan', iconColor: 'theme-icon-cyan' },
            ].map((item, i) => {
              const isLight = i >= 2;
              const inner = (
                <div className={`rounded-2xl p-4 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 flex items-center gap-3 border-l-4 ${item.border} ${item.bg} ${isLight ? '' : 'text-white'}`}>
                  <div className={`${item.iconBg} p-3 rounded-xl flex-shrink-0`}>
                    <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <p className={`font-bold text-sm ${isLight ? 'theme-text-primary' : 'text-white'}`}>{item.label}</p>
                    <p className={`text-xs truncate ${isLight ? 'theme-text-secondary' : 'text-white/80'}`}>{item.sub}</p>
                  </div>
                </div>
              );
              return item.as === 'link'
                ? <Link key={i} to={item.href}>{inner}</Link>
                : <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>;
            })}
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact info */}
            <div className="space-y-5">
              <div>
                <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Find Us</p>
                <h2 className="text-2xl font-bold theme-text-primary mb-6">Contact Information</h2>
              </div>

              {[
                { icon: MapPinIcon,   title: 'Address',        lines: ['Bole Sub-City', 'Addis Ababa, Ethiopia'], action: null, border: 'border-guardians-navy', iconBg: 'theme-icon-bg-navy', iconClass: 'theme-icon-navy' },
                { icon: PhoneIcon,    title: 'Phone',          lines: ['+251 911 234 567', '+251 11 123 4567'], action: 'tel:+251911234567', border: 'border-green-500', iconBg: 'bg-green-50', iconClass: 'text-green-600' },
                { icon: EnvelopeIcon, title: 'Email',          lines: ['info@guardians-diagnostic.com'], action: 'mailto:info@guardians-diagnostic.com', border: 'border-guardians-cyan', iconBg: 'theme-icon-bg-cyan', iconClass: 'theme-icon-cyan' },
                { icon: ClockIcon,    title: 'Working Hours',  lines: ['Mon – Fri: 7:00 AM – 8:00 PM', 'Saturday: 8:00 AM – 6:00 PM', 'Sunday: 9:00 AM – 2:00 PM'], action: null, border: 'border-purple-400', iconBg: 'bg-purple-50', iconClass: 'text-purple-600' },
              ].map((c, i) => (
                <div key={i} className={`theme-bg-card rounded-xl p-4 flex items-start gap-4 theme-shadow-sm border-l-4 ${c.border}`}>
                  <div className={`${c.iconBg} p-2.5 rounded-lg flex-shrink-0`}>
                    <c.icon className={`h-5 w-5 ${c.iconClass}`} />
                  </div>
                  <div>
                    <p className="font-semibold theme-text-primary text-sm mb-1">{c.title}</p>
                    {c.lines.map((l, li) => (
                      c.action && li === 0
                        ? <a key={li} href={c.action} className="block text-sm theme-text-secondary hover:theme-text-primary-brand transition-colors">{l}</a>
                        : <p key={li} className="text-sm theme-text-secondary">{l}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden theme-shadow-lg border theme-border">
                <iframe
                  title="Guardians Diagnostic Center Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7969!3d9.0154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNTUuNCJOIDM4wrA0Nyc0OS4wIkU!5e0!3m2!1sen!2set!4v1234567890"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              {/* Social links */}
              <div className="theme-bg-card rounded-xl p-5 border theme-border">
                <p className="font-semibold theme-text-primary text-sm mb-3">Follow Us</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Facebook',  href: 'https://facebook.com', color: 'bg-blue-600' },
                    { name: 'Telegram',  href: 'https://t.me',         color: 'bg-sky-500' },
                    { name: 'LinkedIn',  href: 'https://linkedin.com', color: 'bg-blue-700' },
                    { name: 'YouTube',   href: 'https://youtube.com',  color: 'bg-red-600' },
                  ].map(s => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                      className={`${s.color} text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity`}>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="theme-bg-card rounded-2xl p-6 lg:p-8 theme-shadow-lg border theme-border">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold theme-text-primary mb-2">Message Sent!</h3>
                    <p className="theme-text-secondary mb-6">
                      Thank you for reaching out. We will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => { setForm(initialForm); setSubmitted(false); }}
                      className="theme-btn-primary px-6 py-2.5 rounded-lg font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold theme-text-primary mb-1">Send Us a Message</h2>
                    <p className="text-sm theme-text-secondary mb-6">
                      Fields marked <span className="text-red-500">*</span> are required.
                    </p>
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium theme-text-primary mb-1.5">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input type="text" name="name" value={form.name} onChange={handleChange}
                            placeholder="Full name" className={inputClass('name')} />
                          {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium theme-text-primary mb-1.5">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                            placeholder="+251 9__ ___ ___" className={inputClass('phone')} />
                          {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium theme-text-primary mb-1.5">
                          Email <span className="text-xs theme-text-muted font-normal">(optional)</span>
                        </label>
                        <input type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="you@example.com" className={inputClass('email')} />
                        {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium theme-text-primary mb-1.5">Inquiry Type</label>
                        <select name="serviceType" value={form.serviceType} onChange={handleChange} className={inputClass('serviceType')}>
                          <option value="">Select inquiry type…</option>
                          {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium theme-text-primary mb-1.5">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="subject" value={form.subject} onChange={handleChange}
                          placeholder="Brief subject of your inquiry" className={inputClass('subject')} />
                        {errors.subject && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.subject}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium theme-text-primary mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea name="message" value={form.message} onChange={handleChange}
                          rows={4} placeholder="Write your message here…"
                          className={`${inputClass('message')} resize-none`} />
                        {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.message}</p>}
                      </div>

                      <button type="submit" className="w-full theme-btn-primary py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 theme-shadow-lg">
                        <EnvelopeIcon className="h-5 w-5" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-14 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Departments</p>
            <h2 className="text-2xl font-bold theme-text-primary">Contact the Right Department</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {departments.map((d, i) => (
              <div key={i} className={`theme-bg-card rounded-2xl p-5 border-l-4 ${d.border} theme-shadow-md`}>
                <h3 className="font-bold theme-text-primary mb-3">{d.name}</h3>
                <div className="space-y-2 text-sm">
                  <a href={`mailto:${d.email}`} className="flex items-start gap-2 theme-text-secondary hover:theme-text-primary-brand transition-colors">
                    <EnvelopeIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span className="break-all">{d.email}</span>
                  </a>
                  <a href={`tel:${d.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 theme-text-secondary hover:theme-text-primary-brand transition-colors">
                    <PhoneIcon className="h-4 w-4 flex-shrink-0" />
                    {d.phone}
                  </a>
                  <div className="flex items-center gap-2 theme-text-muted">
                    <ClockIcon className="h-4 w-4 flex-shrink-0" />
                    {d.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ snippet */}
      <section className="py-14 theme-bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Quick Help</p>
            <h2 className="text-2xl font-bold theme-text-primary mb-3">Common Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-8">
            {[
              { q: 'Do I need an appointment?', a: 'Appointments are recommended but walk-ins are welcome during working hours.' },
              { q: 'How do I get my results?', a: 'Results can be collected at our center. We also notify you by phone when they are ready.' },
              { q: 'Is home sample collection available?', a: 'Yes, we offer home sample collection for most laboratory tests. Request online or call us.' },
              { q: 'Do you offer corporate health packages?', a: 'Yes, we have group and corporate screening packages for organizations. Contact our corporate team.' },
            ].map((faq, i) => (
              <div key={i} className="theme-bg-card rounded-xl p-5 border-l-4 border-guardians-cyan theme-shadow-sm">
                <p className="font-semibold theme-text-primary text-sm mb-2 flex items-start gap-2">
                  <span className="theme-text-primary-brand font-bold flex-shrink-0">Q.</span>
                  {faq.q}
                </p>
                <p className="text-sm theme-text-secondary leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/faq" className="theme-text-primary-brand font-semibold inline-flex items-center gap-2 hover:underline">
              View All FAQs <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="py-10 bg-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-white">
          <div>
            <p className="font-bold text-lg">24/7 Emergency Line</p>
            <p className="text-red-100 text-sm">For urgent diagnostic services, we are always available.</p>
          </div>
          <a href="tel:+251911000911" className="bg-white text-red-700 font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-red-50 transition-colors">
            <PhoneIcon className="h-5 w-5" /> +251 911 000 911
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;
