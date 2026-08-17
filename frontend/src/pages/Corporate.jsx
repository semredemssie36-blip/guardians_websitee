import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BuildingOffice2Icon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const corporateServices = [
  {
    icon: UserGroupIcon,
    title: 'Pre-Employment Screening',
    description: 'Comprehensive medical examinations for new hires — ensuring fitness for duty and meeting regulatory requirements.',
    features: ['Physical examination', 'CBC & Urinalysis', 'Chest X-Ray', 'HIV & Hepatitis screening', 'Medical certificate issued'],
    price: 'From ETB 3,000/person',
    border: 'border-guardians-navy',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Employee Health Screening',
    description: 'Periodic health assessments for existing employees to monitor wellness and detect health risks early.',
    features: ['Annual health check', 'Blood glucose & lipids', 'Liver & kidney function', 'Urinalysis', 'Written health report'],
    price: 'From ETB 2,200/person',
    border: 'border-guardians-cyan',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Occupational Health Services',
    description: 'Specialized assessments for work-related health hazards, particularly for industrial and high-risk environments.',
    features: ['Occupational risk assessment', 'Hazard-specific testing', 'Fitness-for-work certificates', 'Regulatory compliance reports'],
    price: 'Quoted per scope',
    border: 'border-guardians-navy',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: CalendarDaysIcon,
    title: 'Periodic Employee Checkups',
    description: 'Scheduled routine check-ups for employee groups throughout the year on agreed intervals.',
    features: ['Flexible scheduling', 'Group booking discounts', 'Confidential individual reports', 'Summary statistics for HR'],
    price: 'From ETB 1,800/person',
    border: 'border-guardians-cyan',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: ClockIcon,
    title: 'Institutional Health Screening',
    description: 'Bulk screening programs for schools, universities, NGOs, and government institutions.',
    features: ['On-site or in-center options', 'Bulk pricing', 'Group result reports', 'Suitable for schools & universities'],
    price: 'Quoted per group',
    border: 'border-guardians-navy',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: UserGroupIcon,
    title: 'On-Site Mobile Services',
    description: 'Our team comes to your premises — ideal for factories, construction sites, and large organizations.',
    features: ['Mobile sample collection', 'On-site ECG & vital signs', 'Minimal disruption to operations', 'Available for 50+ employees'],
    price: 'Quoted per visit',
    border: 'border-guardians-cyan',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
];

const targetCustomers = [
  { label: 'Companies & Businesses', icon: '🏢' },
  { label: 'NGOs & International Orgs', icon: '🌍' },
  { label: 'Schools & Universities', icon: '🎓' },
  { label: 'Factories & Manufacturing', icon: '🏭' },
  { label: 'Construction Companies', icon: '🏗️' },
  { label: 'Government Institutions', icon: '🏛️' },
  { label: 'Hospitals & Clinics', icon: '🏥' },
  { label: 'Other Organizations', icon: '📋' },
];

const benefits = [
  { stat: 'Preventive', label: 'Early detection of health risks', icon: ShieldCheckIcon },
  { stat: 'Productive', label: 'Healthier teams perform better', icon: UserGroupIcon },
  { stat: 'Compliant',  label: 'Meet occupational health requirements', icon: CheckCircleIcon },
  { stat: 'Affordable', label: 'Group rates and flexible packages', icon: BuildingOffice2Icon },
];

const orgTypes = ['Private Company', 'NGO / INGO', 'School / University', 'Factory / Manufacturing', 'Construction', 'Government Institution', 'Hospital / Clinic', 'Other'];
const employeeRanges = ['1–10', '11–25', '26–50', '51–100', '101–250', '251–500', '500+'];
const serviceOptions = ['Pre-Employment Screening', 'Employee Health Screening', 'Occupational Health', 'Periodic Checkups', 'Institutional Screening', 'On-Site Mobile Services', 'Other / Multiple'];

const initialForm = { orgName: '', contactPerson: '', email: '', phone: '', orgType: '', employees: '', servicesNeeded: '', message: '' };

const Corporate = () => {
  const [form, setForm]         = useState(initialForm);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.orgName.trim())      e.orgName      = 'Organization name is required';
    if (!form.contactPerson.trim()) e.contactPerson = 'Contact person name is required';
    if (!form.phone.trim())        e.phone        = 'Phone number is required';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.orgType)             e.orgType      = 'Please select organization type';
    if (!form.servicesNeeded)      e.servicesNeeded = 'Please select a service';
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

  return (
    <div className="theme-bg-background">

      {/* Hero */}
      <section className="relative min-h-[280px] sm:min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Corporate Health Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        <div className="relative flex items-center min-h-[280px] sm:min-h-[400px] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-white max-w-2xl">
              <p className="text-blue-200 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">Corporate Services</p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight">
                Workplace Health{' '}
                <span style={{ color: '#5BB3E4' }}>Solutions</span>
              </h1>
              <p className="text-blue-50/90 text-sm sm:text-lg mb-5 sm:mb-8 max-w-xl leading-relaxed">
                Comprehensive health screening programs for companies, NGOs, schools,
                factories, and government institutions across Ethiopia.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                <a href="#inquiry-form" className="theme-btn-primary px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg font-semibold inline-flex items-center justify-center gap-2 theme-shadow-lg text-sm sm:text-base">
                  <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" /> Get a Quote
                </a>
                <a href="tel:+251911234567" className="bg-white/10 border border-white/50 text-white font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                  <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits row */}
      <section className="py-12 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="theme-bg-card rounded-2xl p-5 text-center theme-shadow-md border-t-4"
                style={{ borderColor: i % 2 === 0 ? '#1A3A6B' : '#5BB3E4' }}>
                <div className="theme-icon-bg-navy w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <b.icon className="h-6 w-6 theme-icon-navy" />
                </div>
                <p className="font-bold theme-text-primary text-base mb-1">{b.stat}</p>
                <p className="text-xs theme-text-secondary leading-relaxed">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-14 theme-bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl font-bold theme-text-primary mb-3">Corporate Health Services</h2>
            <p className="theme-text-secondary max-w-xl mx-auto">
              Tailored health programs for organizations of all sizes — from small businesses to large institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((s, i) => (
              <div key={i} className={`theme-bg-card rounded-2xl p-6 border-l-4 ${s.border} theme-shadow-md hover:theme-shadow-xl transition-all duration-300 flex flex-col`}>
                <div className={`${s.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                </div>
                <h3 className="font-bold theme-text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-sm theme-text-secondary leading-relaxed mb-4 flex-1">{s.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm theme-text-secondary">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t theme-border pt-4 flex items-center justify-between">
                  <span className="font-bold theme-text-primary-brand text-sm">{s.price}</span>
                  <a href="#inquiry-form" className="theme-btn-primary px-4 py-2 rounded-lg text-xs font-semibold">
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target customers */}
      <section className="py-14 theme-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Who We Serve</p>
            <h2 className="text-3xl font-bold theme-text-primary mb-3">We Work With All Types of Organizations</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {targetCustomers.map((c, i) => (
              <div key={i} className="theme-bg-card rounded-2xl p-5 text-center theme-shadow-sm hover:theme-shadow-md transition-all border theme-border hover:border-guardians-cyan">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <p className="font-medium theme-text-primary text-sm">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form + sidebar */}
      <section id="inquiry-form" className="py-14 theme-bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="theme-text-primary-brand font-semibold text-sm tracking-widest uppercase mb-2">Get in Touch</p>
            <h2 className="text-3xl font-bold theme-text-primary mb-3">Submit a Corporate Inquiry</h2>
            <p className="theme-text-secondary max-w-xl mx-auto">
              Fill in your details and one of our corporate team will contact you within 1 business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="theme-bg-card rounded-2xl p-5 border-l-4 border-guardians-navy theme-shadow-md">
                <h3 className="font-bold theme-text-primary mb-4">Why Choose Guardians for Corporate Health?</h3>
                <ul className="space-y-3">
                  {[
                    'Competitive group pricing',
                    'Flexible scheduling to fit your operations',
                    'Confidential individual reports',
                    'Summary reports for HR teams',
                    'On-site collection available for large groups',
                    'Fast turnaround with clear result timelines',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm theme-text-secondary">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="theme-bg-card rounded-2xl p-5 border-l-4 border-guardians-cyan theme-shadow-md">
                <h3 className="font-bold theme-text-primary mb-3">Prefer to Call?</h3>
                <div className="space-y-2">
                  <a href="tel:+251911234567" className="flex items-center gap-2 text-sm theme-text-secondary hover:theme-text-primary-brand transition-colors">
                    <PhoneIcon className="h-4 w-4 text-green-500" /> +251 911 234 567
                  </a>
                  <a href="mailto:corporate@guardians-diagnostic.com" className="flex items-center gap-2 text-sm theme-text-secondary hover:theme-text-primary-brand transition-colors">
                    <EnvelopeIcon className="h-4 w-4 theme-icon-cyan" /> corporate@guardians-diagnostic.com
                  </a>
                  <a href="https://wa.me/251911234567" className="flex items-center gap-2 text-sm theme-text-secondary hover:theme-text-primary-brand transition-colors">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-green-500" /> WhatsApp us
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="theme-bg-card rounded-2xl p-6 lg:p-8 theme-shadow-lg border theme-border">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold theme-text-primary mb-2">Inquiry Received!</h3>
                    <p className="theme-text-secondary mb-2">
                      Thank you, <strong className="theme-text-primary">{form.contactPerson}</strong> from{' '}
                      <strong className="theme-text-primary">{form.orgName}</strong>.
                    </p>
                    <p className="theme-text-secondary mb-6">
                      Our corporate team will contact you at{' '}
                      <strong className="theme-text-primary">{form.phone}</strong> within 1 business day.
                    </p>
                    <button onClick={() => { setForm(initialForm); setSubmitted(false); }}
                      className="theme-btn-primary px-6 py-2.5 rounded-lg font-semibold">
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold theme-text-primary mb-1">Corporate Inquiry Form</h3>
                    <p className="text-sm theme-text-secondary mb-6">Fields marked <span className="text-red-500">*</span> are required.</p>
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Organization Name <span className="text-red-500">*</span></label>
                          <input type="text" name="orgName" value={form.orgName} onChange={handleChange}
                            placeholder="e.g. ABC Company" className={inputClass('orgName')} />
                          {errors.orgName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.orgName}</p>}
                        </div>
                        <div>
                          <label className={labelClass}>Contact Person <span className="text-red-500">*</span></label>
                          <input type="text" name="contactPerson" value={form.contactPerson} onChange={handleChange}
                            placeholder="Your full name" className={inputClass('contactPerson')} />
                          {errors.contactPerson && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.contactPerson}</p>}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Phone <span className="text-red-500">*</span></label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                            placeholder="+251 9__ ___ ___" className={inputClass('phone')} />
                          {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.phone}</p>}
                        </div>
                        <div>
                          <label className={labelClass}>Email <span className="text-xs theme-text-muted font-normal">(optional)</span></label>
                          <input type="email" name="email" value={form.email} onChange={handleChange}
                            placeholder="you@company.com" className={inputClass('email')} />
                          {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.email}</p>}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Organization Type <span className="text-red-500">*</span></label>
                          <select name="orgType" value={form.orgType} onChange={handleChange} className={inputClass('orgType')}>
                            <option value="">Select type…</option>
                            {orgTypes.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                          {errors.orgType && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.orgType}</p>}
                        </div>
                        <div>
                          <label className={labelClass}>Number of Employees</label>
                          <select name="employees" value={form.employees} onChange={handleChange} className={inputClass('employees')}>
                            <option value="">Select range…</option>
                            {employeeRanges.map(r => <option key={r} value={r}>{r}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Service Needed <span className="text-red-500">*</span></label>
                        <select name="servicesNeeded" value={form.servicesNeeded} onChange={handleChange} className={inputClass('servicesNeeded')}>
                          <option value="">Select service…</option>
                          {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.servicesNeeded && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><ExclamationCircleIcon className="h-3.5 w-3.5" />{errors.servicesNeeded}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Additional Information</label>
                        <textarea name="message" value={form.message} onChange={handleChange}
                          rows={3} placeholder="Describe your specific needs, preferred schedule, or any questions…"
                          className={`${inputClass('message')} resize-none`} />
                      </div>
                      <button type="submit" className="w-full theme-btn-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 theme-shadow-lg">
                        <EnvelopeIcon className="h-5 w-5" /> Submit Corporate Inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 theme-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Build a Healthier Workplace?</h2>
          <p className="text-blue-100 mb-7 max-w-xl mx-auto">
            Contact our corporate team today — we will design a health program that fits your organization's size and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#inquiry-form" className="bg-white font-bold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors theme-shadow-lg" style={{ color: '#1A3A6B' }}>
              <EnvelopeIcon className="h-5 w-5" /> Submit Inquiry
            </a>
            <Link to="/packages" className="bg-white/10 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2">
              View Packages <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Corporate;
