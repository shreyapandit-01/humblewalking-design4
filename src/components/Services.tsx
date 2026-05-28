import { useEffect, useRef, useState } from 'react';
import {
  Compass, BookOpen, FileText, Shield, Award, Banknote, Home, Plane, Search, ArrowRight, Sparkles
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Compass className="w-7 h-7" />,
    title: 'Career Counselling',
    description: 'Personalized one-on-one sessions to help you choose the right country, course, and career path aligned with your goals.',
    tag: 'Start Here',
    gradient: 'from-blue-700 to-blue-500',
    size: 'large',
    features: ['Profile Assessment', 'Career Mapping', 'Course Selection', 'Country Guidance'],
  },
  {
    id: 2,
    icon: <Search className="w-7 h-7" />,
    title: 'University Shortlisting',
    description: 'Data-driven shortlisting of the best-fit universities based on your academic profile, budget, and career aspirations.',
    tag: 'Strategic',
    gradient: 'from-teal-600 to-teal-400',
    size: 'medium',
    features: ['Profile Matching', 'Rank Analysis', 'Scholarship Scope'],
  },
  {
    id: 3,
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Admission Guidance',
    description: 'Step-by-step support through the entire application process from shortlisting to offer letter.',
    tag: 'Complete Support',
    gradient: 'from-violet-700 to-violet-500',
    size: 'medium',
    features: ['Application Review', 'Deadline Tracking', 'Interview Prep'],
  },
  {
    id: 4,
    icon: <FileText className="w-7 h-7" />,
    title: 'SOP & LOR Support',
    description: 'Expert crafting of Statements of Purpose and Letters of Recommendation that make your application stand out.',
    tag: 'Expert Writers',
    gradient: 'from-amber-600 to-amber-400',
    size: 'medium',
    features: ['SOP Drafting', 'LOR Guidance', 'Essay Review'],
  },
  {
    id: 5,
    icon: <Shield className="w-7 h-7" />,
    title: 'Visa Assistance',
    description: 'Comprehensive visa guidance with 95%+ success rate — from documentation to mock interviews and submission support.',
    tag: '95%+ Success',
    gradient: 'from-rose-600 to-rose-400',
    size: 'large',
    features: ['Document Checklist', 'Mock Interviews', 'Application Filing', 'Appeal Support'],
  },
  {
    id: 6,
    icon: <Award className="w-7 h-7" />,
    title: 'Scholarship Guidance',
    description: 'Identify and apply for scholarships, grants, and financial aid to maximize your funding opportunities.',
    tag: '500+ Secured',
    gradient: 'from-blue-600 to-sky-400',
    size: 'medium',
    features: ['Merit Scholarships', 'Need-Based Aid', 'Country Grants'],
  },
  {
    id: 7,
    icon: <Banknote className="w-7 h-7" />,
    title: 'Education Loan Assistance',
    description: 'Navigate education loan options with our banking partners to secure the best rates and terms.',
    tag: 'Best Rates',
    gradient: 'from-emerald-600 to-emerald-400',
    size: 'medium',
    features: ['Bank Tie-ups', 'Collateral Options', 'Fast Processing'],
  },
  {
    id: 8,
    icon: <Home className="w-7 h-7" />,
    title: 'Accommodation Support',
    description: 'Find safe, comfortable, and affordable student housing options at your destination university.',
    tag: 'Assured',
    gradient: 'from-red-600 to-red-400',
    size: 'medium',
    features: ['On-Campus Dorms', 'PG Options', 'Shared Housing'],
  },
  {
    id: 9,
    icon: <Plane className="w-7 h-7" />,
    title: 'Pre-Departure Guidance',
    description: 'Complete orientation before you fly — packing checklist, banking setup, travel tips, and student community.',
    tag: 'Full Prep',
    gradient: 'from-cyan-600 to-cyan-400',
    size: 'medium',
    features: ['Travel Insurance', 'Banking Tips', 'Community Connect'],
  },
];

function ServiceCard({ service, index, visible }: { service: typeof services[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isLarge = service.size === 'large';

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-default transition-all duration-700 ${
        isLarge ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''
      } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`h-full p-6 bg-gradient-to-br ${service.gradient} text-white transition-all duration-300 ${
          hovered ? 'shadow-brand-lg scale-[1.02]' : 'shadow-card'
        } rounded-2xl`}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
            {service.icon}
          </div>
          <span className="bg-white/20 text-white/90 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm">
            {service.tag}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold mb-2">{service.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-4">{service.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5">
          {service.features.map((feature, i) => (
            <span key={i} className="bg-white/15 text-white/90 text-xs font-medium px-2 py-0.5 rounded-md">
              {feature}
            </span>
          ))}
        </div>

        {/* Hover arrow */}
        <div className={`absolute bottom-5 right-5 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full" />
        <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-white/5 rounded-full" />
      </div>
    </div>
  );
}

export default function Services() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            Our Services
          </div>
          <h2 className="section-heading text-gray-900 mb-4">
            End-to-End
            <span className="gradient-text"> Study Abroad Support</span>
          </h2>
          <p className="section-subheading">
            From your first counselling session to landing at your dream university, we're with you every step of the journey.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 p-8 rounded-2xl bg-gradient-to-r from-navy-900 to-blue-900 text-center transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
          <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Journey?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">Book a free consultation with our expert counsellors and get personalized guidance for your study abroad goals.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-brand-lg hover:-translate-y-0.5 shadow-brand"
          >
            Book Free Counselling Session
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
