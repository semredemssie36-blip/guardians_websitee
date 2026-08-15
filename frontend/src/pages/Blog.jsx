import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 MagnifyingGlassIcon,
 CalendarDaysIcon,
 ArrowRightIcon,
 HeartIcon,
 BeakerIcon,
 ShieldCheckIcon,
 LightBulbIcon,
 BookOpenIcon,
 EyeIcon
} from '@heroicons/react/24/outline';

const Blog = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const [selectedCategory, setSelectedCategory] = useState('all');

 const categories = [
 { id: 'all', name: 'All Articles', count: 24 },
 { id: 'health-tips', name: 'Health Tips', count: 8 },
 { id: 'diagnostic', name: 'Diagnostic Info', count: 6 },
 { id: 'prevention', name: 'Prevention', count: 5 },
 { id: 'wellness', name: 'Wellness', count: 5 }
 ];

 const featuredArticles = [
 {
 id: 1,
 title: '10 Essential Health Checks Every Adult Should Have',
 excerpt: 'Regular health screenings can detect problems early when they are most treatable. Learn about the key tests every adult should consider.',
 image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 author: 'Dr. Sarah Tekle',
 authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-08-10',
 readTime: '8 min read',
 category: 'health-tips',
 tags: ['Health Screening', 'Prevention', 'Adult Health'],
 featured: true,
 views: 2340
 },
 {
 id: 2,
 title: 'Understanding Your Blood Test Results: A Complete Guide',
 excerpt: 'Blood tests provide valuable insights into your health. This comprehensive guide explains what different values mean and when to be concerned.',
 image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 author: 'Dr. Michael Alemayehu',
 authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-08-08',
 readTime: '12 min read',
 category: 'diagnostic',
 tags: ['Blood Tests', 'Lab Results', 'Health Education'],
 featured: true,
 views: 1890
 },
 {
 id: 3,
 title: 'Heart Health: Early Detection and Prevention Strategies',
 excerpt: 'Cardiovascular disease remains a leading health concern. Discover the latest strategies for early detection and prevention of heart problems.',
 image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
 author: 'Dr. Daniel Gebre',
 authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-08-05',
 readTime: '10 min read',
 category: 'prevention',
 tags: ['Cardiology', 'Heart Health', 'ECG'],
 featured: true,
 views: 1567
 }
 ];

 const articles = [
 {
 id: 4,
 title: 'The Importance of Regular Health Screenings in Ethiopia',
 excerpt: 'How regular health check-ups can prevent major health issues and improve quality of life in the Ethiopian context.',
 image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
 author: 'Dr. Sarah Tekle',
 authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-08-03',
 readTime: '6 min read',
 category: 'health-tips',
 tags: ['Prevention', 'Public Health'],
 views: 892
 },
 {
 id: 5,
 title: 'Digital X-Ray vs Traditional X-Ray: What You Need to Know',
 excerpt: 'Understanding the benefits of digital X-ray technology and how it improves diagnostic accuracy while reducing radiation exposure.',
 image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
 author: 'Dr. Hanan Mohammed',
 authorImage: 'https://images.unsplash.com/photo-1594824475217-34a83d43827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-08-01',
 readTime: '7 min read',
 category: 'diagnostic',
 tags: ['X-Ray', 'Medical Technology'],
 views: 743
 },
 {
 id: 6,
 title: 'Preparing for Your Medical Tests: A Patient Guide',
 excerpt: 'Essential preparation tips for common medical tests to ensure accurate results and a smooth experience.',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
 author: 'Guardians Medical Team',
 authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-07-28',
 readTime: '5 min read',
 category: 'health-tips',
 tags: ['Test Preparation', 'Patient Care'],
 views: 654
 },
 {
 id: 7,
 title: "Women's Health: Essential Screenings by Age Group",
 excerpt: 'Age-specific health screenings every woman should consider for optimal health and early disease detection.',
 image: 'https://images.unsplash.com/photo-1594824475217-34a83d43827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
 author: 'Dr. Rahel Tadesse',
 authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-07-25',
 readTime: '9 min read',
 category: 'prevention',
 tags: ["Women's Health", 'Screening'],
 views: 567
 },
 {
 id: 8,
 title: 'Corporate Health Programs: Boosting Employee Wellness',
 excerpt: 'How comprehensive workplace health programs can improve employee productivity and reduce healthcare costs.',
 image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
 author: 'Dr. Yonas Bekele',
 authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-07-22',
 readTime: '11 min read',
 category: 'wellness',
 tags: ['Corporate Health', 'Workplace Wellness'],
 views: 432
 },
 {
 id: 9,
 title: 'Understanding Ultrasound: Safe and Effective Imaging',
 excerpt: "Learn about ultrasound technology, its applications, and why it's considered one of the safest diagnostic imaging methods.",
 image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
 author: 'Dr. Hanan Mohammed',
 authorImage: 'https://images.unsplash.com/photo-1594824475217-34a83d43827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-07-20',
 readTime: '6 min read',
 category: 'diagnostic',
 tags: ['Ultrasound', 'Medical Imaging'],
 views: 389
 },
 {
 id: 10,
 title: 'When Do You Need an ECG? Signs Your Heart Should Be Checked',
 excerpt: 'An ECG is a simple, painless test that records your heart activity. Learn about the symptoms and situations that may indicate you need one.',
 image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
 author: 'Dr. Daniel Gebre',
 authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-07-18',
 readTime: '7 min read',
 category: 'diagnostic',
 tags: ['ECG', 'Heart Health', 'Cardiology'],
 views: 341
 },
 {
 id: 11,
 title: 'Preventive Healthcare: Small Steps That Make a Big Difference',
 excerpt: 'Preventive care is the most effective way to stay healthy. Discover practical, evidence-based steps you can take starting today.',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
 author: 'Dr. Sarah Tekle',
 authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-07-15',
 readTime: '8 min read',
 category: 'prevention',
 tags: ['Prevention', 'Preventive Care', 'Health Tips'],
 views: 298
 },
 {
 id: 12,
 title: 'Healthy Lifestyle Habits That Support Better Diagnostic Results',
 excerpt: 'Your daily habits directly affect your health test results. Here are evidence-based lifestyle changes that improve your overall health markers.',
 image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
 author: 'Guardians Medical Team',
 authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
 date: '2026-07-12',
 readTime: '6 min read',
 category: 'wellness',
 tags: ['Healthy Lifestyle', 'Wellness', 'Prevention'],
 views: 276
 }
 ];

 const allArticles = [...featuredArticles, ...articles];
 
 const filteredArticles = allArticles.filter(article => {
 const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
 const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
 article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
 article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
 return matchesCategory && matchesSearch;
 });

 const formatDate = (dateString) => {
 const options = { year: 'numeric', month: 'long', day: 'numeric' };
 return new Date(dateString).toLocaleDateString('en-US', options);
 };

 const getCategoryIcon = (category) => {
 const iconMap = {
 'health-tips': HeartIcon,
 'diagnostic': BeakerIcon,
 'prevention': ShieldCheckIcon,
 'wellness': LightBulbIcon
 };
 return iconMap[category] || BookOpenIcon;
 };

 return (
 <div className="theme-bg-background">
 {/* Hero Section */}
 <section className="relative h-[400px] overflow-hidden">
 <img
 src="https://alokamedicare.in/wp-content/uploads/2022/07/Diabetes-Alokamedicare.jpg"
 alt="Health Blog & Resources"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
 
 <div className="absolute inset-0 flex items-center">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-white max-w-2xl">
 <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
 Health Blog & Resources
 </h1>
 <p className="text-xl text-gray-200 mb-8 leading-relaxed">
 Stay informed with expert health insights, diagnostic information, and wellness tips from our medical professionals.
 </p>
 <Link
 to="/appointment"
 className="theme-btn-primary font-semibold px-8 py-4 rounded-lg inline-flex items-center theme-shadow-lg"
 >
 <CalendarDaysIcon className="h-5 w-5 mr-2" />
 Schedule Consultation
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Search and Filter */}
 <section className="py-12 theme-bg-surface theme-border border-b">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
 {/* Search */}
 <div className="relative flex-1 max-w-md">
 <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 theme-text-muted" />
 <input
 type="text"
 placeholder="Search articles..."
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 className="w-full pl-10 pr-4 py-3 theme-border rounded-lg theme-bg-background theme-text-primary focus:ring-2 focus:ring-guardians-navy focus:border-transparent"
 />
 </div>

 {/* Categories */}
 <div className="flex flex-wrap gap-2">
 {categories.map((category) => (
 <button
 key={category.id}
 onClick={() => setSelectedCategory(category.id)}
 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border-l-2 ${
 selectedCategory === category.id
 ? 'bg-guardians-navy text-white border-guardians-navy'
 : 'theme-bg-card theme-text-secondary theme-hover border-transparent hover:border-guardians-cyan'
 }`}
 >
 {category.name} ({category.count})
 </button>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* Featured Articles */}
 <section className="py-20 theme-bg-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <span className="theme-text-primary-brand font-semibold text-lg">FEATURED CONTENT</span>
 <h2 className="text-3xl lg:text-4xl font-bold theme-text-primary mb-4 mt-2">
 Latest Health Insights
 </h2>
 <p className="theme-text-secondary max-w-2xl mx-auto">
 Expert articles and insights from our medical professionals to help you make informed health decisions.
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 {featuredArticles.map((article, index) => (
 <article key={article.id} className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
 <div className="theme-bg-card rounded-2xl theme-shadow-xl overflow-hidden hover:theme-shadow-2xl transition-all duration-300 h-full border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className={`${index === 0 ? 'h-64 lg:h-80' : 'h-48'} overflow-hidden relative`}>
 <img
 src={article.image}
 alt={article.title}
 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
 />
 <div className="absolute top-4 left-4">
 <span className="bg-guardians-navy text-white px-3 py-1 rounded-full text-xs font-medium">
 Featured
 </span>
 </div>
 <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
 <div className="flex items-center space-x-1 text-xs">
 <EyeIcon className="h-3 w-3 text-gray-600" />
 <span className="text-gray-600">{article.views}</span>
 </div>
 </div>
 </div>
 
 <div className="p-6">
 <div className="flex items-center space-x-4 mb-4">
 <img
 src={article.authorImage}
 alt={article.author}
 className="w-10 h-10 rounded-full object-cover"
 />
 <div className="flex-1">
 <p className="text-sm font-medium theme-text-primary">{article.author}</p>
 <div className="flex items-center space-x-4 text-xs theme-text-muted">
 <span>{formatDate(article.date)}</span>
 <span>{article.readTime}</span>
 </div>
 </div>
 </div>
 
 <h3 className={`font-bold theme-text-primary mb-3 line-clamp-2 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
 {article.title}
 </h3>
 <p className="theme-text-secondary mb-4 line-clamp-3">{article.excerpt}</p>
 
 <div className="flex items-center justify-between">
 <div className="flex flex-wrap gap-2">
 {article.tags.slice(0, 2).map((tag, tagIndex) => (
 <span key={tagIndex} className="theme-bg-surface theme-text-secondary px-2 py-1 rounded-full text-xs">
 {tag}
 </span>
 ))}
 </div>
 <button className="theme-text-primary-brand hover:opacity-80 font-medium text-sm flex items-center">
 Read More
 <ArrowRightIcon className="h-4 w-4 ml-1" />
 </button>
 </div>
 </div>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* All Articles */}
 <section className="py-20 theme-bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between mb-12">
 <div>
 <h2 className="text-3xl font-bold theme-text-primary mb-2">All Articles</h2>
 <p className="theme-text-secondary">
 {filteredArticles.length} articles found
 {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.name}`}
 </p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredArticles.slice(3).map((article) => {
 const CategoryIcon = getCategoryIcon(article.category);
 
 return (
 <article key={article.id} className="theme-bg-card rounded-2xl theme-shadow-lg overflow-hidden hover:theme-shadow-xl transition-all duration-300 border-l-4 border-guardians-cyan hover:border-guardians-navy">
 <div className="h-48 overflow-hidden relative">
 <img
 src={article.image}
 alt={article.title}
 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
 />
 <div className="absolute top-4 left-4">
 <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
 <CategoryIcon className="h-5 w-5 theme-icon-navy" />
 </div>
 </div>
 <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
 <div className="flex items-center space-x-1 text-xs">
 <EyeIcon className="h-3 w-3 text-gray-600" />
 <span className="text-gray-600">{article.views}</span>
 </div>
 </div>
 </div>
 
 <div className="p-6">
 <div className="flex items-center space-x-3 mb-4">
 <img
 src={article.authorImage}
 alt={article.author}
 className="w-8 h-8 rounded-full object-cover"
 />
 <div className="flex-1">
 <p className="text-sm font-medium theme-text-primary">{article.author}</p>
 <div className="flex items-center space-x-3 text-xs theme-text-muted">
 <span>{formatDate(article.date)}</span>
 <span>{article.readTime}</span>
 </div>
 </div>
 </div>
 
 <h3 className="text-lg font-bold theme-text-primary mb-2 line-clamp-2">
 {article.title}
 </h3>
 <p className="theme-text-secondary text-sm mb-4 line-clamp-2">{article.excerpt}</p>
 
 <div className="flex items-center justify-between">
 <div className="flex flex-wrap gap-1">
 {article.tags.slice(0, 2).map((tag, tagIndex) => (
 <span key={tagIndex} className="theme-bg-surface theme-text-secondary px-2 py-1 rounded-full text-xs">
 {tag}
 </span>
 ))}
 </div>
 <button className="theme-text-primary-brand hover:opacity-80 font-medium text-sm flex items-center">
 Read
 <ArrowRightIcon className="h-4 w-4 ml-1" />
 </button>
 </div>
 </div>
 </article>
 );
 })}
 </div>

 {/* Load More */}
 <div className="text-center mt-12">
 <button className="theme-btn-primary font-semibold px-8 py-4 rounded-lg theme-shadow-lg">
 Load More Articles
 </button>
 </div>
 </div>
 </section>

 {/* Newsletter Signup */}
 <section className="py-16 theme-bg-primary">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-guardians-cyan">
 <h2 className="text-3xl font-bold text-white mb-4">
 Stay Updated with Health Insights
 </h2>
 <p className="text-blue-100 text-lg mb-8">
 Subscribe to our newsletter and get the latest health tips and medical insights delivered to your inbox.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
 <input
 type="email"
 placeholder="Enter your email"
 className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
 />
 <button className="bg-white theme-text-primary-brand font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
 Subscribe
 </button>
 </div>
 <p className="text-blue-200 text-sm mt-4">
 No spam, unsubscribe anytime. Your privacy is important to us.
 </p>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Blog;
