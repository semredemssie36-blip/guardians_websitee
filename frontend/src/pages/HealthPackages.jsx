import { Link } from 'react-router-dom';
import { 
 CheckCircleIcon, 
 StarIcon, 
 ClockIcon, 
 UserGroupIcon,
 BuildingOfficeIcon,
 HeartIcon,
 ShieldCheckIcon,
 CalendarDaysIcon,
 ArrowRightIcon,
 PhoneIcon
} from '@heroicons/react/24/outline';

const HealthPackages = () => {
 const packages = [
 {
 id: 1,
 name: 'Basic Health Screening',
 category: 'Individual',
 price: 'ETB 2,500',
 originalPrice: 'ETB 3,200',
 description: 'Essential tests for your routine health monitoring and preventive care',
 image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 duration: '2-3 hours',
 reportTime: '24 hours',
 idealFor: 'Adults 18-40 years',
 popular: false,
 tests: [
 'Complete Blood Count (CBC)',
 'Blood Sugar (Fasting & Random)',
 'Lipid Profile (Cholesterol)',
 'Liver Function Tests',
 'Kidney Function Tests',
 'Urine Analysis',
 'Blood Pressure Measurement',
 'BMI Assessment'
 ],
 includes: [
 'Doctor consultation',
 'Digital report',
 'Health recommendations',
 'Follow-up guidance'
 ]
 },
 {
 id: 2,
 name: 'Comprehensive Health Screening',
 category: 'Individual',
 price: 'ETB 6,500',
 originalPrice: 'ETB 8,200',
 description: 'Complete assessment for overall well-being with detailed health analysis',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 duration: '4-5 hours',
 reportTime: '48 hours',
 idealFor: 'Adults over 40 years',
 popular: true,
 tests: [
 'Complete Blood Count (CBC)',
 'Comprehensive Metabolic Panel',
 'Lipid Profile (Extended)',
 'Liver Function Tests (Complete)',
 'Kidney Function Tests (Complete)',
 'Thyroid Function Tests',
 'Diabetes Panel (HbA1c)',
 'Cardiac Markers',
 'Chest X-Ray',
 'ECG (12-lead)',
 'Abdominal Ultrasound',
 'Urine Analysis (Complete)',
 'Vitamin D3 Levels',
 'Cancer Screening Markers'
 ],
 includes: [
 'Senior doctor consultation',
 'Digital & printed report',
 'Detailed health analysis',
 'Diet & lifestyle plan',
 '3-month follow-up',
 'Health monitoring app access'
 ]
 },
 {
 id: 3,
 name: 'Pre-Employment Screening',
 category: 'Employment',
 price: 'ETB 3,000',
 originalPrice: 'ETB 3,800',
 description: 'Required medical tests for employment and occupational health clearance',
 image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 duration: '2-3 hours',
 reportTime: '24 hours',
 idealFor: 'Job applicants',
 popular: false,
 tests: [
 'General Physical Examination',
 'Chest X-Ray',
 'Complete Blood Count (CBC)',
 'Blood Sugar (Fasting)',
 'Urine Analysis',
 'HIV/AIDS Test',
 'Hepatitis B & C Screening',
 'Blood Pressure Check',
 'Vision Test',
 'Hearing Test'
 ],
 includes: [
 'Medical fitness certificate',
 'Official employment report',
 'Digital copies',
 'Express processing available'
 ]
 },
 {
 id: 4,
 name: 'Executive Health Package',
 category: 'Premium',
 price: 'ETB 12,500',
 originalPrice: 'ETB 16,000',
 description: 'Premium health screening for executives and business professionals',
 image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 duration: '6-8 hours',
 reportTime: '72 hours',
 idealFor: 'Executives & professionals',
 popular: true,
 tests: [
 'Comprehensive Blood Panel (50+ tests)',
 'Advanced Cardiac Assessment',
 'Full Body CT Scan (Future)',
 'Stress Test ECG',
 'Pulmonary Function Test',
 'Complete Hormone Panel',
 'Tumor Marker Screening',
 'Nutritional Assessment',
 'Mental Health Screening',
 'Eye Examination',
 'Dental Check-up',
 'Bone Density Scan (Future)'
 ],
 includes: [
 'VIP consultation suite',
 'Specialist consultations',
 'Comprehensive health report',
 'Personalized wellness plan',
 '6-month follow-up program',
 'Priority appointment booking',
 'Health concierge service'
 ]
 },
 {
 id: 5,
 name: 'Women\'s Health Package',
 category: 'Women',
 price: 'ETB 5,500',
 originalPrice: 'ETB 7,000',
 description: 'Specialized health screening focused on women\'s health needs',
 image: 'https://images.unsplash.com/photo-1594824475217-34a83d43827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 duration: '3-4 hours',
 reportTime: '48 hours',
 idealFor: 'Women 25+ years',
 popular: false,
 tests: [
 'Complete Blood Count (CBC)',
 'Hormone Panel (Female)',
 'Thyroid Function Tests',
 'Breast Examination',
 'Pelvic Ultrasound',
 'Pap Smear Test',
 'Bone Density Assessment',
 'Iron & Vitamin Levels',
 'Pregnancy Test (if applicable)',
 'Cancer Screening Markers'
 ],
 includes: [
 'Female doctor consultation',
 'Gynecologist consultation',
 'Health & wellness counseling',
 'Nutrition guidance',
 'Reproductive health advice'
 ]
 },
 {
 id: 6,
 name: 'Senior Citizen Package',
 category: 'Senior',
 price: 'ETB 4,800',
 originalPrice: 'ETB 6,200',
 description: 'Comprehensive health screening tailored for senior citizens\' needs',
 image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 duration: '4-5 hours',
 reportTime: '48 hours',
 idealFor: 'Adults 60+ years',
 popular: false,
 tests: [
 'Complete Blood Count (CBC)',
 'Diabetes Monitoring (HbA1c)',
 'Cardiac Risk Assessment',
 'Blood Pressure Monitoring',
 'Kidney Function Tests',
 'Liver Function Tests',
 'Prostate Screening (Men)',
 'Bone Health Assessment',
 'Vision & Hearing Tests',
 'Memory & Cognitive Assessment'
 ],
 includes: [
 'Geriatric specialist consultation',
 'Medication review',
 'Fall risk assessment',
 'Home care recommendations',
 'Family counseling session'
 ]
 }
 ];

 const corporatePackages = [
 {
 name: 'Basic Corporate Package',
 employees: '10-50 employees',
 price: 'ETB 2,200 per person',
 image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 features: [
 'Basic health screening',
 'Group discounts available',
 'On-site testing available',
 'Digital health reports',
 'Annual health summary'
 ]
 },
 {
 name: 'Enterprise Package',
 employees: '50+ employees',
 price: 'ETB 1,800 per person',
 image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 features: [
 'Comprehensive health screening',
 'Maximum group discounts',
 'On-site mobile clinic',
 'Health analytics dashboard',
 'Wellness program support',
 'Dedicated account manager'
 ]
 }
 ];

 const benefits = [
 {
 icon: ShieldCheckIcon,
 title: 'Preventive Care',
 description: 'Early detection and prevention of health issues'
 },
 {
 icon: ClockIcon,
 title: 'Time Efficient',
 description: 'Comprehensive testing in a single visit'
 },
 {
 icon: UserGroupIcon,
 title: 'Expert Analysis',
 description: 'Professional interpretation by qualified doctors'
 },
 {
 icon: HeartIcon,
 title: 'Peace of Mind',
 description: 'Know your health status with confidence'
 }
 ];

 return (
 <div className="theme-bg-background">
 {/* Hero Section */}
 <section className="relative h-[500px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Health Screening Packages"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 Health Packages
 </h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Comprehensive health screening packages designed for individuals, families, and organizations. Choose the right package for your health needs.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link
 to="/appointment"
 className="theme-btn-primary px-8 py-4 rounded-lg flex items-center justify-center theme-shadow-lg"
 >
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book Package
 </Link>
 <a
 href="tel:+251911234567"
 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call for Consultation
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Benefits Section */}
 <section className="py-16 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="theme-text-primary-brand font-semibold text-lg">WHY CHOOSE OUR PACKAGES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Benefits of Health Screening
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {benefits.map((benefit, index) => (
 <div key={index} className="theme-bg-card text-center p-6 rounded-2xl theme-shadow-lg border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">
 <div className="theme-icon-bg-navy w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
 <benefit.icon className="h-8 w-8 theme-icon-navy" />
 </div>
 <h3 className="text-xl font-bold theme-text-primary mb-2">{benefit.title}</h3>
 <p className="theme-text-secondary">{benefit.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Individual Packages */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">INDIVIDUAL PACKAGES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Health Screening Packages for Everyone
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Choose from our range of comprehensive health packages designed for different age groups and health needs.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {packages.map((pkg) => (
 <div key={pkg.id} className="theme-bg-card rounded-2xl theme-shadow-xl overflow-hidden hover:theme-shadow-2xl transition-all duration-300 relative border-l-4 border-guardians-cyan hover:border-guardians-navy">
 {pkg.popular && (
 <div className="absolute top-4 right-4 z-10">
 <span className="bg-guardians-navy text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
 <StarIcon className="h-3 w-3 mr-1" />
 Most Popular
 </span>
 </div>
 )}
 
 <div className="h-48 overflow-hidden relative">
 <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
 <div className="absolute top-4 left-4">
 <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
 {pkg.category}
 </span>
 </div>
 </div>
 
 <div className="p-6">
 <h3 className="text-xl font-bold theme-text-primary mb-2">{pkg.name}</h3>
 <p className="theme-text-secondary text-sm mb-4">{pkg.description}</p>
 
 <div className="flex items-center justify-between mb-4">
 <div>
 <span className="text-2xl font-bold theme-text-primary-brand">{pkg.price}</span>
 <span className="theme-text-muted text-sm line-through ml-2">{pkg.originalPrice}</span>
 </div>
 <div className="text-right text-sm">
 <p className="theme-text-secondary">Duration: {pkg.duration}</p>
 <p className="theme-text-secondary">Report: {pkg.reportTime}</p>
 </div>
 </div>

 <div className="theme-bg-surface rounded-lg p-4 mb-4">
 <p className="text-sm font-medium theme-text-primary mb-2">Ideal for: {pkg.idealFor}</p>
 </div>

 <div className="mb-4">
 <h4 className="font-semibold theme-text-primary mb-2">Key Tests ({pkg.tests.length}):</h4>
 <ul className="space-y-1">
 {pkg.tests.slice(0, 4).map((test, index) => (
 <li key={index} className="flex items-start text-sm theme-text-secondary">
 <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
 {test}
 </li>
 ))}
 {pkg.tests.length > 4 && (
 <li className="text-sm theme-text-primary-brand font-medium">
 +{pkg.tests.length - 4} more tests included
 </li>
 )}
 </ul>
 </div>

 <div className="mb-6">
 <h4 className="font-semibold theme-text-primary mb-2">Package Includes:</h4>
 <ul className="space-y-1">
 {pkg.includes.slice(0, 3).map((item, index) => (
 <li key={index} className="flex items-center text-sm theme-text-secondary">
 <CheckCircleIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
 {item}
 </li>
 ))}
 </ul>
 </div>

 <div className="flex flex-col gap-3">
 <Link
 to="/appointment"
 className={`text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center ${
 pkg.popular 
 ? 'theme-btn-primary' 
 : 'theme-btn-primary'
 } theme-shadow-lg`}
 >
 Book This Package
 </Link>
 <button className="theme-bg-surface theme-text-secondary px-6 py-2 rounded-lg theme-hover transition-colors text-sm font-medium">
 View Full Details
 </button>
 </div>
 </div>
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
 Employee Health Screening
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Comprehensive health screening solutions for organizations of all sizes with group discounts and on-site services.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
 {corporatePackages.map((pkg, index) => (
 <div key={index} className="theme-bg-card rounded-2xl theme-shadow-xl overflow-hidden border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">
 <div className="h-48 overflow-hidden">
 <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
 </div>
 
 <div className="p-6">
 <div className="flex items-center justify-between mb-4">
 <h3 className="text-xl font-bold theme-text-primary">{pkg.name}</h3>
 <BuildingOfficeIcon className="h-6 w-6 theme-icon-navy" />
 </div>
 
 <div className="theme-icon-bg-navy rounded-lg p-4 mb-4">
 <p className="font-semibold theme-text-primary-brand">{pkg.employees}</p>
 <p className="text-2xl font-bold theme-text-primary">{pkg.price}</p>
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
 to="/corporate"
 className="theme-btn-primary font-semibold px-6 py-3 rounded-lg transition-colors text-center block theme-shadow-lg"
 >
 Get Corporate Quote
 </Link>
 </div>
 </div>
 ))}
 </div>

 <div className="text-center mt-12">
 <div className="theme-icon-bg-navy border-l-4 border-guardians-cyan rounded-lg p-6 max-w-2xl mx-auto theme-shadow-lg">
 <h3 className="font-bold theme-text-primary-brand mb-2">Need a Custom Package?</h3>
 <p className="theme-text-secondary text-sm mb-4">
 We can create tailored health screening packages based on your organization's specific needs and budget.
 </p>
 <Link
 to="/corporate"
 className="theme-btn-primary font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center theme-shadow-lg"
 >
 Contact Corporate Team
 <ArrowRightIcon className="h-4 w-4 ml-2" />
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Booking CTA */}
 <section className="py-16 theme-bg-primary">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
 Ready to Start Your Health Journey?
 </h2>
 <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
 Choose your ideal health package and take the first step towards better health and wellness.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 to="/appointment"
 className="bg-white theme-text-primary-brand font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center theme-shadow-lg"
 >
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book Your Package Now
 </Link>
 <a
 href="tel:+251911234567"
 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call for Guidance
 </a>
 </div>
 </div>
 </section>
 </div>
 );
};

export default HealthPackages;