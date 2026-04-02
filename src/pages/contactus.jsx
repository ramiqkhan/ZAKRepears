import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import HeroForm from '../component/Home/HeroForm';

const ContactFooter = () => {
  return (
    <div className="w-full bg-[#050a14] text-white font-sans overflow-hidden">
      
      {/* --- CONTACT US SECTION --- */}
      <div className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-full h-[300px] sm:h-[400px] md:h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-tight">
              Contact{" "}
              <span className="bg-blue-600 px-4 sm:px-6 py-2 inline-block rounded-xl sm:rounded-2xl shadow-lg">
                Us
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto">
              Need repair or maintenance services? Our team is ready to help you in Rosenberg and the greater Houston area.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start">
            
            {/* LEFT SIDE CARDS */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              {/* Card 1 - Office */}
              <div className="bg-[#0a1221] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-3 sm:gap-5">
                  <div className="bg-blue-600 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-bold uppercase text-[9px] sm:text-[10px] tracking-widest mb-1">
                      Our Office
                    </h4>
                    <p className="text-base sm:text-lg md:text-xl font-bold leading-snug">
                      4925 Avenue H Suite A <br /> Rosenberg, TX 77471
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Phone */}
   <div className="bg-[#0a1221]/80 backdrop-blur-sm p-5 sm:p-7 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-[#0d172a] transition-all duration-300 group shadow-xl">
  <div className="flex items-center gap-4 sm:gap-6">
    {/* Icon Container with subtle glow */}
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-3.5 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
        <Phone size={22} className="text-white" />
      </div>
    </div>

    <div className="flex flex-col gap-0.5">
      {/* Availability Label */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <h4 className="text-blue-400 font-semibold uppercase text-[10px] sm:text-[11px] tracking-[0.15em]">
          Available 8AM — 6AM
        </h4>
      </div>

      {/* Phone Number with hover effect */}
      <a 
        href="tel:+12812502592" 
        className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight"
      >
        +1 (281) 250-2592
      </a>
    </div>
  </div>
</div>

              {/* Card 3 - Business Hours */}
              <div className="bg-[#0a1221] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-3 sm:gap-5">
                  <div className="bg-blue-600 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-bold uppercase text-[9px] sm:text-[10px] tracking-widest mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-300 font-bold text-sm sm:text-base">
                      Daily Support Available<br /> 8 AM – 6 PM
                    </p>
                
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div className="lg:col-span-7 w-full mt-8 lg:mt-0">
              <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto lg:ml-auto">
                <HeroForm />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactFooter;