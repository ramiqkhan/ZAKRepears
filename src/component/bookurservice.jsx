import React from 'react';
import { 
  User, Phone, Calendar, ChevronDown, 
  MapPin, ShieldCheck, Clock, Hammer
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfessionalServicePage = () => {
  return (
    <div className="w-full text-white font-sans overflow-x-hidden pt-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* LEFT */}
          {/* ❌ text-center hata diya */}
          <div className="w-full lg:flex-1 space-y-6 text-left">
            
            {/* ✅ heading left */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-left">
              Professional Home Repair  
              <span className="font-light opacity-90"> & Maintenance Services</span>
            </h1>
<p className="text-sm sm:text-base md:text-lg text-blue-400 font-semibold">
  Free Consultation for First Time Customers!
</p>
            {/* ✅ services left */}
            <div className="flex flex-wrap justify-start gap-2 text-gray-400 text-sm sm:text-base">
             <span className="text-blue-500">•</span>
              <span>Electrical</span>
              <span className="text-blue-500">•</span>
              <span>Plumbing</span>
              <span className="text-blue-500">•</span>
              <span>HVAC</span>
              <span className="text-blue-500">•</span>
              <span>Painting Services</span>
              <span className="text-blue-500">•</span>
              <span>Roofing Services</span>
            </div>

            {/* ✅ buttons same line mobile */}
            <div className="flex gap-3 justify-start">

  <Link
  to="/contact"
  className="flex-1 w-full px-3 sm:px-4 py-3 bg-gradient-to-r from-[#00d2ff] via-[#0072ff] to-[#0033aa] text-white font-bold rounded-xl text-xs sm:text-base whitespace-nowrap 
             text-center hover:brightness-110 transition-all"
>
  Get Free Estimate
</Link>

              <a 
                href="tel:+12812502592"
                className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-white text-black font-bold rounded-xl text-xs sm:text-base whitespace-nowrap"
              >
                <Phone size={16} />
                Call Now
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full max-w-md mx-auto">
            
            <div className="absolute -inset-6 bg-blue-600/10 blur-[80px] rounded-full"></div>

            {/* FORM */}
            <div className="relative bg-[#0a1221]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">

              <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 uppercase">
                Book Your Service
              </h2>

              <form className="space-y-4">

                <Input icon={<User size={18} />} placeholder="Your Name" />
                <Input icon={<Phone size={18} />} placeholder="Phone Number" />
<div className="relative">
  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
  
  <select className="w-full bg-white text-gray-800 rounded-lg py-3 pl-11 pr-10 font-semibold outline-none appearance-none">
    <option>Select Service</option>
    <option>Home Repair</option>
    <option>Electrical</option>
    <option>Plumbing</option>
  </select>

  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={18} />
</div>

                <Input icon={<Calendar size={18} />} placeholder="Preferred Date" />
                <Input icon={<MapPin size={18} />} placeholder="Your Address" />

                <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold text-lg transition">
                  Book Appointment
                </button>

              </form>
            </div>

            {/* STATS */}
            <div className="mt-8 space-y-6 text-center">

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

              <div className="flex flex-col sm:flex-row gap-3">

                <a 
                  href="tel:+12812502592"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#16327a] hover:bg-[#1e3d8f] py-3 rounded-lg font-bold text-sm transition"
                >
                  <Phone size={16} />
                  Call Now
                </a>

                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-b from-[#1e86ff] to-[#123597] py-3 rounded-lg font-bold text-sm hover:brightness-110 transition">
                  <User size={14} />
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

const Input = ({ icon, placeholder }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-white text-gray-800 rounded-lg py-3 pl-11 pr-4 outline-none"
    />
  </div>
);

export default ProfessionalServicePage;