import { Link } from 'react-router-dom';
import {
 DocumentTextIcon,
 ClockIcon,
 ExclamationTriangleIcon,
 CheckCircleIcon,
 InformationCircleIcon,
 HeartIcon,
 BeakerIcon,
 CameraIcon,
 ArrowRightIcon,
 CalendarDaysIcon,
 ArrowDownTrayIcon,
 UserIcon,
 ShieldCheckIcon,
 PhoneIcon,
 SpeakerWaveIcon
} from '@heroicons/react/24/outline';

const PatientInfo = () => {

 // Doc topic 1 — Preparing for a blood test
 const bloodTestPrep = [
 'Fasting for 8–12 hours is required for glucose, lipid profile, and some metabolic tests. Water is allowed.',
 'For non-fasting tests (CBC, thyroid, etc.) no fasting is needed — eat and drink normally.',
 'Continue taking your regular medications unless your doctor specifically advises otherwise.',
 'Inform our staff of all medications and supplements you are taking before the test.',
 'Stay well hydrated — drink water before arriving to help with blood draw.',
 'Avoid strenuous exercise for at least 24 hours before your blood test.',
 'Avoid alcohol for at least 24 hours before fasting-based tests.',
 'Wear clothing with short or loose sleeves for easy access to your arm.'
 ];

 // Doc topic 2 — Preparing for ultrasound
 const ultrasoundPrep = [
 { name: 'Abdominal Ultrasound', prep: 'Fast for 6–8 hours beforehand. No food, drinks, gum, or smoking. Water is allowed in small amounts.' },
 { name: 'Pelvic Ultrasound', prep: 'Drink 4–6 glasses of water 1 hour before the exam. Do NOT empty your bladder — a full bladder is required for clear imaging.' },
 { name: 'Pregnancy Ultrasound', prep: 'Specific instructions will be provided at booking depending on the trimester and type of scan (2D, 3D, or 4D).' },
 { name: 'Thyroid & Neck Ultrasound', prep: 'No special preparation required. Wear comfortable clothing that allows easy access to the neck.' },
 { name: 'Cardiac Ultrasound (Echo)', prep: 'No fasting required. Wear loose, comfortable clothing. Avoid heavy exercise before the exam.' },
 { name: 'All Ultrasound Exams', prep: 'Wear loose, comfortable clothing. Remove jewelry from the area being examined. Arrive 15 minutes early.' }
 ];

 // Doc topic 3 — Preparing for X-ray
 const xrayPrep = [
 'Remove all jewelry, metal accessories, and clothing with metal fasteners (zippers, buttons) from the area being X-rayed.',
 'Wear comfortable, loose-fitting clothing — you may be asked to wear a hospital gown.',
 'Always inform our staff if you are pregnant or think you might be pregnant.',
 'Inform the technician of any metal implants, pacemakers, joint replacements, or surgical hardware.',
 'No fasting is required for most X-ray examinations.',
 'For spine or lumbar X-rays, you may be asked to remove belts and waist accessories.',
 'The procedure is quick (5–15 minutes) and completely painless.'
 ];

 // Doc topic 4 — ECG preparation
 const ecgPrep = [
 'Avoid caffeine (coffee, tea, energy drinks, cola) for at least 2–4 hours before your ECG.',
 'Avoid smoking for at least 2 hours before the test.',
 'Do not apply lotions, oils, or creams to your chest, arms, or legs on the day of the test — electrodes need clean skin contact.',
 'Wear a comfortable two-piece outfit (separate top and bottom) for easy electrode placement.',
 'Continue taking your regular heart medications unless your doctor specifically advises otherwise.',
 'Avoid strenuous exercise immediately before a resting ECG.',
 'For a Stress Test ECG, wear comfortable exercise clothing and supportive shoes.',
 'The resting ECG is completely painless and takes only 5–10 minutes.'
 ];

 // Doc topic 5 — Sample collection information
 const sampleCollection = [
 { type: 'Blood Samples', icon: BeakerIcon, color: 'text-blue-600', bg: 'bg-blue-100', info: 'Blood is collected from a vein in your arm using a sterile, single-use needle. The process takes 3–5 minutes. Minor bruising at the collection site is normal and temporary.' },
 { type: 'Urine Samples', icon: DocumentTextIcon, color: 'text-yellow-600', bg: 'bg-yellow-100', info: 'A clean-catch, mid-stream urine sample is required. A sterile container will be provided. Follow the instructions on the container label carefully for an uncontaminated sample.' },
 { type: 'Stool Samples', icon: DocumentTextIcon, color: 'text-green-600', bg: 'bg-green-100', info: 'A small stool sample is collected in a sealed container provided by our lab. Avoid contamination with toilet water. Deliver the sample to our lab within the specified time window.' },
 { type: 'Throat Swabs', icon: DocumentTextIcon, color: 'text-red-600', bg: 'bg-red-100', info: 'A trained staff member uses a sterile swab to collect cells from the back of your throat. The procedure takes only a few seconds. Slight discomfort is normal.' },
 { type: 'Home Sample Collection', icon: ShieldCheckIcon, color: 'text-purple-600', bg: 'bg-purple-100', info: 'For home collection, our trained phlebotomist will visit your location with all necessary sterile equipment. Follow the preparation instructions for your specific test before our team arrives.' }
 ];

 // Doc topic 6 — What to bring
 const whatToBring = [
 { item: 'Valid government-issued photo ID', required: true },
 { item: 'Insurance card and policy information (if applicable)', required: false },
 { item: 'Doctor referral letter (if you were referred by a physician)', required: false },
 { item: 'Previous test results or medical records relevant to your visit', required: false },
 { item: 'List of current medications and dosages', required: false },
 { item: 'Payment method — cash, bank card, or insurance', required: true },
 { item: 'Comfortable clothing suitable for your test (see preparation guides)', required: false }
 ];

 // Doc topic 7 — Appointment information
 const appointmentInfo = [
 { icon: CalendarDaysIcon, title: 'How to Book', desc: 'Book online through our website, call us, or use WhatsApp. Walk-in patients are also welcome, though appointments are recommended.', border: 'border-guardians-navy' },
 { icon: ClockIcon, title: 'Arrive Early', desc: 'Please arrive 15–20 minutes before your scheduled appointment to allow time for registration and preparation.', border: 'border-guardians-cyan' },
 { icon: InformationCircleIcon, title: 'Confirmation', desc: 'After submitting an online request, our team will contact you within 24 hours to confirm your appointment and provide preparation instructions.', border: 'border-guardians-navy' },
 { icon: ExclamationTriangleIcon, title: 'Cancellations', desc: 'If you need to cancel or reschedule, please contact us at least 24 hours in advance. Late cancellations may incur a fee.', border: 'border-guardians-red' },
 { icon: UserIcon, title: 'Walk-in Patients', desc: 'Walk-in patients are welcome for most services. Emergency cases are always prioritized. Some specialized tests require advance booking.', border: 'border-guardians-cyan' },
 { icon: ShieldCheckIcon, title: 'What Happens Next', desc: "After your test, our medical team processes your samples and prepares your results. You'll be notified when they're ready.", border: 'border-guardians-navy' }
 ];

 // Doc topic 8 — Result information
 const resultInfo = [
 { title: 'When Will Results Be Ready?', desc: 'Most routine blood tests are ready within 4–24 hours. Ultrasound and X-ray reports are typically available within 1–24 hours. Complex or specialized tests may take 2–5 business days. You will be informed of the expected timeline when you book.', icon: ClockIcon, border: 'border-guardians-navy' },
 { title: 'How Will I Be Notified?', desc: 'We will contact you by SMS, phone call, or email (if provided) as soon as your results are ready. You do not need to call us — we will reach out to you.', icon: InformationCircleIcon, border: 'border-guardians-cyan' },
 { title: 'How Do I Collect My Results?', desc: 'You can collect your results in person at our center, access them through our secure online results portal, or we can send them directly to your referring doctor. Bring your valid ID for in-person collection.', icon: ArrowDownTrayIcon, border: 'border-guardians-navy' },
 { title: 'Who Can Collect My Results?', desc: 'Only you or a person with your written authorization can collect your results. They must present their own valid ID along with your written consent.', icon: DocumentTextIcon, border: 'border-guardians-cyan' },
 { title: 'Understanding Your Results', desc: 'A qualified doctor will review your results. If your results require medical attention or follow-up, our team will advise you immediately. You can also request a consultation to discuss your results.', icon: UserIcon, border: 'border-guardians-red' },
 { title: 'How Long Are Results Stored?', desc: 'All test results are securely stored for a minimum of 7 years in compliance with medical regulations. You can request copies of older results at any time.', icon: ShieldCheckIcon, border: 'border-guardians-navy' }
 ];

 return (
 <div className="theme-bg-background">

 {/* Hero */}
 <section className="relative h-[400px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Patient Information — Guardians Diagnostic Center"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">Patient Information</h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Everything you need to know before, during, and after your visit to Guardians Diagnostic Center.
 </p>
 <Link to="/appointment" className="theme-btn-primary font-semibold px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg">
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book Appointment
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Quick nav */}
 <section className="py-8 theme-bg-surface theme-border border-b sticky top-0 z-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-wrap justify-center gap-2 text-sm">
 {[
 { label: 'Blood Test', href: '#blood-test' },
 { label: 'Ultrasound', href: '#ultrasound' },
 { label: 'X-Ray', href: '#xray' },
 { label: 'ECG', href: '#ecg' },
 { label: 'Sample Collection', href: '#sample-collection' },
 { label: 'What to Bring', href: '#what-to-bring' },
 { label: 'Appointments', href: '#appointments' },
 { label: 'Results', href: '#results' }
 ].map((nav, i) => (
 <a key={i} href={nav.href} className="theme-bg-card theme-text-primary-brand border border-guardians-cyan px-4 py-2 rounded-lg hover:bg-guardians-navy hover:text-white transition-colors font-medium">
 {nav.label}
 </a>
 ))}
 </div>
 </div>
 </section>

 {/* 1. Preparing for a Blood Test */}
 <section id="blood-test" className="py-16 theme-bg-background">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-navy">
 <div className="flex items-center mb-6">
 <div className="bg-blue-100 p-4 rounded-2xl mr-4">
 <BeakerIcon className="h-8 w-8 text-blue-600" />
 </div>
 <div>
 <span className="theme-text-primary-brand font-semibold text-sm">TOPIC 1</span>
 <h2 className="text-2xl font-bold theme-text-primary">Preparing for a Blood Test</h2>
 </div>
 </div>
 <p className="theme-text-secondary leading-relaxed mb-6">
 Blood tests are one of the most common diagnostic procedures. Following these preparation guidelines helps ensure your results are accurate.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {bloodTestPrep.map((item, i) => (
 <div key={i} className="flex items-start space-x-3">
 <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
 <p className="text-sm theme-text-secondary">{item}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 2. Preparing for Ultrasound */}
 <section id="ultrasound" className="py-16 theme-bg-surface">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-cyan">
 <div className="flex items-center mb-6">
 <div className="bg-purple-100 p-4 rounded-2xl mr-4">
 <SpeakerWaveIcon className="h-8 w-8 text-purple-600" />
 </div>
 <div>
 <span className="theme-text-primary-brand font-semibold text-sm">TOPIC 2</span>
 <h2 className="text-2xl font-bold theme-text-primary">Preparing for Ultrasound</h2>
 </div>
 </div>
 <p className="theme-text-secondary leading-relaxed mb-6">
 Ultrasound preparation varies depending on the type of exam. Please follow the specific instructions for your scan type.
 </p>
 <div className="space-y-4">
 {ultrasoundPrep.map((item, i) => (
 <div key={i} className="theme-bg-surface rounded-xl p-4 border-l-4 border-guardians-cyan">
 <p className="font-semibold theme-text-primary mb-1">{item.name}</p>
 <p className="text-sm theme-text-secondary">{item.prep}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 3. Preparing for X-Ray */}
 <section id="xray" className="py-16 theme-bg-background">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-navy">
 <div className="flex items-center mb-6">
 <div className="bg-green-100 p-4 rounded-2xl mr-4">
 <CameraIcon className="h-8 w-8 text-green-600" />
 </div>
 <div>
 <span className="theme-text-primary-brand font-semibold text-sm">TOPIC 3</span>
 <h2 className="text-2xl font-bold theme-text-primary">Preparing for X-Ray</h2>
 </div>
 </div>
 <p className="theme-text-secondary leading-relaxed mb-6">
 X-ray preparation is straightforward. Follow these guidelines to ensure clear, accurate images.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {xrayPrep.map((item, i) => (
 <div key={i} className="flex items-start space-x-3">
 <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
 <p className="text-sm theme-text-secondary">{item}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 4. ECG Preparation */}
 <section id="ecg" className="py-16 theme-bg-surface">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-red">
 <div className="flex items-center mb-6">
 <div className="bg-red-100 p-4 rounded-2xl mr-4">
 <HeartIcon className="h-8 w-8 text-red-600" />
 </div>
 <div>
 <span className="theme-text-primary-brand font-semibold text-sm">TOPIC 4</span>
 <h2 className="text-2xl font-bold theme-text-primary">ECG Preparation</h2>
 </div>
 </div>
 <p className="theme-text-secondary leading-relaxed mb-6">
 An ECG (electrocardiogram) records your heart's electrical activity. Simple preparation helps ensure an accurate recording.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {ecgPrep.map((item, i) => (
 <div key={i} className="flex items-start space-x-3">
 <CheckCircleIcon className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
 <p className="text-sm theme-text-secondary">{item}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 5. Sample Collection Information */}
 <section id="sample-collection" className="py-16 theme-bg-background">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-cyan">
 <div className="flex items-center mb-6">
 <div className="theme-icon-bg-cyan p-4 rounded-2xl mr-4">
 <ShieldCheckIcon className="h-5 w-5 theme-icon-cyan" />
 </div>
 <div>
 <span className="theme-text-primary-brand font-semibold text-sm">TOPIC 5</span>
 <h2 className="text-2xl font-bold theme-text-primary">Sample Collection Information</h2>
 </div>
 </div>
 <p className="theme-text-secondary leading-relaxed mb-6">
 All sample collections at Guardians are performed by trained, qualified professionals using sterile, single-use equipment. Here is what you need to know about each type.
 </p>
 <div className="space-y-4">
 {sampleCollection.map((item, i) => (
 <div key={i} className="theme-bg-surface rounded-xl p-5 flex items-start space-x-4 border-l-4 border-guardians-navy">
 <div className={`${item.bg} p-3 rounded-xl flex-shrink-0`}>
 <item.icon className={`h-6 w-6 ${item.color}`} />
 </div>
 <div>
 <p className="font-bold theme-text-primary mb-1">{item.type}</p>
 <p className="text-sm theme-text-secondary leading-relaxed">{item.info}</p>
 </div>
 </div>
 ))}
 </div>
 <div className="mt-6">
 <Link to="/home-collection" className="theme-btn-primary px-6 py-3 rounded-lg font-semibold inline-flex items-center theme-shadow-lg">
 Learn About Home Sample Collection
 <ArrowRightIcon className="h-4 w-4 ml-2" />
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* 6. What to Bring */}
 <section id="what-to-bring" className="py-16 theme-bg-surface">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-navy">
 <div className="flex items-center mb-6">
 <div className="theme-icon-bg-navy p-4 rounded-2xl mr-4">
 <DocumentTextIcon className="h-5 w-5 theme-icon-navy" />
 </div>
 <div>
 <span className="theme-text-primary-brand font-semibold text-sm">TOPIC 6</span>
 <h2 className="text-2xl font-bold theme-text-primary">What to Bring</h2>
 </div>
 </div>
 <p className="theme-text-secondary leading-relaxed mb-6">
 Having the right documents and information with you helps us provide the best possible care and ensures a smooth, efficient visit.
 </p>
 <div className="space-y-3 mb-6">
 {whatToBring.map((item, i) => (
 <div key={i} className="flex items-start space-x-3">
 <CheckCircleIcon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${item.required ? 'text-guardians-navy' : 'text-green-500'}`} />
 <p className="text-sm theme-text-secondary">
 {item.item}
 {item.required && <span className="ml-2 text-xs font-semibold text-guardians-navy">(Required)</span>}
 </p>
 </div>
 ))}
 </div>
 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
 <div className="flex items-start space-x-3">
 <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
 <p className="text-sm text-yellow-800">
 <strong>Don't have everything?</strong> Contact us before your appointment. We may be able to proceed with alternative arrangements.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 7. Appointment Information */}
 <section id="appointments" className="py-16 theme-bg-background">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-cyan">
 <div className="flex items-center mb-6">
 <div className="theme-icon-bg-cyan p-4 rounded-2xl mr-4">
 <CalendarDaysIcon className="h-5 w-5 theme-icon-cyan" />
 </div>
 <div>
 <span className="theme-text-primary-brand font-semibold text-sm">TOPIC 7</span>
 <h2 className="text-2xl font-bold theme-text-primary">Appointment Information</h2>
 </div>
 </div>
 <p className="theme-text-secondary leading-relaxed mb-8">
 Here is everything you need to know about booking, confirming, and attending your appointment at Guardians.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
 {appointmentInfo.map((item, i) => (
 <div key={i} className={`theme-bg-surface rounded-xl p-5 border-l-4 ${item.border} flex items-start space-x-4`}>
 <div className="theme-icon-bg-navy p-2 rounded-lg flex-shrink-0">
 <item.icon className="h-6 w-6 theme-icon-navy" />
 </div>
 <div>
 <p className="font-bold theme-text-primary mb-1">{item.title}</p>
 <p className="text-sm theme-text-secondary leading-relaxed">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 <div className="mt-8 text-center">
 <Link to="/appointment" className="theme-btn-primary px-8 py-4 rounded-lg font-semibold inline-flex items-center theme-shadow-lg">
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book an Appointment
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* 8. Result Information */}
 <section id="results" className="py-16 theme-bg-surface">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="theme-bg-card rounded-2xl theme-shadow-xl p-8 border-l-4 border-guardians-navy">
 <div className="flex items-center mb-6">
 <div className="theme-icon-bg-navy p-4 rounded-2xl mr-4">
 <ArrowDownTrayIcon className="h-5 w-5 theme-icon-navy" />
 </div>
 <div>
 <span className="theme-text-primary-brand font-semibold text-sm">TOPIC 8</span>
 <h2 className="text-2xl font-bold theme-text-primary">Result Information</h2>
 </div>
 </div>
 <p className="theme-text-secondary leading-relaxed mb-8">
 Here is everything you need to know about when your results will be ready, how you will be notified, and how to access them.
 </p>
 <div className="space-y-4">
 {resultInfo.map((item, i) => (
 <div key={i} className={`theme-bg-surface rounded-xl p-5 border-l-4 ${item.border} flex items-start space-x-4`}>
 <div className="theme-icon-bg-navy p-2 rounded-lg flex-shrink-0">
 <item.icon className="h-6 w-6 theme-icon-navy" />
 </div>
 <div>
 <p className="font-bold theme-text-primary mb-2">{item.title}</p>
 <p className="text-sm theme-text-secondary leading-relaxed">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 <div className="mt-8 text-center">
 <Link to="/results" className="theme-btn-primary px-8 py-4 rounded-lg font-semibold inline-flex items-center theme-shadow-lg">
 <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
 Access Your Results Online
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Emergency CTA */}
 <section className="py-16 bg-red-600">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl font-bold text-white mb-4">Need Urgent Medical Assistance?</h2>
 <p className="text-red-100 text-lg mb-8">For medical emergencies, do not wait. Contact emergency services immediately.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:911" className="bg-white text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-red-50 transition-colors inline-flex items-center justify-center shadow-lg">
 <PhoneIcon className="h-5 w-5 mr-2" />Emergency: 911
 </a>
 <a href="tel:+251911000911" className="bg-red-700 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-800 transition-colors inline-flex items-center justify-center">
 <PhoneIcon className="h-5 w-5 mr-2" />Guardians Emergency: +251 911 000 911
 </a>
 </div>
 </div>
 </section>

 </div>
 );
};

export default PatientInfo;
