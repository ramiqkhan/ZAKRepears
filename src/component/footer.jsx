import React from 'react';
import { 
  MapPin, Phone, Mail, Facebook, 
  Instagram, Twitter, ChevronRight 
} from 'lucide-react';
// Assets folder se aapka logo
import logoImage from '../assets/logo.jpeg'; 

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
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <div key={i} className="p-3 bg-white/5 rounded-xl text-blue-500 hover:bg-blue-600 hover:text-white transition-all cursor-pointer group shadow-lg">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 pt-4 text-gray-400 font-bold">
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <li key={link} className="hover:text-blue-500 transition-colors cursor-pointer flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                  {link}
                </li>
              ))}
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
                "Handyman Services", "Electrical Repairs", 
                "Plumbing Repairs", "Property Maintenance", 
                "Installation Services"
              ].map((service) => (
                <li key={service} className="hover:text-blue-500 transition-colors cursor-pointer flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  {service}
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
                <p className="font-bold leading-tight">4925 Avenue H Suite A, <br />Rosenberg, TX 77471</p>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone size={20} className="text-blue-500 shrink-0 group-hover:rotate-12 transition-transform" />
                <p className="font-bold">+1 (281) 250-2592</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <p className="font-bold truncate text-sm">contact@houstoneasyrepairs.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
            © 2026 Houston Easy Repairs. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-8 bg-white/10"></div>
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
              Designed with Precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;