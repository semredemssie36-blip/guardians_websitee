import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 UserIcon,
 AcademicCapIcon,
 CalendarDaysIcon,
 PhoneIcon,
 ArrowRightIcon,
 ClockIcon,
 CheckCircleIcon,
 HeartIcon,
 BeakerIcon,
 CameraIcon,
 SpeakerWaveIcon,
 ShieldCheckIcon,
 ChevronDownIcon,
 ChevronUpIcon
} from '@heroicons/react/24/outline';

const Doctors = () => {
 const [expandedDoctor, setExpandedDoctor] = useState(null);

 const toggleDoctor = (id) => {
 setExpandedDoctor(expandedDoctor === id ? null : id);
 };

 const doctors = [
 {
 id: 1,
 name: 'Dr. Sarah Tekle',
 position: 'Chief Medical Officer',
 specialization: 'Internal Medicine & General Practice',
 image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
 experience: '15+ years',
 qualifications: [
 'MD (Doctor of Medicine) — Addis Ababa University',
 'Residency in Internal Medicine — Black Lion Specialized Hospital',
 'Fellowship in Internal Medicine',
 'Member, Ethiopian Medical Association',
 'Member, International Society of Internal Medicine'
 ],
 biography: 'Dr. Sarah Tekle is a highly experienced internal medicine physician with over 15 years of practice in Ethiopia. She leads the medical team at Guardians Diagnostic Center and oversees clinical quality and patient care standards. She is passionate about preventive medicine and ensuring every patient receives accurate, compassionate, and professional care.',
 areasOfService: [
 'General Health Consultations',
 'Preventive Medicine & Health Screenings',
 'Chronic Disease Management',
 'Executive Health Programs',
 'Health Risk Assessments'
 ],
 languages: ['English', 'Amharic', 'Oromo'],
 availability: 'Mon–Fri: 8:00 AM – 5:00 PM'
 },
 {
 id: 2,
 name: 'Dr. Michael Alemayehu',
 position: 'Head of Laboratory Services',
 specialization: 'Clinical Pathology & Laboratory Medicine',
 image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
 experience: '12+ years',
 qualifications: [
 'PhD in Clinical Pathology — Jimma University',
 'MSc in Medical Microbiology',
 'BSc in Medical Laboratory Sciences',
 'Member, Ethiopian Society of Pathologists',
 'Quality Management Systems Certified'
 ],
 biography: 'Dr. Michael Alemayehu is a clinical pathologist and laboratory medicine specialist who brings over 12 years of expertise in diagnostic laboratory sciences. He oversees all laboratory operations at Guardians, ensuring rigorous quality control, accurate test results, and compliance with international laboratory standards. He holds advanced qualifications in microbiology and quality management.',
 areasOfService: [
 'Clinical Chemistry',
 'Hematology & Blood Disorders',
 'Medical Microbiology',
 'Serology & Immunology',
 'Laboratory Quality Assurance'
 ],
 languages: ['English', 'Amharic', 'Tigrinya'],
 availability: 'Mon–Sat: 7:00 AM – 6:00 PM'
 },
 {
 id: 3,
 name: 'Dr. Hanan Mohammed',
 position: 'Diagnostic Imaging Director',
 specialization: 'Radiology & Diagnostic Imaging',
 image: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1400:*',
 experience: '10+ years',
 qualifications: [
 'MD in Radiology — Mekelle University',
 'Residency in Diagnostic Imaging — Tikur Anbessa Specialized Hospital',
 'Advanced Imaging Certification',
 'Member, Ethiopian Radiological Society',
 'Member, African Society of Radiology'
 ],
 biography: 'Dr. Hanan Mohammed is a qualified radiologist with over 10 years of experience in diagnostic imaging. She directs imaging services at Guardians, overseeing digital X-ray and ultrasound departments. Dr. Mohammed is known for her precision in image interpretation and her patient-centered approach, particularly in women\'s and obstetric imaging.',
 areasOfService: [
 'Digital X-Ray Interpretation',
 'Abdominal & Pelvic Ultrasound',
 'Obstetric & Pregnancy Imaging',
 'Thyroid & Vascular Ultrasound',
 'Emergency Diagnostic Imaging'
 ],
 languages: ['English', 'Amharic', 'Arabic'],
 availability: 'Mon–Fri: 8:00 AM – 6:00 PM'
 },
 {
 id: 4,
 name: 'Dr. Daniel Gebre',
 position: 'Cardiology Consultant',
 specialization: 'Cardiology & ECG Interpretation',
 image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
 experience: '8+ years',
 qualifications: [
 'MD (Doctor of Medicine) — Hawassa University',
 'Cardiology Fellowship — Ethiopia',
 'Advanced ECG Interpretation Certificate',
 'Member, Ethiopian Heart Association',
 'Advanced Cardiac Life Support (ACLS) Certified'
 ],
 biography: 'Dr. Daniel Gebre is a cardiologist consultant with 8 years of specialized experience in cardiovascular diagnostics and ECG interpretation. He consults at Guardians Diagnostic Center, providing cardiac risk assessments and interpreting all cardiac studies. His work focuses on early detection of heart conditions through non-invasive diagnostic testing.',
 areasOfService: [
 'ECG Recording & Interpretation',
 'Cardiac Risk Assessment',
 'Exercise Stress Testing',
 'Holter (24-hour ECG) Monitoring',
 'Preventive Cardiology'
 ],
 languages: ['English', 'Amharic', 'Sidamo'],
 availability: 'Tue, Thu, Sat: 9:00 AM – 4:00 PM'
 },
 {
 id: 5,
 name: 'Dr. Rahel Tadesse',
 position: "Women's Health Specialist",
 specialization: "Gynecology & Women's Health",
 image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
 experience: '9+ years',
 qualifications: [
 "MD in Gynecology — University of Gondar",
 "Women's Health Residency",
 'Family Planning & Reproductive Health Certification',
 'Member, Ethiopian Gynecological Society',
 'Member, International Federation of Gynecology and Obstetrics'
 ],
 biography: "Dr. Rahel Tadesse is a women's health specialist with 9 years of experience in gynecology and reproductive health. She provides consultations and oversees women's-specific diagnostic services at Guardians, including pelvic ultrasound, hormonal assessments, and comprehensive women's health screening packages. Dr. Tadesse is committed to making women's healthcare accessible and comfortable.",
 areasOfService: [
 "Women's Health Screening",
 'Reproductive & Hormonal Health',
 'Prenatal & Obstetric Consultations',
 'Pelvic & Transvaginal Ultrasound',
 'Family Planning Counseling'
 ],
 languages: ['English', 'Amharic', 'Oromo'],
 availability: 'Mon, Wed, Fri: 10:00 AM – 5:00 PM'
 },
 {
 id: 6,
 name: 'Dr. Yonas Bekele',
 position: 'Occupational Health Physician',
 specialization: 'Occupational & Industrial Medicine',
 image: 'https://st4.depositphotos.com/13194036/21194/i/600/depositphotos_211942914-stock-photo-middle-aged-male-doctor-writing.jpg',
 experience: '11+ years',
 qualifications: [
 'MD (Doctor of Medicine) — Bahir Dar University',
 'Master of Public Health (MPH) — Occupational Health',
 'Industrial Medicine Certification',
 'Member, Ethiopian Public Health Association',
 'Occupational Safety & Health Specialist'
 ],
 biography: 'Dr. Yonas Bekele is an occupational health physician with over 11 years of experience serving corporate and institutional clients. He specializes in pre-employment screening, workplace health programs, and fitness-for-duty evaluations. At Guardians, he leads the corporate health division, working closely with companies, factories, and government institutions across Ethiopia.',
 areasOfService: [
 'Pre-Employment Medical Screening',
 'Occupational Health Assessments',
 'Workplace Fitness-for-Duty Evaluations',
 'Corporate Wellness Programs',
 'Industrial Health & Safety Compliance'
 ],
 languages: ['English', 'Amharic'],
 availability: 'Mon–Thu: 8:00 AM – 5:00 PM'
 }
 ];

 const specialties = [
 { icon: HeartIcon, name: 'Cardiology', description: 'Heart health and cardiovascular assessments', doctor: 'Dr. Daniel Gebre', color: 'text-red-600', bgColor: 'bg-red-100' },
 { icon: BeakerIcon, name: 'Laboratory Medicine', description: 'Clinical pathology and diagnostic testing', doctor: 'Dr. Michael Alemayehu', color: 'text-blue-600', bgColor: 'bg-blue-100' },
 { icon: CameraIcon, name: 'Radiology', description: 'Medical imaging and diagnostic radiology', doctor: 'Dr. Hanan Mohammed', color: 'text-purple-600', bgColor: 'bg-purple-100' },
 { icon: UserIcon, name: 'Internal Medicine', description: 'General medicine and preventive care', doctor: 'Dr. Sarah Tekle', color: 'text-green-600', bgColor: 'bg-green-100' }
 ];

 return (
 <div className="theme-bg-background">

 {/* Hero */}
 <section className="relative h-[500px] overflow-hidden">
 <img
 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
 alt="Guardians Diagnostic Center Medical Team"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 Our Medical Team
 </h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Meet our qualified, experienced medical professionals dedicated to providing accurate and compassionate diagnostic healthcare.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <Link to="/appointment" className="theme-btn-primary px-8 py-4 rounded-lg flex items-center justify-center theme-shadow-lg">
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book Consultation
 </Link>
 <a href="tel:+251911234567" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors flex items-center justify-center">
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call for Guidance
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Verified notice */}
 <section className="py-6 theme-bg-surface theme-border border-b">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-center space-x-3">
 <ShieldCheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
 <p className="theme-text-secondary text-sm text-center">
 <span className="font-semibold theme-text-primary">Verified Professionals:</span> All doctor profiles contain only verified, professional information. Guardians publishes confirmed qualifications and experience only.
 </p>
 </div>
 </div>
 </section>

 {/* Specialties Overview */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">MEDICAL SPECIALTIES</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Areas of Expertise
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Our team covers a comprehensive range of medical specialties to serve all your diagnostic and healthcare needs.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {specialties.map((s, i) => (
 <div key={i} className="theme-bg-card text-center group rounded-2xl p-6 theme-shadow-lg hover:theme-shadow-xl transition-all duration-300 border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className={`${s.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
 <s.icon className={`h-10 w-10 ${s.color}`} />
 </div>
 <h3 className="text-xl font-bold theme-text-primary mb-2">{s.name}</h3>
 <p className="theme-text-secondary mb-3 text-sm">{s.description}</p>
 <p className="text-sm theme-text-primary-brand font-semibold">{s.doctor}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Doctor Profiles — full documentation fields */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <span className="theme-text-primary-brand font-semibold text-lg">MEET OUR DOCTORS</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Our Medical Professionals
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Each profile includes verified qualifications, specialization, experience, a short biography, and areas of service.
 </p>
 </div>

 <div className="space-y-8">
 {doctors.map((doctor) => (
 <div key={doctor.id} className="theme-bg-card rounded-2xl theme-shadow-xl overflow-hidden border-l-4 border-guardians-cyan hover:border-guardians-navy transition-all duration-300">

 {/* Profile Header */}
 <div className="grid grid-cols-1 lg:grid-cols-4">
 {/* Photo */}
 <div className="h-64 lg:h-auto overflow-hidden">
 <img
 src={doctor.image}
 alt={doctor.name}
 className="w-full h-full object-cover"
 />
 </div>

 {/* Core info */}
 <div className="lg:col-span-3 p-8">
 <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
 <div>
 {/* Name */}
 <h3 className="text-2xl font-bold theme-text-primary">{doctor.name}</h3>
 {/* Position */}
 <p className="theme-text-primary-brand font-semibold text-lg">{doctor.position}</p>
 {/* Specialization */}
 <p className="theme-text-secondary">{doctor.specialization}</p>
 </div>
 <div className="flex items-center space-x-2 theme-bg-surface px-4 py-2 rounded-xl">
 <ClockIcon className="h-5 w-5 theme-icon-navy" />
 <span className="text-sm font-medium theme-text-primary">{doctor.experience} experience</span>
 </div>
 </div>

 {/* Short Biography */}
 <div className="mb-6">
 <h4 className="font-bold theme-text-primary mb-2 text-sm uppercase tracking-wide">Biography</h4>
 <p className="theme-text-secondary leading-relaxed">{doctor.biography}</p>
 </div>

 {/* Availability + Languages */}
 <div className="flex flex-wrap gap-4 mb-6">
 <div className="theme-bg-surface rounded-lg px-4 py-2 flex items-center space-x-2">
 <CalendarDaysIcon className="h-5 w-5 theme-icon-navy flex-shrink-0" />
 <span className="text-sm theme-text-secondary">{doctor.availability}</span>
 </div>
 <div className="theme-bg-surface rounded-lg px-4 py-2 flex items-center space-x-2">
 <UserIcon className="h-5 w-5 theme-icon-navy flex-shrink-0" />
 <span className="text-sm theme-text-secondary">{doctor.languages.join(', ')}</span>
 </div>
 </div>

 {/* Actions */}
 <div className="flex flex-col sm:flex-row gap-3">
 <Link to="/appointment" className="theme-btn-primary px-6 py-3 rounded-lg font-semibold text-center theme-shadow-lg">
 Book Consultation
 </Link>
 <button
 onClick={() => toggleDoctor(doctor.id)}
 className="theme-bg-surface theme-text-secondary px-6 py-3 rounded-lg theme-hover transition-colors font-medium flex items-center justify-center"
 >
 {expandedDoctor === doctor.id ? (
 <>Hide Full Profile <ChevronUpIcon className="h-4 w-4 ml-2" /></>
 ) : (
 <>View Full Profile <ChevronDownIcon className="h-4 w-4 ml-2" /></>
 )}
 </button>
 </div>
 </div>
 </div>

 {/* Expanded — Qualifications + Areas of Service */}
 {expandedDoctor === doctor.id && (
 <div className="theme-bg-surface border-t theme-border px-8 py-8">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

 {/* Qualifications */}
 <div className="theme-bg-card rounded-xl p-6 border-l-4 border-guardians-navy theme-shadow-md">
 <h4 className="font-bold theme-text-primary mb-4 flex items-center">
 <AcademicCapIcon className="h-5 w-5 mr-2 text-guardians-navy" />
 Qualifications
 </h4>
 <ul className="space-y-3">
 {doctor.qualifications.map((q, i) => (
 <li key={i} className="flex items-start space-x-3">
 <CheckCircleIcon className="h-5 w-5 theme-icon-navy mt-0.5 flex-shrink-0" />
 <span className="text-sm theme-text-secondary">{q}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Areas of Service */}
 <div className="theme-bg-card rounded-xl p-6 border-l-4 border-guardians-cyan theme-shadow-md">
 <h4 className="font-bold theme-text-primary mb-4 flex items-center">
 <ShieldCheckIcon className="h-5 w-5 mr-2 text-guardians-cyan" />
 Areas of Service
 </h4>
 <ul className="space-y-3">
 {doctor.areasOfService.map((area, i) => (
 <li key={i} className="flex items-start space-x-3">
 <CheckCircleIcon className="h-5 w-5 theme-icon-cyan mt-0.5 flex-shrink-0" />
 <span className="text-sm theme-text-secondary">{area}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 <div className="mt-6 text-center">
 <Link to="/appointment" className="theme-btn-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center theme-shadow-lg">
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book with {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}
 </Link>
 </div>
 </div>
 )}
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why Choose Our Team */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div>
 <span className="theme-text-primary-brand font-semibold text-lg">WHY CHOOSE OUR TEAM</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-6 mt-2">
 Excellence in Medical Care
 </h2>
 <p className="theme-text-secondary text-lg leading-relaxed mb-8">
 Our medical team is carefully selected based on their expertise, qualifications, and commitment to patient care.
 </p>
 <div className="space-y-5">
 {[
 { icon: AcademicCapIcon, title: 'Verified Qualifications', desc: 'Only confirmed, verified professional qualifications are published. Every doctor holds recognized credentials.', border: 'border-guardians-navy' },
 { icon: CheckCircleIcon, title: 'Board Certifications', desc: 'Our doctors maintain active memberships in relevant Ethiopian and international medical associations.', border: 'border-guardians-cyan' },
 { icon: HeartIcon, title: 'Patient-Centered Care', desc: 'We prioritize patient comfort and clear communication throughout every consultation and procedure.', border: 'border-guardians-red' }
 ].map((item, i) => (
 <div key={i} className={`flex items-start space-x-4 theme-bg-card p-4 rounded-lg theme-shadow-md border-l-4 ${item.border}`}>
 <div className="theme-icon-bg-navy p-2 rounded-lg flex-shrink-0">
 <item.icon className="h-6 w-6 theme-icon-navy" />
 </div>
 <div>
 <h3 className="font-bold theme-text-primary mb-1">{item.title}</h3>
 <p className="theme-text-secondary text-sm">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 <div className="relative">
 <img
 src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
 alt="Guardians medical team"
 className="rounded-2xl theme-shadow-2xl"
 />
 <div className="hidden sm:block absolute -bottom-6 -left-6 theme-bg-card p-6 rounded-xl theme-shadow-lg border-l-4 border-guardians-navy">
 <div className="flex items-center space-x-4">
 <div className="theme-icon-bg-navy p-3 rounded-full">
 <UserIcon className="h-8 w-8 theme-icon-navy" />
 </div>
 <div>
 <p className="font-bold theme-text-primary text-lg">6 Specialist Doctors</p>
 <p className="theme-text-secondary text-sm">Verified professional team</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 theme-bg-primary">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
 Ready to Meet Our Medical Team?
 </h2>
 <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
 Schedule a consultation with one of our specialist doctors and experience personalized, professional diagnostic care.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link to="/appointment" className="bg-white theme-text-primary-brand font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center theme-shadow-lg">
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Book Your Consultation
 </Link>
 <a href="tel:+251911234567" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-guardians-navy transition-colors inline-flex items-center justify-center">
 <PhoneIcon className="h-5 w-5 mr-2" />
 Call for Appointment
 </a>
 </div>
 </div>
 </section>

 </div>
 );
};

export default Doctors;
