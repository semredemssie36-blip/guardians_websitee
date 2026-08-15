import { 
 HeartIcon, 
 EyeIcon, 
 ShieldCheckIcon,
 UserGroupIcon,
 BuildingOffice2Icon,
 ClockIcon,
 CheckCircleIcon,
 ArrowRightIcon,
 CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const About = () => {
 const values = [
 {
 icon: HeartIcon,
 title: 'Compassionate Care',
 description: 'We treat every patient with empathy, respect, and dignity, ensuring their comfort throughout their healthcare journey.',
 color: 'text-red-600',
 bgColor: 'bg-red-100'
 },
 {
 icon: ShieldCheckIcon,
 title: 'Quality & Accuracy',
 description: 'We maintain the highest standards of quality in our diagnostic services, ensuring accurate and reliable results.',
 color: 'text-blue-600',
 bgColor: 'bg-blue-100'
 },
 {
 icon: UserGroupIcon,
 title: 'Professional Excellence',
 description: 'Our team of qualified medical professionals is committed to continuous learning and excellence in patient care.',
 color: 'text-green-600',
 bgColor: 'bg-green-100'
 },
 {
 icon: ClockIcon,
 title: 'Accessibility',
 description: 'We strive to make quality healthcare accessible and convenient for all members of our community.',
 color: 'text-purple-600',
 bgColor: 'bg-purple-100'
 }
 ];

 const timeline = [
 {
 year: '2026',
 title: 'Foundation & Launch',
 description: 'Guardians Diagnostic Center opens with comprehensive laboratory services, digital X-ray, ultrasound, and ECG services.',
 image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 status: 'current'
 },
 {
 year: '2027',
 title: 'Expansion Phase 1',
 description: 'Addition of advanced diagnostic imaging services including CT scanning and mammography.',
 image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 status: 'planned'
 },
 {
 year: '2028',
 title: 'Specialized Clinics',
 description: 'Launch of specialized medical clinics and expanded consultation services.',
 image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 status: 'planned'
 },
 {
 year: '2029',
 title: 'Regional Network',
 description: 'Establishment of satellite locations across Ethiopia to serve more communities.',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8m9k3Pvk2OBtUjDKmCJXKCsCyMGc-BJBo61Dz5X9Aw&s=10',
 status: 'planned'
 }
 ];

 const team = [
 {
 name: 'Dr. Sarah Tekle',
 role: 'Chief Medical Officer',
 image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
 credentials: 'MD, Internal Medicine',
 experience: '15+ years'
 },
 {
 name: 'Dr. Michael Alemayehu',
 role: 'Head of Laboratory Services',
 image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
 credentials: 'PhD, Clinical Pathology',
 experience: '12+ years'
 },
 {
 name: 'Dr. Hanan Mohammed',
 role: 'Diagnostic Imaging Director',
 image: 'https://png.pngtree.com/png-clipart/20250106/original/pngtree-professional-black-female-healthcare-provider-in-medical-attire-png-image_18775819.png',
 credentials: 'MD, Radiology',
 experience: '10+ years'
 }
 ];

 const stats = [
 { number: '50,000+', label: 'Patients Served', icon: UserGroupIcon },
 { number: '99.8%', label: 'Accuracy Rate', icon: ShieldCheckIcon },
 { number: '24/7', label: 'Emergency Support', icon: ClockIcon },
 { number: '15+', label: 'Expert Doctors', icon: HeartIcon }
 ];

 return (
 <div className="theme-bg-background">
 {/* Hero Section */}
 <section className="relative h-[500px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="About Guardians Diagnostic Center"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 About Us
 </h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Your trusted partner in healthcare diagnostics. Professional, accurate, and caring medical services for individuals and organizations.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link
 to="/appointment"
 className="theme-btn-primary px-8 py-4 rounded-lg flex items-center justify-center theme-shadow-lg"
 >
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book Appointment
 </Link>
 <Link
 to="/services"
 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
 >
 Our Services
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Stats Section */}
 <section className="py-16 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
 {stats.map((stat, index) => (
 <div key={index} className="theme-bg-card text-center rounded-2xl p-6 theme-shadow-xl overflow-hidden hover:theme-shadow-2xl transition-all duration-300 border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className="theme-icon-bg-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
 <stat.icon className="h-8 w-8 theme-icon-navy" />
 </div>
 <div className="text-3xl font-bold theme-text-primary mb-2">{stat.number}</div>
 <div className="theme-text-secondary font-medium">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Who We Are */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div>
 <span className="theme-text-primary-brand font-semibold text-lg">WHO WE ARE</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 mt-2">
 A Professional, Accessible & Trustworthy Diagnostic Center
 </h2>
 <p className="theme-text-secondary text-lg leading-relaxed mb-6">
 Guardians Diagnostic Center is a modern diagnostic healthcare provider based in Addis Ababa, Ethiopia.
 We are committed to making quality diagnostic services accessible, reliable, and convenient for
 individuals, families, and organizations across the country.
 </p>
 <p className="theme-text-secondary leading-relaxed mb-8">
 We combine state-of-the-art medical equipment with a team of qualified, experienced healthcare
 professionals to deliver accurate results and compassionate patient care — all under one roof.
 Whether you need a routine laboratory test, diagnostic imaging, or a comprehensive health screening
 package, Guardians is here to support your health journey.
 </p>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
 {[
 { label: 'Professional', desc: 'Qualified medical team', color: 'border-guardians-navy' },
 { label: 'Accessible', desc: 'Convenient & affordable', color: 'border-guardians-cyan' },
 { label: 'Trustworthy', desc: 'Accurate & reliable results', color: 'border-guardians-red' }
 ].map((item, i) => (
 <div key={i} className={`theme-bg-card rounded-xl p-4 border-l-4 ${item.color} theme-shadow-md text-center`}>
 <p className="font-bold theme-text-primary mb-1">{item.label}</p>
 <p className="text-xs theme-text-secondary">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 <div className="relative">
 <img
 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
 alt="Guardians Diagnostic Center facility"
 className="rounded-2xl theme-shadow-2xl w-full"
 />
 <div className="absolute -bottom-6 -left-6 theme-bg-card p-5 rounded-xl theme-shadow-lg border-l-4 border-guardians-navy">
 <div className="flex items-center space-x-3">
 <div className="theme-icon-bg-navy p-3 rounded-full">
 <ShieldCheckIcon className="h-7 w-7 theme-icon-navy" />
 </div>
 <div>
 <p className="font-bold theme-text-primary">Est. 2026</p>
 <p className="text-sm theme-text-secondary">Addis Ababa, Ethiopia</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Our Mission */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div className="relative order-2 lg:order-1">
 <img
 src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
 alt="Medical professionals at work"
 className="rounded-2xl theme-shadow-2xl"
 />
 </div>
 <div className="order-1 lg:order-2">
 <span className="theme-text-primary-brand font-semibold text-lg">OUR MISSION</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 mt-2">
 Providing Excellence in Healthcare Diagnostics
 </h2>
 <p className="theme-text-secondary text-lg leading-relaxed mb-6">
 Our mission is to deliver the highest quality diagnostic services with compassion, accuracy,
 and professionalism — supporting healthcare providers and patients with reliable, timely,
 and comprehensive diagnostic solutions.
 </p>
 <div className="space-y-4">
 <div className="flex items-start space-x-3 theme-bg-card p-4 rounded-lg theme-shadow-md border-l-4 border-guardians-navy">
 <CheckCircleIcon className="h-5 w-5 theme-icon-navy mt-1 flex-shrink-0" />
 <div>
 <h4 className="font-semibold theme-text-primary">Patient-Centered Care</h4>
 <p className="theme-text-secondary text-sm">Every decision we make prioritizes patient comfort and outcomes</p>
 </div>
 </div>
 <div className="flex items-start space-x-3 theme-bg-card p-4 rounded-lg theme-shadow-md border-l-4 border-guardians-cyan">
 <CheckCircleIcon className="h-5 w-5 theme-icon-cyan mt-1 flex-shrink-0" />
 <div>
 <h4 className="font-semibold theme-text-primary">Advanced Technology</h4>
 <p className="theme-text-secondary text-sm">State-of-the-art equipment ensuring accurate and reliable results</p>
 </div>
 </div>
 <div className="flex items-start space-x-3 theme-bg-card p-4 rounded-lg theme-shadow-md border-l-4 border-guardians-red">
 <CheckCircleIcon className="h-6 w-6 text-guardians-red mt-1 flex-shrink-0" />
 <div>
 <h4 className="font-semibold theme-text-primary">Professional Excellence</h4>
 <p className="theme-text-secondary text-sm">Continuous training and development of our medical professionals</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Our Vision */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div>
 <span className="theme-text-primary-brand font-semibold text-lg">OUR VISION</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 mt-2">
 Leading Healthcare Diagnostics in Ethiopia
 </h2>
 <p className="theme-text-secondary text-lg leading-relaxed mb-8">
 Our vision is to become Ethiopia's most trusted diagnostic healthcare provider — a center of
 excellence that sets the standard for accuracy, accessibility, and patient experience across
 the country and the wider region.
 </p>
 <div className="space-y-5">
 {[
 { title: 'Be the most trusted diagnostic center in Ethiopia', icon: ShieldCheckIcon, border: 'border-guardians-navy' },
 { title: 'Make quality diagnostics accessible to every Ethiopian', icon: UserGroupIcon, border: 'border-guardians-cyan' },
 { title: 'Continuously raise the standard of healthcare diagnostics', icon: EyeIcon, border: 'border-guardians-red' },
 { title: 'Grow into a regional network serving more communities', icon: BuildingOffice2Icon, border: 'border-guardians-navy' }
 ].map((item, i) => (
 <div key={i} className={`flex items-center space-x-4 theme-bg-card p-4 rounded-xl theme-shadow-md border-l-4 ${item.border}`}>
 <div className="theme-icon-bg-navy p-2 rounded-lg flex-shrink-0">
 <item.icon className="h-6 w-6 theme-icon-navy" />
 </div>
 <p className="theme-text-primary font-medium">{item.title}</p>
 </div>
 ))}
 </div>
 </div>
 <div className="relative">
 <img
 src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
 alt="Guardians vision for healthcare in Ethiopia"
 className="rounded-2xl theme-shadow-2xl w-full"
 />
 <div className="absolute -bottom-6 -right-6 theme-bg-card p-5 rounded-xl theme-shadow-lg border-l-4 border-guardians-cyan">
 <div className="flex items-center space-x-3">
 <div className="theme-icon-bg-cyan p-3 rounded-full">
 <EyeIcon className="h-5 w-5 theme-icon-cyan" />
 </div>
 <div>
 <p className="font-bold theme-text-primary">Our Vision</p>
 <p className="text-sm theme-text-secondary">Ethiopia's most trusted diagnostics</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Values Section */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">OUR VALUES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 What Drives Us Every Day
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Our core values guide everything we do, from patient interactions to technological innovations.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {values.map((value, index) => (
 <div key={index} className="theme-bg-card text-center group rounded-2xl p-6 theme-shadow-xl overflow-hidden hover:theme-shadow-2xl transition-all duration-300 border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className={`${value.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
 <value.icon className={`h-10 w-10 ${value.color}`} />
 </div>
 <h3 className="text-xl font-bold theme-text-primary mb-3">{value.title}</h3>
 <p className="theme-text-secondary leading-relaxed">{value.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Timeline Section */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">OUR JOURNEY</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Growing to Serve You Better
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 From our founding to our future plans, see how we're expanding to serve the healthcare needs of Ethiopia.
 </p>
 </div>

 <div className="space-y-12">
 {timeline.map((item, index) => (
 <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
 <div className="flex-1">
 <div className={`rounded-2xl theme-shadow-lg overflow-hidden border-l-4 ${
 item.status === 'current' 
 ? 'border-guardians-navy' 
 : 'border-orange-400'
 }`}>
 <img
 src={item.image}
 alt={item.title}
 className="w-full h-64 object-cover"
 />
 </div>
 </div>
 <div className="flex-1">
 <div className="flex items-center mb-4">
 <span className={`text-2xl font-bold px-4 py-2 rounded-lg ${
 item.status === 'current' 
 ? 'bg-guardians-navy text-white' 
 : 'theme-bg-surface theme-text-secondary'
 }`}>
 {item.year}
 </span>
 {item.status === 'current' && (
 <span className="ml-3 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
 Current
 </span>
 )}
 {item.status === 'planned' && (
 <span className="ml-3 bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
 Planned
 </span>
 )}
 </div>
 <h3 className="text-2xl font-bold theme-text-primary mb-4">{item.title}</h3>
 <p className="theme-text-secondary text-lg leading-relaxed">{item.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Leadership Team */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">OUR TEAM</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Meet Our Expert Leaders
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Our experienced medical professionals are dedicated to providing the highest quality diagnostic services.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {team.map((member, index) => (
 <div key={index} className="theme-bg-card rounded-2xl theme-shadow-xl overflow-hidden hover:theme-shadow-2xl transition-shadow duration-300 border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className="h-64 overflow-hidden">
 <img
 src={member.image}
 alt={member.name}
 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
 />
 </div>
 <div className="p-6">
 <h3 className="text-xl font-bold theme-text-primary mb-2">{member.name}</h3>
 <p className="theme-text-primary-brand font-semibold mb-2">{member.role}</p>
 <p className="theme-text-secondary text-sm mb-1">{member.credentials}</p>
 <p className="theme-text-muted text-sm">{member.experience} experience</p>
 </div>
 </div>
 ))}
 </div>

 <div className="text-center mt-12">
 <Link
 to="/doctors"
 className="theme-btn-primary px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg"
 >
 Meet All Our Doctors
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </section>

 {/* Our Commitment to Patients */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">OUR COMMITMENT</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Our Commitment to Patients
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Every patient who walks through our doors deserves the best possible care. These are the promises we make and keep.
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div className="space-y-6">
 {[
 {
 number: '01',
 title: 'Accurate Results, Every Time',
 description: 'We maintain a 99.8% accuracy rate using state-of-the-art equipment and rigorous quality control processes.',
 color: 'border-guardians-navy'
 },
 {
 number: '02',
 title: 'Fast Turnaround Times',
 description: 'We respect your time. Most results are ready within 24–48 hours so you can make healthcare decisions quickly.',
 color: 'border-guardians-cyan'
 },
 {
 number: '03',
 title: 'Respectful, Dignified Treatment',
 description: 'Every patient is treated with empathy, professionalism, and respect regardless of background or condition.',
 color: 'border-guardians-red'
 },
 {
 number: '04',
 title: 'Transparent & Clear Communication',
 description: 'We ensure you understand your results, your options, and your next steps — in plain language, always.',
 color: 'border-guardians-cyan'
 },
 {
 number: '05',
 title: 'Privacy & Confidentiality',
 description: 'Your health information is protected with the highest security standards and shared only with your consent.',
 color: 'border-guardians-navy'
 }
 ].map((item, index) => (
 <div key={index} className={`theme-bg-card rounded-xl p-6 theme-shadow-md border-l-4 ${item.color} flex items-start space-x-5`}>
 <div className="text-3xl font-black theme-text-primary-brand opacity-30 flex-shrink-0 leading-none">
 {item.number}
 </div>
 <div>
 <h3 className="font-bold theme-text-primary mb-2">{item.title}</h3>
 <p className="theme-text-secondary text-sm leading-relaxed">{item.description}</p>
 </div>
 </div>
 ))}
 </div>

 <div className="relative">
 <img
 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
 alt="Guardians commitment to patients"
 className="rounded-2xl theme-shadow-2xl w-full"
 />
 <div className="absolute -bottom-6 -right-6 theme-bg-card p-6 rounded-xl theme-shadow-lg border-l-4 border-guardians-cyan">
 <div className="flex items-center space-x-4">
 <div className="theme-icon-bg-cyan p-3 rounded-full">
 <CheckCircleIcon className="h-5 w-5 theme-icon-cyan" />
 </div>
 <div>
 <p className="font-bold theme-text-primary text-lg">Patient-First</p>
 <p className="theme-text-secondary">Always our top priority</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Future Vision */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">LOOKING AHEAD</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Our Future Vision
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Guardians is built for growth. We are designing our digital presence and infrastructure to support
 a larger, more comprehensive healthcare organization as we expand.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
 {[
 {
 icon: BuildingOffice2Icon,
 title: 'Advanced Diagnostic Imaging',
 description: 'CT scanning, MRI services, and mammography — bringing world-class imaging to Ethiopia.',
 timeframe: '2027–2028',
 color: 'bg-blue-100',
 iconColor: 'text-blue-600',
 border: 'border-guardians-navy'
 },
 {
 icon: UserGroupIcon,
 title: 'Specialized Clinics',
 description: 'Dedicated clinics for cardiology, women\'s health, pediatrics, and other specialties.',
 timeframe: '2028',
 color: 'bg-purple-100',
 iconColor: 'text-purple-600',
 border: 'border-guardians-cyan'
 },
 {
 icon: ShieldCheckIcon,
 title: 'Expanded Laboratory Services',
 description: 'A broader range of molecular diagnostics, genetic testing, and specialized lab panels.',
 timeframe: '2027',
 color: 'bg-green-100',
 iconColor: 'text-green-600',
 border: 'border-guardians-navy'
 },
 {
 icon: HeartIcon,
 title: 'Regional Network',
 description: 'Satellite diagnostic centers across Ethiopia to serve more communities with accessible care.',
 timeframe: '2029',
 color: 'bg-red-100',
 iconColor: 'text-red-600',
 border: 'border-guardians-red'
 },
 {
 icon: ClockIcon,
 title: 'Digital Health Platform',
 description: 'Fully integrated patient portal, online results, and seamless healthcare coordination.',
 timeframe: '2027',
 color: 'bg-orange-100',
 iconColor: 'text-orange-600',
 border: 'border-guardians-cyan'
 },
 {
 icon: EyeIcon,
 title: 'Hospital Services',
 description: 'Long-term vision to grow into a full-service hospital, serving all healthcare needs.',
 timeframe: '2030+',
 color: 'bg-teal-100',
 iconColor: 'text-teal-600',
 border: 'border-guardians-navy'
 }
 ].map((item, index) => (
 <div key={index} className={`theme-bg-card rounded-2xl p-6 theme-shadow-lg border-l-4 ${item.border} hover:theme-shadow-xl transition-all duration-300`}>
 <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
 <item.icon className={`h-7 w-7 ${item.iconColor}`} />
 </div>
 <div className="flex items-center justify-between mb-3">
 <h3 className="font-bold theme-text-primary">{item.title}</h3>
 <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ml-2">
 {item.timeframe}
 </span>
 </div>
 <p className="theme-text-secondary text-sm leading-relaxed">{item.description}</p>
 </div>
 ))}
 </div>

 <div className="theme-bg-primary rounded-2xl p-10 text-center text-white">
 <h3 className="text-2xl font-bold mb-4">Building for the Future, Serving You Today</h3>
 <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
 Our website and systems are designed to grow alongside Guardians — flexible enough to expand
 as we add new services, locations, and capabilities over time.
 </p>
 <Link
 to="/services"
 className="bg-white theme-text-primary-brand font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center theme-shadow-lg"
 >
 Explore Current Services
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 theme-bg-primary">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
 Ready to Experience Quality Healthcare?
 </h2>
 <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
 Join thousands of satisfied patients who trust Guardians Diagnostic Center for their healthcare needs.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 to="/appointment"
 className="bg-white theme-text-primary-brand font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center theme-shadow-lg"
 >
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book Your Appointment
 </Link>
 <Link
 to="/contact"
 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
 >
 Contact Us Today
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
};

export default About;