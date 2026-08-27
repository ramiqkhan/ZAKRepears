import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Facebook, 
  Instagram, ChevronRight 
} from 'lucide-react';
// Assets folder se aapka logo
import logoImage from '../assets/logo.jpeg'; 
const goToServicesTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Footer = () => {
  return (
    <footer className="bg-[#050a14] pt-24 pb-12 px-6 border-t border-white/5 relative">
      {/* Subtle Glow Effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand Info & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Logo" className="w-12 h-12 rounded-lg object-cover border border-blue-500/20" />
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                Houston <span className="text-blue-500">Easy Repairs</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
              Reliable home repair and maintenance services serving Rosenberg and the greater Houston area.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61577062507977&sk=about" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl text-blue-500 hover:bg-blue-600 hover:text-white transition-all cursor-pointer group shadow-lg">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>

              <a href="https://www.instagram.com/houstoneasyrepairs/" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl text-blue-500 hover:bg-blue-600 hover:text-white transition-all cursor-pointer group shadow-lg">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 pt-4 text-gray-400 font-bold">
              <li className="hover:text-blue-500 transition-colors cursor-pointer flex items-center gap-2 group">
                <ChevronRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                <Link to="/">Home</Link>
              </li>

              <li className="hover:text-blue-500 transition-colors cursor-pointer flex items-center gap-2 group">
                <ChevronRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                <Link to="/about">About Us</Link>
              </li>

              <li className="hover:text-blue-500 transition-colors cursor-pointer flex items-center gap-2 group">
                <ChevronRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                <Link to="/services">Services</Link>
              </li>

              <li className="hover:text-blue-500 transition-colors cursor-pointer flex items-center gap-2 group">
                <ChevronRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
  <div className="space-y-6">
  <h4 className="text-lg font-black uppercase tracking-widest text-white relative inline-block">
    Our Services

    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
  </h4>

  <ul className="space-y-4 pt-4 text-gray-400 font-bold">
    {[
      "Electrical",
      "Plumbing",
      "HVAC",
      "Painting Services",
      "Roofing Services",
      "Carpentry",
      "Drywall Repair",
      "Accent Walls",
      "Interior Repairs & Touch-Ups",
    ].map((service) => (
      <li key={service}>
        <Link
          to="/services"
          onClick={goToServicesTop}
          className="hover:text-blue-500 transition-colors cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>

          {service}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Column 4: Location Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <div className="space-y-5 pt-4 text-gray-400">
              <div className="flex items-start gap-4 group">
                <MapPin size={20} className="text-blue-500 shrink-0 group-hover:animate-bounce" />
                <p className="font-bold leading-tight"> 4925 Avenue H, Rosenberg,  <br />  TX 77471 Suite 1120</p>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone size={20} className="text-blue-500 shrink-0 group-hover:rotate-12 transition-transform" />
                <p className="font-bold">+1 (346) 603-4582</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <p className="font-bold truncate text-sm">info@houstoneasyrepairs.com</p>
              </div>
            </div>
          </div>
        </div>

    {/* Bottom Copyright */}
<div className="border-t border-white/10 mt-12 pt-6 px-2">
  <p className="text-xs tracking-widest uppercase text-gray-500 font-semibold">
    © {new Date().getFullYear()} Houston Easy Repairs. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;