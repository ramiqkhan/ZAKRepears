import React from 'react';
import { User, Phone, Clock, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroForm from './Home/HeroForm';

const ProfessionalServicePage = () => {
  return (
    <div className="w-full text-white font-sans overflow-x-hidden pt-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:flex-1 space-y-6 text-left">
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Home Repair  
              <span className="font-light opacity-90"> & Maintenance Services</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-blue-400 font-semibold">
              Free Consultation for First Time Customers!
            </p>

            <div className="flex flex-wrap gap-2 text-gray-400 text-sm sm:text-base">
              <span className="text-blue-500">•</span>
              <span>Electrical</span>
              <span className="text-blue-500">•</span>
              <span>Plumbing</span>
              <span className="text-blue-500">•</span>
              <span>HVAC</span>
              <span className="text-blue-500">•</span>
              <span>Painting</span>
              <span className="text-blue-500">•</span>
              <span>Roofing</span>
            </div>

            {/* LEFT BUTTONS */}
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="w-full text-center px-4 py-3 bg-gradient-to-r from-[#00d2ff] via-[#0072ff] to-[#0033aa] 
                           text-white font-bold rounded-xl text-sm sm:text-base
                           transition-all duration-300 hover:brightness-110 hover:scale-105"
              >
                Get Free Estimate
              </Link>

              <a 
                href="tel:+12812502592"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-black 
                           font-bold rounded-xl text-sm sm:text-base
                           transition-all duration-300 hover:scale-105"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full max-w-md mx-auto">

            {/* BLUR BACKGROUND */}
            <div className="absolute -inset-6 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

            {/* HERO FORM */}
            <div className="relative z-10">
              <HeroForm />
            </div>

            {/* STATS + BUTTONS */}
            <div className="mt-8 space-y-6 text-center relative z-20">

              <div className="flex justify-center gap-6">
                <div>
                  <p className="text-xl font-bold">4.9</p>
                  <p className="text-xs opacity-70">Google Rating</p>
                </div>

                <div>
                  <p className="text-xl font-bold flex items-center gap-1">
                    <Hammer size={16} /> 10k+
                  </p>
                  <p className="text-xs opacity-70">Repairs</p>
                </div>
              </div>

              <div className="text-sm opacity-80 flex items-center justify-center gap-2">
                <Clock size={14} /> Same day solution
              </div>

              {/* RIGHT BUTTONS */}
              <div className="flex gap-3 mt-4 relative z-50">
                <a 
                  href="tel:+12812502592"
                  className="relative z-50 w-full flex items-center justify-center gap-2 bg-[#16327a] py-3 rounded-lg font-bold text-sm 
                             transition-all duration-300 hover:bg-[#1e3d8f] hover:scale-105 active:scale-95"
                >
                  <Phone size={16} />
                  Call Now
                </a>

                <Link
                  to="/contact"
                  className="relative z-50 w-full flex items-center justify-center gap-2 bg-gradient-to-b from-[#1e86ff] to-[#123597] 
                             py-3 rounded-lg font-bold text-sm 
                             transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-95"
                >
                  <User size={14} />
                  Book Service
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfessionalServicePage;