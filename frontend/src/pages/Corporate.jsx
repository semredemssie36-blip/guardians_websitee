import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 BuildingOfficeIcon,
 UserGroupIcon,
 ChartBarIcon,
 ClockIcon,
 CheckCircleIcon,
 ShieldCheckIcon,
 HeartIcon,
 CalendarDaysIcon,
 ArrowRightIcon,
 PhoneIcon,
 TruckIcon,
 DocumentTextIcon,
 StarIcon,
 EnvelopeIcon,
 WrenchScrewdriverIcon,
 AcademicCapIcon,
 BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

const Corporate = () => {
 const [formData, setFormData] = useState({
 organizationName: '',
 contactPerson: '',
 email: '',
 phone: '',
 organizationType: '',
 employees: '',
 servicesNeeded: '',
 message: ''
 });
 const [submitted, setSubmitted] = useState(false);

 const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 console.log('Corporate inquiry:', formData);
 setSubmitted(true);
 };

 const targetCustomers = [
 { name: 'Companies', icon: BuildingOfficeIcon, desc: 'Private businesses of all sizes' },
 { name: 'NGOs', icon: UserGroupIcon, desc: 'Non-governmental organizations' },
 { name: 'Schools & Universities', icon: AcademicCapIcon, desc: 'Educational institutions' },
 { name: 'Factories', icon: BuildingStorefrontIcon, desc: 'Manufacturing & production facilities' },
 { name: 'Construction Companies', icon: WrenchScrewdriverIcon, desc: 'Construction & engineering firms' },
 { name: 'Government Institutions', icon: ShieldCheckIcon, desc: 'Public sector organizations' },
 { name: 'Other Organizations', icon: DocumentTextIcon, desc: 'Any organization needing employee health services' }
 ];

 const services = [
 {
 title: 'Pre-Employment Medical Screening',
 description: 'Comprehensive medical examinations for new hires to ensure workplace fitness, safety, and regulatory compliance.',
 icon: UserGroupIcon,
 color: 'text-blue-600',
 bgColor: 'bg-blue-100',
 border: 'border-guardians-navy',
 features: [
 'Medical fitness certificates',
 'Chest X-ray',
 'Complete blood count and urinalysis',
 'Vision and hearing assessments',
 'Drug and alcohol screening',
 'Occupational health assessment'
 ],
 price: 'From ETB 2,800 per employee'
 },
 {
 title: 'Employee Health Screening',
 description: 'Comprehensive health screenings for your workforce to monitor employee wellness and detect health issues early.',
 icon: HeartIcon,
 color: 'text-red-600',
 bgColor: 'bg-red-100',
 border: 'border-guardians-red',
 features: [
 'Comprehensive physical examination',
 'Full blood panel and metabolic tests',
 'Blood pressure and cardiovascular risk',
 'Diabetes and cholesterol screening',
 'Health risk assessment report',
 'Individual health recommendations'
 ],
 price: 'From ETB 3,500 per employee'
 },
 {
 title: 'Occupational Health Services',
 description: 'Specialized health services focused on workplace-related health risks, safety compliance, and injury prevention.',
 icon: ShieldCheckIcon,
 color: 'text-green-600',
 bgColor: 'bg-green-100',
 border: 'border-guardians-cyan',
 features: [
 'Workplace health risk assessments',
 'Occupational disease screening',
 'Fitness for duty evaluations',
 'Injury prevention programs',
 'Health and safety compliance reports',
 'Occupational health certificates'
 ],
 price: 'Custom pricing'
 },
 {
 title: 'Periodic Employee Checkups',
 description: 'Regular scheduled health checkups throughout the year to continuously monitor employee health status.',
 icon: ClockIcon,
 color: 'text-purple-600',
 bgColor: 'bg-purple-100',
 border: 'border-guardians-navy',
 features: [
 'Quarterly or bi-annual health checks',
 'Chronic disease monitoring',
 'Medication review and follow-up',
 'Health trend tracking over time',
 'Early detection of developing conditions',
 'Individual health progress reports'
 ],
 price: 'From ETB 1,200 per visit'
 },
 {
 title: 'Institutional Health Screening',
 description: 'Large-scale health screening programs designed for institutions — schools, government bodies, and large organizations.',
 icon: BuildingOfficeIcon,
 color: 'text-teal-600',
 bgColor: 'bg-teal-100',
 border: 'border-guardians-cyan',
 features: [
 'On-site mobile screening units',
 'Group scheduling and coordination',
 'Institutional health summary report',
 'Anonymous population health data',
 'Bulk pricing and group discounts',
 'Dedicated account manager'
 ],
 price: 'Custom pricing'
 },
 {
 title: 'On-Site Health Services',
 description: 'Mobile health clinic that brings our diagnostic services directly to your workplace — minimal disruption, maximum convenience.',
 icon: TruckIcon,
 color: 'text-orange-600',
 bgColor: 'bg-orange-100',
 border: 'border-guardians-navy',
 features: [
 'Mobile health units at your premises',
 'On-site blood and sample collection',
 'Basic diagnostic tests on location',
 'Health consultations at your office',
 'Flexible scheduling around your workday',
 'Emergency medical support'
 ],
 price: 'Custom pricing based on scope'
 }
 ];

 const packages = [
 {
 name: 'Startup Package',
 employeeRange: '5-25 employees',
 price: 'ETB 2,500',
 priceUnit: 'per employee/year',
 description: 'Perfect for small businesses and startups looking to provide basic employee health benefits.',
 image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 features: [
 'Basic health screening',
 'Pre-employment medicals',
 'Annual check-ups',
 'Basic laboratory tests',
 'Health certificates',
 'Digital health records'
 ],
 popular: false
 },
 {
 name: 'Business Package',
 employeeRange: '26-100 employees',
 price: 'ETB 2,200',
 priceUnit: 'per employee/year',
 description: 'Comprehensive health solutions for growing businesses with enhanced services.',
 image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 features: [
 'Comprehensive health screening',
 'Preventive care programs',
 'On-site consultations',
 'Health risk assessments',
 'Wellness workshops',
 'Health analytics reports',
 'Priority appointment booking'
 ],
 popular: true
 },
 {
 name: 'Enterprise Package',
 employeeRange: '100+ employees',
 price: 'ETB 1,800',
 priceUnit: 'per employee/year',
 description: 'Premium health solutions for large organizations with dedicated account management.',
 image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 features: [
 'Full-service health programs',
 'On-site mobile clinics',
 'Dedicated account manager',
 'Custom wellness programs',
 'Executive health packages',
 'Advanced health analytics',
 'Emergency medical support',
 '24/7 health helpline'
 ],
 popular: false
 }
 ];

 const benefits = [
 {
 icon: UserGroupIcon,
 title: 'Improved Productivity',
 description: 'Healthy employees are more productive and engaged in their work',
 stat: '23% increase in productivity'
 },
 {
 icon: ClockIcon,
 title: 'Reduced Absenteeism',
 description: 'Preventive care reduces sick days and unplanned absences',
 stat: '40% reduction in sick days'
 },
 {
 icon: ShieldCheckIcon,
 title: 'Lower Healthcare Costs',
 description: 'Early detection prevents costly medical treatments later',
 stat: '30% reduction in costs'
 },
 {
 icon: HeartIcon,
 title: 'Employee Satisfaction',
 description: 'Health benefits improve employee retention and morale',
 stat: '85% employee satisfaction'
 }
 ];

 const testimonials = [
 {
 company: 'Ethiopian Airlines',
 logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 testimonial: 'Guardians Diagnostic Center has been instrumental in maintaining our workforce health. Their comprehensive screening programs have helped us identify health issues early.',
 author: 'Dr. Mehari Tesfaye',
 position: 'Chief Medical Officer',
 employees: '15,000+ employees'
 },
 {
 company: 'Commercial Bank of Ethiopia',
 logo: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 testimonial: 'The on-site health services provided by Guardians have significantly improved our employee wellness programs. Professional, reliable, and efficient service.',
 author: 'Ato Dawit Kebede',
 position: 'HR Director',
 employees: '8,500+ employees'
 }
 ];

 const industries = [
 {
 name: 'Manufacturing',
 icon: '🏭',
 description: 'Occupational health screenings and safety assessments'
 },
 {
 name: 'Banking & Finance',
 icon: '🏦',
 description: 'Executive health packages and stress management programs'
 },
 {
 name: 'Airlines',
 icon: '✈️',
 description: 'Aviation medical examinations and fitness certifications'
 },
 {
 name: 'Construction',
 icon: '🏗️',
 description: 'Safety-focused health screenings and injury prevention'
 },
 {
 name: 'Technology',
 icon: '💻',
 description: 'Wellness programs for office workers and tech professionals'
 },
 {
 name: 'Healthcare',
 icon: '🏥',
 description: 'Specialized screenings for healthcare workers'
 }
 ];

 return (
 <div className="theme-bg-background">
 {/* Hero Section */}
 <section className="relative h-[500px] overflow-hidden">
 <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QGnOl2m4mMnU8t0zK3fdwP_1HqcyTdOXok9ksyRhBUGO_-SYLcjJd9c&s=10"
 alt="Corporate Health Services"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 Corporate Health Services
 </h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Comprehensive workplace health solutions designed to keep your employees healthy, productive, and engaged. From pre-employment screening to wellness programs.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link
 to="/appointment"
 className="theme-btn-primary px-8 py-4 rounded-lg flex items-center justify-center theme-shadow-lg"
 >
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Get Corporate Quote
 </Link>
 <a
 href="tel:+251911234567"
 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call Corporate Team
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Benefits Section */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">WHY CORPORATE HEALTH MATTERS</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Benefits of Workplace Health Programs
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Investing in employee health delivers measurable returns through improved productivity, reduced costs, and higher employee satisfaction.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {benefits.map((benefit, index) => (
 <div key={index} className="theme-bg-card text-center group p-6 rounded-2xl theme-shadow-lg border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">
 <div className="theme-icon-bg-navy w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
 <benefit.icon className="h-8 w-8 theme-icon-navy" />
 </div>
 <h3 className="text-xl font-bold theme-text-primary mb-2">{benefit.title}</h3>
 <p className="theme-text-secondary mb-4">{benefit.description}</p>
 <div className="theme-bg-surface rounded-lg py-2 px-4">
 <span className="theme-text-primary-brand font-bold text-lg">{benefit.stat}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Services Section */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">OUR SERVICES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Corporate Health Solutions
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 From pre-employment screening to ongoing occupational health programs, we provide complete health solutions for your organization.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {services.map((service, index) => (
 <div key={index} className={`theme-bg-card rounded-2xl theme-shadow-xl p-6 hover:theme-shadow-2xl transition-all duration-300 border-l-4 ${service.border}`}>
 <div className={`${service.bgColor} p-4 rounded-2xl w-fit mb-4`}>
 <service.icon className={`h-8 w-8 ${service.color}`} />
 </div>
 <h3 className="text-lg font-bold theme-text-primary mb-1">{service.title}</h3>
 <p className="theme-text-primary-brand font-semibold text-sm mb-3">{service.price}</p>
 <p className="theme-text-secondary text-sm mb-4">{service.description}</p>
 <ul className="space-y-2">
 {service.features.map((feature, featureIndex) => (
 <li key={featureIndex} className="flex items-center text-sm theme-text-secondary">
 <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
 {feature}
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Corporate Packages */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">CORPORATE PACKAGES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Choose the Right Package for Your Organization
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Scalable health solutions designed for organizations of all sizes, from startups to large enterprises.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {packages.map((pkg, index) => (
 <div key={index} className="theme-bg-card rounded-2xl theme-shadow-xl overflow-hidden hover:theme-shadow-2xl transition-all duration-300 relative border-l-4 border-guardians-cyan hover:border-guardians-navy">
 {pkg.popular && (
 <div className="absolute top-4 right-4 z-10">
 <span className="bg-guardians-navy text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
 <StarIcon className="h-3 w-3 mr-1" />
 Most Popular
 </span>
 </div>
 )}
 
 <div className="h-48 overflow-hidden">
 <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
 </div>
 
 <div className="p-6">
 <h3 className="text-xl font-bold theme-text-primary mb-2">{pkg.name}</h3>
 <p className="theme-text-primary-brand font-semibold mb-2">{pkg.employeeRange}</p>
 <p className="theme-text-secondary text-sm mb-4">{pkg.description}</p>
 
 <div className="theme-icon-bg-navy rounded-lg p-4 mb-6 text-center">
 <div className="text-2xl font-bold theme-text-primary-brand">{pkg.price}</div>
 <div className="text-sm theme-text-secondary">{pkg.priceUnit}</div>
 </div>

 <ul className="space-y-2 mb-6">
 {pkg.features.map((feature, featureIndex) => (
 <li key={featureIndex} className="flex items-center text-sm theme-text-secondary">
 <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
 {feature}
 </li>
 ))}
 </ul>

 <Link
 to="/appointment"
 className="theme-btn-primary block text-center font-semibold px-6 py-3 rounded-lg transition-colors theme-shadow-lg"
 >
 Get Quote
 </Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Target Customers */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">WHO WE SERVE</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Our Target Organizations
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 We provide corporate health services to a wide range of organizations across Ethiopia.
 </p>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {targetCustomers.map((customer, index) => (
 <div key={index} className="theme-bg-card rounded-2xl p-6 theme-shadow-lg hover:theme-shadow-xl transition-all duration-300 text-center border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className="theme-icon-bg-navy w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
 <customer.icon className="h-5 w-5 theme-icon-navy" />
 </div>
 <h3 className="font-bold theme-text-primary mb-1">{customer.name}</h3>
 <p className="text-sm theme-text-secondary">{customer.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Inquiry Form */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
 {/* Left — Why submit */}
 <div>
 <span className="theme-text-primary-brand font-semibold text-lg">GET IN TOUCH</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 mt-2">
 Submit a Corporate Inquiry
 </h2>
 <p className="theme-text-secondary text-lg leading-relaxed mb-8">
 Tell us about your organization and we will get back to you with a customized health solution and pricing tailored to your needs.
 </p>
 <div className="space-y-5">
 {[
 { icon: ClockIcon, title: 'Fast Response', desc: 'We respond to all inquiries within 24 business hours', border: 'border-guardians-navy' },
 { icon: DocumentTextIcon, title: 'Custom Proposals', desc: 'We prepare a tailored health plan and pricing for your organization', border: 'border-guardians-cyan' },
 { icon: ShieldCheckIcon, title: 'No Commitment Required', desc: 'Receive a quote and information with no obligation', border: 'border-guardians-red' },
 { icon: PhoneIcon, title: 'Dedicated Support', desc: 'A dedicated corporate account manager will be assigned to your account', border: 'border-guardians-navy' }
 ].map((item, i) => (
 <div key={i} className={`theme-bg-card rounded-xl p-4 flex items-start space-x-4 theme-shadow-md border-l-4 ${item.border}`}>
 <div className="theme-icon-bg-navy p-2 rounded-lg flex-shrink-0">
 <item.icon className="h-6 w-6 theme-icon-navy" />
 </div>
 <div>
 <p className="font-bold theme-text-primary">{item.title}</p>
 <p className="text-sm theme-text-secondary">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 <div className="mt-8 theme-bg-card rounded-xl p-5 border-l-4 border-guardians-cyan theme-shadow-md">
 <p className="font-semibold theme-text-primary mb-1">Prefer to call?</p>
 <a href="tel:+251911234567" className="theme-text-primary-brand font-bold text-lg hover:underline">
 +251 911 234 567
 </a>
 <p className="text-sm theme-text-secondary mt-1">Corporate team available Mon–Fri, 8 AM – 6 PM</p>
 </div>
 </div>

 {/* Right — Inquiry Form */}
 <div className="theme-bg-card rounded-2xl p-8 theme-shadow-xl border-l-4 border-guardians-navy">
 {submitted ? (
 <div className="text-center py-12">
 <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
 <CheckCircleIcon className="h-10 w-10 text-green-600" />
 </div>
 <h3 className="text-2xl font-bold theme-text-primary mb-3">Inquiry Submitted!</h3>
 <p className="theme-text-secondary mb-6">
 Thank you for your inquiry. Our corporate health team will contact you within 24 hours with a customized proposal.
 </p>
 <button
 onClick={() => setSubmitted(false)}
 className="theme-btn-primary px-6 py-3 rounded-lg font-semibold"
 >
 Submit Another Inquiry
 </button>
 </div>
 ) : (
 <>
 <h3 className="text-2xl font-bold theme-text-primary mb-6">Corporate Health Inquiry</h3>
 <form onSubmit={handleSubmit} className="space-y-5">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Organization Name *</label>
 <input
 type="text" name="organizationName" required
 value={formData.organizationName} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="Your organization name"
 />
 </div>
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Contact Person *</label>
 <input
 type="text" name="contactPerson" required
 value={formData.contactPerson} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="Your full name"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Email Address *</label>
 <input
 type="email" name="email" required
 value={formData.email} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="your@email.com"
 />
 </div>
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Phone Number *</label>
 <input
 type="tel" name="phone" required
 value={formData.phone} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="+251 911 234 567"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Organization Type *</label>
 <select
 name="organizationType" required
 value={formData.organizationType} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 >
 <option value="">Select type</option>
 <option value="company">Company</option>
 <option value="ngo">NGO</option>
 <option value="school">School / University</option>
 <option value="factory">Factory</option>
 <option value="construction">Construction Company</option>
 <option value="government">Government Institution</option>
 <option value="other">Other Organization</option>
 </select>
 </div>
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Number of Employees</label>
 <select
 name="employees"
 value={formData.employees} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 >
 <option value="">Select range</option>
 <option value="1-25">1 – 25 employees</option>
 <option value="26-100">26 – 100 employees</option>
 <option value="101-500">101 – 500 employees</option>
 <option value="500+">500+ employees</option>
 </select>
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Services Needed *</label>
 <select
 name="servicesNeeded" required
 value={formData.servicesNeeded} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 >
 <option value="">Select service</option>
 <option value="pre-employment">Pre-Employment Medical Screening</option>
 <option value="employee-screening">Employee Health Screening</option>
 <option value="occupational">Occupational Health Services</option>
 <option value="periodic">Periodic Employee Checkups</option>
 <option value="institutional">Institutional Health Screening</option>
 <option value="onsite">On-Site Health Services</option>
 <option value="multiple">Multiple Services</option>
 </select>
 </div>

 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Additional Information</label>
 <textarea
 name="message" rows={4}
 value={formData.message} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="Tell us more about your needs, preferred schedule, or any questions..."
 ></textarea>
 </div>

 <button type="submit" className="w-full theme-btn-primary px-8 py-4 rounded-lg font-semibold theme-shadow-lg">
 Submit Inquiry
 </button>
 </form>
 </>
 )}
 </div>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 theme-bg-primary">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
 Ready to Invest in Your Team's Health?
 </h2>
 <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
 Contact our corporate health team today to discuss customized health solutions for your organization.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 to="/appointment"
 className="bg-white theme-text-primary-brand font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center theme-shadow-lg"
 >
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Schedule Consultation
 </Link>
 <a
 href="tel:+251911234567"
 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors inline-flex items-center justify-center"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call: +251 911 234 567
 </a>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Corporate;