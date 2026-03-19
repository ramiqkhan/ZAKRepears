import React from 'react';
import { 
  User, Phone, Calendar, ChevronDown, 
  MapPin, ShieldCheck
} from 'lucide-react';

const HeroForm = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      
      {/* Background Glow Effect - Glassmorphism depth ke liye */}
      <div className="absolute -inset-4 sm:-inset-12 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* FORM CARD */}
      <div className="relative bg-[#0a1221]/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
        
        {/* Neon Top Beam */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>

        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase tracking-widest">
            Book Your Service
          </h2>
        </div>

        <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Input */}
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-all" size={20} />
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-white text-gray-900 rounded-xl py-4 pl-12 pr-4 font-bold outline-none text-sm sm:text-base shadow-inner focus:ring-2 focus:ring-blue-500/50 transition-all border-none placeholder:text-gray-400 placeholder:font-medium" 
            />
          </div>

          {/* Phone Input */}
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-all" size={20} />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-white text-gray-900 rounded-xl py-4 pl-12 pr-4 font-bold outline-none text-sm sm:text-base shadow-inner focus:ring-2 focus:ring-blue-500/50 transition-all border-none placeholder:text-gray-400 placeholder:font-medium" 
            />
          </div>

          {/* Service Dropdown */}
          <div className="relative group">
            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={20} />
            <select className="w-full bg-white text-gray-900 rounded-xl py-4 pl-12 pr-10 font-black appearance-none outline-none text-sm sm:text-base cursor-pointer focus:ring-2 focus:ring-blue-500/50 transition-all border-none">
              <option className="font-bold">Select Service</option>
              <option>General home repairs and handyman services</option>
              <option>Electrical repair and troubleshooting</option>
              <option>Plumbing repair and maintenance</option>
              <option>Property maintenance services</option>
              <option>Fixture installation and minor carpentry work</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:rotate-180 transition-transform" size={20} />
          </div>

          {/* Date Input */}
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-all" size={20} />
            <input 
              type="text" 
              placeholder="Preferred Date" 
              className="w-full bg-white text-gray-900 rounded-xl py-4 pl-12 pr-4 font-bold outline-none text-sm sm:text-base shadow-inner focus:ring-2 focus:ring-blue-500/50 transition-all border-none placeholder:text-gray-400 placeholder:font-medium" 
            />
          </div>

          {/* Address Input */}
          <div className="relative group">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-all" size={20} />
            <input 
              type="text" 
              placeholder="Your Address" 
              className="w-full bg-white text-gray-900 rounded-xl py-4 pl-12 pr-4 font-bold outline-none text-sm sm:text-base shadow-inner focus:ring-2 focus:ring-blue-500/50 transition-all border-none placeholder:text-gray-400 placeholder:font-medium" 
            />
          </div>
          
          {/* Submit Button: Light Blue to Deep Navy Gradient */}
          <button className="w-full bg-gradient-to-r from-[#1e86ff] via-[#1a5edb] to-[#123597] hover:brightness-110 text-white py-4.5 rounded-xl font-black text-lg sm:text-xl shadow-[0_10px_30px_rgba(30,134,255,0.4)] mt-4 transition-all active:scale-[0.96] tracking-widest uppercase">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;