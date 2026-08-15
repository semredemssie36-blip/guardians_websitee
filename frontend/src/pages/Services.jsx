import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 BeakerIcon,
 CameraIcon,
 SpeakerWaveIcon,
 HeartIcon,
 UserIcon,
 ShieldCheckIcon,
 CheckCircleIcon,
 ClockIcon,
 ArrowRightIcon,
 ExclamationTriangleIcon,
 CalendarDaysIcon,
 InformationCircleIcon,
 DocumentTextIcon,
 ChevronDownIcon,
 ChevronUpIcon
} from '@heroicons/react/24/outline';

const Services = () => {
 const [expandedService, setExpandedService] = useState(null);
 const [selectedCategory, setSelectedCategory] = useState('all');

 const toggleExpand = (id) => {
 setExpandedService(expandedService === id ? null : id);
 };

 const categories = [
 { id: 'all', name: 'All Services' },
 { id: 'laboratory', name: 'Laboratory' },
 { id: 'imaging', name: 'Imaging' },
 { id: 'cardiac', name: 'Cardiac' },
 { id: 'consultation', name: 'Consultation' },
 { id: 'screening', name: 'Health Screening' }
 ];

 const services = [
 {
 id: 1,
 name: 'Laboratory Services',
 icon: BeakerIcon,
 category: 'laboratory',
 color: 'text-blue-600',
 bgColor: 'bg-blue-100',
 border: 'border-guardians-navy',
 price: 'From ETB 150',
 turnaround: '4–24 hours',
 image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 description: 'Comprehensive laboratory testing with state-of-the-art equipment and qualified technicians. Each test is reviewed by experienced medical professionals to ensure accurate, reliable results.',
 availableTests: [
 { name: 'Hematology', detail: 'Complete Blood Count (CBC), Blood Typing, Differential Count' },
 { name: 'Clinical Chemistry', detail: 'Liver Function, Kidney Function, Lipid Profile, Blood Glucose' },
 { name: 'Serology & Immunology', detail: 'Infectious Disease Testing, Hepatitis, HIV Screening' },
 { name: 'Urinalysis', detail: 'Comprehensive Urine Testing, Microscopy, Culture' },
 { name: 'Stool Examination', detail: 'Parasitology, Occult Blood, Culture & Sensitivity' },
 { name: 'Routine Laboratory Investigations', detail: 'All standard diagnostic lab panels' }
 ],
 preparation: [
 'Fasting for 8–12 hours is required for blood glucose and lipid profile tests',
 'Water is allowed during fasting periods',
 'Continue taking regular medications unless your doctor advises otherwise',
 'Inform our staff of any medications or supplements you are taking',
 'For urine tests, collect mid-stream sample in the container provided'
 ],
 whatToExpect: [
 'A trained phlebotomist will collect your blood sample quickly and safely',
 'Most blood draws take only 5–10 minutes',
 'You may feel a slight pinch — discomfort is minimal and brief',
 'A small bandage will be applied after collection',
 'You can resume normal activities immediately after most lab tests'
 ],
 resultInfo: [
 'Most routine results are ready within 4–24 hours',
 'You will be notified by SMS or phone when your results are ready',
 'Results can be collected in person, accessed online, or sent to your doctor',
 'A qualified doctor will review your results and provide guidance if needed',
 'All results are stored securely and kept confidential'
 ]
 },
 {
 id: 2,
 name: 'Digital X-Ray',
 icon: CameraIcon,
 category: 'imaging',
 color: 'text-green-600',
 bgColor: 'bg-green-100',
 border: 'border-guardians-cyan',
 price: 'From ETB 300',
 turnaround: 'Immediate results',
 image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 description: 'Advanced digital X-ray imaging with immediate results and reduced radiation exposure compared to traditional X-ray. Our experienced radiologists provide accurate interpretations for all examinations.',
 availableTests: [
 { name: 'Chest X-Ray', detail: 'Lungs, heart, and chest cavity assessment' },
 { name: 'Bone X-Ray', detail: 'Fractures, joint problems, bone density assessment' },
 { name: 'Abdominal X-Ray', detail: 'Abdominal organs, bowel assessment' },
 { name: 'Spine X-Ray', detail: 'Cervical, thoracic, and lumbar spine' },
 { name: 'Dental X-Ray', detail: 'Teeth, jaw, and oral cavity' },
 { name: 'Emergency X-Ray', detail: 'Priority imaging for urgent cases' }
 ],
 preparation: [
 'Remove all jewelry, metal objects, and accessories before your exam',
 'Wear comfortable, loose-fitting clothing without metal fasteners',
 'Inform our staff if you are or might be pregnant',
 'Inform staff of any metal implants, pacemakers, or prosthetics',
 'No fasting is required for most X-ray examinations'
 ],
 whatToExpect: [
 'You will be positioned by our radiographer for the best image quality',
 'The X-ray itself takes only a few seconds — the whole process takes 10–15 minutes',
 'You may be asked to hold your breath briefly during chest X-rays',
 'There is no pain involved — you will only feel the positioning',
 'Digital images are available immediately for doctor review'
 ],
 resultInfo: [
 'Digital images are available immediately after your examination',
 'A radiologist will review and report on your images',
 'Written reports are typically ready within 1–2 hours',
 'Results can be provided digitally or as printed copies',
 'Images can be shared electronically with your referring doctor'
 ]
 },
 {
 id: 3,
 name: 'Ultrasound',
 icon: SpeakerWaveIcon,
 category: 'imaging',
 color: 'text-purple-600',
 bgColor: 'bg-purple-100',
 border: 'border-guardians-navy',
 price: 'From ETB 500',
 turnaround: '30–60 minutes',
 image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 description: 'Professional ultrasound imaging using high-frequency sound waves — completely safe, radiation-free, and painless. Performed by experienced sonographers and reviewed by qualified radiologists.',
 availableTests: [
 { name: 'Abdominal Ultrasound', detail: 'Liver, gallbladder, kidneys, spleen, pancreas' },
 { name: 'Pelvic Ultrasound', detail: 'Uterus, ovaries, bladder assessment' },
 { name: 'Pregnancy Ultrasound', detail: '2D, 3D, and 4D fetal imaging' },
 { name: 'Cardiac Ultrasound (Echo)', detail: 'Heart structure and function assessment' },
 { name: 'Thyroid Ultrasound', detail: 'Thyroid gland size, nodules, and blood flow' },
 { name: 'Vascular Ultrasound', detail: 'Blood vessels, DVT screening, arterial assessment' }
 ],
 preparation: [
 'Abdominal ultrasound: fast for 6–8 hours beforehand (no food or drink)',
 'Pelvic ultrasound: drink 4–6 glasses of water and do not empty your bladder',
 'Pregnancy ultrasound: follow specific instructions given at booking',
 'Wear loose, comfortable clothing that allows easy access to the area',
 'Remove jewelry or clothing with metal in the examination area'
 ],
 whatToExpect: [
 'A clear gel will be applied to your skin — it may feel cold initially',
 'Our sonographer will gently move a probe over the area being examined',
 'The exam is completely painless and uses no radiation',
 'Most ultrasound exams take between 20–45 minutes',
 'You may be asked to change position during the exam for better images'
 ],
 resultInfo: [
 'Preliminary findings can often be discussed immediately after your scan',
 'A full written report is prepared by a qualified radiologist',
 'Reports are typically ready within 24 hours',
 'Images and reports can be shared with your referring doctor',
 'Follow-up recommendations will be included in your report if needed'
 ]
 },
 {
 id: 4,
 name: 'ECG',
 icon: HeartIcon,
 category: 'cardiac',
 color: 'text-red-600',
 bgColor: 'bg-red-100',
 border: 'border-guardians-red',
 price: 'From ETB 200',
 turnaround: '15–30 minutes',
 image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 description: 'Electrocardiogram (ECG) records the electrical activity of your heart to evaluate heart rhythm, detect abnormalities, and assess cardiovascular health. Reviewed by our cardiologist.',
 availableTests: [
 { name: 'Resting ECG (12-lead)', detail: 'Standard cardiac assessment at rest' },
 { name: 'Exercise Stress Test ECG', detail: 'Heart assessment during physical activity' },
 { name: 'Holter Monitoring (24-hour ECG)', detail: 'Continuous heart rhythm recording over 24 hours' },
 { name: 'Event Monitor ECG', detail: 'On-demand recording when symptoms occur' },
 { name: 'Pediatric ECG', detail: 'Heart assessment for children and infants' },
 { name: 'Pre-operative ECG', detail: 'Cardiac clearance before surgical procedures' }
 ],
 preparation: [
 'Avoid caffeine (coffee, tea, energy drinks) for at least 2 hours before the test',
 'Avoid strenuous exercise on the day of your ECG',
 'Wear a comfortable two-piece outfit for easy electrode placement',
 'Do not apply lotions, oils, or creams to your chest on the day of the test',
 'Continue taking your regular heart medications unless advised otherwise by your doctor'
 ],
 whatToExpect: [
 'Small electrode stickers will be placed on your chest, arms, and legs',
 'You will lie still and breathe normally during the recording',
 'The resting ECG takes only 5–10 minutes and is completely painless',
 'No electricity enters your body — the ECG only records your heart\'s activity',
 'You may need an ECG if you have chest pain, palpitations, shortness of breath, or dizziness'
 ],
 resultInfo: [
 'ECG recordings are read and interpreted by our cardiologist',
 'Results for resting ECG are usually available within 30–60 minutes',
 'A written report will explain your heart rhythm and any findings',
 'Abnormal results will be flagged and our team will advise on next steps',
 'Results can be forwarded directly to your referring physician'
 ]
 },
 {
 id: 5,
 name: 'General Consultation',
 icon: UserIcon,
 category: 'consultation',
 color: 'text-teal-600',
 bgColor: 'bg-teal-100',
 border: 'border-guardians-cyan',
 price: 'From ETB 400',
 turnaround: '30–45 minutes',
 image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 description: 'Guardians provides basic outpatient consultation services with experienced physicians. Our doctors support appropriate diagnostic investigations, interpret results, and provide specialist referrals when needed.',
 availableTests: [
 { name: 'General Health Check-up', detail: 'Comprehensive physical assessment and health review' },
 { name: 'Medical History Review', detail: 'Full review of your health background and concerns' },
 { name: 'Physical Examination', detail: 'Head-to-toe physical assessment by a qualified doctor' },
 { name: 'Health Risk Assessment', detail: 'Identification of risk factors and preventive measures' },
 { name: 'Preventive Care Counseling', detail: 'Guidance on lifestyle, diet, and prevention' },
 { name: 'Specialist Referrals', detail: 'Referral letters and coordination with specialists' }
 ],
 preparation: [
 'Bring a list of all current medications, including dosages',
 'Bring any previous test results, medical records, or doctor letters',
 'Bring your insurance card and valid ID',
 'Prepare a brief summary of your current health concerns and symptoms',
 'Arrive 15 minutes early to complete registration paperwork'
 ],
 whatToExpect: [
 'Your doctor will begin with a thorough review of your medical history',
 'A physical examination will be conducted in a private, comfortable room',
 'Your doctor will explain their findings and answer your questions',
 'Appropriate diagnostic tests will be recommended if needed',
 'You will leave with a clear plan — prescriptions, referrals, or follow-up instructions'
 ],
 resultInfo: [
 'Your consultation summary and recommendations are provided on the same day',
 'Prescriptions and referral letters are issued during or after the consultation',
 'If additional tests are ordered, results will be reviewed with you at follow-up',
 'Our team will follow up with you if test results require urgent attention',
 'Consultation records are stored securely and available for future visits'
 ]
 },
 {
 id: 6,
 name: 'Health Screening',
 icon: ShieldCheckIcon,
 category: 'screening',
 color: 'text-guardians-navy',
 bgColor: 'bg-blue-50',
 border: 'border-guardians-navy',
 price: 'From ETB 2,500',
 turnaround: '24–48 hours',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 description: 'Guardians offers preventive health screening services for individuals and organizations. Our packages are designed to detect health issues early — when they are most treatable. The exact tests are determined by our medical team based on age, gender, and risk factors.',
 availableTests: [
 { name: 'Basic Health Screening', detail: 'Essential tests for routine health monitoring — ideal for adults 18–40' },
 { name: 'Comprehensive Health Screening', detail: 'Full assessment for overall well-being — recommended for adults 40+' },
 { name: 'Pre-Employment Screening', detail: 'Required medical tests for employment and occupational health clearance' },
 { name: 'Employee Health Screening', detail: 'Periodic health checks for workplace wellness programs' }
 ],
 preparation: [
 'Fasting for 8–12 hours is typically required for most screening packages',
 'Bring your ID, insurance card, and any previous health records',
 'Wear comfortable clothing and avoid strenuous exercise the day before',
 'Arrive 20–30 minutes before your scheduled time for registration',
 'Specific preparation instructions will be provided when you book your package'
 ],
 whatToExpect: [
 'All screening tests are conducted at our center in a single, organized visit',
 'Our team will guide you through each test step by step',
 'Most packages are completed within 2–6 hours depending on the package',
 'A doctor will be available to answer questions during your visit',
 'A comprehensive health report will be prepared based on all your results'
 ],
 resultInfo: [
 'Most screening results are available within 24–48 hours',
 'You will receive a comprehensive written health report',
 'A doctor consultation is included to review your results and provide guidance',
 'Recommendations for follow-up care or lifestyle changes will be included',
 'Results are stored securely and can be shared with your doctor or employer'
 ]
 }
 ];

 const filteredServices = selectedCategory === 'all'
 ? services
 : services.filter(s => s.category === selectedCategory);

 const futureServices = [
 { name: 'CT Scanning', description: 'Advanced computed tomography for detailed cross-sectional imaging', expectedLaunch: '2027 Q2', icon: CameraIcon },
 { name: 'MRI Services', description: 'Magnetic resonance imaging for detailed soft tissue examination', expectedLaunch: '2027 Q4', icon: SpeakerWaveIcon },
 { name: 'Mammography', description: 'Specialized breast imaging for cancer screening and detection', expectedLaunch: '2027 Q3', icon: HeartIcon }
 ];

 return (
 <div className="theme-bg-background">

 {/* Hero */}
 <section className="relative h-[500px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Medical Services at Guardians Diagnostic Center"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">Our Services</h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Comprehensive diagnostic services with advanced technology and expert medical professionals for accurate, reliable results.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link to="/appointment" className="theme-btn-primary px-8 py-4 rounded-lg flex items-center justify-center theme-shadow-lg">
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book a Service
 </Link>
 <Link to="/packages" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors flex items-center justify-center">
 Health Packages
 <ArrowRightIcon className="h-5 w-5 ml-2" />
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Category Filter */}
 <section className="py-12 theme-bg-surface theme-border border-b sticky top-0 z-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-wrap justify-center gap-3">
 {categories.map((cat) => (
 <button
 key={cat.id}
 onClick={() => setSelectedCategory(cat.id)}
 className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 border-l-4 text-sm ${
 selectedCategory === cat.id
 ? 'theme-bg-primary text-white border-guardians-navy theme-shadow-md'
 : 'theme-bg-card theme-text-secondary theme-hover border-transparent hover:border-guardians-cyan'
 }`}
 >
 {cat.name}
 </button>
 ))}
 </div>
 </div>
 </section>

 {/* Services — each with full detail */}
 <section className="py-16 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">AVAILABLE NOW</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Our Diagnostic Services
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 All services are currently available at our center. Each service includes a clear explanation, preparation guidance, and patient information.
 </p>
 </div>

 <div className="space-y-8">
 {filteredServices.map((service) => (
 <div key={service.id} className={`theme-bg-card rounded-2xl theme-shadow-xl overflow-hidden border-l-4 ${service.border} transition-all duration-300`}>
 
 {/* Service Header */}
 <div className="grid grid-cols-1 lg:grid-cols-3">
 <div className="h-56 lg:h-auto overflow-hidden">
 <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
 </div>

 <div className="lg:col-span-2 p-8">
 <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
 <div className="flex items-center space-x-4">
 <div className={`${service.bgColor} p-3 rounded-xl`}>
 <service.icon className={`h-7 w-7 ${service.color}`} />
 </div>
 <div>
 <h3 className="text-2xl font-bold theme-text-primary">{service.name}</h3>
 <div className="flex items-center gap-4 mt-1">
 <span className="text-sm theme-text-primary-brand font-bold">{service.price}</span>
 <span className="flex items-center text-sm theme-text-secondary">
 <ClockIcon className="h-4 w-4 mr-1" />
 {service.turnaround}
 </span>
 </div>
 </div>
 </div>
 <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
 Available Now
 </span>
 </div>

 <p className="theme-text-secondary leading-relaxed mb-6">{service.description}</p>

 {/* Available Examinations */}
 <div className="mb-6">
 <h4 className="font-bold theme-text-primary mb-3 flex items-center">
 <DocumentTextIcon className="h-5 w-5 mr-2 theme-text-primary-brand" />
 Available Examinations
 </h4>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 {service.availableTests.slice(0, 4).map((test, i) => (
 <div key={i} className="flex items-start space-x-2">
 <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
 <div>
 <span className="text-sm font-medium theme-text-primary">{test.name}</span>
 <p className="text-xs theme-text-muted">{test.detail}</p>
 </div>
 </div>
 ))}
 {service.availableTests.length > 4 && !expandedService !== service.id && (
 <p className="text-sm theme-text-primary-brand font-medium col-span-2">
 +{service.availableTests.length - 4} more examinations available
 </p>
 )}
 </div>
 </div>

 {/* Action Buttons */}
 <div className="flex flex-col sm:flex-row gap-3">
 <Link to="/appointment" className="theme-btn-primary px-6 py-3 rounded-lg font-semibold text-center theme-shadow-lg">
 Book This Service
 </Link>
 <button
 onClick={() => toggleExpand(service.id)}
 className="theme-bg-surface theme-text-secondary px-6 py-3 rounded-lg theme-hover transition-colors font-medium flex items-center justify-center"
 >
 {expandedService === service.id ? (
 <>Less Info <ChevronUpIcon className="h-4 w-4 ml-2" /></>
 ) : (
 <>Full Patient Info <ChevronDownIcon className="h-4 w-4 ml-2" /></>
 )}
 </button>
 </div>
 </div>
 </div>

 {/* Expanded Patient Info */}
 {expandedService === service.id && (
 <div className="theme-bg-surface border-t theme-border px-8 py-8">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

 {/* Preparation */}
 <div className="theme-bg-card rounded-xl p-5 border-l-4 border-guardians-cyan theme-shadow-md">
 <h4 className="font-bold theme-text-primary mb-4 flex items-center">
 <InformationCircleIcon className="h-5 w-5 mr-2 text-guardians-cyan" />
 Preparation Requirements
 </h4>
 <ul className="space-y-2">
 {service.preparation.map((item, i) => (
 <li key={i} className="flex items-start text-sm theme-text-secondary">
 <CheckCircleIcon className="h-5 w-5 theme-icon-cyan mr-2 mt-0.5 flex-shrink-0" />
 {item}
 </li>
 ))}
 </ul>
 </div>

 {/* What to Expect */}
 <div className="theme-bg-card rounded-xl p-5 border-l-4 border-guardians-navy theme-shadow-md">
 <h4 className="font-bold theme-text-primary mb-4 flex items-center">
 <ShieldCheckIcon className="h-5 w-5 mr-2 text-guardians-navy" />
 What Patients Should Expect
 </h4>
 <ul className="space-y-2">
 {service.whatToExpect.map((item, i) => (
 <li key={i} className="flex items-start text-sm theme-text-secondary">
 <CheckCircleIcon className="h-5 w-5 theme-icon-navy mr-2 mt-0.5 flex-shrink-0" />
 {item}
 </li>
 ))}
 </ul>
 </div>

 {/* Result Information */}
 <div className="theme-bg-card rounded-xl p-5 border-l-4 border-guardians-red theme-shadow-md">
 <h4 className="font-bold theme-text-primary mb-4 flex items-center">
 <DocumentTextIcon className="h-5 w-5 mr-2 text-guardians-red" />
 Result Information
 </h4>
 <ul className="space-y-2">
 {service.resultInfo.map((item, i) => (
 <li key={i} className="flex items-start text-sm theme-text-secondary">
 <CheckCircleIcon className="h-4 w-4 text-guardians-red mr-2 mt-0.5 flex-shrink-0" />
 {item}
 </li>
 ))}
 </ul>
 </div>

 </div>

 {/* All Examinations when expanded */}
 {service.availableTests.length > 4 && (
 <div className="mt-6 theme-bg-card rounded-xl p-5 border-l-4 border-guardians-cyan theme-shadow-md">
 <h4 className="font-bold theme-text-primary mb-4">All Available Examinations</h4>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
 {service.availableTests.map((test, i) => (
 <div key={i} className="flex items-start space-x-2">
 <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
 <div>
 <span className="text-sm font-medium theme-text-primary">{test.name}</span>
 <p className="text-xs theme-text-muted">{test.detail}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 )}

 <div className="mt-6 text-center">
 <Link to="/appointment" className="theme-btn-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center theme-shadow-lg">
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book an Appointment
 </Link>
 </div>
 </div>
 )}
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Future Services */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">FUTURE EXPANSION</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Coming Soon
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 We are continuously expanding to better serve your healthcare needs. These services are planned future additions — not currently available.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {futureServices.map((service, index) => (
 <div key={index} className="theme-bg-card rounded-2xl theme-shadow-lg p-6 border-l-4 border-orange-400 hover:theme-shadow-xl transition-all duration-300">
 <div className="flex items-center mb-4">
 <div className="bg-orange-100 p-3 rounded-xl mr-4">
 <service.icon className="h-6 w-6 text-orange-600" />
 </div>
 <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
 {service.expectedLaunch}
 </span>
 </div>
 <h3 className="text-xl font-bold theme-text-primary mb-2">{service.name}</h3>
 <p className="theme-text-secondary mb-4">{service.description}</p>
 <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center">
 <ExclamationTriangleIcon className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
 <span className="text-orange-800 text-sm font-medium">Not yet available — coming {service.expectedLaunch}</span>
 </div>
 </div>
 ))}
 </div>

 <div className="text-center mt-12">
 <div className="theme-icon-bg-navy border-l-4 border-guardians-navy rounded-xl p-6 max-w-2xl mx-auto">
 <h3 className="font-bold theme-text-primary-brand mb-2">Want to be notified?</h3>
 <p className="theme-text-secondary text-sm mb-4">
 Contact us to join our notification list when new services become available.
 </p>
 <Link to="/contact" className="theme-btn-primary px-6 py-3 rounded-lg inline-flex items-center theme-shadow-lg">
 Get Notified
 <ArrowRightIcon className="h-4 w-4 ml-2" />
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Emergency */}
 <section className="py-16 bg-red-600">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
 24/7 Emergency Diagnostic Services
 </h2>
 <p className="text-red-100 text-lg mb-8">
 Need urgent diagnostic services? Our emergency team is available round-the-clock for critical medical situations.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+251911000911" className="bg-white text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-red-50 transition-colors inline-flex items-center justify-center shadow-lg">
 <HeartIcon className="h-5 w-5 mr-2" />
 Call Emergency: +251 911 000 911
 </a>
 <Link to="/contact" className="bg-red-700 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-800 transition-colors inline-flex items-center justify-center">
 Emergency Contact Info
 </Link>
 </div>
 </div>
 </section>

 </div>
 );
};

export default Services;
