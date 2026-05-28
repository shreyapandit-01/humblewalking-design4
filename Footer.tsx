import { GraduationCap, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const quickLinks = ['About Us', 'Services', 'Study Destinations', 'Scholarships', 'Student Reviews', 'Blog', 'Contact Us'];
const services = ['Career Counselling', 'University Shortlisting', 'Admission Guidance', 'SOP & LOR Support', 'Visa Assistance', 'Education Loans', 'Accommodation', 'Pre-Departure'];
const destinations = ['Canada', 'United Kingdom', 'United States', 'Australia', 'Germany', 'Ireland', 'Europe'];

const socialLinks = [
  { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: <Youtube className="w-4 h-4" />, label: 'YouTube', color: 'hover:bg-red-600' },
  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', color: 'hover:bg-sky-600' },
  { icon: <Twitter className="w-4 h-4" />, label: 'Twitter', color: 'hover:bg-sky-500' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-brand">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">HumbleWalking</span>
                <div className="text-blue-400 text-xs font-medium">Study Abroad Experts</div>
              </div>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Mumbai's most trusted study abroad consultancy. We help students achieve their international education dreams with expert guidance, personalized support, and end-to-end assistance.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
              </div>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </a>
              <a href="mailto:info@humblewalking.com" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>info@humblewalking.com</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, i) => (
                <button
                  key={i}
                  aria-label={social.label}
                  className={`w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color} hover:text-white hover:-translate-y-0.5`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200 text-blue-400" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200 text-blue-400" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Study Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((dest) => (
                <li key={dest}>
                  <a href="#destinations" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200 text-blue-400" />
                    Study in {dest}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 p-4 rounded-xl bg-blue-900/50 border border-blue-800/50">
              <div className="text-white text-sm font-semibold mb-1">Free Counselling</div>
              <div className="text-gray-400 text-xs mb-3">Get expert guidance today</div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200"
              >
                Book Now
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2025 HumbleWalking. All rights reserved. Helping students soar to global heights.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, i) => (
              <a key={i} href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
