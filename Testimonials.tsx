import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    university: 'University of Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    course: 'MSc Computer Science',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'HumbleWalking made my dream of studying in Canada a reality! From shortlisting universities to getting my visa approved, their team was by my side at every step. Highly recommended!',
    scholarship: 'Received $12,000 scholarship',
  },
  {
    name: 'Rahul Mehta',
    university: 'University of Birmingham',
    country: 'United Kingdom',
    flag: '🇬🇧',
    course: 'MBA Finance',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'Exceptional service! The SOP they helped me craft was spot on. Got admits from 3 UK universities. Their visa guidance was crucial — got my visa approved in the first attempt itself!',
    scholarship: 'Partial scholarship received',
  },
  {
    name: 'Sneha Patel',
    university: 'University of Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    course: 'MS Data Science',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'From day one, the team at HumbleWalking treated my case with utmost care. They helped me secure accommodation and even connected me with other Indian students in Melbourne!',
    scholarship: 'AUD 8,000 scholarship',
  },
  {
    name: 'Akash Gupta',
    university: 'TU Munich',
    country: 'Germany',
    flag: '🇩🇪',
    course: 'M.Sc. Mechanical Engineering',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'Germany was a dream — tuition-free education at a top university! HumbleWalking guided me through the blocked account process, APS certificate, and visa. Simply outstanding!',
    scholarship: 'Zero tuition fees secured',
  },
  {
    name: 'Anjali Desai',
    university: 'University College Dublin',
    country: 'Ireland',
    flag: '🇮🇪',
    course: 'MSc Data Analytics',
    image: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'The team is incredibly knowledgeable about Ireland admissions. They helped me with everything from shortlisting to accommodation. I got placed with a tech company within 6 months!',
    scholarship: 'Merit scholarship received',
  },
  {
    name: 'Vikram Singh',
    university: 'University of Texas',
    country: 'United States',
    flag: '🇺🇸',
    course: 'MS Electrical Engineering',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review: 'Got into my dream school in the USA with a significant scholarship! The GRE prep resources and application guidance from HumbleWalking were exceptional. Thank you team!',
    scholarship: '$15,000 TA scholarship',
  },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;
  const visibleCount = 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (total - visibleCount + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplay, total]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + (total - visibleCount + 1)) % (total - visibleCount + 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % (total - visibleCount + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
              <MessageSquare className="w-3.5 h-3.5" />
              Student Stories
            </div>
            <h2 className="section-heading text-gray-900">
              Real Students,
              <span className="gradient-text"> Real Success</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-200 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-200 shadow-brand"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${current} * (100% / 3 + 20px / 3)))` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] testimonial-card rounded-2xl p-6 border border-gray-100 shadow-card transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Quote icon */}
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="w-4 h-4 text-blue-600" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>

                {/* Scholarship badge */}
                <div className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-100 mb-4 inline-block">
                  {t.scholarship}
                </div>

                {/* Student info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs truncate">{t.course}</div>
                    <div className="text-blue-600 text-xs font-medium flex items-center gap-1">
                      <span>{t.flag}</span>
                      {t.university}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(total - visibleCount + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoplay(false); setCurrent(i); }}
              className={`transition-all duration-200 rounded-full ${
                i === current ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Overall rating */}
        <div className={`mt-12 p-6 rounded-2xl bg-white border border-gray-100 shadow-card flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-gray-900 mb-1">4.9</div>
            <div className="flex gap-1 justify-center md:justify-start mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-gray-500 text-sm">Based on 200+ student reviews</div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: 'Counselling', value: '98%' },
              { label: 'Visa Support', value: '95%' },
              { label: 'Documentation', value: '99%' },
              { label: 'Overall Experience', value: '97%' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                <div className="text-gray-500 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
