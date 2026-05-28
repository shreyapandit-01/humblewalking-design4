import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, MapPin, Star, Globe, GraduationCap, Award, BookOpen, Home, Banknote } from 'lucide-react';

const floatingCards = [
  { icon: <Award className="w-4 h-4 text-amber-400" />, label: 'Visa Assistance', value: '95%+', color: 'from-amber-500/20 to-amber-600/10', border: 'border-amber-400/20', delay: '0s' },
  { icon: <GraduationCap className="w-4 h-4 text-blue-400" />, label: 'Scholarships', value: '500+', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-400/20', delay: '1s' },
  { icon: <Globe className="w-4 h-4 text-emerald-400" />, label: 'Universities', value: '300+', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-400/20', delay: '2s' },
  { icon: <Home className="w-4 h-4 text-rose-400" />, label: 'Accommodation', value: 'Assured', color: 'from-rose-500/20 to-rose-600/10', border: 'border-rose-400/20', delay: '1.5s' },
];

const countries = ['Canada', 'UK', 'USA', 'Australia', 'Germany', 'Ireland'];

function WorldMapSVG() {
  return (
    <svg viewBox="0 0 900 450" className="w-full h-full opacity-20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Simplified world map dots */}
      {[
        // North America
        [120,130],[140,125],[160,120],[180,115],[200,120],[220,125],[240,130],[260,135],[150,145],[170,140],[190,135],[210,140],[230,145],[140,155],[160,150],[180,155],[200,160],[220,155],[170,165],[190,170],[210,165],[230,165],
        // South America
        [200,200],[220,195],[240,200],[260,205],[210,215],[230,220],[220,230],[210,245],[220,260],[215,275],
        // Europe
        [410,100],[430,95],[450,90],[470,95],[490,100],[510,105],[420,110],[440,105],[460,100],[480,105],[500,110],[430,120],[450,115],[470,120],[490,115],[510,120],
        // Africa
        [440,160],[460,155],[480,160],[500,165],[450,170],[470,175],[460,185],[470,195],[480,205],[470,220],[460,235],[470,250],[460,265],
        // Asia
        [560,90],[580,85],[600,80],[620,85],[640,90],[660,95],[680,100],[700,95],[560,100],[580,95],[600,90],[620,95],[640,100],[660,105],[680,110],[580,110],[600,105],[620,110],[640,115],[660,120],[680,115],[700,110],[620,125],[640,130],[660,135],[640,145],[660,150],[680,145],[700,140],[720,135],[740,130],[720,145],[740,150],[760,145],
        // Australia
        [700,260],[720,255],[740,250],[760,255],[780,260],[720,270],[740,265],[760,270],[780,265],[730,280],[750,285],[770,280],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill="rgba(96,165,250,0.8)" />
      ))}
      {/* Connection lines */}
      <line x1="200" y1="140" x2="450" y2="110" stroke="rgba(96,165,250,0.3)" strokeWidth="1" strokeDasharray="4,4" />
      <line x1="450" y1="110" x2="640" y2="100" stroke="rgba(96,165,250,0.3)" strokeWidth="1" strokeDasharray="4,4" />
      <line x1="200" y1="140" x2="640" y2="100" stroke="rgba(96,165,250,0.2)" strokeWidth="1" strokeDasharray="4,4" />
      <line x1="640" y1="100" x2="750" y2="260" stroke="rgba(96,165,250,0.2)" strokeWidth="1" strokeDasharray="4,4" />
      {/* Pulse dots for key cities */}
      <circle cx="200" cy="140" r="5" fill="rgba(96,165,250,0.3)" />
      <circle cx="200" cy="140" r="3" fill="rgba(96,165,250,0.7)" />
      <circle cx="460" cy="107" r="5" fill="rgba(96,165,250,0.3)" />
      <circle cx="460" cy="107" r="3" fill="rgba(96,165,250,0.7)" />
      <circle cx="640" cy="95" r="5" fill="rgba(96,165,250,0.3)" />
      <circle cx="640" cy="95" r="3" fill="rgba(96,165,250,0.7)" />
      <circle cx="750" cy="265" r="5" fill="rgba(96,165,250,0.3)" />
      <circle cx="750" cy="265" r="3" fill="rgba(96,165,250,0.7)" />
    </svg>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [countryIdx, setCountryIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountryIdx((i) => (i + 1) % countries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0f2e 0%, #0d1f5c 35%, #1a3a8f 60%, #0c1640 100%)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-orb opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-orb-gold opacity-30" />
        <div className="absolute top-0 right-0 w-64 h-64" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        {/* World map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-5xl h-full max-h-[500px]">
            <WorldMapSVG />
          </div>
        </div>

        {/* Animated circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-400/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-400/10 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/25 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-blue-200 text-sm font-medium">Mumbai's Premier Study Abroad Consultancy</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Your Global
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Education Journey
                </span>
                <br />
                Starts Here
              </h1>
              <div className="flex items-center gap-3 text-blue-200 text-lg font-medium">
                <span>Study in</span>
                <span className="text-white font-semibold min-w-[120px] transition-all duration-500">
                  {countries[countryIdx]}
                </span>
                <MapPin className="w-4 h-4 text-blue-400" />
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              HumbleWalking helps students achieve their dream of studying abroad with expert counselling, university admissions guidance, visa assistance, scholarships, and end-to-end support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-brand-lg hover:-translate-y-0.5 shadow-brand text-base"
              >
                Book Free Counselling
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#destinations"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm text-base"
              >
                <Play className="w-4 h-4" />
                Explore Destinations
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  {['bg-blue-400', 'bg-emerald-400', 'bg-amber-400', 'bg-rose-400'].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-navy-900 flex items-center justify-center text-white text-xs font-bold`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="ml-1">
                  <div className="text-white text-sm font-semibold">1000+ Students</div>
                  <div className="text-gray-400 text-xs">Successfully Guided</div>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">4.9/5 Rating</div>
                  <div className="text-gray-400 text-xs">200+ Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main illustration card */}
            <div className="relative flex justify-center">
              {/* Central illustration */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse-soft" style={{ transform: 'scale(1.3)' }} />
                <div className="absolute inset-0 rounded-full bg-blue-500/15 animate-pulse-soft" style={{ transform: 'scale(1.15)', animationDelay: '0.5s' }} />

                {/* Main circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 to-navy-900/50 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center animate-float">
                  {/* Student illustration using SVG */}
                  <svg viewBox="0 0 200 200" className="w-52 h-52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Body */}
                    <circle cx="100" cy="65" r="30" fill="rgba(96,165,250,0.3)" stroke="rgba(96,165,250,0.6)" strokeWidth="2" />
                    {/* Head */}
                    <circle cx="100" cy="58" r="16" fill="rgba(251,191,36,0.8)" />
                    {/* Hair */}
                    <path d="M84 52 Q100 42 116 52" fill="rgba(30,41,59,0.8)" />
                    {/* Graduation cap */}
                    <rect x="88" y="38" width="24" height="4" fill="rgba(30,58,138,0.9)" rx="1" />
                    <polygon points="100,28 88,38 112,38" fill="rgba(30,58,138,0.9)" />
                    <line x1="112" y1="38" x2="116" y2="48" stroke="rgba(245,158,11,0.8)" strokeWidth="2" />
                    {/* Tassel */}
                    <circle cx="116" cy="50" r="3" fill="rgba(245,158,11,0.8)" />
                    {/* Torso / Graduation gown */}
                    <path d="M72 95 Q75 72 100 68 Q125 72 128 95 Q125 115 100 118 Q75 115 72 95Z" fill="rgba(30,58,138,0.7)" />
                    {/* Arms */}
                    <path d="M72 80 Q55 85 50 100 Q52 108 60 105 Q65 95 75 90" fill="rgba(30,58,138,0.7)" />
                    <path d="M128 80 Q145 85 150 100 Q148 108 140 105 Q135 95 125 90" fill="rgba(30,58,138,0.7)" />
                    {/* Book in hand */}
                    <rect x="42" y="94" width="20" height="15" rx="2" fill="rgba(59,130,246,0.8)" />
                    <line x1="52" y1="94" x2="52" y2="109" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                    {/* Globe in other hand */}
                    <circle cx="155" cy="98" r="10" fill="rgba(16,185,129,0.5)" stroke="rgba(52,211,153,0.7)" strokeWidth="1.5" />
                    <ellipse cx="155" cy="98" rx="10" ry="4" fill="none" stroke="rgba(52,211,153,0.5)" strokeWidth="1" />
                    <line x1="155" y1="88" x2="155" y2="108" stroke="rgba(52,211,153,0.5)" strokeWidth="1" />
                    {/* Legs */}
                    <path d="M85 118 L80 148 L90 148 L100 128 L110 148 L120 148 L115 118Z" fill="rgba(30,58,138,0.6)" />
                    {/* Shoes */}
                    <ellipse cx="83" cy="150" rx="9" ry="4" fill="rgba(30,41,59,0.8)" />
                    <ellipse cx="117" cy="150" rx="9" ry="4" fill="rgba(30,41,59,0.8)" />
                    {/* Stars around */}
                    <circle cx="35" cy="40" r="2" fill="rgba(251,191,36,0.7)" />
                    <circle cx="165" cy="35" r="2.5" fill="rgba(251,191,36,0.9)" />
                    <circle cx="25" cy="130" r="2" fill="rgba(96,165,250,0.7)" />
                    <circle cx="175" cy="140" r="2" fill="rgba(96,165,250,0.7)" />
                    <circle cx="60" cy="20" r="1.5" fill="rgba(251,191,36,0.6)" />
                    <circle cx="145" cy="165" r="1.5" fill="rgba(251,191,36,0.6)" />
                  </svg>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-4 top-4 lg:-left-16 animate-float" style={{ animationDelay: '0s' }}>
                <div className="glass-card bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-400/20 px-3 py-2.5 flex items-center gap-2 shadow-glass">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">95%+</div>
                    <div className="text-gray-300 text-xs">Visa Success</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-8 lg:-right-12 animate-float" style={{ animationDelay: '1s' }}>
                <div className="glass-card bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-400/20 px-3 py-2.5 flex items-center gap-2 shadow-glass">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">500+</div>
                    <div className="text-gray-300 text-xs">Scholarships</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-8 lg:-left-12 animate-float" style={{ animationDelay: '2s' }}>
                <div className="glass-card bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-400/20 px-3 py-2.5 flex items-center gap-2 shadow-glass">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">300+</div>
                    <div className="text-gray-300 text-xs">Universities</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-4 lg:-right-16 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="glass-card bg-gradient-to-br from-rose-500/20 to-rose-600/10 border-rose-400/20 px-3 py-2.5 flex items-center gap-2 shadow-glass">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/20 flex items-center justify-center">
                    <Home className="w-3.5 h-3.5 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">Assured</div>
                    <div className="text-gray-300 text-xs">Accommodation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo from Pexels */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-blue-400/20 shadow-glass-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <img
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students studying abroad"
                className="w-full h-40 object-cover"
              />
              <div className="bg-gradient-to-r from-navy-900/90 to-blue-900/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
                <div>
                  <div className="text-white text-sm font-semibold">Join 1000+ Students</div>
                  <div className="text-blue-200 text-xs">Who achieved their dream abroad</div>
                </div>
                <a
                  href="#contact"
                  className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-soft">
        <div className="text-gray-400 text-xs font-medium tracking-widest uppercase">Scroll</div>
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
