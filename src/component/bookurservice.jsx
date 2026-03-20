import React from 'react';
import { 
  User, Phone, Calendar, ChevronDown, 
  MapPin, ShieldCheck, Clock, Hammer
} from 'lucide-react';

const ProfessionalServicePage = () => {
  return (
    /* W-full aur transparent background */
    <div className="w-full text-white font-sans overflow-x-hidden">
      
      {/* Container: Responsive Padding aur Max-Width */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        {/* Main Layout: Mobile par stack (col), Desktop par row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* LEFT SIDE (Content) */}
          <div className="w-full lg:flex-1 space-y-6 sm:space-y-8  lg:text-left">
            <div className="space-y-4">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Home Repair  
                <span className="font-light opacity-90"> & Maintenance Services</span>
              </h1>

              {/* Badges/Services: Mobile par wrap honge */}
           {/* Badges/Services: Start from left on mobile, can stay left or center on desktop */}
<div className="flex flex-wrap justify-start gap-x-2 sm:gap-x-3 gap-y-2 text-gray-400 text-sm sm:text-base md:text-lg font-medium">
  <span>Plumbing</span>
  <span className="text-blue-500">•</span>
  <span>Electrical</span>
  <span className="text-blue-500">•</span>
  <span>Remodeling</span>
  <span className="text-blue-500">•</span>
  <span>Garage Door Repair</span>
</div>
            </div>

            {/* Top Buttons: Mobile par 2 columns, Desktop par auto-width */}
            <div className="flex flex-row justify-center lg:justify-start gap-3 pt-2">
      <button className="px-8 py-4 bg-gradient-to-r from-[#00d2ff] via-[#0072ff] to-[#0033aa] hover:brightness-110 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,114,255,0.4)] transition-all">
              Get Free Estimate
            </button>
              <button className="flex-1 lg:flex-none lg:px-10 py-3.5 bg-white hover:bg-gray-100 text-black font-bold rounded-xl transition-all active:scale-95 shadow-xl text-sm sm:text-base">
                Call Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE (Form + Stats) */}
          <div className="relative w-full max-w-md mx-auto">
            
            {/* Soft Glow behind form */}
            <div className="absolute -inset-4 sm:-inset-10 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            {/* 1. THE FORM BOX: Glassmorphism look */}
            <div className="relative bg-[#0a1221]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-8 shadow-2xl">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase tracking-wider">Book Your Service</h2>
              </div>

              <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Your Name" className="w-full bg-white text-gray-800 rounded-lg py-3.5 sm:py-4 pl-11 pr-4 font-medium outline-none text-sm sm:text-base" />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white text-gray-800 rounded-lg py-3.5 sm:py-4 pl-11 pr-4 font-medium outline-none text-sm sm:text-base" />
                </div>
                <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1d4ed8]" size={18} />
                  <select className="w-full bg-white text-gray-800 rounded-lg py-3.5 sm:py-4 pl-11 pr-10 font-semibold appearance-none outline-none text-sm sm:text-base cursor-pointer">
                    <option>Select Service</option>
                    <option>Home Repair & Handyman</option>
                    <option>Electrical Repairs</option>
                    <option>Plumbing Repairs</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Preferred Date" className="w-full bg-white text-gray-800 rounded-lg py-3.5 sm:py-4 pl-11 pr-4 font-medium outline-none text-sm sm:text-base" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Your Address" className="w-full bg-white text-gray-800 rounded-lg py-3.5 sm:py-4 pl-11 pr-4 font-medium outline-none text-sm sm:text-base" />
                </div>
                <button className="w-full bg-gradient-to-b from-[#3b82f6] to-[#1d4ed8] hover:brightness-110 text-white py-3.5 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-xl mt-2 transition-all active:scale-[0.98]">
                  Book Appointment
                </button>
              </form>
            </div>

            {/* 2. STATS SECTION (Bahar) */}
            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6 relative z-10">
              
              {/* Stats Row */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 text-white">
                <div className="flex flex-col items-center sm:flex-row gap-1 sm:gap-2">
                  <span className="text-xl sm:text-2xl font-bold">4.9</span>
                  <span className="text-[10px] sm:text-xs opacity-70 uppercase tracking-widest">Google Rating</span>
                </div>
                <div className="h-6 w-[1px] bg-white/20"></div>
                <div className="flex flex-col items-center sm:flex-row gap-1 sm:gap-2">
                  <div className="flex items-center gap-2">
                     <Hammer size={16} className="text-blue-400 rotate-12 sm:w-5 sm:h-5" />
                     <span className="text-xl sm:text-2xl font-bold">10,000+</span>
                  </div>
                  <span className="text-[10px] sm:text-xs opacity-70 uppercase tracking-widest">Repairs</span>
                </div>
              </div>

              {/* Same Day Solution Divider */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                <div className="flex items-center gap-2 font-semibold">
                  <div className="bg-white rounded-full p-0.5 shadow-md">
                    <Clock size={14} className="text-black sm:w-4 sm:h-4" fill="currentColor" />
                  </div>
                  <span className="text-sm sm:text-lg whitespace-nowrap">Same day solution</span>
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
              </div>

              {/* Neon Line */}
              <div className="relative h-[1.5px] w-full max-w-[85%] mx-auto bg-blue-500/20">
                <div className="absolute inset-0 bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,1)]"></div>
              </div>

              {/* Bottom Actions */}
        <div className="flex gap-3 px-1">
  {/* Call Now: Image jaisa Deep Navy Blue color */}
  <button className="flex-1 flex items-center justify-center gap-2 bg-[#16327a] hover:bg-[#1e3d8f] py-3.5 rounded-lg font-bold text-xs sm:text-sm border border-white/10 transition-all shadow-lg text-white">
    <Phone size={16} fill="currentColor" />
    Call Now
  </button>

  {/* Book Service: Image jaisa Light Blue to Dark Blue Gradient */}
  <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-b from-[#1e86ff] to-[#123597] hover:brightness-110 py-3.5 rounded-lg font-bold text-xs sm:text-sm border border-white/20 transition-all shadow-xl text-white">
    <div className="border-2 border-white rounded-full p-0.5 flex items-center justify-center">
      <User size={10} fill="currentColor" />
    </div>
    Book Service
  </button>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServicePage;