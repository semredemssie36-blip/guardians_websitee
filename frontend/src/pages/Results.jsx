import { Link } from 'react-router-dom';
import {
 DocumentTextIcon,
 PhoneIcon,
 EnvelopeIcon,
 ClockIcon,
 CheckCircleIcon,
 ShieldCheckIcon,
 ArrowRightIcon,
 ArrowDownTrayIcon,
 MapPinIcon,
 InformationCircleIcon,
 LockClosedIcon,
 CalendarDaysIcon
} from '@heroicons/react/24/outline';

const Results = () => {

 const howToReceive = [
 {
 method: 'Visit Our Center',
 icon: MapPinIcon,
 border: 'border-guardians-navy',
 iconBg: 'theme-icon-bg-navy',
 iconColor: 'text-guardians-navy',
 description: 'Collect your printed results in person at our center during working hours.',
 steps: [
 'Visit Guardians Diagnostic Center in Bole Sub-City, Addis Ababa',
 'Present your valid government-issued photo ID at reception',
 'Our team will retrieve and hand you your printed results',
 'A doctor is available to explain your results if needed'
 ],
 hours: 'Mon–Fri: 7 AM – 8 PM | Sat: 8 AM – 6 PM | Sun: 9 AM – 2 PM'
 },
 {
 method: 'SMS Notification',
 icon: PhoneIcon,
 border: 'border-guardians-cyan',
 iconBg: 'theme-icon-bg-cyan',
 iconColor: 'text-guardians-cyan',
 description: 'We will send you an SMS to let you know when your results are ready for collection.',
 steps: [
 'Provide your phone number when booking your appointment',
 'We will send you an SMS as soon as your results are ready',
 'Come to our center with your ID to collect your report',
 'You can also call us to confirm before visiting'
 ],
 hours: 'Notifications sent during business hours'
 },
 {
 method: 'Phone Call',
 icon: PhoneIcon,
 border: 'border-guardians-navy',
 iconBg: 'theme-icon-bg-navy',
 iconColor: 'text-guardians-navy',
 description: 'Our team will call you when your results are ready, or you can call us to check.',
 steps: [
 'We will call the phone number you provided at registration',
 'You can also call us directly to check if your results are ready',
 'Our team can advise on next steps over the phone',
 'Visit our center to collect the physical report'
 ],
 hours: 'Call us: +251 911 234 567 or +251 11 123 4567'
 },
 {
 method: 'Sent to Your Doctor',
 icon: DocumentTextIcon,
 border: 'border-guardians-cyan',
 iconBg: 'theme-icon-bg-cyan',
 iconColor: 'text-guardians-cyan',
 description: 'If you were referred by a doctor, we can send your results directly to them.',
 steps: [
 'Inform us at booking that you have a referring doctor',
 'Provide your doctor\'s name, facility, and contact details',
 'We will send a copy of your results directly to your physician',
 'You can still collect your own copy from our center'
 ],
 hours: 'Coordination available during business hours'
 }
 ];

 const resultTimelines = [
 { testType: 'Routine Blood Tests (CBC, glucose, etc.)', time: '4–24 hours', color: 'text-green-600', bg: 'bg-green-100' },
 { testType: 'Lipid Profile & Metabolic Panels', time: '24 hours', color: 'text-green-600', bg: 'bg-green-100' },
 { testType: 'Digital X-Ray Reports', time: '1–24 hours', color: 'text-blue-600', bg: 'bg-blue-100' },
 { testType: 'Ultrasound Reports', time: '24 hours', color: 'text-blue-600', bg: 'bg-blue-100' },
 { testType: 'ECG Reports', time: '30–60 minutes', color: 'text-purple-600', bg: 'bg-purple-100' },
 { testType: 'Microbiology & Culture Tests', time: '2–5 business days', color: 'text-orange-600', bg: 'bg-orange-100' },
 { testType: 'Specialized Lab Tests', time: '2–5 business days', color: 'text-orange-600', bg: 'bg-orange-100' },
 { testType: 'Health Screening Packages', time: '24–48 hours', color: 'text-blue-600', bg: 'bg-blue-100' }
 ];

 return (
 <div className="theme-bg-background">

 {/* Hero */}
 <section className="relative h-[400px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Test Results — Guardians Diagnostic Center"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">Test Results</h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Find out how and when to receive your test results from Guardians Diagnostic Center.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Key notice — what this page is */}
 <section className="py-8 theme-bg-surface theme-border border-b">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-start space-x-4 theme-bg-card rounded-xl p-5 border-l-4 border-guardians-cyan theme-shadow-md">
 <InformationCircleIcon className="h-5 w-5 theme-icon-cyan mt-0.5 flex-shrink-0" />
 <div>
 <p className="font-semibold theme-text-primary mb-1">How Results Work at Guardians</p>
 <p className="theme-text-secondary text-sm leading-relaxed">
 This page explains how you can receive or access your test results. We will notify you when your results are ready and guide you through collection. A secure online results portal will be available in a future phase, integrated with our operational system.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Result timelines */}
 <section className="py-16 theme-bg-background">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="theme-text-primary-brand font-semibold text-lg">RESULT TIMELINES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 When Will Your Results Be Ready?
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Turnaround times vary by test type. You will always be informed of the expected timeline when you book.
 </p>
 </div>

 <div className="theme-bg-card rounded-2xl theme-shadow-xl overflow-hidden border-l-4 border-guardians-navy">
 <div className="theme-bg-primary px-6 py-4">
 <div className="grid grid-cols-2 gap-4">
 <p className="font-bold text-white">Test Type</p>
 <p className="font-bold text-white">Typical Turnaround</p>
 </div>
 </div>
 <div className="divide-y theme-border">
 {resultTimelines.map((item, i) => (
 <div key={i} className="grid grid-cols-2 gap-4 px-6 py-4 theme-hover transition-colors">
 <div className="flex items-center space-x-3">
 <ClockIcon className="h-4 w-4 theme-text-muted flex-shrink-0" />
 <span className="text-sm theme-text-primary">{item.testType}</span>
 </div>
 <div>
 <span className={`${item.bg} ${item.color} text-xs font-bold px-3 py-1 rounded-full`}>
 {item.time}
 </span>
 </div>
 </div>
 ))}
 </div>
 <div className="px-6 py-4 theme-bg-surface">
 <p className="text-sm theme-text-muted flex items-start space-x-2">
 <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
 <span>You will be notified by SMS or phone when your specific results are ready. Turnaround may vary for urgent or complex tests.</span>
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* How to receive results */}
 <section className="py-16 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">HOW TO GET YOUR RESULTS</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Ways to Receive Your Results
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 We offer several convenient ways to receive your diagnostic results. Choose the method that works best for you.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {howToReceive.map((method, i) => (
 <div key={i} className={`theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 ${method.border} hover:theme-shadow-2xl transition-all duration-300`}>
 <div className="flex items-center space-x-4 mb-5">
 <div className={`${method.iconBg} p-4 rounded-2xl`}>
 <method.icon className={`h-8 w-8 ${method.iconColor}`} />
 </div>
 <h3 className="text-xl font-bold theme-text-primary">{method.method}</h3>
 </div>
 <p className="theme-text-secondary mb-5">{method.description}</p>
 <ul className="space-y-3 mb-5">
 {method.steps.map((step, si) => (
 <li key={si} className="flex items-start space-x-3">
 <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
 <span className="text-sm theme-text-secondary">{step}</span>
 </li>
 ))}
 </ul>
 <div className="theme-bg-surface rounded-lg px-4 py-2">
 <p className="text-xs theme-text-muted">{method.hours}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Important rules */}
 <section className="py-16 theme-bg-background">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="theme-text-primary-brand font-semibold text-lg">IMPORTANT TO KNOW</span>
 <h2 className="text-3xl font-bold theme-text-primary mb-4 mt-2">
 Result Collection Rules
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {[
 { icon: ShieldCheckIcon, title: 'ID Required', desc: 'You must present a valid government-issued photo ID to collect your results in person. No exceptions.', border: 'border-guardians-navy' },
 { icon: DocumentTextIcon, title: 'Authorized Collection', desc: 'A trusted person can collect on your behalf only with your written authorization and their own valid ID.', border: 'border-guardians-cyan' },
 { icon: LockClosedIcon, title: 'Confidential', desc: 'Your results are confidential. We will not share them with anyone without your explicit consent.', border: 'border-guardians-navy' },
 { icon: ClockIcon, title: 'Storage Period', desc: 'All results are securely stored for a minimum of 7 years. You can request older results at any time.', border: 'border-guardians-cyan' }
 ].map((item, i) => (
 <div key={i} className={`theme-bg-card rounded-xl p-5 border-l-4 ${item.border} theme-shadow-md flex items-start space-x-4`}>
 <div className="theme-icon-bg-navy p-3 rounded-xl flex-shrink-0">
 <item.icon className="h-6 w-6 theme-icon-navy" />
 </div>
 <div>
 <p className="font-bold theme-text-primary mb-1">{item.title}</p>
 <p className="text-sm theme-text-secondary">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Future phase — online portal */}
 <section className="py-16 theme-bg-surface">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-card rounded-2xl p-8 border-l-4 border-orange-400 theme-shadow-xl">
 <div className="flex items-start space-x-5">
 <div className="bg-orange-100 p-4 rounded-2xl flex-shrink-0">
 <LockClosedIcon className="h-8 w-8 text-orange-600" />
 </div>
 <div className="flex-1">
 <div className="flex items-center space-x-3 mb-3 flex-wrap gap-2">
 <h3 className="text-xl font-bold theme-text-primary">Secure Online Results Portal</h3>
 <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">Coming in a Future Phase</span>
 </div>
 <p className="theme-text-secondary leading-relaxed mb-4">
 Guardians is planning a secure online patient results portal that will allow you to access, view, and download your test results directly from our website — available 24/7 from anywhere.
 </p>
 <p className="theme-text-secondary text-sm leading-relaxed mb-6">
 This portal will be integrated with our existing operational systems, ensuring results are accurate, up-to-date, and securely delivered. It is planned for a future development phase as Guardians grows.
 </p>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
 {[
 'View results 24/7 online',
 'Download PDF reports',
 'Share with your doctor digitally',
 ].map((feature, i) => (
 <div key={i} className="flex items-center space-x-2">
 <CheckCircleIcon className="h-4 w-4 text-orange-500 flex-shrink-0" />
 <span className="text-sm theme-text-secondary">{feature}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Help CTA */}
 <section className="py-16 theme-bg-primary">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl font-bold text-white mb-4">
 Questions About Your Results?
 </h2>
 <p className="text-blue-100 text-lg mb-8">
 Our team is available to help you access your results and answer any questions.
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
 href="mailto:results@guardians-diagnostic.com"
 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors inline-flex items-center justify-center"
 >
 <EnvelopeIcon className="h-5 w-5 mr-2" />
 Email Support
 </a>
 <Link
 to="/patient-info#results"
 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors inline-flex items-center justify-center"
 >
 Result Information Guide
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </section>

 </div>
 );
};

export default Results;
