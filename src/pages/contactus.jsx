import React from 'react';
import { 
  Phone, MapPin, Clock
} from 'lucide-react';
import BookingForm from '../component/bookurservice';
import HeroForm from '../component/Home/HeroForm';

const ContactFooter = () => {
  return (
    <div className="w-full bg-[#050a14] text-white font-sans overflow-hidden">
      
      {/* --- CONTACT US SECTION --- */}
      <div className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-full h-[400px] sm:h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-tight">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* LEFT SIDE */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              
              {/* CARD 1 */}
              <div className="bg-[#0a1221] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-blue-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-bold uppercase text-[10px] sm:text-xs tracking-widest mb-1 sm:mb-2">
                      Our Office
                    </h4>
                    <p className="text-base sm:text-lg md:text-xl font-bold leading-snug">
                      4925 Avenue H Suite A <br /> Rosenberg, TX 77471
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-[#0a1221] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-blue-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-bold uppercase text-[10px] sm:text-xs tracking-widest mb-1 sm:mb-2">
                      Call Us Anytime
                    </h4>
                    <p className="text-base sm:text-lg md:text-xl font-bold">
                      +1 (281) 250-2592
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="bg-[#0a1221] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-blue-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-bold uppercase text-[10px] sm:text-xs tracking-widest mb-1 sm:mb-2">
                      Business Hours
                    </h4>
                    <p className="text-gray-300 font-bold text-sm sm:text-base">
                      Mon – Sat: 8:00 AM – 6:00 PM
                    </p>
                    <p className="text-gray-500 font-bold italic text-xs sm:text-sm">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div className="lg:col-span-7 w-full">
              <div className="w-full max-w-2xl mx-auto lg:ml-auto">
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