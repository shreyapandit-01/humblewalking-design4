import { useEffect, useRef, useState } from 'react';
import { Users, CheckCircle, Globe, Star, BookOpen, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: 1000,
    suffix: '+',
    label: 'Students Guided',
    description: 'Successfully placed in top universities worldwide',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    value: 95,
    suffix: '%',
    label: 'Visa Success Rate',
    description: 'Industry-leading visa approval success rate',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    value: 7,
    suffix: '+',
    label: 'Study Destinations',
    description: 'Top countries across the globe',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: 4.9,
    suffix: '/5',
    label: 'Student Rating',
    description: 'Consistently rated excellent by students',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    decimal: true,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    value: 300,
    suffix: '+',
    label: 'Partner Universities',
    description: 'Top-ranked universities we work with',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: 500,
    suffix: '+',
    label: 'Scholarships Secured',
    description: 'Financial support secured for students',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
];

function AnimatedCounter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 50;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, decimal]);

  return (
    <div ref={ref} className="text-3xl lg:text-4xl font-bold text-gray-900">
      {decimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            <TrendingUp className="w-3.5 h-3.5" />
            Our Track Record
          </div>
          <h2 className="section-heading text-gray-900 mb-4">
            Numbers That Tell
            <span className="gradient-text"> Our Story</span>
          </h2>
          <p className="section-subheading">
            Over the years, we've helped thousands of students transform their international education dreams into reality with expert guidance and unwavering support.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`relative p-6 lg:p-8 rounded-2xl border ${stat.border} card-hover cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms`, background: 'white' }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${
                i === 0 ? 'from-blue-500 to-blue-400' :
                i === 1 ? 'from-emerald-500 to-emerald-400' :
                i === 2 ? 'from-amber-500 to-amber-400' :
                i === 3 ? 'from-rose-500 to-rose-400' :
                i === 4 ? 'from-sky-500 to-sky-400' :
                'from-violet-500 to-violet-400'
              }`} />

              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>

              <AnimatedCounter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              <div className="text-gray-900 font-semibold mt-1 mb-1.5">{stat.label}</div>
              <div className="text-gray-500 text-sm leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Trusted by Students Across India</h3>
                <p className="text-gray-500 text-sm">Mumbai's most reliable study abroad consultancy since years</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {['ISO Certified', 'AIRC Member', 'NAFSA Partner', 'Google Verified'].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-700 text-sm font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
