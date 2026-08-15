import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 MapPinIcon, 
 PhoneIcon, 
 EnvelopeIcon, 
 ClockIcon,
 CalendarDaysIcon,
 ArrowRightIcon,
 ChatBubbleLeftRightIcon,
 HomeIcon,
 CheckCircleIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phone: '',
 subject: '',
 message: '',
 serviceType: ''
 });

 const handleChange = (e) => {
 setFormData({
 ...formData,
 [e.target.name]: e.target.value
 });
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 // Handle form submission logic here
 console.log('Form submitted:', formData);
 alert('Thank you for your message! We will contact you soon.');
 };

 const contactInfo = [
 {
 icon: MapPinIcon,
 title: 'Visit Us',
 details: [
 'Bole Sub-City, Addis Ababa',
 'Near Bole International Airport',
 'Ethiopia'
 ],
 actionText: 'Get Directions',
 actionLink: 'https://maps.google.com'
 },
 {
 icon: PhoneIcon,
 title: 'Call Us',
 details: [
 'Main: +251 11 123 4567',
 'Mobile: +251 911 234 567',
 'Emergency: +251 911 000 911'
 ],
 actionText: 'Call Now',
 actionLink: 'tel:+251911234567'
 },
 {
 icon: EnvelopeIcon,
 title: 'Email Us',
 details: [
 'info@guardians-diagnostic.com',
 'appointments@guardians-diagnostic.com',
 'corporate@guardians-diagnostic.com'
 ],
 actionText: 'Send Email',
 actionLink: 'mailto:info@guardians-diagnostic.com'
 },
 {
 icon: ClockIcon,
 title: 'Working Hours',
 details: [
 'Monday - Friday: 7:00 AM - 8:00 PM',
 'Saturday: 8:00 AM - 6:00 PM',
 'Sunday: 9:00 AM - 2:00 PM'
 ],
 actionText: 'Book Appointment',
 actionLink: '/appointment'
 }
 ];

 const quickActions = [
 {
 icon: CalendarDaysIcon,
 title: 'Book Appointment',
 description: 'Schedule your visit online',
 link: '/appointment',
 color: 'bg-guardians-navy hover:bg-blue-900'
 },
 {
 icon: ChatBubbleLeftRightIcon,
 title: 'WhatsApp Chat',
 description: 'Chat with us instantly',
 link: 'https://wa.me/251911234567',
 color: 'bg-green-500 hover:bg-green-600'
 },
 {
 icon: HomeIcon,
 title: 'Home Collection',
 description: 'Request sample pickup',
 link: '/home-collection',
 color: 'bg-purple-500 hover:bg-purple-600'
 },
 {
 icon: ArrowRightIcon,
 title: 'Get Directions',
 description: 'Find us on the map',
 link: 'https://maps.google.com',
 color: 'bg-guardians-cyan hover:bg-cyan-600'
 }
 ];

 const departments = [
 {
 name: 'General Inquiries',
 email: 'info@guardians-diagnostic.com',
 phone: '+251 11 123 4567',
 description: 'General questions and information'
 },
 {
 name: 'Appointments',
 email: 'appointments@guardians-diagnostic.com',
 phone: '+251 911 234 567',
 description: 'Schedule and manage appointments'
 },
 {
 name: 'Corporate Services',
 email: 'corporate@guardians-diagnostic.com',
 phone: '+251 11 123 4568',
 description: 'Business and corporate health programs'
 },
 {
 name: 'Results & Reports',
 email: 'results@guardians-diagnostic.com',
 phone: '+251 911 234 568',
 description: 'Test results and medical reports'
 }
 ];

 const faqs = [
 {
 question: 'How do I book an appointment?',
 answer: 'You can book an appointment online through our website, call us, or use WhatsApp. Online booking is available 24/7.'
 },
 {
 question: 'When will I get my test results?',
 answer: 'Most results are available within 24-48 hours. Complex tests may take longer. You will be notified when results are ready.'
 },
 {
 question: 'Do you offer home collection services?',
 answer: 'Yes, we provide home collection services for blood, urine, and other sample types. Additional charges may apply.'
 },
 {
 question: 'What should I bring for my appointment?',
 answer: 'Please bring a valid ID, insurance card (if applicable), and any previous medical records or doctor referrals.'
 }
 ];

 return (
 <div className="theme-bg-background">
 {/* Hero Section */}
 <section className="relative h-[400px] overflow-hidden">
 <img
 src="https://alokamedicare.in/wp-content/uploads/2022/02/Diagnostic-Centre-near-Lansdowne-Kolkata.jpg"
 alt="Contact Guardians Diagnostic Center"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 Contact Us
 </h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Get in touch with our friendly team. We're here to help with appointments, questions, and all your healthcare needs.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Quick Actions */}
 <section className="relative -mt-16 z-10">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {quickActions.map((action, index) => (
 <Link
 key={index}
 to={action.link}
 className={`${action.color} text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group`}
 >
 <div className="flex items-center space-x-4">
 <action.icon className="h-8 w-8" />
 <div>
 <h3 className="font-bold text-lg">{action.title}</h3>
 <p className="text-sm opacity-90">{action.description}</p>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Contact Information */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">GET IN TOUCH</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 How to Reach Us
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Multiple ways to connect with us. Choose the method that works best for you.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {contactInfo.map((info, index) => (
 <div key={index} className="theme-bg-surface rounded-2xl p-6 text-center hover:theme-shadow-lg transition-all duration-300 border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className="theme-icon-bg-navy w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
 <info.icon className="h-8 w-8 theme-icon-navy" />
 </div>
 <h3 className="text-xl font-bold theme-text-primary mb-4">{info.title}</h3>
 <div className="space-y-2 mb-6">
 {info.details.map((detail, detailIndex) => (
 <p key={detailIndex} className="theme-text-secondary text-sm">{detail}</p>
 ))}
 </div>
 <Link
 to={info.actionLink}
 className="theme-btn-primary px-4 py-2 rounded-lg text-sm font-medium theme-shadow-lg"
 >
 {info.actionText}
 </Link>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Contact Form and Map */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Contact Form */}
 <div className="theme-bg-card rounded-2xl p-8 theme-shadow-xl border-l-4 border-guardians-cyan">
 <h3 className="text-2xl font-bold theme-text-primary mb-6">Send us a Message</h3>
 <form onSubmit={handleSubmit} className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label htmlFor="name" className="block text-sm font-medium theme-text-secondary mb-2">
 Full Name *
 </label>
 <input
 type="text"
 id="name"
 name="name"
 required
 value={formData.name}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-bg-background theme-text-primary"
 placeholder="Enter your full name"
 />
 </div>
 <div>
 <label htmlFor="phone" className="block text-sm font-medium theme-text-secondary mb-2">
 Phone Number
 </label>
 <input
 type="tel"
 id="phone"
 name="phone"
 value={formData.phone}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-bg-background theme-text-primary"
 placeholder="+251 911 234 567"
 />
 </div>
 </div>

 <div>
 <label htmlFor="email" className="block text-sm font-medium theme-text-secondary mb-2">
 Email Address *
 </label>
 <input
 type="email"
 id="email"
 name="email"
 required
 value={formData.email}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-bg-background theme-text-primary"
 placeholder="your.email@example.com"
 />
 </div>

 <div>
 <label htmlFor="serviceType" className="block text-sm font-medium theme-text-secondary mb-2">
 Service Type
 </label>
 <select
 id="serviceType"
 name="serviceType"
 value={formData.serviceType}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-bg-background theme-text-primary"
 >
 <option value="">Select a service</option>
 <option value="general">General Inquiry</option>
 <option value="appointment">Appointment Booking</option>
 <option value="lab">Laboratory Services</option>
 <option value="imaging">Diagnostic Imaging</option>
 <option value="corporate">Corporate Services</option>
 <option value="home-collection">Home Collection</option>
 <option value="results">Test Results</option>
 <option value="other">Other</option>
 </select>
 </div>

 <div>
 <label htmlFor="subject" className="block text-sm font-medium theme-text-secondary mb-2">
 Subject *
 </label>
 <input
 type="text"
 id="subject"
 name="subject"
 required
 value={formData.subject}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-bg-background theme-text-primary"
 placeholder="Brief description of your inquiry"
 />
 </div>

 <div>
 <label htmlFor="message" className="block text-sm font-medium theme-text-secondary mb-2">
 Message *
 </label>
 <textarea
 id="message"
 name="message"
 required
 rows={5}
 value={formData.message}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-bg-background theme-text-primary"
 placeholder="Please provide more details about your inquiry"
 ></textarea>
 </div>

 <button
 type="submit"
 className="w-full theme-btn-primary px-8 py-4 rounded-lg theme-shadow-lg"
 >
 Send Message
 </button>
 </form>
 </div>

 {/* Map and Location Info */}
 <div>
 {/* Map embed + real Google Maps link */}
 <div className="theme-bg-card rounded-2xl p-8 theme-shadow-xl mb-8 border-l-4 border-guardians-navy">
 <h3 className="text-2xl font-bold theme-text-primary mb-6">Our Location</h3>
 {/* Google Maps embed */}
 <div className="rounded-lg overflow-hidden h-64 mb-6">
 <iframe
 title="Guardians Diagnostic Center"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7969!3d9.0154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNTUuNCJOIDM4wrA0Nyc0OS4wIkU!5e0!3m2!1sen!2set!4v1234567890"
 width="100%"
 height="100%"
 style={{ border: 0 }}
 allowFullScreen=""
 loading="lazy"
 ></iframe>
 </div>
 <div className="space-y-3">
 <div className="flex items-start space-x-3">
 <MapPinIcon className="h-5 w-5 theme-icon-navy mt-1 flex-shrink-0" />
 <div>
 <p className="font-medium theme-text-primary">Address</p>
 <p className="theme-text-secondary text-sm">Bole Sub-City, Near Bole International Airport, Addis Ababa, Ethiopia</p>
 </div>
 </div>
 <div className="flex items-start space-x-3">
 <PhoneIcon className="h-5 w-5 theme-icon-navy mt-1 flex-shrink-0" />
 <div>
 <p className="font-medium theme-text-primary">Parking</p>
 <p className="theme-text-secondary text-sm">Free parking available for patients and visitors</p>
 </div>
 </div>
 <div className="flex items-start space-x-3">
 <ClockIcon className="h-5 w-5 theme-icon-navy mt-1 flex-shrink-0" />
 <div>
 <p className="font-medium theme-text-primary">Accessibility</p>
 <p className="theme-text-secondary text-sm">Wheelchair accessible with elevator access to all floors</p>
 </div>
 </div>
 </div>

 {/* Social Media Links */}
 <div className="mt-6 pt-6 theme-border border-t">
 <p className="font-semibold theme-text-primary mb-4">Follow Us</p>
 <div className="flex flex-wrap gap-3">
 {[
 { name: 'Facebook', href: 'https://facebook.com/guardiansDiagnostic', bg: 'bg-blue-600', label: 'f' },
 { name: 'Instagram', href: 'https://instagram.com/guardiansDiagnostic', bg: 'bg-pink-500', label: 'ig' },
 { name: 'LinkedIn', href: 'https://linkedin.com/company/guardiansDiagnostic', bg: 'bg-blue-700', label: 'in' },
 { name: 'Telegram', href: 'https://t.me/guardiansDiagnostic', bg: 'bg-sky-500', label: 'tg' },
 { name: 'YouTube', href: 'https://youtube.com/@guardiansDiagnostic', bg: 'bg-red-600', label: 'yt' }
 ].map((social, i) => (
 <a
 key={i}
 href={social.href}
 target="_blank"
 rel="noopener noreferrer"
 className={`${social.bg} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center space-x-1`}
 >
 <span className="uppercase text-xs font-black">{social.label}</span>
 <span>{social.name}</span>
 </a>
 ))}
 </div>
 </div>
 </div>

 {/* Emergency Contact */}
 <div className="bg-red-600 rounded-2xl p-6 text-white border-l-4 border-red-700">
 <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
 <p className="mb-4">For urgent medical situations requiring immediate diagnostic services:</p>
 <a
 href="tel:+251911000911"
 className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors inline-flex items-center theme-shadow-lg"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call Emergency: +251 911 000 911
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Departments */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">DEPARTMENTS</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Direct Department Contact
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Contact the right department directly for faster service and specialized assistance.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {departments.map((dept, index) => (
 <div key={index} className="theme-bg-surface rounded-2xl p-6 border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">
 <h3 className="text-xl font-bold theme-text-primary mb-2">{dept.name}</h3>
 <p className="theme-text-secondary mb-4">{dept.description}</p>
 <div className="space-y-2">
 <div className="flex items-center space-x-2">
 <EnvelopeIcon className="h-5 w-5 theme-icon-navy" />
 <a href={`mailto:${dept.email}`} className="theme-text-primary-brand hover:underline text-sm">
 {dept.email}
 </a>
 </div>
 <div className="flex items-center space-x-2">
 <PhoneIcon className="h-5 w-5 theme-icon-navy" />
 <a href={`tel:${dept.phone}`} className="theme-text-primary-brand hover:underline text-sm">
 {dept.phone}
 </a>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">FREQUENTLY ASKED</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Common Questions
 </h2>
 <p className="theme-text-secondary">
 Find quick answers to commonly asked questions about our services.
 </p>
 </div>

 <div className="space-y-6">
 {faqs.map((faq, index) => (
 <div key={index} className="theme-bg-card rounded-2xl p-6 theme-shadow-lg border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">
 <h3 className="text-lg font-bold theme-text-primary mb-3">{faq.question}</h3>
 <p className="theme-text-secondary leading-relaxed">{faq.answer}</p>
 </div>
 ))}
 </div>

 <div className="text-center mt-12">
 <Link
 to="/faq"
 className="theme-btn-primary px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg"
 >
 View All FAQs
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Contact;