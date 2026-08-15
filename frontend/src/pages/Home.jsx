import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
 HeartIcon, 
 ShieldCheckIcon, 
 ClockIcon, 
 UserGroupIcon,
 CheckCircleIcon,
 ArrowRightIcon,
 PhoneIcon,
 CalendarDaysIcon,
 HomeIcon,
 ChatBubbleLeftRightIcon,
 ChevronLeftIcon,
 ChevronRightIcon,
 BeakerIcon,
 CameraIcon,
 SpeakerWaveIcon,
 BuildingOfficeIcon,
 MapPinIcon,
 EnvelopeIcon,
 BookOpenIcon,
 StarIcon
} from '@heroicons/react/24/outline';

const Home = () => {
 const [currentSlide, setCurrentSlide] = useState(0);

 const heroSlides = [
 {
 image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
 title: 'Reliable Diagnostics,',
 subtitle: 'Better Health',
 description: 'Professional diagnostic services with accurate testing and patient-focused care you can trust.',
 },
 {
 image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
 title: 'Modern Diagnostic',
 subtitle: 'Services You Can Trust',
 description: 'Quality laboratory and diagnostic services supported by modern technology and professional care.',
 },
 {
 image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
 title: 'Accurate Testing,',
 subtitle: 'Trusted Results',
 description: 'Reliable laboratory diagnostics supported by modern technology and professional healthcare services.',
 },
 {
 image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
 title: 'Comprehensive Health',
 subtitle: 'Screening Packages',
 description: 'Health screening options designed to support prevention, early detection, and better health decisions.',
 },
 {
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
 title: 'Professional Care,',
 subtitle: 'Experienced Team',
 description: 'Meet dedicated healthcare professionals committed to providing reliable and patient-focused care.',
 },
 {
 image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
 title: 'Healthcare Solutions',
 subtitle: 'For Organizations',
 description: 'Corporate healthcare services designed to support the health and wellbeing of your employees.',
 },
 ];

 useEffect(() => {
 const timer = setInterval(() => {
 setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
 }, 5000);
 return () => clearInterval(timer);
 }, [heroSlides.length]);

 const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
 const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

 const services = [
 { name: 'Laboratory Services', description: 'Hematology, Biochemistry, Microbiology, Serology and more', icon: BeakerIcon, color: 'text-blue-600', bgColor: 'bg-blue-100', link: '/services' },
 { name: 'Digital X-Ray', description: 'High-quality digital imaging for accurate and fast results', icon: CameraIcon, color: 'text-green-600', bgColor: 'bg-green-100', link: '/services' },
 { name: 'Ultrasound', description: 'Advanced ultrasound infrastructure with superior radiologists', icon: SpeakerWaveIcon, color: 'text-purple-600', bgColor: 'bg-purple-100', link: '/services' },
 { name: 'ECG', description: 'Electrocardiogram for heart health evaluation and monitoring', icon: HeartIcon, color: 'text-red-600', bgColor: 'bg-red-100', link: '/services' }
 ];

 const healthPackages = [
 { name: 'Basic Health Screening', price: 'ETB 2,500', description: 'Essential tests for your routine health check', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false },
 { name: 'Comprehensive Health Screening', price: 'ETB 6,500', description: 'Complete assessment for your overall well-being', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX9FcJEHYkfsHClomr629LjlQ9G2-pW3pyKc-SsKU7TZNavYoLlZpTnk&s=10', popular: true },
 { name: 'Pre-Employment Screening', price: 'ETB 3,000', description: 'Required tests for employment and occupational health', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false }
 ];

 const whyChooseUs = [
 { icon: ShieldCheckIcon, title: 'Advanced Technology', description: 'Latest medical equipment for accurate and fast diagnostic results' },
 { icon: UserGroupIcon, title: 'Experienced Team', description: 'Our medical professionals are committed to quality healthcare' },
 { icon: CheckCircleIcon, title: 'Accurate & Reliable', description: 'We ensure quality, accurate results that you can trust' },
 { icon: ClockIcon, title: 'Timely Service', description: 'Get your results quickly and conveniently when you need them' }
 ];

 const team = [
 { name: 'Dr. Sarah Tekle', role: 'Chief Medical Officer', specialization: 'Internal Medicine', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.9 },
 { name: 'Dr. Michael Alemayehu', role: 'Head of Laboratory', specialization: 'Clinical Pathology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.8 },
 { name: 'Dr. Hanan Mohammed', role: 'Imaging Director', specialization: 'Radiology', image: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1400:*', rating: 4.9 }
 ];

 const articles = [
 { title: '10 Essential Health Checks Every Adult Should Have', category: 'Health Tips', date: 'Aug 10, 2026', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', readTime: '8 min read', author: 'Dr. Sarah Tekle' },
 { title: 'Understanding Your Blood Test Results: A Complete Guide', category: 'Diagnostic Info', date: 'Aug 8, 2026', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', readTime: '12 min read', author: 'Dr. Michael Alemayehu' },
 { title: 'Heart Health: Early Detection and Prevention Strategies', category: 'Prevention', date: 'Aug 5, 2026', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', readTime: '10 min read', author: 'Dr. Daniel Gebre' }
 ];

 const corporateIndustries = [
 { name: 'Companies & NGOs', icon: BuildingOfficeIcon },
 { name: 'Schools & Universities', icon: UserGroupIcon },
 { name: 'Factories & Construction', icon: ShieldCheckIcon },
 { name: 'Government Institutions', icon: CheckCircleIcon }
 ];

 const homeSampleSteps = [
 { step: '1', title: 'Request', description: 'Submit your request online or by phone' },
 { step: '2', title: 'Schedule', description: 'We confirm a convenient time for you' },
 { step: '3', title: 'Collection', description: 'Our team comes to your location' },
 { step: '4', title: 'Results', description: 'Receive your results digitally' }
 ];

 return (
 <div className="theme-bg-background">

 {/* ─── HERO CAROUSEL ─────────────────────────────────── */}
 <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
 <div className="relative w-full h-full">
 {heroSlides.map((slide, index) => (
 <div
 key={index}
 className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
 >
 <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-black/20"></div>
 </div>
 ))}
 </div>

 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
 <div className="max-w-2xl text-white">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 {heroSlides[currentSlide].title}
 <br />
 <span className="text-blue-200">{heroSlides[currentSlide].subtitle}</span>
 </h1>
 <p className="text-xl text-blue-100 mb-8 leading-relaxed">
 {heroSlides[currentSlide].description}
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link to="/appointment" className="theme-btn-primary font-semibold px-8 py-4 rounded-lg flex items-center justify-center theme-shadow-lg">
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book Appointment
 </Link>
 <Link to="/services" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors flex items-center justify-center">
 Explore Services
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </div>
 </div>

 <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors">
 <ChevronLeftIcon className="h-6 w-6" />
 </button>
 <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors">
 <ChevronRightIcon className="h-6 w-6" />
 </button>
 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
 {heroSlides.map((_, index) => (
 <button key={index} onClick={() => setCurrentSlide(index)}
 className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
 />
 ))}
 </div>
 </section>

 {/* ─── QUICK ACTION CARDS ────────────────────────────── */}
 <section className="relative -mt-8 sm:-mt-16 z-10 px-1 sm:px-0">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 <a href="tel:+251911234567" className="theme-bg-card rounded-2xl p-6 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 group border-l-4 border-green-500 hover:border-green-600">
 <div className="flex items-center space-x-4">
 <div className="bg-green-100 p-4 rounded-2xl group-hover:bg-green-500 transition-colors">
 <PhoneIcon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
 </div>
 <div>
 <h3 className="font-bold theme-text-primary text-lg">Call Us</h3>
 <p className="theme-text-primary-brand font-semibold">+251 11 123 4567</p>
 <p className="text-xs theme-text-muted">We are here to help</p>
 </div>
 </div>
 </a>
 <a href="https://wa.me/251911234567" className="theme-bg-card rounded-2xl p-6 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 group border-l-4 border-green-500 hover:border-green-600">
 <div className="flex items-center space-x-4">
 <div className="bg-green-100 p-4 rounded-2xl group-hover:bg-green-500 transition-colors">
 <ChatBubbleLeftRightIcon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
 </div>
 <div>
 <h3 className="font-bold theme-text-primary text-lg">WhatsApp</h3>
 <p className="theme-text-primary-brand font-semibold">+251 911 234 567</p>
 <p className="text-xs theme-text-muted">Chat with us anytime</p>
 </div>
 </div>
 </a>
 <Link to="/appointment" className="theme-bg-card rounded-2xl p-6 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 group border-l-4 border-guardians-navy hover:border-guardians-cyan">
 <div className="flex items-center space-x-4">
 <div className="theme-icon-bg-navy p-4 rounded-2xl group-hover:bg-guardians-navy transition-colors">
 <CalendarDaysIcon className="h-5 w-5 theme-icon-navy group-hover:text-white transition-colors" />
 </div>
 <div>
 <h3 className="font-bold theme-text-primary text-lg">Book Appointment</h3>
 <p className="theme-text-primary-brand font-semibold">Schedule your visit</p>
 <p className="text-xs theme-text-muted">Quick & easy</p>
 </div>
 </div>
 </Link>
 <Link to="/home-collection" className="theme-bg-card rounded-2xl p-6 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 group border-l-4 border-purple-500 hover:border-purple-600">
 <div className="flex items-center space-x-4">
 <div className="bg-purple-100 p-4 rounded-2xl group-hover:bg-purple-500 transition-colors">
 <HomeIcon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
 </div>
 <div>
 <h3 className="font-bold theme-text-primary text-lg">Home Collection</h3>
 <p className="theme-text-primary-brand font-semibold">We come to you</p>
 <p className="text-xs theme-text-muted">Safe & convenient</p>
 </div>
 </div>
 </Link>
 </div>
 </div>
 </section>

 {/* ─── INTRODUCTION TO GUARDIANS ─────────────────────── */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div>
 <span className="theme-text-primary-brand font-semibold text-lg">WHO WE ARE</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 mt-2">
 Your Trusted Partner in Healthcare Diagnostics
 </h2>
 <p className="theme-text-secondary text-lg leading-relaxed mb-6">
 Guardians Diagnostic Center is a professional diagnostic healthcare provider committed to delivering
 accurate, reliable, and compassionate medical services. We combine modern technology with an experienced
 medical team to serve individuals, families, and organizations across Ethiopia.
 </p>
 <p className="theme-text-secondary leading-relaxed mb-8">
 From routine laboratory tests to advanced imaging services, we provide a comprehensive range of
 diagnostics — all under one roof, with fast turnaround times and results you can trust.
 </p>
 <div className="grid grid-cols-2 gap-4 mb-8">
 {[
 { value: '50,000+', label: 'Patients Served' },
 { value: '99.8%', label: 'Accuracy Rate' },
 { value: '15+', label: 'Expert Doctors' },
 { value: '24/7', label: 'Emergency Support' }
 ].map((stat, i) => (
 <div key={i} className="theme-bg-card rounded-xl p-4 text-center border-l-4 border-guardians-cyan theme-shadow-md">
 <div className="text-2xl font-bold theme-text-primary-brand">{stat.value}</div>
 <div className="text-sm theme-text-secondary">{stat.label}</div>
 </div>
 ))}
 </div>
 <Link to="/about" className="theme-btn-primary px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg">
 Learn More About Us
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 <div className="relative">
 <img
 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
 alt="Guardians Diagnostic Center"
 className="rounded-2xl theme-shadow-2xl w-full"
 />
 <div className="hidden sm:block absolute -bottom-6 -left-6 theme-bg-card p-5 rounded-xl theme-shadow-lg border-l-4 border-guardians-navy">
 <div className="flex items-center space-x-3">
 <div className="theme-icon-bg-navy p-3 rounded-full">
 <ShieldCheckIcon className="h-7 w-7 theme-icon-navy" />
 </div>
 <div>
 <p className="font-bold theme-text-primary">ISO Certified</p>
 <p className="text-sm theme-text-secondary">International quality standards</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ─── MAIN SERVICES ─────────────────────────────────── */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">OUR SERVICES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Comprehensive Diagnostic Services
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto mb-4">
 Professional diagnostic services available now, with modern equipment and qualified medical staff.
 </p>
 <Link to="/services" className="theme-text-primary-brand hover:opacity-80 font-medium inline-flex items-center">
 View All Services <ArrowRightIcon className="h-4 w-4 ml-1" />
 </Link>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {services.map((service, index) => (
 <Link key={index} to={service.link} className="theme-bg-card text-center group rounded-2xl p-6 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 border-l-4 border-guardians-cyan hover:border-guardians-navy block">
 <div className={`${service.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
 <service.icon className={`h-10 w-10 ${service.color}`} />
 </div>
 <h3 className="font-semibold theme-text-primary mb-2">{service.name}</h3>
 <p className="text-sm theme-text-secondary leading-relaxed">{service.description}</p>
 <div className="mt-4">
 <span className="theme-text-primary-brand text-sm font-medium">Learn More →</span>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* ─── WHY CHOOSE US ─────────────────────────────────── */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">WHY CHOOSE US</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Trusted. Reliable. Always Here for You.
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {whyChooseUs.map((item, index) => (
 <div key={index} className="theme-bg-card text-center rounded-2xl p-6 theme-shadow-xl hover:theme-shadow-2xl transition-all duration-300 border-l-4 border-guardians-navy hover:border-guardians-cyan">
 <div className="theme-icon-bg-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
 <item.icon className="h-6 w-6 theme-icon-navy" />
 </div>
 <h3 className="text-xl font-semibold theme-text-primary mb-3">{item.title}</h3>
 <p className="theme-text-secondary leading-relaxed">{item.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ─── HEALTH PACKAGES ───────────────────────────────── */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">HEALTH PACKAGES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Health Screening Packages for Everyone
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Choose from our range of packages designed for individuals, families, and organizations.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {healthPackages.map((pkg, index) => (
 <div key={index} className="theme-bg-card rounded-2xl theme-shadow-lg overflow-hidden hover:theme-shadow-xl transition-all duration-300 relative border-l-4 border-guardians-cyan hover:border-guardians-navy">
 {pkg.popular && (
 <div className="absolute top-4 right-4 z-10">
 <span className="bg-guardians-red text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
 <StarIcon className="h-3 w-3 mr-1" />
 Most Popular
 </span>
 </div>
 )}
 <div className="h-48 overflow-hidden">
 <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
 </div>
 <div className="p-6">
 <h3 className="text-xl font-semibold theme-text-primary mb-2">{pkg.name}</h3>
 <p className="theme-text-secondary mb-4">{pkg.description}</p>
 <div className="flex items-center justify-between">
 <span className="text-2xl font-bold theme-text-primary-brand">{pkg.price}</span>
 <Link to="/packages" className="theme-btn-primary px-4 py-2 rounded-lg text-sm font-medium">
 Learn More
 </Link>
 </div>
 </div>
 </div>
 ))}
 </div>
 <div className="text-center mt-12">
 <Link to="/packages" className="theme-btn-primary px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg">
 View All Packages
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </section>

 {/* ─── CORPORATE HEALTHCARE SERVICES ────────────────── */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div className="relative">
 <img
 src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
 alt="Corporate Health Services"
 className="rounded-2xl theme-shadow-2xl w-full"
 />
 <div className="hidden sm:block absolute -top-6 -right-6 theme-bg-card p-5 rounded-xl theme-shadow-lg border-l-4 border-guardians-cyan">
 <div className="text-center">
 <div className="text-3xl font-bold theme-text-primary-brand">500+</div>
 <div className="text-sm theme-text-secondary">Corporate Clients</div>
 </div>
 </div>
 </div>
 <div>
 <span className="theme-text-primary-brand font-semibold text-lg">CORPORATE SERVICES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 mt-2">
 Healthcare Solutions for Organizations
 </h2>
 <p className="theme-text-secondary text-lg leading-relaxed mb-6">
 We provide comprehensive workplace health solutions tailored for companies, NGOs, schools,
 factories, and government institutions — helping organizations keep their teams healthy, compliant, and productive.
 </p>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
 {corporateIndustries.map((item, index) => (
 <div key={index} className="theme-bg-card rounded-xl p-4 flex items-center space-x-3 border-l-4 border-guardians-cyan theme-shadow-md">
 <div className="theme-icon-bg-navy p-2 rounded-lg flex-shrink-0">
 <item.icon className="h-6 w-6 theme-icon-navy" />
 </div>
 <span className="theme-text-primary font-medium text-sm">{item.name}</span>
 </div>
 ))}
 </div>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link to="/corporate" className="theme-btn-primary px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg">
 Explore Corporate Services
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 <Link to="/appointment" className="theme-bg-card theme-border border-2 theme-text-primary font-semibold px-8 py-4 rounded-lg theme-hover transition-colors inline-flex items-center justify-center">
 Get a Quote
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ─── HOME SAMPLE COLLECTION ────────────────────────── */}
 <section className="py-20 theme-bg-primary">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div className="text-white">
 <span className="text-blue-200 font-semibold text-lg">HOME SAMPLE COLLECTION</span>
 <h2 className="text-3xl lg:text-4xl font-bold mb-6 mt-2">
 We Come to You
 </h2>
 <p className="text-blue-100 text-lg leading-relaxed mb-8">
 Can't make it to our center? No problem. Our trained medical team will come to your home or office
 to collect samples — safe, convenient, and professional.
 </p>
 {/* Steps */}
 <div className="grid grid-cols-2 gap-4 mb-8">
 {homeSampleSteps.map((step, index) => (
 <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-l-4 border-guardians-cyan">
 <div className="text-2xl font-bold text-blue-200 mb-1">{step.step}</div>
 <div className="font-semibold text-white mb-1">{step.title}</div>
 <div className="text-sm text-blue-100">{step.description}</div>
 </div>
 ))}
 </div>
 <Link to="/home-collection" className="bg-white theme-text-primary-brand font-bold px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg hover:bg-gray-100 transition-colors">
 <HomeIcon className="h-5 w-5 mr-2" />
 Request Home Collection
 </Link>
 </div>
 <div className="relative">
 <img
 src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
 alt="Home sample collection service"
 className="rounded-2xl shadow-2xl w-full"
 />
 <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg border-l-4 border-guardians-cyan">
 <div className="flex items-center space-x-3">
 <div className="theme-icon-bg-cyan p-3 rounded-full">
 <ClockIcon className="h-7 w-7 theme-icon-cyan" />
 </div>
 <div>
 <p className="font-bold text-gray-900">Available Daily</p>
 <p className="text-sm text-gray-600">7:00 AM – 6:00 PM</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ─── MEDICAL TEAM ──────────────────────────────────── */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">OUR MEDICAL TEAM</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Meet Our Expert Doctors
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Our experienced medical professionals are dedicated to providing the highest quality diagnostic care.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {team.map((member, index) => (
 <div key={index} className="theme-bg-card rounded-2xl theme-shadow-xl overflow-hidden hover:theme-shadow-2xl transition-all duration-300 border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className="h-64 overflow-hidden relative">
 <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
 <div className="flex items-center space-x-1">
 <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
 <span className="text-sm font-bold text-gray-900">{member.rating}</span>
 </div>
 </div>
 </div>
 <div className="p-6">
 <h3 className="text-xl font-bold theme-text-primary mb-1">{member.name}</h3>
 <p className="theme-text-primary-brand font-semibold mb-1">{member.role}</p>
 <p className="theme-text-secondary text-sm mb-4">{member.specialization}</p>
 <Link to="/appointment" className="theme-btn-primary px-4 py-2 rounded-lg text-sm font-medium w-full text-center block">
 Book Consultation
 </Link>
 </div>
 </div>
 ))}
 </div>
 <div className="text-center mt-12">
 <Link to="/doctors" className="theme-btn-primary px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg">
 Meet All Our Doctors
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </section>

 {/* ─── HEALTH ARTICLES ───────────────────────────────── */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">HEALTH RESOURCES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Latest Health Articles
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Expert health insights and educational content from our medical professionals.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {articles.map((article, index) => (
 <article key={index} className="theme-bg-card rounded-2xl theme-shadow-lg overflow-hidden hover:theme-shadow-xl transition-all duration-300 border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className="h-48 overflow-hidden">
 <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
 </div>
 <div className="p-6">
 <div className="flex items-center justify-between mb-3">
 <span className="theme-icon-bg-navy theme-text-primary-brand text-xs font-semibold px-3 py-1 rounded-full">
 {article.category}
 </span>
 <span className="text-xs theme-text-muted">{article.readTime}</span>
 </div>
 <h3 className="font-bold theme-text-primary mb-3 leading-snug line-clamp-2">{article.title}</h3>
 <div className="flex items-center justify-between">
 <div className="flex items-center space-x-2">
 <div className="w-6 h-6 rounded-full bg-guardians-navy/20 flex items-center justify-center">
 <BookOpenIcon className="h-3 w-3 theme-text-primary-brand" />
 </div>
 <span className="text-xs theme-text-secondary">{article.author}</span>
 </div>
 <span className="text-xs theme-text-muted">{article.date}</span>
 </div>
 <button className="mt-4 theme-text-primary-brand text-sm font-medium inline-flex items-center hover:opacity-80">
 Read Article <ArrowRightIcon className="h-4 w-4 ml-1" />
 </button>
 </div>
 </article>
 ))}
 </div>
 <div className="text-center mt-12">
 <Link to="/blog" className="theme-btn-primary px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg">
 View All Articles
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </section>

 {/* ─── CALL TO ACTION ────────────────────────────────── */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-primary rounded-3xl p-12 text-center relative overflow-hidden">
 <div className="absolute inset-0 opacity-10">
 <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white -translate-y-1/2 translate-x-1/2"></div>
 <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white translate-y-1/2 -translate-x-1/2"></div>
 </div>
 <div className="relative z-10">
 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
 Ready to Take Care of Your Health?
 </h2>
 <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
 Book your appointment today and experience professional, accurate, and caring diagnostic services.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link to="/appointment" className="bg-white theme-text-primary-brand font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center theme-shadow-lg">
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book an Appointment
 </Link>
 <Link to="/services" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors inline-flex items-center justify-center">
 Explore Services
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 <Link to="/contact" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors inline-flex items-center justify-center">
 Contact Guardians
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ─── LOCATION & CONTACT ────────────────────────────── */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">FIND US</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Location & Contact
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Visit us at our center or get in touch — we're always ready to help.
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Map Placeholder */}
 <div className="rounded-2xl overflow-hidden theme-shadow-xl h-80 lg:h-auto min-h-[320px] bg-gray-200 relative">
 <iframe
 title="Guardians Diagnostic Center Location"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7969!3d9.0154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNTUuNCJOIDM4wrA0Nyc0OS4wIkU!5e0!3m2!1sen!2set!4v1234567890"
 width="100%"
 height="100%"
 style={{ border: 0, minHeight: '320px' }}
 allowFullScreen=""
 loading="lazy"
 className="absolute inset-0"
 ></iframe>
 </div>

 {/* Contact Info */}
 <div className="space-y-6">
 {[
 { icon: MapPinIcon, title: 'Our Address', details: ['Bole Sub-City, Addis Ababa', 'Near Bole International Airport', 'Ethiopia'], color: 'text-guardians-navy', bg: 'theme-icon-bg-navy', border: 'border-guardians-navy' },
 { icon: PhoneIcon, title: 'Phone & WhatsApp', details: ['+251 911 234 567', '+251 11 123 4567', 'Available Mon–Sat, 7 AM – 8 PM'], color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-500' },
 { icon: EnvelopeIcon, title: 'Email', details: ['info@guardians-diagnostic.com', 'appointments@guardians-diagnostic.com'], color: 'text-guardians-cyan', bg: 'theme-icon-bg-cyan', border: 'border-guardians-cyan' },
 { icon: ClockIcon, title: 'Opening Hours', details: ['Mon – Fri: 7:00 AM – 8:00 PM', 'Saturday: 8:00 AM – 6:00 PM', 'Sunday: 9:00 AM – 2:00 PM', 'Emergency: 24/7'], color: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-500' }
 ].map((item, index) => (
 <div key={index} className={`theme-bg-card rounded-xl p-5 flex items-start space-x-4 theme-shadow-md border-l-4 ${item.border}`}>
 <div className={`${item.bg} p-3 rounded-xl flex-shrink-0`}>
 <item.icon className={`h-6 w-6 ${item.color}`} />
 </div>
 <div>
 <h4 className="font-bold theme-text-primary mb-1">{item.title}</h4>
 {item.details.map((d, i) => (
 <p key={i} className="theme-text-secondary text-sm">{d}</p>
 ))}
 </div>
 </div>
 ))}

 <div className="flex gap-4 pt-2">
 <a href="tel:+251911234567" className="theme-btn-primary px-6 py-3 rounded-lg inline-flex items-center theme-shadow-lg flex-1 justify-center">
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call Now
 </a>
 <Link to="/contact" className="theme-bg-card theme-border border-2 theme-text-primary font-semibold px-6 py-3 rounded-lg theme-hover transition-colors inline-flex items-center justify-center flex-1">
 Get Directions
 <ArrowRightIcon className="h-4 w-4 ml-2" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ─── NEWSLETTER ────────────────────────────────────── */}
 <section className="py-16 theme-bg-primary">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <div className="text-white">
 <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
 <p className="text-blue-100 mb-6">
 Subscribe for health tips, service updates, and news from Guardians Diagnostic Center.
 </p>
 <div className="flex">
 <input
 type="email"
 placeholder="Enter your email address"
 className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
 />
 <button className="bg-white theme-text-primary-brand px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
 Subscribe
 </button>
 </div>
 </div>
 <div className="text-white">
 <h2 className="text-3xl font-bold mb-4">Emergency</h2>
 <p className="text-blue-100 mb-6">
 For urgent diagnostic services, our emergency team is available 24/7.
 </p>
 <a
 href="tel:+251911000911"
 className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg inline-flex items-center transition-colors theme-shadow-lg"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Emergency: +251 911 000 911
 </a>
 </div>
 </div>
 </div>
 </section>

 </div>
 );
};

export default Home;
