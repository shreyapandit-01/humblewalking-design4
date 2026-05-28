import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, Tag, BookOpen } from 'lucide-react';

const blogs = [
  {
    title: 'Complete Guide to Canada Student Visa 2025',
    excerpt: 'Everything you need to know about the Canadian student visa process — from application timeline to required documents and tips for a successful application.',
    category: 'Visa Guidance',
    categoryColor: 'bg-blue-50 text-blue-600 border-blue-100',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '8 min read',
    date: 'March 15, 2025',
    tag: 'Must Read',
    tagColor: 'bg-blue-600',
  },
  {
    title: 'Top 10 Scholarships for Indian Students in 2025',
    excerpt: 'Discover the most lucrative scholarship opportunities available for Indian students planning to study abroad in the UK, US, Canada, Australia, and Germany.',
    category: 'Scholarships',
    categoryColor: 'bg-amber-50 text-amber-600 border-amber-100',
    image: 'https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '10 min read',
    date: 'March 8, 2025',
    tag: 'Popular',
    tagColor: 'bg-amber-600',
  },
  {
    title: 'How to Write the Perfect Statement of Purpose',
    excerpt: 'A step-by-step guide to crafting an SOP that stands out — with real examples, expert tips, and common mistakes to avoid for your university application.',
    category: 'Application Tips',
    categoryColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    image: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '12 min read',
    date: 'Feb 28, 2025',
    tag: 'Expert Guide',
    tagColor: 'bg-emerald-600',
  },
  {
    title: 'Preparing for Life Abroad: Ultimate Pre-Departure Checklist',
    excerpt: 'Your complete pre-departure preparation guide — packing essentials, banking setup, accommodation tips, health insurance, and first-week survival guide.',
    category: 'Pre-Departure',
    categoryColor: 'bg-rose-50 text-rose-600 border-rose-100',
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '7 min read',
    date: 'Feb 20, 2025',
    tag: 'Trending',
    tagColor: 'bg-rose-600',
  },
];

function BlogCard({ blog, index, visible }: { blog: typeof blogs[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Tag badge */}
        <div className={`absolute top-3 left-3 ${blog.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-lg`}>
          {blog.tag}
        </div>
        {/* Read time */}
        <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {blog.readTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${blog.categoryColor}`}>
            {blog.category}
          </span>
          <span className="text-gray-400 text-xs">{blog.date}</span>
        </div>

        {/* Title */}
        <h3 className={`text-gray-900 font-bold text-base mb-2 leading-snug transition-colors duration-200 ${hovered ? 'text-blue-600' : ''}`}>
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>

        {/* Read more */}
        <button className={`flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 ${hovered ? 'text-blue-600 gap-2.5' : 'text-gray-400'}`}>
          Read Article
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function Blog() {
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
    <section id="blogs" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
              <BookOpen className="w-3.5 h-3.5" />
              Blogs & Resources
            </div>
            <h2 className="section-heading text-gray-900">
              Expert Study Abroad
              <span className="gradient-text"> Insights</span>
            </h2>
          </div>
          <button className="btn-outline text-sm hidden md:flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} index={i} visible={visible} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <button className="btn-outline text-sm inline-flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Newsletter */}
        <div className={`mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-bold text-white mb-2">Get Study Abroad Tips in Your Inbox</h3>
          <p className="text-blue-100 mb-6 text-sm">Weekly tips, visa updates, scholarship alerts, and more — straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/25 text-white placeholder-blue-200 text-sm focus:outline-none focus:bg-white/20 backdrop-blur-sm"
            />
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 text-sm shrink-0">
              Subscribe Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
