import { 
 DocumentTextIcon,
 ScaleIcon,
 ExclamationTriangleIcon,
 ShieldCheckIcon,
 ClockIcon,
 PhoneIcon,
 EnvelopeIcon,
 BanknotesIcon,
 UserGroupIcon,
 ComputerDesktopIcon
} from '@heroicons/react/24/outline';

const Terms = () => {
 const lastUpdated = 'August 14, 2026';
 const effectiveDate = 'August 14, 2026';

 const sections = [
 {
 id: 'acceptance',
 title: 'Acceptance of Terms',
 icon: DocumentTextIcon,
 content: `By accessing our website, scheduling appointments, or using any of our medical services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms constitute a legally binding agreement between you and Guardians Diagnostic Center. We reserve the right to update these terms at any time, and continued use of our services after changes indicates your acceptance of the modified terms.`
 },
 {
 id: 'services',
 title: 'Medical Services and Scope',
 icon: ShieldCheckIcon,
 content: {
 intro: 'Guardians Diagnostic Center provides comprehensive diagnostic and healthcare services including:',
 current: [
 'General health check-ups and consultations',
 'Laboratory testing and analysis',
 'Diagnostic imaging services',
 'Preventive health screenings',
 'Corporate health programs',
 'Health education and counseling'
 ],
 future: [
 'Advanced diagnostic imaging (CT, MRI)',
 'Specialized clinics and departments',
 'Expanded laboratory services',
 'Mammography services',
 'Additional imaging modalities',
 'Hospital and emergency services'
 ],
 note: 'Future services are planned expansions and are not currently available. We will update our service offerings and notify patients when new services become available.'
 }
 },
 {
 id: 'appointments',
 title: 'Appointment Policies',
 icon: ClockIcon,
 content: {
 scheduling: [
 'Appointments can be scheduled online, by phone, or in person',
 'We recommend scheduling at least 24-48 hours in advance',
 'Emergency appointments may be available based on availability',
 'Confirmation will be sent via SMS, email, or phone call'
 ],
 cancellation: [
 'Appointments must be cancelled at least 24 hours in advance',
 'Late cancellations (less than 24 hours) may incur fees',
 'No-show appointments may result in charges',
 'Repeated no-shows may result in service restrictions'
 ],
 preparation: [
 'Follow all pre-appointment instructions provided',
 'Bring valid identification and insurance information',
 'Arrive 15-30 minutes before your scheduled time',
 'Inform us of any changes in your health status'
 ]
 }
 },
 {
 id: 'payment',
 title: 'Payment Terms and Billing',
 icon: BanknotesIcon,
 content: {
 payment: [
 'Payment is due at the time of service unless prior arrangements are made',
 'We accept cash, credit cards, debit cards, and bank transfers',
 'Insurance claims will be processed according to your policy terms',
 'Patients are responsible for understanding their insurance coverage'
 ],
 fees: [
 'Service fees are based on current fee schedules available at reception',
 'Additional fees may apply for rush services or after-hours care',
 'Late payment fees may be charged for overdue accounts',
 'Collection fees may be added to delinquent accounts'
 ],
 insurance: [
 'We work with major insurance providers in Ethiopia',
 'Prior authorization may be required for certain services',
 'Patients are responsible for co-pays and deductibles',
 'Services not covered by insurance are the patient\'s responsibility'
 ]
 }
 },
 {
 id: 'patient-responsibilities',
 title: 'Patient Rights and Responsibilities',
 icon: UserGroupIcon,
 content: {
 rights: [
 'Right to respectful and dignified treatment',
 'Right to privacy and confidentiality of medical information',
 'Right to informed consent for all treatments and procedures',
 'Right to access your medical records',
 'Right to refuse treatment (with informed consent)',
 'Right to file complaints about care or service'
 ],
 responsibilities: [
 'Provide accurate and complete health information',
 'Follow treatment plans and medical advice',
 'Respect staff, other patients, and facility property',
 'Arrive on time for appointments',
 'Pay for services according to agreed terms',
 'Notify us immediately of any adverse reactions or concerns'
 ]
 }
 },
 {
 id: 'website-terms',
 title: 'Website Use and Online Services',
 icon: ComputerDesktopIcon,
 content: {
 use: [
 'Our website is for informational and service purposes only',
 'Online appointment booking is subject to confirmation',
 'Medical advice should not be based solely on website information',
 'Users must be 18+ or have parental consent to use online services'
 ],
 prohibited: [
 'Using the website for illegal or unauthorized purposes',
 'Attempting to gain unauthorized access to systems',
 'Transmitting viruses or malicious code',
 'Interfering with website functionality',
 'Copying or distributing content without permission'
 ],
 content: [
 'All website content is owned by Guardians Diagnostic Center',
 'Information is for general educational purposes',
 'Medical information does not replace professional consultation',
 'We reserve the right to update content without notice'
 ]
 }
 },
 {
 id: 'privacy-security',
 title: 'Privacy and Data Security',
 icon: ShieldCheckIcon,
 content: `We are committed to protecting your personal and health information in accordance with applicable privacy laws, including HIPAA and Ethiopian data protection regulations.

Our comprehensive Privacy Policy, available separately, details how we collect, use, and protect your information. Key points include:

• We only collect information necessary for providing medical services
• Your information is never shared without your consent except as required by law
• We use industry-standard security measures to protect your data
• You have rights to access, correct, and control your personal information

By using our services, you consent to our privacy practices as outlined in our Privacy Policy.`
 },
 {
 id: 'liability',
 title: 'Limitation of Liability',
 icon: ScaleIcon,
 content: `While we strive to provide the highest quality medical care, certain limitations apply:

Medical Services: Our liability for medical services is limited to the standard of care expected in the medical community. We maintain professional liability insurance as required by law.

Website and Technology: We are not liable for technical issues, service interruptions, or information errors on our website.

Third-Party Services: We are not responsible for services provided by third-party contractors, laboratories, or referring physicians.

Maximum Liability: Except as prohibited by law, our total liability shall not exceed the amount paid for the specific service in question.

Emergency Situations: In medical emergencies, call emergency services immediately. Our services do not replace emergency medical care.`
 },
 {
 id: 'termination',
 title: 'Termination of Services',
 icon: ExclamationTriangleIcon,
 content: {
 reasons: [
 'Non-payment of fees after reasonable notice',
 'Failure to follow treatment recommendations',
 'Abusive or threatening behavior toward staff',
 'Providing false information or insurance fraud',
 'Violation of facility policies or these terms'
 ],
 process: [
 'Written notice will be provided when possible',
 'Emergency care will be provided during transition period',
 'Medical records will be transferred as requested',
 'Outstanding balances remain due after termination'
 ]
 }
 },
 {
 id: 'governing-law',
 title: 'Governing Law and Disputes',
 icon: ScaleIcon,
 content: `These Terms of Service are governed by the laws of the Federal Democratic Republic of Ethiopia. Any disputes arising from these terms or our services shall be resolved according to Ethiopian law.

Dispute Resolution Process:
1. Initial complaint to our Patient Relations Department
2. Internal review and attempted resolution
3. Mediation through recognized Ethiopian mediation services
4. Legal action in appropriate Ethiopian courts if necessary

We encourage patients to work with us to resolve any concerns before pursuing legal action. Our goal is always to provide excellent care and service that meets your needs and expectations.`
 }
 ];

 const contactInfo = {
 address: 'Bole Sub-City, Addis Ababa, Ethiopia',
 phone: '+251 911 234 567',
 email: 'info@guardians-diagnostic.com',
 hours: 'Mon-Fri: 7:00 AM - 8:00 PM, Sat: 8:00 AM - 6:00 PM'
 };

 return (
 <div className="theme-bg-background min-h-screen">
 {/* Header */}
 <section className="relative h-[400px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Terms of Service"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
 
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
 <div className="flex items-center justify-center mb-6">
 <ScaleIcon className="h-12 w-12 mr-4" />
 <h1 className="text-3xl lg:text-4xl font-bold">Terms of Service</h1>
 </div>
 <p className="text-xl text-blue-100 text-center mb-4">
 Legal terms and conditions for using Guardians Diagnostic Center services
 </p>
 <div className="text-center text-blue-200 space-y-1">
 <p>Last Updated: {lastUpdated}</p>
 <p>Effective Date: {effectiveDate}</p>
 </div>
 </div>
 </div>
 </section>

 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
 {/* Introduction */}
 <div className="theme-bg-card rounded-2xl theme-shadow-lg p-8 mb-12 border-l-4 border-guardians-cyan">
 <h2 className="text-2xl font-bold theme-text-primary mb-4">Welcome to Guardians Diagnostic Center</h2>
 <p className="theme-text-secondary leading-relaxed mb-6">
 These Terms of Service ("Terms") govern your use of Guardians Diagnostic Center's medical services, 
 website, and facilities. Please read these terms carefully before using our services or accessing our website.
 </p>
 
 <div className="theme-icon-bg-navy border-l-4 border-guardians-navy p-4 mb-6 rounded-lg">
 <div className="flex items-start">
 <DocumentTextIcon className="h-5 w-5 theme-icon-navy mr-3 mt-1 flex-shrink-0" />
 <div>
 <h3 className="font-semibold theme-text-primary-brand mb-1">Important Legal Document</h3>
 <p className="text-sm theme-text-secondary">
 These terms create a legal agreement between you and Guardians Diagnostic Center. 
 By using our services, you agree to these terms. If you have questions about any 
 provision, please contact us before using our services.
 </p>
 </div>
 </div>
 </div>

 <p className="theme-text-secondary leading-relaxed">
 Our commitment is to provide exceptional healthcare services while maintaining the highest 
 standards of medical ethics, patient safety, and legal compliance.
 </p>
 </div>

 {/* Table of Contents */}
 <div className="theme-bg-card rounded-2xl theme-shadow-lg p-8 mb-12 border-l-4 border-guardians-navy">
 <h2 className="text-xl font-bold theme-text-primary mb-6">Table of Contents</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {sections.map((section, index) => (
 <a
 key={section.id}
 href={`#${section.id}`}
 className="flex items-center p-3 rounded-lg theme-hover transition-colors"
 >
 <span className="text-sm font-medium theme-text-primary-brand mr-2">
 {String(index + 1).padStart(2, '0')}.
 </span>
 <section.icon className="h-4 w-4 theme-text-muted mr-3 flex-shrink-0" />
 <span className="text-sm theme-text-secondary hover:theme-text-primary-brand transition-colors">
 {section.title}
 </span>
 </a>
 ))}
 </div>
 </div>

 {/* Main Content Sections */}
 <div className="space-y-8">
 {sections.map((section, index) => (
 <div key={section.id} id={section.id} className="theme-bg-card rounded-2xl theme-shadow-lg p-8 border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">
 <div className="flex items-center mb-6">
 <span className="text-lg font-bold theme-text-primary-brand mr-4">
 {String(index + 1).padStart(2, '0')}.
 </span>
 <section.icon className="h-8 w-8 theme-icon-navy mr-4 flex-shrink-0" />
 <h2 className="text-2xl font-bold theme-text-primary">{section.title}</h2>
 </div>

 {typeof section.content === 'string' ? (
 <div>
 {section.content.split('\n\n').map((paragraph, pIndex) => (
 <p key={pIndex} className="theme-text-secondary leading-relaxed mb-4">
 {paragraph}
 </p>
 ))}
 </div>
 ) : (
 <div className="space-y-6">
 {section.id === 'services' && (
 <>
 <p className="theme-text-secondary leading-relaxed">{section.content.intro}</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-green-50 rounded-lg p-6">
 <h3 className="text-lg font-semibold text-green-800 mb-4">Currently Available Services</h3>
 <ul className="space-y-2">
 {section.content.current.map((service, sIndex) => (
 <li key={sIndex} className="flex items-start text-green-700">
 <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
 {service}
 </li>
 ))}
 </ul>
 </div>
 <div className="bg-blue-50 rounded-lg p-6">
 <h3 className="text-lg font-semibold text-blue-800 mb-4">Future Expansion Plans</h3>
 <ul className="space-y-2">
 {section.content.future.map((service, sIndex) => (
 <li key={sIndex} className="flex items-start text-blue-700">
 <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
 {service}
 </li>
 ))}
 </ul>
 </div>
 </div>
 <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
 <p className="text-sm text-yellow-800"><strong>Note:</strong> {section.content.note}</p>
 </div>
 </>
 )}

 {section.id !== 'services' && Object.keys(section.content).map((key) => (
 <div key={key}>
 <h3 className="text-lg font-semibold theme-text-primary mb-3 capitalize">
 {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
 </h3>
 {Array.isArray(section.content[key]) ? (
 <ul className="space-y-2">
 {section.content[key].map((item, itemIndex) => (
 <li key={itemIndex} className="flex items-start theme-text-secondary">
 <div className="w-2 h-2 bg-guardians-navy rounded-full mt-2 mr-3 flex-shrink-0"></div>
 {item}
 </li>
 ))}
 </ul>
 ) : (
 <p className="theme-text-secondary leading-relaxed">{section.content[key]}</p>
 )}
 </div>
 ))}
 </div>
 )}
 </div>
 ))}
 </div>

 {/* Emergency Contact Information */}
 <div className="mt-16 bg-red-50 border-l-4 border-guardians-red rounded-2xl p-8 theme-shadow-lg">
 <div className="flex items-center mb-4">
 <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
 <h2 className="text-2xl font-bold text-red-800">Medical Emergency Notice</h2>
 </div>
 <p className="text-red-700 mb-4 font-medium">
 In case of medical emergency, call emergency services immediately at 911 or go to the nearest emergency room.
 </p>
 <p className="text-red-600 text-sm">
 Our services are not intended for emergency medical situations. Do not use our website or contact 
 forms for urgent medical needs. Emergency services should be contacted immediately for any 
 life-threatening situations.
 </p>
 </div>

 {/* Contact Information */}
 <div className="mt-12 theme-bg-primary rounded-2xl p-8 text-white border-l-4 border-guardians-cyan">
 <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
 <p className="text-blue-100 text-center mb-8">
 Questions about these Terms of Service? Contact us using any of the methods below.
 </p>
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
 <PhoneIcon className="h-6 w-6 mx-auto mb-2" />
 <h3 className="font-semibold mb-1">Phone</h3>
 <a href={`tel:${contactInfo.phone}`} className="text-sm hover:underline">{contactInfo.phone}</a>
 </div>
 <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
 <EnvelopeIcon className="h-6 w-6 mx-auto mb-2" />
 <h3 className="font-semibold mb-1">Email</h3>
 <a href={`mailto:${contactInfo.email}`} className="text-sm hover:underline">{contactInfo.email}</a>
 </div>
 <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
 <ClockIcon className="h-6 w-6 mx-auto mb-2" />
 <h3 className="font-semibold mb-1">Hours</h3>
 <p className="text-sm">{contactInfo.hours}</p>
 </div>
 <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
 <DocumentTextIcon className="h-6 w-6 mx-auto mb-2" />
 <h3 className="font-semibold mb-1">Address</h3>
 <p className="text-sm">{contactInfo.address}</p>
 </div>
 </div>
 </div>

 {/* Agreement Statement */}
 <div className="mt-12 theme-bg-surface rounded-2xl p-8 text-center border-l-4 border-guardians-cyan">
 <h3 className="text-xl font-bold theme-text-primary mb-4">Agreement Acknowledgment</h3>
 <p className="theme-text-secondary leading-relaxed max-w-3xl mx-auto">
 By scheduling an appointment, using our website, or receiving services from Guardians Diagnostic Center, 
 you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
 These terms are effective as of the date listed above and will remain in effect until updated.
 </p>
 </div>
 </div>
 </div>
 );
};

export default Terms;
