import React from 'react';
import { MapPin, Home, Clock, ChevronRight, Phone } from 'lucide-react';
// Assets folder se aapka logo image
import logoImage from '../assets/logo.jpeg'; 

const Footer = () => {
  const citiesLeft = ["Dallas", "Dallas", "Austin", "San Antonio"];
  const citiesRight = ["Houston", "Dallas", "Austin", "San Antonio"];

  return (
    <footer className="relative w-full bg-[#050a14] text-white py-16 px-6 overflow-hidden border-t border-blue-900/30">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-[-10%] w-[50%] h-[300px] bg-blue-600/10 blur-[120px] rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Title Section (Lines + Text) --- */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-[1px] flex-grow max-w-[200px] bg-gradient-to-r from-transparent to-gray-600"></div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center">
            Our Service Areas
          </h2>
          <div className="h-[1px] flex-grow max-w-[200px] bg-gradient-to-l from-transparent to-gray-600"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* --- LEFT: Exact Logo Image from your assets --- */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Logo image with the blue glow effect from the reference */}
              <img 
                src={logoImage} 
                alt="Houston Easy Repairs Logo" 
                className="w-full max-w-[450px] h-auto object-contain drop-shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* --- RIGHT: Cities List Box --- */}
          <div className="w-full lg:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 bg-[#0a1221]/50 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-2xl">
            
            {/* Left Column Cities */}
            <div className="space-y-5">
              {citiesLeft.map((city, index) => (
                <div key={index} className="flex items-center gap-4 group cursor-pointer">
                  <div className="text-blue-500 group-hover:scale-110 transition-transform">
                    <MapPin size={24} fill="currentColor" fillOpacity={0.2} />
                  </div>
                  <span className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors">
                    {city}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column Cities */}
            <div className="space-y-5 border-t md:border-t-0 md:border-l border-gray-700/50 pt-6 md:pt-0 md:pl-10">
              {citiesRight.map((city, index) => (
                <div key={index} className="flex items-center gap-4 group cursor-pointer">
                  <div className="text-blue-500 group-hover:scale-110 transition-transform">
                    {index % 2 === 0 ? <Home size={24} /> : <Clock size={24} />}
                  </div>
                  <span className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- BOTTOM: Action Buttons --- */}
        <div className="flex flex-wrap justify-center gap-6 mt-20">
          <button className="flex items-center gap-3 bg-[#0042c2] hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-black text-xl shadow-xl transition-all active:scale-95 uppercase tracking-wide">
            <Phone size={22} fill="currentColor" />
            Call Here
          </button>
          
          <button className="flex items-center gap-3 bg-[#005eff] hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-xl shadow-xl shadow-blue-500/20 transition-all active:scale-95 uppercase tracking-wide">
            Book Appointment
            <ChevronRight size={26} strokeWidth={3} />
          </button>
        </div>

      </div>
      
      {/* Sub-footer */}
      <div className="mt-24 pt-8 border-t border-gray-900 text-center text-gray-600 text-[10px] font-bold tracking-[0.3em] uppercase">
        © 2026 Houston Easy Repairs • Trusted Home Maintenance
      </div>
    </footer>
  );
};

export default Footer;