import React from 'react';
// Aapke assets folder se image path (image_d3a838.png ke mutabiq)

import { Star, ChevronDown, CheckCircle, Clock, ShieldCheck, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#020b1d] font-sans flex flex-col overflow-hidden">
      
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-1/4 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full" />

      {/* --- Main Content Area --- */}
      <div className="relative max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col lg:flex-row items-center justify-between pt-32 pb-12 z-10">
        
        {/* LEFT SIDE: Text & Buttons */}
        <div className="w-full lg:w-[45%] text-white text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
            Professional Home Repair <br />
            <span className="text-white">& Maintenance Services</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-medium mb-10">
            Plumbing • Electrical • Remodeling • Garage Door Repair
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            <button className="bg-[#005eff] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-md text-lg transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              Get Free Estimate
            </button>
            <button className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-10 rounded-md text-lg transition-all active:scale-95 flex items-center gap-2">
              Call Now
            </button>
          </div>

          {/* Trust Badges (Image ke left side wala part) */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-8 border-t border-gray-800/50 w-full lg:w-auto">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-sm mr-1">Google</span>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase font-bold">Five Star Rating</p>
            </div>
            
            <div className="hidden md:block h-10 w-[1px] bg-gray-800" />
            
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center border border-white/5">
                 <div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center text-[9px] font-black">G</div>
               </div>
               <p className="text-[10px] text-gray-400 uppercase font-black leading-tight">Verified<br/>Business</p>
            </div>

            <div className="flex items-center gap-2 border border-gray-800 px-4 py-2 rounded bg-black/20">
              <ShieldCheck size={18} className="text-gray-500" />
              <span className="text-[9px] font-black text-gray-400 uppercase leading-none tracking-tighter">Accredited <br/> Business</span>
            </div>
          </div>
        </div>

        {/* CENTER: Worker Image (Hero.png) */}
        {/* Isko responsive rakha hai taaki desktop par center mein dikhe */}
       

        {/* RIGHT SIDE: Booking Form Card */}
        <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] p-8 z-20 mt-12 lg:mt-0">
          <h2 className="text-2xl font-black text-[#010816] mb-8">Book Your Service</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full bg-[#f3f7fa] border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-800" />
            <input type="text" placeholder="Phone Number" className="w-full bg-[#f3f7fa] border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-800" />
            
            <div className="w-full bg-[#f3f7fa] border border-gray-200 rounded-lg px-4 py-4 flex justify-between items-center text-gray-500 cursor-pointer hover:border-gray-300 transition-all">
              <span className="font-semibold text-sm">Select Service</span>
              <ChevronDown size={20} />
            </div>

            <button className="w-full bg-[#005eff] hover:bg-blue-600 text-white font-black py-5 rounded-lg transition-all shadow-lg mt-4 text-lg active:scale-95 uppercase">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* --- BOTTOM WHITE BAR (Ratings) --- */}
      {/* Yeh wahi line hai jo aapne image_d3b760.png mein dikhayi hai */}
      <div className="w-full bg-white py-8 border-t border-gray-100 z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8">
          
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-gray-900 tracking-tighter">4.9</span>
            <div className="flex flex-col">
               <div className="flex text-yellow-500">★★★★★</div>
               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">Google Rating</span>
            </div>
          </div>
          
          <div className="hidden md:block h-10 w-[1px] bg-gray-200" />

          <div className="flex items-center gap-4">
            <CheckCircle className="text-blue-600" size={28} />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-900 leading-none">10,000+</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Repairs Done</span>
            </div>
          </div>
          
          <div className="hidden md:block h-10 w-[1px] bg-gray-200" />

          <div className="flex items-center gap-4">
            <Clock className="text-blue-600" size={28} />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-900 leading-none">24/7</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Service Available</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;