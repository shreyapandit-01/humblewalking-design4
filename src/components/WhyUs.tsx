import { useEffect, useRef, useState } from 'react';
import { User, Award, Heart, Eye, Layers, Globe, ArrowRight, Zap } from 'lucide-react';

const features = [
  {
    icon: <User className="w-6 h-6" />,
    title: 'Personalized Guidance',
    description: 'Every student gets a dedicated counsellor who crafts a customized roadmap based on their unique profile, goals, and budget.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    highlight: 'border-t-blue-500',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Experienced Experts',
    description: 'Our counsellors have years of experience and deep knowledge of admissions processes across all major study destinations.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    highlight: 'border-t-emerald-500',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Student-First Approach',
    description: 'We prioritize your academic and career success over everything else. Your dream is our mission, and we go the extra mile.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    highlight: 'border-t-rose-500',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Transparent Process',
    description: 'No hidden charges, no false promises. We maintain complete transparency throughout your application journey.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    highlight: 'border-t-amber-500',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'End-to-End Assistance',
    description: 'From the first counselling call to settling in abroad — we handle every single aspect of your study abroad journey.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    highlight: 'border-t-violet-500',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Opportunities',
    description: 'Access to 300+ partner universities across 7+ countries, opening doors to world-class education and global careers.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    highlight: 'border-t-sky-500',
  },
];

const comparisons = [
  { label: 'Personalized Counselling', us: true, others: false },
  { label: 'No Hidden Fees', us: true, others: false },
  { label: '24/7 Support', us: true, others: false },
  { label: 'Visa Mock Interviews', us: true, others: false },
  { label: 'Scholarship Assistance', us: true, others: true },
  { label: 'Pre-Departure Orientation', us: true, others: false },
  { label: 'Accommodation Support', us: true, others: false },
  { label: 'Post-Arrival Assistance', us: true, others: false },
];

export default function WhyUs() {
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
    <section className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            <Zap className="w-3.5 h-3.5" />
            Why HumbleWalking
          </div>
          <h2 className="section-heading text-gray-900 mb-4">
            Why Students Trust
            <span className="gradient-text"> HumbleWalking</span>
          </h2>
          <p className="section-subheading">
            We're not just consultants — we're your partners in building an international career and life.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border-t-4 ${feature.border} ${feature.highlight} bg-white shadow-card card-hover transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-card">
            <div className="grid grid-cols-3 bg-gray-900 text-white">
              <div className="p-4 text-sm font-medium text-gray-300">Feature</div>
              <div className="p-4 text-sm font-bold text-center text-blue-400 flex items-center justify-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">H</span>
                </div>
                HumbleWalking
              </div>
              <div className="p-4 text-sm font-medium text-center text-gray-400">Other Consultants</div>
            </div>
            {comparisons.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="p-4 text-gray-700 text-sm font-medium">{item.label}</div>
                <div className="p-4 flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.us ? 'bg-emerald-100' : 'bg-red-100'}`}>
                    <span className={`text-xs font-bold ${item.us ? 'text-emerald-600' : 'text-red-500'}`}>
                      {item.us ? '✓' : '✗'}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.others ? 'bg-emerald-100' : 'bg-red-100'}`}>
                    <span className={`text-xs font-bold ${item.others ? 'text-emerald-600' : 'text-red-500'}`}>
                      {item.others ? '✓' : '✗'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right-bottom CTA */}
        <div className={`mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-blue-50 border border-blue-100 transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Experience the HumbleWalking Difference</h3>
            <p className="text-gray-500 text-sm">Join 1000+ students who trusted us with their international education journey.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-brand hover:-translate-y-0.5"
          >
            Book Free Session
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
