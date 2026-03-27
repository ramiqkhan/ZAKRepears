import React from 'react';
import { MapPin, Star, ShieldCheck, Home } from 'lucide-react';
import HeroForm from '../component/Home/HeroForm';

const Locations = () => {
  const cityList = [
    "Rosenberg", 
    "Houston", 
    "Richmond", 
    "Sugar Land", 
    "Katy", 
    "Surrounding TX"
  ];

  return (
    <div className="w-full bg-[#050a14] min-h-screen text-white font-sans overflow-x-hidden relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-blue-600/5 blur-[80px] sm:blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/5 blur-[100px] sm:blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-blue-500"></div>
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">
                Service Coverage
              </span>
                 <div className="h-[1px] w-8 bg-blue-500"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 sm:mb-8 leading-tight">
              Serving <span className="text-blue-500">Greater Houston</span> & Surrounding Areas
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl">
              Houston Easy Repairs brings top-tier craftsmanship directly to your doorstep. 
              We provide fast, reliable, and professional work across Fort Bend and Harris County, 
              ensuring every neighbor gets the quality service they deserve.
            </p>

            {/* City Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cityList.map((city) => (
                <div 
                  key={city} 
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-[#0a1221] border border-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all group cursor-pointer"
                >
                  <MapPin size={14} className="text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] sm:text-sm font-black uppercase tracking-wider">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Card */}
          <div className="relative group mt-10 lg:mt-0">
       <HeroForm/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Locations;