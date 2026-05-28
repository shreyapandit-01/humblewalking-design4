import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, TrendingUp, Users, Building } from 'lucide-react';

const destinations = [
  {
    country: 'Canada',
    flag: '🇨🇦',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'World-Class Education & PR Pathway',
    courses: ['Computer Science', 'Business', 'Engineering', 'Healthcare'],
    opportunities: 'Post-study work permit + PR pathway',
    environment: 'Multicultural & Student-Friendly',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-600',
    students: '1,80,000+',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Prestigious Universities & Rich Heritage',
    courses: ['Law', 'Finance', 'Arts & Design', 'Sciences'],
    opportunities: '2-Year Graduate Route Visa',
    environment: 'Historic & Diverse Culture',
    badge: 'Top Ranked',
    badgeColor: 'bg-rose-600',
    students: '1,20,000+',
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Innovation Hub & Global Careers',
    courses: ['STEM', 'MBA', 'Media', 'Research'],
    opportunities: '3-Year OPT for STEM graduates',
    environment: 'Dynamic & Innovation-Driven',
    badge: 'Dream Destination',
    badgeColor: 'bg-amber-600',
    students: '2,50,000+',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Quality Life & Career Opportunities',
    courses: ['Mining', 'IT', 'Hospitality', 'Agriculture'],
    opportunities: 'Extended post-study work rights',
    environment: 'Safe & High Quality of Life',
    badge: 'Best Value',
    badgeColor: 'bg-emerald-600',
    students: '1,50,000+',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Free Education & Engineering Excellence',
    courses: ['Engineering', 'Tech', 'Research', 'Sciences'],
    opportunities: '18-month job seeker visa',
    environment: 'Low-cost & High-quality Education',
    badge: 'Free Tuition',
    badgeColor: 'bg-sky-600',
    students: '40,000+',
  },
  {
    country: 'Ireland',
    flag: '🇮🇪',
    image: 'https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Tech Hub of Europe',
    courses: ['IT', 'Pharma', 'Finance', 'Data Science'],
    opportunities: 'Stay Back option after studies',
    environment: 'English-speaking & Welcoming',
    badge: 'Tech Hub',
    badgeColor: 'bg-teal-600',
    students: '35,000+',
  },
  {
    country: 'Europe',
    flag: '🇪🇺',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Diverse Culture & Affordable Education',
    courses: ['Fashion', 'Architecture', 'Arts', 'Sciences'],
    opportunities: 'Multiple country options',
    environment: 'Culturally Rich & Diverse',
    badge: 'Multiple Options',
    badgeColor: 'bg-orange-600',
    students: '60,000+',
  },
];

function DestinationCard({ dest, index, visible }: { dest: typeof destinations[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } group`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.country}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        {/* Overlay */}
        <div className="absolute inset-0 country-overlay" />

        {/* Badge */}
        <div className={`absolute top-3 left-3 ${dest.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-lg`}>
          {dest.badge}
        </div>

        {/* Students count */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
          <Users className="w-3 h-3" />
          {dest.students} Indian Students
        </div>

        {/* Country name on image */}
        <div className="absolute bottom-3 left-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{dest.flag}</span>
            <div>
              <h3 className="text-white text-xl font-bold">{dest.country}</h3>
              <p className="text-gray-300 text-xs">{dest.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-5 border border-gray-100 border-t-0 rounded-b-2xl">
        {/* Popular Courses */}
        <div className="mb-3">
          <div className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-2">Popular Courses</div>
          <div className="flex flex-wrap gap-1.5">
            {dest.courses.map((course, i) => (
              <span key={i} className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-lg border border-blue-100">
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Info rows */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
            <span className="text-gray-600 text-xs">{dest.opportunities}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
            <span className="text-gray-600 text-xs">{dest.environment}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            hovered
              ? 'bg-blue-600 text-white shadow-brand'
              : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
          }`}
        >
          Explore {dest.country}
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function Destinations() {
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
    <section id="destinations" className="py-20 lg:py-28 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            <Building className="w-3.5 h-3.5" />
            Study Destinations
          </div>
          <h2 className="section-heading text-gray-900 mb-4">
            Choose Your
            <span className="gradient-text"> Dream Destination</span>
          </h2>
          <p className="section-subheading">
            Explore world-class universities and career opportunities across 7+ top study destinations handpicked by our expert counsellors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.country} dest={dest} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-500 mb-4">Not sure which destination is right for you?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-brand hover:-translate-y-0.5 shadow-sm"
          >
            Get Free Destination Counselling
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
