import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
 HomeIcon,
 CalendarDaysIcon,
 BeakerIcon,
 DocumentTextIcon,
 CheckCircleIcon,
 PhoneIcon,
 ArrowRightIcon,
 ClockIcon,
 MapPinIcon,
 ShieldCheckIcon,
 UserIcon,
 ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const HomeCollection = () => {
 const [formData, setFormData] = useState({
 fullName: '',
 phone: '',
 email: '',
 address: '',
 preferredDate: '',
 preferredTime: '',
 testType: '',
 message: ''
 });
 const [submitted, setSubmitted] = useState(false);

 const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 console.log('Home collection request:', formData);
 setSubmitted(true);
 };

 const steps = [
 {
 number: '01',
 title: 'Request',
 description: 'Submit your home collection request online, by phone, or via WhatsApp. Tell us the tests needed and your preferred date and time.',
 icon: HomeIcon,
 color: 'text-guardians-navy',
 bg: 'theme-icon-bg-navy',
 border: 'border-guardians-navy'
 },
 {
 number: '02',
 title: 'Schedule',
 description: 'Our team confirms your appointment and sends a reminder. We coordinate a visit time that works around your schedule.',
 icon: CalendarDaysIcon,
 color: 'text-guardians-cyan',
 bg: 'theme-icon-bg-cyan',
 border: 'border-guardians-cyan'
 },
 {
 number: '03',
 title: 'Sample Collection',
 description: 'A trained phlebotomist or medical professional visits your home or office and collects your samples safely and professionally.',
 icon: BeakerIcon,
 color: 'text-purple-600',
 bg: 'bg-purple-100',
 border: 'border-purple-400'
 },
 {
 number: '04',
 title: 'Laboratory',
 description: 'Your samples are transported immediately to our laboratory and processed with the same quality standards as in-center tests.',
 icon: ShieldCheckIcon,
 color: 'text-green-600',
 bg: 'bg-green-100',
 border: 'border-green-500'
 },
 {
 number: '05',
 title: 'Results',
 description: 'You receive your results via SMS, email, or online portal — exactly the same turnaround time as tests done at our center.',
 icon: DocumentTextIcon,
 color: 'text-guardians-red',
 bg: 'bg-red-100',
 border: 'border-guardians-red'
 }
 ];

 const availableTests = [
 { name: 'Blood Sample Collection', detail: 'CBC, metabolic panel, lipid profile, glucose, and more' },
 { name: 'Urine Sample Collection', detail: 'Complete urinalysis, culture and sensitivity' },
 { name: 'Stool Sample Collection', detail: 'Parasitology, occult blood, culture' },
 { name: 'Throat Swab Collection', detail: 'Bacterial culture, rapid strep testing' },
 { name: 'Health Screening Packages', detail: 'Basic and comprehensive packages at your home' },
 { name: 'COVID-19 Testing', detail: 'PCR and rapid antigen tests available' }
 ];

 const whyChoose = [
 { icon: HomeIcon, title: 'Convenient', description: 'No need to travel to our center — we come to you at home, office, or any location.' },
 { icon: ShieldCheckIcon, title: 'Safe & Hygienic', description: 'Our collectors follow strict hygiene protocols and use sterile, single-use equipment.' },
 { icon: ClockIcon, title: 'Same Turnaround', description: 'Results are delivered in the same timeframe as tests done at our center.' },
 { icon: UserIcon, title: 'Trained Professionals', description: 'All collections are performed by trained, qualified medical professionals.' }
 ];

 const timeSlots = [
 '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
 '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
 ];

 return (
 <div className="theme-bg-background">

 {/* Hero */}
 <section className="relative h-[500px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Home Sample Collection Service"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 Home Sample Collection
 </h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 We come to you. Get your diagnostic tests done at home, office, or any location — safe, convenient, and professional.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href="#request-form"
 className="theme-btn-primary px-8 py-4 rounded-lg flex items-center justify-center theme-shadow-lg"
 >
 <HomeIcon className="h-5 w-5 mr-2" />
 Request Collection
 </a>
 <a
 href="tel:+251911234567"
 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors flex items-center justify-center"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call to Schedule
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* How It Works */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">HOW IT WORKS</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Simple 5-Step Process
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Getting your samples collected at home is easy. Here's exactly what happens from start to finish.
 </p>
 </div>

 {/* Steps — horizontal flow on desktop */}
 <div className="hidden lg:flex items-start justify-between mb-12 relative">
 {/* Connecting line */}
 <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-guardians-cyan/30 z-0"></div>
 {steps.map((step, index) => (
 <div key={index} className="flex flex-col items-center text-center w-1/5 relative z-10">
 <div className={`${step.bg} w-20 h-20 rounded-full flex items-center justify-center mb-4 border-4 border-white theme-shadow-lg`}>
 <step.icon className={`h-9 w-9 ${step.color}`} />
 </div>
 <span className={`text-xs font-black ${step.color} mb-1`}>{step.number}</span>
 <h3 className="font-bold theme-text-primary text-lg mb-2">{step.title}</h3>
 <p className="theme-text-secondary text-sm leading-relaxed px-2">{step.description}</p>
 </div>
 ))}
 </div>

 {/* Steps — vertical on mobile */}
 <div className="lg:hidden space-y-6">
 {steps.map((step, index) => (
 <div key={index} className={`theme-bg-card rounded-2xl p-6 border-l-4 ${step.border} theme-shadow-lg flex items-start space-x-5`}>
 <div className={`${step.bg} p-4 rounded-2xl flex-shrink-0`}>
 <step.icon className={`h-8 w-8 ${step.color}`} />
 </div>
 <div>
 <div className="flex items-center space-x-2 mb-2">
 <span className={`text-xs font-black ${step.color}`}>{step.number}</span>
 <h3 className="font-bold theme-text-primary text-lg">{step.title}</h3>
 </div>
 <p className="theme-text-secondary text-sm leading-relaxed">{step.description}</p>
 </div>
 </div>
 ))}
 </div>

 {/* Flow summary badge */}
 <div className="mt-12 theme-bg-primary rounded-2xl p-6 text-white text-center">
 <p className="font-bold text-lg tracking-wide">
 Request &nbsp;→&nbsp; Schedule &nbsp;→&nbsp; Sample Collection &nbsp;→&nbsp; Laboratory &nbsp;→&nbsp; Results
 </p>
 <p className="text-blue-100 text-sm mt-2">Same quality. Same accuracy. At your convenience.</p>
 </div>
 </div>
 </section>

 {/* Why Choose + Available Tests */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

 {/* Why Choose */}
 <div>
 <span className="theme-text-primary-brand font-semibold text-lg">WHY CHOOSE HOME COLLECTION</span>
 <h2 className="text-3xl font-bold theme-text-primary mb-8 mt-2">
 Convenient, Safe & Reliable
 </h2>
 <div className="space-y-5">
 {whyChoose.map((item, i) => (
 <div key={i} className="theme-bg-card rounded-xl p-5 border-l-4 border-guardians-cyan theme-shadow-md flex items-start space-x-4">
 <div className="theme-icon-bg-cyan p-3 rounded-xl flex-shrink-0">
 <item.icon className="h-5 w-5 theme-icon-cyan" />
 </div>
 <div>
 <h3 className="font-bold theme-text-primary mb-1">{item.title}</h3>
 <p className="theme-text-secondary text-sm">{item.description}</p>
 </div>
 </div>
 ))}
 </div>

 <div className="mt-8 theme-bg-surface rounded-xl p-5 border-l-4 border-guardians-navy theme-shadow-md">
 <div className="flex items-start space-x-3">
 <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
 <div>
 <p className="font-semibold theme-text-primary mb-1">Service Area</p>
 <p className="theme-text-secondary text-sm">
 Home collection is currently available in Addis Ababa. Contact us to confirm availability in your specific area.
 </p>
 <div className="flex items-center space-x-2 mt-2">
 <MapPinIcon className="h-5 w-5 theme-icon-navy" />
 <span className="text-sm theme-text-primary-brand font-medium">Addis Ababa — where available</span>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Available Tests */}
 <div>
 <span className="theme-text-primary-brand font-semibold text-lg">AVAILABLE TESTS</span>
 <h2 className="text-3xl font-bold theme-text-primary mb-8 mt-2">
 What We Can Collect at Home
 </h2>
 <div className="space-y-4">
 {availableTests.map((test, i) => (
 <div key={i} className="theme-bg-card rounded-xl p-4 border-l-4 border-guardians-navy theme-shadow-md">
 <div className="flex items-start space-x-3">
 <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
 <div>
 <p className="font-semibold theme-text-primary">{test.name}</p>
 <p className="text-sm theme-text-secondary mt-0.5">{test.detail}</p>
 </div>
 </div>
 </div>
 ))}
 </div>

 <div className="mt-6 theme-icon-bg-navy rounded-xl p-4 border-l-4 border-guardians-cyan">
 <p className="theme-text-secondary text-sm">
 <span className="font-semibold theme-text-primary">Note:</span> Additional charges apply for home collection on top of individual test costs. Specific preparation instructions will be provided when you book.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Request Form */}
 <section id="request-form" className="py-20 theme-bg-surface">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="theme-text-primary-brand font-semibold text-lg">SUBMIT A REQUEST</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Request Home Sample Collection
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Fill in the form below and our team will confirm your appointment within a few hours.
 </p>
 </div>

 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-navy">
 {submitted ? (
 <div className="text-center py-12">
 <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
 <CheckCircleIcon className="h-10 w-10 text-green-600" />
 </div>
 <h3 className="text-2xl font-bold theme-text-primary mb-3">Request Submitted!</h3>
 <p className="theme-text-secondary mb-6 max-w-md mx-auto">
 Thank you! Our team will contact you within a few hours to confirm your home collection appointment.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <button
 onClick={() => setSubmitted(false)}
 className="theme-btn-primary px-6 py-3 rounded-lg font-semibold"
 >
 Submit Another Request
 </button>
 <Link to="/" className="theme-bg-surface theme-text-secondary px-6 py-3 rounded-lg theme-hover transition-colors font-medium text-center">
 Back to Home
 </Link>
 </div>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Full Name *</label>
 <input
 type="text" name="fullName" required
 value={formData.fullName} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="Your full name"
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

 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Email Address</label>
 <input
 type="email" name="email"
 value={formData.email} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="your.email@example.com (optional)"
 />
 </div>

 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Collection Address *</label>
 <input
 type="text" name="address" required
 value={formData.address} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="Your home or office address in Addis Ababa"
 />
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Preferred Date *</label>
 <input
 type="date" name="preferredDate" required
 min={new Date().toISOString().split('T')[0]}
 value={formData.preferredDate} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 />
 </div>
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Preferred Time *</label>
 <select
 name="preferredTime" required
 value={formData.preferredTime} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 >
 <option value="">Select time</option>
 {timeSlots.map((time) => (
 <option key={time} value={time}>{time}</option>
 ))}
 </select>
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Test / Service Needed *</label>
 <select
 name="testType" required
 value={formData.testType} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 >
 <option value="">Select test or service</option>
 <option value="blood">Blood Sample Collection</option>
 <option value="urine">Urine Sample Collection</option>
 <option value="stool">Stool Sample Collection</option>
 <option value="swab">Throat Swab Collection</option>
 <option value="covid">COVID-19 Testing</option>
 <option value="screening-basic">Basic Health Screening Package</option>
 <option value="screening-comprehensive">Comprehensive Health Screening Package</option>
 <option value="multiple">Multiple Tests</option>
 <option value="other">Other — describe below</option>
 </select>
 </div>

 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">Additional Notes</label>
 <textarea
 name="message" rows={4}
 value={formData.message} onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="Any special instructions, specific tests needed, health conditions, or questions..."
 ></textarea>
 </div>

 <div className="theme-bg-surface rounded-xl p-4 border-l-4 border-guardians-cyan">
 <div className="flex items-start space-x-3">
 <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
 <p className="text-sm theme-text-secondary">
 <span className="font-semibold theme-text-primary">Please note:</span> This is a collection request. Our team will confirm availability and provide preparation instructions before your appointment.
 </p>
 </div>
 </div>

 <button type="submit" className="w-full theme-btn-primary px-8 py-4 rounded-lg font-semibold theme-shadow-lg text-lg">
 Submit Collection Request
 </button>
 </form>
 )}
 </div>
 </div>
 </section>

 {/* Quick contact CTA */}
 <section className="py-16 theme-bg-primary">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl font-bold text-white mb-4">
 Prefer to Call or WhatsApp?
 </h2>
 <p className="text-blue-100 text-lg mb-8">
 Our team is available daily from 7:00 AM to 6:00 PM to schedule your home collection.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href="tel:+251911234567"
 className="bg-white theme-text-primary-brand font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center theme-shadow-lg"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call: +251 911 234 567
 </a>
 <a
 href="https://wa.me/251911234567"
 className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center theme-shadow-lg"
 >
 WhatsApp Us
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </a>
 </div>
 </div>
 </section>

 </div>
 );
};

export default HomeCollection;
