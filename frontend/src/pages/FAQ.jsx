import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 ChevronDownIcon,
 ChevronUpIcon,
 QuestionMarkCircleIcon,
 ClockIcon,
 CurrencyDollarIcon,
 DocumentTextIcon,
 PhoneIcon,
 CalendarDaysIcon,
 BeakerIcon,
 HeartIcon,
 UserGroupIcon,
 ShieldCheckIcon,
 InformationCircleIcon,
 ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const FAQ = () => {
 const [openFAQ, setOpenFAQ] = useState(null);
 const [activeCategory, setActiveCategory] = useState('general');

 const toggleFAQ = (index) => {
 setOpenFAQ(openFAQ === index ? null : index);
 };

 const categories = [
 { id: 'general', name: 'General Questions', icon: QuestionMarkCircleIcon },
 { id: 'appointments', name: 'Appointments', icon: CalendarDaysIcon },
 { id: 'tests', name: 'Tests & Procedures', icon: BeakerIcon },
 { id: 'results', name: 'Results & Reports', icon: DocumentTextIcon },
 { id: 'payment', name: 'Payment & Insurance', icon: CurrencyDollarIcon },
 { id: 'preparation', name: 'Test Preparation', icon: ClockIcon },
 { id: 'home-collection', name: 'Home Sample Collection', icon: ShieldCheckIcon },
 { id: 'corporate', name: 'Corporate Services', icon: UserGroupIcon }
 ];

 const faqData = {
 general: [
 {
 question: 'What are your operating hours?',
 answer: 'We are open Monday to Friday from 7:00 AM to 8:00 PM, Saturday from 8:00 AM to 6:00 PM, and Sunday from 9:00 AM to 2:00 PM. Emergency services are available 24/7.'
 },
 {
 question: 'Where is Guardians Diagnostic Center located?',
 answer: 'We are located in Bole Sub-City, Addis Ababa, near Bole International Airport. Free parking is available for all patients and visitors.'
 },
 {
 question: 'Do you accept walk-in patients?',
 answer: 'Yes, we accept walk-in patients, but appointments are recommended to avoid waiting times. Emergency cases are always prioritized regardless of appointment status.'
 },
 {
 question: 'What languages are spoken at your facility?',
 answer: 'Our medical staff speaks English, Amharic, Oromo, Tigrinya, and Arabic. Translation services can be arranged for other languages when needed.'
 },
 {
 question: 'Is your facility wheelchair accessible?',
 answer: 'Yes, our entire facility is wheelchair accessible with elevators, ramps, and accessible restrooms. We also provide wheelchair assistance if needed.'
 }
 ],
 appointments: [
 {
 question: 'How do I book an appointment?',
 answer: 'You can book appointments online through our website, call us at +251 911 234 567, use WhatsApp, or visit us in person. Online booking is available 24/7.'
 },
 {
 question: 'How far in advance should I book my appointment?',
 answer: 'We recommend booking 24-48 hours in advance for routine tests. Same-day appointments may be available depending on the service and our schedule.'
 },
 {
 question: 'Can I reschedule or cancel my appointment?',
 answer: 'Yes, you can reschedule or cancel appointments up to 24 hours in advance without penalty. Late cancellations (less than 24 hours) may incur fees.'
 },
 {
 question: 'What happens if I miss my appointment?',
 answer: 'No-show appointments may result in charges. Please contact us as soon as possible if you cannot make your appointment. We will do our best to reschedule you.'
 },
 {
 question: 'Can I book appointments for multiple family members?',
 answer: 'Yes, you can book appointments for family members. Please provide each person\'s information separately and ensure you have their consent for booking.'
 }
 ],
 tests: [
 {
 question: 'What types of tests do you offer?',
 answer: 'We offer comprehensive laboratory services, digital X-ray, ultrasound, ECG, general consultations, and various health screening packages. Visit our Services page for a complete list.'
 },
 {
 question: 'How long do different tests take?',
 answer: 'Most blood tests take 5-10 minutes, X-rays take 10-15 minutes, ultrasounds take 30-60 minutes, and ECGs take 10-15 minutes. Complex procedures may take longer.'
 },
 {
 question: 'Are your tests accurate and reliable?',
 answer: 'Yes, we maintain a 99.8% accuracy rate using state-of-the-art equipment and following international quality standards. All tests are reviewed by qualified medical professionals.'
 },
 {
 question: 'Do you offer pediatric services?',
 answer: 'Yes, we provide pediatric services for children of all ages. Our staff is trained in pediatric care, and we have child-friendly facilities and equipment.'
 },
 {
 question: 'Can I get multiple tests done in one visit?',
 answer: 'Absolutely! We encourage combining tests in a single visit for convenience. Our health packages are designed to include multiple related tests.'
 }
 ],
 results: [
 {
 question: 'How long does it take to get my test results?',
 answer: 'Most results are available within 24-48 hours. Simple blood tests may be ready the same day, while complex tests may take 2-5 business days. You will be notified when results are ready.'
 },
 {
 question: 'How will I be notified when my results are ready?',
 answer: 'We notify patients via SMS, email, or phone call based on your preference. You can also check results online through our secure patient portal.'
 },
 {
 question: 'Can I access my results online?',
 answer: 'Yes, you can access results through our secure online portal using your patient ID and date of birth. Results are available 24/7 once processed.'
 },
 {
 question: 'Can someone else collect my results?',
 answer: 'Yes, but they must have written authorization from you and present valid ID. Alternatively, you can designate an authorized person during your visit.'
 },
 {
 question: 'How long are my results stored?',
 answer: 'We securely store all test results for 7 years as required by medical regulations. You can request copies of older results if needed.'
 }
 ],
 payment: [
 {
 question: 'What payment methods do you accept?',
 answer: 'We accept cash, credit/debit cards, bank transfers, and most major insurance plans. Payment is required at the time of service unless prior arrangements are made.'
 },
 {
 question: 'Do you accept insurance?',
 answer: 'Yes, we work with major Ethiopian insurance providers. Please bring your insurance card and check with your provider about coverage for specific tests.'
 },
 {
 question: 'What are your prices for common tests?',
 answer: 'Basic blood tests start from ETB 150, X-rays from ETB 300, ultrasounds from ETB 500. Complete price lists are available at reception or online.'
 },
 {
 question: 'Do you offer payment plans?',
 answer: 'We offer payment plans for expensive procedures and health packages. Contact our billing department to discuss available options for your situation.'
 },
 {
 question: 'Are there discounts for multiple tests or family members?',
 answer: 'Yes, our health packages offer significant savings compared to individual tests. We also offer family and corporate discounts for multiple patients.'
 }
 ],
 preparation: [
 {
 question: 'Do I need to fast before blood tests?',
 answer: 'Fasting is required for some tests like glucose and lipid profiles (8-12 hours). Other tests don\'t require fasting. We will provide specific instructions when you book.'
 },
 {
 question: 'Can I take my medications before tests?',
 answer: 'Generally yes, but some medications may affect results. Always inform us about your medications when booking, and we\'ll advise if any adjustments are needed.'
 },
 {
 question: 'What should I wear for my appointment?',
 answer: 'Wear comfortable, loose-fitting clothing. For X-rays, avoid clothing with metal buttons or zippers. For ultrasounds, wear clothes that allow easy access to the examination area.'
 },
 {
 question: 'Can I eat or drink before my appointment?',
 answer: 'This depends on your test. Some require fasting, others don\'t. We provide detailed preparation instructions when you book your appointment.'
 },
 {
 question: 'Should I stop any activities before my tests?',
 answer: 'Avoid strenuous exercise 24 hours before blood tests. For cardiac tests, avoid caffeine and smoking. Specific instructions will be provided based on your tests.'
 }
 ],
 'home-collection': [
 {
 question: 'What is the home sample collection service?',
 answer: 'Our home sample collection service sends a trained medical professional to your home or office to collect samples. This is available for blood, urine, stool, and throat swab collections.'
 },
 {
 question: 'How do I request a home collection?',
 answer: 'You can request home collection online through our dedicated Home Collection page, by calling us, or via WhatsApp. We will confirm your appointment and provide preparation instructions.'
 },
 {
 question: 'Is there an extra charge for home collection?',
 answer: 'Yes, a home collection fee applies in addition to the cost of your specific tests. The fee depends on your location. Contact us for exact pricing in your area.'
 },
 {
 question: 'Where is the home collection service available?',
 answer: 'Home collection is currently available in Addis Ababa where accessible. Contact us to confirm availability in your specific area before booking.'
 },
 {
 question: 'What time can I schedule a home collection?',
 answer: 'Home collections are available daily from 7:00 AM to 6:00 PM. We recommend booking at least 24 hours in advance to ensure availability.'
 },
 {
 question: 'Are the results the same quality as in-center tests?',
 answer: 'Yes. Samples collected at home are transported immediately to our laboratory and processed with the exact same quality standards as in-center collections.'
 }
 ],
 corporate: [
 {
 question: 'What corporate health services does Guardians offer?',
 answer: 'We offer pre-employment medical screening, employee health screening, occupational health services, periodic employee checkups, institutional health screening, and on-site mobile health services.'
 },
 {
 question: 'Which types of organizations do you work with?',
 answer: 'We work with companies, NGOs, schools and universities, factories, construction companies, government institutions, and other organizations of all sizes.'
 },
 {
 question: 'How do we get a quote for our organization?',
 answer: 'Submit a corporate inquiry through our Corporate Services page. Provide your organization type, number of employees, and services needed. Our team will contact you within 24 hours with a customized proposal.'
 },
 {
 question: 'Can you come to our workplace?',
 answer: 'Yes, we offer on-site mobile health services where our team brings health screening directly to your premises. This minimizes disruption to your workday.'
 },
 {
 question: 'How long does employee health screening take?',
 answer: 'Basic screening takes approximately 1–2 hours per employee. Comprehensive screening can take 3–4 hours. We work with your schedule to minimize workplace disruption.'
 },
 {
 question: 'Do you provide health reports for our organization?',
 answer: 'Yes. We provide individual results to each employee and, with appropriate consent, can provide anonymous aggregate health reports for your organization\'s wellness planning.'
 }
 ]
 };

 const emergencyInfo = {
 title: 'Emergency Services',
 description: 'For urgent medical situations requiring immediate diagnostic services',
 phone: '+251 911 000 911',
 hours: 'Available 24/7'
 };

 return (
 <div className="theme-bg-background">
 {/* Hero Section */}
 <section className="relative h-[400px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Frequently Asked Questions"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 Frequently Asked Questions
 </h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Find answers to common questions about our services, appointments, test preparation, and more.
 </p>
 <Link
 to="/contact"
 className="theme-btn-primary font-semibold px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Ask a Question
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Quick Stats */}
 <section className="py-16 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
 {[
 { icon: ClockIcon, value: '24-48 hrs', label: 'Average result time' },
 { icon: ShieldCheckIcon, value: '99.8%', label: 'Accuracy rate' },
 { icon: UserGroupIcon, value: '50,000+', label: 'Patients served' },
 { icon: HeartIcon, value: '24/7', label: 'Emergency support' }
 ].map((stat, index) => (
 <div key={index} className="theme-bg-card text-center p-6 rounded-2xl theme-shadow-lg border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">
 <div className="theme-icon-bg-navy w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
 <stat.icon className="h-8 w-8 theme-icon-navy" />
 </div>
 <div className="text-2xl font-bold theme-text-primary">{stat.value}</div>
 <div className="theme-text-secondary">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ Categories and Content */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">FIND ANSWERS</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Common Questions & Answers
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Browse through our most frequently asked questions organized by category. Can't find what you're looking for? Contact us directly.
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
 {/* Category Navigation */}
 <div className="lg:col-span-1">
 <div className="theme-bg-card rounded-2xl theme-shadow-lg p-6 sticky top-6 border-l-4 border-guardians-cyan">
 <h3 className="text-lg font-bold theme-text-primary mb-4">Categories</h3>
 <nav className="space-y-2">
 {categories.map((category) => (
 <button
 key={category.id}
 onClick={() => setActiveCategory(category.id)}
 className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
 activeCategory === category.id
 ? 'bg-guardians-navy text-white'
 : 'theme-text-secondary theme-hover'
 }`}
 >
 <category.icon className="h-5 w-5 mr-3" />
 <span className="text-sm font-medium">{category.name}</span>
 </button>
 ))}
 </nav>
 </div>
 </div>

 {/* FAQ Content */}
 <div className="lg:col-span-3">
 <div className="theme-bg-card rounded-2xl theme-shadow-lg p-8 border-l-4 border-guardians-navy">
 <div className="flex items-center mb-6">
 {(() => {
 const category = categories.find(cat => cat.id === activeCategory);
 const IconComponent = category?.icon;
 return IconComponent ? <IconComponent className="h-8 w-8 theme-icon-navy mr-3" /> : null;
 })()}
 <h3 className="text-2xl font-bold theme-text-primary">
 {categories.find(cat => cat.id === activeCategory)?.name}
 </h3>
 </div>

 <div className="space-y-4">
 {faqData[activeCategory]?.map((faq, index) => (
 <div key={index} className="theme-border border rounded-lg">
 <button
 onClick={() => toggleFAQ(`${activeCategory}-${index}`)}
 className="w-full flex items-center justify-between p-6 text-left theme-hover transition-colors rounded-lg"
 >
 <span className="font-semibold theme-text-primary pr-4">{faq.question}</span>
 {openFAQ === `${activeCategory}-${index}` ? (
 <ChevronUpIcon className="h-5 w-5 theme-icon-navy flex-shrink-0" />
 ) : (
 <ChevronDownIcon className="h-5 w-5 theme-icon-navy flex-shrink-0" />
 )}
 </button>
 {openFAQ === `${activeCategory}-${index}` && (
 <div className="px-6 pb-6">
 <div className="theme-border border-t pt-4">
 <p className="theme-text-secondary leading-relaxed">{faq.answer}</p>
 </div>
 </div>
 )}
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Emergency Information */}
 <section className="py-16 bg-red-600">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-red-300">
 <div className="flex items-center justify-between flex-wrap gap-6">
 <div className="flex items-center space-x-6">
 <div className="bg-white/20 p-4 rounded-2xl">
 <ExclamationTriangleIcon className="h-8 w-8 text-white" />
 </div>
 <div className="text-white">
 <h3 className="text-2xl font-bold mb-1">{emergencyInfo.title}</h3>
 <p className="text-red-100 mb-1">{emergencyInfo.description}</p>
 <p className="text-red-200 text-sm">{emergencyInfo.hours}</p>
 </div>
 </div>
 <a
 href={`tel:${emergencyInfo.phone}`}
 className="bg-white text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-red-50 transition-colors inline-flex items-center shadow-lg"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 {emergencyInfo.phone}
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* Still Have Questions */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="theme-bg-card rounded-2xl p-12 border-l-4 border-guardians-cyan theme-shadow-lg">
 <div className="theme-icon-bg-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
 <InformationCircleIcon className="h-8 w-8 theme-icon-navy" />
 </div>
 <h2 className="text-3xl font-bold theme-text-primary mb-4">
 Still Have Questions?
 </h2>
 <p className="theme-text-secondary text-lg mb-8 max-w-2xl mx-auto">
 Can't find the answer you're looking for? Our friendly support team is here to help. 
 Contact us and we'll get back to you as soon as possible.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 to="/contact"
 className="theme-btn-primary font-semibold px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg"
 >
 <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
 Ask a Question
 </Link>
 <a
 href="tel:+251911234567"
 className="theme-bg-surface theme-border border-2 theme-text-primary font-semibold px-8 py-4 rounded-lg theme-hover transition-colors inline-flex items-center"
 >
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call: +251 911 234 567
 </a>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
};

export default FAQ;
