import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Globe, FileCheck, ClipboardList, Shield, Home, Plane, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Free Counselling',
    description: 'One-on-one session to understand your goals, budget, academic profile, and career aspirations.',
    duration: 'Week 1',
    color: 'from-blue-600 to-blue-500',
    light: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    number: '02',
    icon: <Globe className="w-6 h-6" />,
    title: 'Country & Course Selection',
    description: 'Expert guidance on choosing the right country, university, and course aligned with your profile.',
    duration: 'Week 1-2',
    color: 'from-teal-600 to-teal-500',
    light: 'bg-teal-50 text-teal-600 border-teal-100',
  },
  {
    number: '03',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'University Applications',
    description: 'Strategic application submissions to shortlisted universities with complete documentation support.',
    duration: 'Week 3-8',
    color: 'from-violet-600 to-violet-500',
    light: 'bg-violet-50 text-violet-600 border-violet-100',
  },
  {
    number: '04',
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Documentation',
    description: 'SOP, LOR, transcripts, and all necessary documents prepared and reviewed by our expert team.',
    duration: 'Week 4-8',
    color: 'from-amber-600 to-amber-500',
    light: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    number: '05',
    icon: <Shield className="w-6 h-6" />,
    title: 'Visa Process',
    description: 'Complete visa application support with mock interviews, documentation, and submission guidance.',
    duration: 'Week 8-16',
    color: 'from-rose-600 to-rose-500',
    light: 'bg-rose-50 text-rose-600 border-rose-100',
  },
  {
    number: '06',
    icon: <Home className="w-6 h-6" />,
    title: 'Accommodation',
    description: 'Find safe and affordable student housing options near your university before departure.',
    duration: 'Week 10-16',
    color: 'from-emerald-600 to-emerald-500',
    light: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    number: '07',
    icon: <Plane className="w-6 h-6" />,
    title: 'Departure Support',
    description: 'Pre-departure orientation, travel tips, banking setup, and student community connections.',
    duration: 'Departure',
    color: 'from-sky-600 to-sky-500',
    light: 'bg-sky-50 text-sky-600 border-sky-100',
  },
];

export default function Journey() {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            <CheckCircle className="w-3.5 h-3.5" />
            Your Journey
          </div>
          <h2 className="section-heading text-gray-900 mb-4">
            7 Steps to Your
            <span className="gradient-text"> Dream University</span>
          </h2>
          <p className="section-subheading">
            A proven process that has helped 1000+ students successfully land at their dream universities abroad.
          </p>
        </div>

        {/* Timeline desktop */}
        <div className={`hidden lg:block transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Connector line */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-0.5 timeline-line -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
            <div className="relative flex justify-between">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2 ${
                    i <= activeStep
                      ? `bg-gradient-to-br ${step.color} text-white border-transparent shadow-brand`
                      : 'bg-white text-gray-400 border-gray-200'
                  }`}
                >
                  {i < activeStep ? <CheckCircle className="w-5 h-5" /> : step.number}
                </button>
              ))}
            </div>
          </div>

          {/* Active step details */}
          <div className={`p-8 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} text-white shadow-brand-lg transition-all duration-500`}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                {steps[activeStep].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white/20 text-white/90 text-xs font-bold px-2.5 py-1 rounded-lg">
                    Step {steps[activeStep].number}
                  </span>
                  <span className="bg-white/20 text-white/90 text-xs font-medium px-2.5 py-1 rounded-lg">
                    {steps[activeStep].duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{steps[activeStep].title}</h3>
                <p className="text-white/85 text-base leading-relaxed max-w-2xl">{steps[activeStep].description}</p>
              </div>
            </div>
          </div>

          {/* Steps labels */}
          <div className="flex justify-between mt-3">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`text-xs font-medium text-center w-14 transition-colors duration-200 ${
                  i === activeStep ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {step.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br ${step.color} shadow-sm shrink-0`}>
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pb-4 ${i < steps.length - 1 ? 'pb-6' : ''}`}>
                <div className={`inline-flex items-center gap-1.5 ${step.light} text-xs font-semibold px-2.5 py-1 rounded-lg border mb-2`}>
                  {step.icon}
                  {step.duration}
                </div>
                <h3 className="text-gray-900 font-bold mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-500 mb-4">Ready to begin your journey? Our counsellors are waiting to guide you.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-brand hover:-translate-y-0.5"
          >
            Start My Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
