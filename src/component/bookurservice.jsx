import React from 'react';
import { 
  User, Phone, Wrench, Calendar, MapPin, 
  Star, Clock, ShieldCheck 
} from 'lucide-react';

const BookingForm = () => {
  return (
    <div className="relative group max-w-lg mx-auto">
      {/* Background Neon Glow Effect */}
      <div className="absolute -inset-4 bg-blue-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
      
      {/* Main Form Card */}
      <div className="relative bg-[#0a1221]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3">
            Book Your <span className="text-blue-500">Service</span>
          </h2>
          
          {/* Trust Badges from Screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-3 py-2 border-y border-white/5 mt-4">
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <Star size={14} className="text-blue-500 fill-blue-500" /> 
              4.9 Google Rating
            </div>
            <div className="w-1 h-1 bg-blue-500/40 rounded-full"></div>
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <ShieldCheck size={14} className="text-blue-500" />
              10,000+ Repairs
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Input */}
          <div className="relative group/input">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-[#050a14] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 focus:outline-none transition-all font-bold placeholder:text-gray-600 text-white"
            />
          </div>

          {/* Phone Input */}
          <div className="relative group/input">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-blue-500 transition-colors" size={20} />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-[#050a14] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 focus:outline-none transition-all font-bold placeholder:text-gray-600 text-white"
            />
          </div>

          {/* Service Selection */}
          <div className="relative group/input">
            <Wrench className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            <select className="w-full bg-[#050a14] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 focus:outline-none transition-all font-bold text-gray-400 appearance-none cursor-pointer">
              <option>Select Service</option>
              <option>Home Repair & Handyman</option>
              <option>Electrical Repairs</option>
              <option>Plumbing Repairs</option>
              <option>Property Maintenance</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <ChevronDown size={18} />
            </div>
          </div>

          {/* Date Picker */}
          <div className="relative group/input">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Preferred Date" 
              className="w-full bg-[#050a14] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 focus:outline-none transition-all font-bold placeholder:text-gray-600 text-white"
            />
          </div>

          {/* Address Input */}
          <div className="relative group/input">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Your Address" 
              className="w-full bg-[#050a14] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 focus:outline-none transition-all font-bold placeholder:text-gray-600 text-white"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-600/30 transition-all active:scale-95 mt-4 group">
            <span className="flex items-center justify-center gap-2">
              Book Appointment
            </span>
          </button>
        </form>
        
        {/* Availability Footer */}
        <div className="mt-8 flex justify-center items-center gap-3 text-blue-500/60 font-black uppercase text-[10px] tracking-[0.2em]">
          <div className="h-[1px] w-6 bg-blue-500/20"></div>
          <Clock size={14} className="animate-pulse" /> 
          24/7 Service Available
          <div className="h-[1px] w-6 bg-blue-500/20"></div>
        </div>
      </div>
    </div>
  );
};

// Helper for the dropdown arrow
const ChevronDown = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

export default BookingForm;