import { 
 ShieldCheckIcon,
 LockClosedIcon,
 DocumentTextIcon,
 ClockIcon,
 PhoneIcon,
 EnvelopeIcon,
 ExclamationTriangleIcon,
 InformationCircleIcon
} from '@heroicons/react/24/outline';

const Privacy = () => {
 const lastUpdated = 'August 14, 2026';

 const sections = [
 {
 id: 'information-collection',
 title: 'Information We Collect',
 icon: DocumentTextIcon,
 content: [
 {
 subtitle: 'Personal Information',
 items: [
 'Name, address, phone number, and email address',
 'Date of birth and government-issued identification numbers',
 'Emergency contact information',
 'Insurance information and payment details',
 'Employment information (for corporate services)'
 ]
 },
 {
 subtitle: 'Medical Information',
 items: [
 'Medical history and current health conditions',
 'Test results and diagnostic reports',
 'Treatment records and physician notes',
 'Prescription and medication information',
 'Appointment and visit records'
 ]
 },
 {
 subtitle: 'Technical Information',
 items: [
 'IP address and browser information',
 'Device information and operating system',
 'Website usage patterns and preferences',
 'Cookies and similar tracking technologies'
 ]
 }
 ]
 },
 {
 id: 'information-use',
 title: 'How We Use Your Information',
 icon: ShieldCheckIcon,
 content: [
 {
 subtitle: 'Medical Services',
 items: [
 'Providing diagnostic and medical services',
 'Maintaining accurate medical records',
 'Coordinating care with other healthcare providers',
 'Processing insurance claims and billing',
 'Scheduling appointments and follow-up care'
 ]
 },
 {
 subtitle: 'Communication',
 items: [
 'Sending appointment reminders and test results',
 'Providing health education and wellness information',
 'Responding to inquiries and support requests',
 'Emergency notifications when medically necessary'
 ]
 },
 {
 subtitle: 'Legal and Safety',
 items: [
 'Complying with legal and regulatory requirements',
 'Protecting against fraud and unauthorized access',
 'Ensuring patient and facility safety',
 'Quality assurance and improvement activities'
 ]
 }
 ]
 },
 {
 id: 'information-sharing',
 title: 'Information Sharing and Disclosure',
 icon: LockClosedIcon,
 content: [
 {
 subtitle: 'We Share Information Only When',
 items: [
 'You provide written consent for disclosure',
 'Required by law or legal process',
 'Necessary for medical treatment coordination',
 'For public health and safety purposes',
 'With business partners under strict confidentiality agreements'
 ]
 },
 {
 subtitle: 'We Never Share Information For',
 items: [
 'Marketing purposes without your consent',
 'Commercial gain by third parties',
 'Non-medical business purposes',
 'Social media or public platforms',
 'Unauthorized research or studies'
 ]
 }
 ]
 },
 {
 id: 'data-security',
 title: 'Data Security and Protection',
 icon: LockClosedIcon,
 content: [
 {
 subtitle: 'Technical Safeguards',
 items: [
 'Encryption of sensitive data in transit and at rest',
 'Secure servers with regular security updates',
 'Multi-factor authentication for staff access',
 'Regular security audits and vulnerability assessments',
 'Secure backup and disaster recovery procedures'
 ]
 },
 {
 subtitle: 'Administrative Safeguards',
 items: [
 'HIPAA-compliant policies and procedures',
 'Regular staff training on privacy and security',
 'Role-based access controls',
 'Incident response and breach notification procedures',
 'Business associate agreements with third parties'
 ]
 },
 {
 subtitle: 'Physical Safeguards',
 items: [
 'Secured facilities with controlled access',
 'Locked filing cabinets for paper records',
 'Secure disposal of confidential information',
 'Protected computer workstations',
 'Surveillance and security systems'
 ]
 }
 ]
 },
 {
 id: 'patient-rights',
 title: 'Your Privacy Rights',
 icon: ShieldCheckIcon,
 content: [
 {
 subtitle: 'You Have the Right To',
 items: [
 'Access and review your medical records',
 'Request corrections to inaccurate information',
 'Request restrictions on information use or disclosure',
 'Receive a copy of this privacy notice',
 'File complaints about privacy practices'
 ]
 },
 {
 subtitle: 'Data Subject Rights (GDPR Compliance)',
 items: [
 'Right to be informed about data processing',
 'Right to access your personal data',
 'Right to rectification of inaccurate data',
 'Right to erasure (right to be forgotten)',
 'Right to data portability'
 ]
 }
 ]
 },
 {
 id: 'cookies-tracking',
 title: 'Cookies and Online Tracking',
 icon: InformationCircleIcon,
 content: [
 {
 subtitle: 'Types of Cookies We Use',
 items: [
 'Essential cookies for website functionality',
 'Analytics cookies to improve user experience',
 'Preference cookies to remember your settings',
 'Security cookies to protect against fraud'
 ]
 },
 {
 subtitle: 'Third-Party Services',
 items: [
 'Google Analytics for website usage statistics',
 'Payment processors for secure transactions',
 'Appointment scheduling systems',
 'Email service providers for communications'
 ]
 }
 ]
 }
 ];

 const quickActions = [
 { title: 'Request Access to Your Records', description: 'Get a copy of your medical records and personal information', action: 'Contact Patient Services', phone: '+251 911 234 567' },
 { title: 'Report Privacy Concerns', description: 'File a complaint about privacy practices', action: 'Contact Privacy Officer', email: 'privacy@guardians-diagnostic.com' },
 { title: 'Update Your Information', description: 'Correct or update your personal information', action: 'Visit Reception', info: 'Bring valid ID' }
 ];

 return (
 <div className="theme-bg-background min-h-screen">
 {/* Header */}
 <section className="relative h-[400px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Privacy Policy - Data Protection and Security"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
 
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
 <div className="flex items-center justify-center mb-6">
 <ShieldCheckIcon className="h-12 w-12 mr-4" />
 <h1 className="text-3xl lg:text-4xl font-bold">Privacy Policy</h1>
 </div>
 <p className="text-xl text-blue-100 text-center mb-4">
 Your privacy and the security of your personal health information is our top priority
 </p>
 <p className="text-center text-blue-200">Last Updated: {lastUpdated}</p>
 </div>
 </div>
 </section>

 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
 {/* Introduction */}
 <div className="theme-bg-card rounded-2xl theme-shadow-lg p-8 mb-12 border-l-4 border-guardians-cyan">
 <h2 className="text-2xl font-bold theme-text-primary mb-4">Introduction</h2>
 <p className="theme-text-secondary leading-relaxed mb-6">
 Guardians Diagnostic Center ("we," "our," or "us") is committed to protecting the privacy and security 
 of your personal and health information. This Privacy Policy explains how we collect, use, disclose, 
 and protect your information when you use our services, visit our website, or interact with our healthcare providers.
 </p>
 
 <div className="bg-yellow-50 border-l-4 border-orange-400 p-4 mb-6 rounded-lg">
 <div className="flex items-start">
 <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
 <div>
 <h3 className="font-semibold text-yellow-800 mb-1">Important Notice</h3>
 <p className="text-sm text-yellow-700">
 This policy complies with Ethiopian privacy laws, HIPAA, and GDPR where applicable. 
 By using our services, you agree to the practices described in this policy.
 </p>
 </div>
 </div>
 </div>

 <p className="theme-text-secondary leading-relaxed">
 We understand that your health information is highly sensitive and personal. We are legally required to 
 maintain the privacy of your protected health information and to provide you with this notice of our legal 
 duties and privacy practices.
 </p>
 </div>

 {/* Main Content Sections */}
 <div className="space-y-8">
 {sections.map((section) => (
 <div key={section.id} id={section.id} className="theme-bg-card rounded-2xl theme-shadow-lg p-8 border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">
 <div className="flex items-center mb-6">
 <section.icon className="h-8 w-8 theme-icon-navy mr-4 flex-shrink-0" />
 <h2 className="text-2xl font-bold theme-text-primary">{section.title}</h2>
 </div>

 <div className="space-y-6">
 {section.content.map((item, index) => (
 <div key={index}>
 <h3 className="text-lg font-semibold theme-text-primary mb-3">{item.subtitle}</h3>
 <ul className="space-y-2">
 {item.items.map((listItem, itemIndex) => (
 <li key={itemIndex} className="flex items-start theme-text-secondary">
 <div className="w-2 h-2 bg-guardians-navy rounded-full mt-2 mr-3 flex-shrink-0"></div>
 {listItem}
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 ))}
 </div>

 {/* Quick Actions */}
 <div className="mt-16">
 <h2 className="text-2xl font-bold theme-text-primary mb-8 text-center">Exercise Your Privacy Rights</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {quickActions.map((action, index) => (
 <div key={index} className="theme-bg-card rounded-2xl theme-shadow-lg p-6 text-center border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">
 <h3 className="font-semibold theme-text-primary mb-2">{action.title}</h3>
 <p className="text-sm theme-text-secondary mb-4">{action.description}</p>
 <div className="space-y-2">
 <p className="font-medium theme-text-primary-brand">{action.action}</p>
 {action.phone && (
 <a href={`tel:${action.phone}`} className="text-sm theme-text-secondary hover:theme-text-primary-brand block">
 {action.phone}
 </a>
 )}
 {action.email && (
 <a href={`mailto:${action.email}`} className="text-sm theme-text-secondary hover:theme-text-primary-brand block">
 {action.email}
 </a>
 )}
 {action.info && (
 <p className="text-sm theme-text-muted">{action.info}</p>
 )}
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Contact Information */}
 <div className="mt-16 theme-bg-primary rounded-2xl p-8 text-white text-center border-l-4 border-guardians-cyan">
 <h2 className="text-2xl font-bold mb-4">Questions About This Privacy Policy?</h2>
 <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
 If you have questions about this privacy policy or our privacy practices, please contact our Privacy Officer.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
 <div className="bg-white/10 backdrop-blur rounded-lg p-4">
 <PhoneIcon className="h-6 w-6 mx-auto mb-2" />
 <h3 className="font-semibold mb-1">Call Us</h3>
 <a href="tel:+251911234567" className="hover:underline">+251 911 234 567</a>
 </div>
 <div className="bg-white/10 backdrop-blur rounded-lg p-4">
 <EnvelopeIcon className="h-6 w-6 mx-auto mb-2" />
 <h3 className="font-semibold mb-1">Email Privacy Officer</h3>
 <a href="mailto:privacy@guardians-diagnostic.com" className="hover:underline text-sm">
 privacy@guardians-diagnostic.com
 </a>
 </div>
 </div>
 </div>

 {/* Updates Notice */}
 <div className="mt-12 theme-bg-surface rounded-2xl p-6 border-l-4 border-guardians-cyan">
 <div className="flex items-start">
 <ClockIcon className="h-6 w-6 theme-text-secondary mr-3 mt-1 flex-shrink-0" />
 <div>
 <h3 className="font-semibold theme-text-primary mb-2">Policy Updates</h3>
 <p className="text-sm theme-text-secondary">
 We may update this privacy policy from time to time to reflect changes in our practices, 
 technology, legal requirements, or other factors. We will notify you of any material changes 
 by posting the updated policy on our website and updating the "Last Updated" date. 
 We encourage you to review this policy periodically.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
};

export default Privacy;
