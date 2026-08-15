import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
 CalendarDaysIcon,
 ClockIcon,
 PhoneIcon,
 CheckCircleIcon,
 ExclamationTriangleIcon,
 BeakerIcon,
 CameraIcon,
 SpeakerWaveIcon,
 HeartIcon,
 UserIcon,
 ShieldCheckIcon,
 ArrowRightIcon
} from '@heroicons/react/24/outline';

const Appointment = () => {
 const [formData, setFormData] = useState({
 fullName: '',
 phone: '',
 email: '',
 requestedService: '',
 preferredDate: '',
 preferredTime: '',
 message: ''
 });
 const [submitted, setSubmitted] = useState(false);

 const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 console.log('Appointment request:', formData);
 setSubmitted(true);
 };

 const services = [
 { id: 'lab', name: 'Laboratory Services', icon: BeakerIcon },
 { id: 'xray', name: 'Digital X-Ray', icon: CameraIcon },
 { id: 'ultrasound', name: 'Ultrasound', icon: SpeakerWaveIcon },
 { id: 'ecg', name: 'ECG Services', icon: HeartIcon },
 { id: 'consultation', name: 'General Consultation', icon: UserIcon },
 { id: 'screening-basic', name: 'Basic Health Screening', icon: ShieldCheckIcon },
 { id: 'screening-comprehensive', name: 'Comprehensive Health Screening', icon: ShieldCheckIcon },
 { id: 'pre-employment', name: 'Pre-Employment Screening', icon: ShieldCheckIcon },
 { id: 'employee', name: 'Employee Health Screening', icon: ShieldCheckIcon },
 { id: 'home-collection', name: 'Home Sample Collection', icon: CheckCircleIcon },
 { id: 'other', name: 'Other / Not Sure', icon: CalendarDaysIcon }
 ];

 const timeSlots = [
 '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
 '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
 '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
 '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
 '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
 ];

 const whyBook = [
 { icon: CalendarDaysIcon, title: 'Flexible Scheduling', desc: 'Choose your preferred date and time. We will confirm within 24 hours.' },
 { icon: ClockIcon, title: 'Fast Confirmation', desc: 'Our team contacts you quickly to confirm your appointment details.' },
 { icon: PhoneIcon, title: 'Easy to Reach', desc: 'Prefer to call? Our team is available Mon–Sat, 7 AM – 8 PM.' },
 { icon: CheckCircleIcon, title: 'No Commitment', desc: 'This is a request. You are only confirmed once our team reaches you.' }
 ];

 return (
 <div className="theme-bg-background">

 {/* Hero */}
 <section className="relative h-[400px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Book Your Appointment at Guardians Diagnostic Center"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 Book an Appointment
 </h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Request your appointment online. Fill in the short form below and our team will contact you to confirm.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Main content */}
 <section className="py-16 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

 {/* Left — why book + contact info */}
 <div className="lg:col-span-1 space-y-6">
 <div>
 <span className="theme-text-primary-brand font-semibold text-lg">HOW IT WORKS</span>
 <h2 className="text-2xl font-bold theme-text-primary mb-4 mt-2">
 Easy Online Booking
 </h2>
 <div className="space-y-4">
 {whyBook.map((item, i) => (
 <div key={i} className="theme-bg-card rounded-xl p-4 border-l-4 border-guardians-cyan theme-shadow-md flex items-start space-x-4">
 <div className="theme-icon-bg-cyan p-2 rounded-lg flex-shrink-0">
 <item.icon className="h-5 w-5 theme-icon-cyan" />
 </div>
 <div>
 <p className="font-bold theme-text-primary text-sm">{item.title}</p>
 <p className="theme-text-secondary text-sm">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Alternative contact */}
 <div className="theme-bg-card rounded-xl p-6 border-l-4 border-guardians-navy theme-shadow-lg">
 <h3 className="font-bold theme-text-primary mb-4">Prefer to Call?</h3>
 <div className="space-y-3">
 <a href="tel:+251911234567" className="flex items-center space-x-3 theme-text-primary hover:theme-text-primary-brand transition-colors">
 <PhoneIcon className="h-5 w-5 theme-icon-navy flex-shrink-0" />
 <span className="font-semibold">+251 911 234 567</span>
 </a>
 <a href="https://wa.me/251911234567" className="flex items-center space-x-3 text-green-600 hover:text-green-700 transition-colors">
 <PhoneIcon className="h-5 w-5 flex-shrink-0" />
 <span className="font-semibold">WhatsApp Us</span>
 </a>
 <p className="text-sm theme-text-muted">Available Mon–Sat, 7:00 AM – 8:00 PM</p>
 </div>
 </div>

 {/* Links to services */}
 <div className="theme-bg-card rounded-xl p-5 border-l-4 border-guardians-cyan theme-shadow-md">
 <h3 className="font-bold theme-text-primary mb-3">Not sure which service?</h3>
 <p className="theme-text-secondary text-sm mb-4">Browse our services to find what you need, then come back to book.</p>
 <Link to="/services" className="theme-text-primary-brand font-semibold text-sm inline-flex items-center hover:opacity-80">
 View All Services <ArrowRightIcon className="h-4 w-4 ml-1" />
 </Link>
 </div>
 </div>

 {/* Right — Appointment Form */}
 <div className="lg:col-span-2">
 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-navy">

 {submitted ? (
 <div className="text-center py-12">
 <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
 <CheckCircleIcon className="h-10 w-10 text-green-600" />
 </div>
 <h3 className="text-2xl font-bold theme-text-primary mb-3">Request Submitted!</h3>
 <p className="theme-text-secondary mb-2 max-w-md mx-auto">
 Thank you, <strong className="theme-text-primary">{formData.fullName}</strong>. We have received your appointment request.
 </p>
 <p className="theme-text-secondary mb-8 max-w-md mx-auto">
 Our team will contact you at <strong className="theme-text-primary">{formData.phone}</strong> within 24 hours to confirm your appointment.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <button
 onClick={() => { setSubmitted(false); setFormData({ fullName: '', phone: '', email: '', requestedService: '', preferredDate: '', preferredTime: '', message: '' }); }}
 className="theme-btn-primary px-6 py-3 rounded-lg font-semibold"
 >
 Book Another Appointment
 </button>
 <Link to="/" className="theme-bg-surface theme-text-secondary px-6 py-3 rounded-lg theme-hover transition-colors font-medium text-center">
 Back to Home
 </Link>
 </div>
 </div>
 ) : (
 <>
 <div className="mb-8">
 <h2 className="text-2xl font-bold theme-text-primary mb-2">Appointment Request</h2>
 <p className="theme-text-secondary">Fill in your details below. All fields marked * are required.</p>
 </div>

 <form onSubmit={handleSubmit} className="space-y-6">

 {/* Full Name */}
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">
 Full Name *
 </label>
 <input
 type="text"
 name="fullName"
 required
 value={formData.fullName}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="Enter your full name"
 />
 </div>

 {/* Phone + Email */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">
 Phone Number *
 </label>
 <input
 type="tel"
 name="phone"
 required
 value={formData.phone}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="+251 911 234 567"
 />
 </div>
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">
 Email Address
 <span className="theme-text-muted font-normal ml-1">(if available)</span>
 </label>
 <input
 type="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="your.email@example.com"
 />
 </div>
 </div>

 {/* Requested Service */}
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">
 Requested Service *
 </label>
 <select
 name="requestedService"
 required
 value={formData.requestedService}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 >
 <option value="">Select the service you need</option>
 {services.map((service) => (
 <option key={service.id} value={service.id}>
 {service.name}
 </option>
 ))}
 </select>
 </div>

 {/* Preferred Date + Time */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">
 Preferred Date *
 </label>
 <input
 type="date"
 name="preferredDate"
 required
 min={new Date().toISOString().split('T')[0]}
 value={formData.preferredDate}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 />
 </div>
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">
 Preferred Time *
 </label>
 <select
 name="preferredTime"
 required
 value={formData.preferredTime}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 >
 <option value="">Select a time</option>
 {timeSlots.map((time) => (
 <option key={time} value={time}>{time}</option>
 ))}
 </select>
 </div>
 </div>

 {/* Additional Message */}
 <div>
 <label className="block text-sm font-medium theme-text-primary mb-2">
 Additional Message
 </label>
 <textarea
 name="message"
 rows={4}
 value={formData.message}
 onChange={handleChange}
 className="w-full px-4 py-3 theme-border border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 placeholder="Any additional information, questions, or special requests..."
 ></textarea>
 </div>

 {/* Note */}
 <div className="theme-icon-bg-navy border-l-4 border-guardians-cyan rounded-lg p-4">
 <div className="flex items-start space-x-3">
 <ExclamationTriangleIcon className="h-5 w-5 theme-icon-navy mt-0.5 flex-shrink-0" />
 <div className="text-sm">
 <p className="font-semibold theme-text-primary mb-1">Please Note</p>
 <p className="theme-text-secondary">
 This is an appointment <strong>request</strong>. Our team will contact you within 24 hours to confirm availability and provide any necessary preparation instructions. The appointment is only confirmed once you receive our call or message.
 </p>
 </div>
 </div>
 </div>

 <button
 type="submit"
 className="w-full theme-btn-primary px-8 py-4 rounded-lg font-semibold theme-shadow-lg text-lg"
 >
 Submit Appointment Request
 </button>
 </form>
 </>
 )}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Contact CTA */}
 <section className="py-16 theme-bg-primary">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl font-bold text-white mb-4">
 Need Help with Your Appointment?
 </h2>
 <p className="text-blue-100 text-lg mb-8">
 Our friendly team is ready to assist you. Call, WhatsApp, or visit us directly.
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

export default Appointment;
