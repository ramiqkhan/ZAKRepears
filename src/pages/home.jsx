import React from 'react';
import { 
  Phone, MapPin, CheckCircle2, 
  Hammer, Bolt, Droplets, ShieldCheck, Wrench,
  Shield
} from 'lucide-react';
import BookingForm from '../component/bookurservice';
import Hero from '../component/Home/HeroForm';
import ProfessionalServicePage from '../component/bookurservice';

const Home = () => {
  const whyChooseUs = [
    "Experienced and skilled technicians",
    "Fast and dependable service",
    "Affordable and transparent pricing",
    "Residential and commercial services",
    "Commitment to customer satisfaction"
  ];

  const serviceAreas = ["Rosenberg", "Houston", "Richmond", "Sugar Land", "Katy", "Surrounding TX"];

  return (
    <div className="w-full bg-[#050a14] min-h-screen text-white font-sans overflow-x-hidden">
      
      <section className="w-full mt-25 border-b border-white/10">
        <div className="w-full">
          <div className="w-full transition-all duration-300">
            <ProfessionalServicePage />
          </div>
        </div>
      </section>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        
        {/* Background */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-blue-600/10 border border-blue-500/40 px-3 sm:px-4 py-2 rounded-full text-blue-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest">
              <Shield size={14} /> Trusted Experts in Rosenberg, TX
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[1]">
              Houston <br />
              <span className="text-blue-500">Easy Repairs</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your Trusted Experts for Fast, Reliable Home Repair & Maintenance Services. 
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="tel:+12812502592" className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-8 py-3 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-2 sm:gap-3 transition-all shadow-xl active:scale-95 text-xs sm:text-sm">
                <Phone size={18} /> Call Today
              </a>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-5 sm:px-8 py-3 rounded-2xl font-bold uppercase tracking-widest transition-all text-xs sm:text-sm">
                Our Services
              </button>
            </div>
          </div>

          {/* Right Box */}
          <div className="relative group w-full max-w-xl mx-auto lg:ml-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-transparent rounded-[2.5rem] blur opacity-20"></div>

            <div className="relative bg-[#0a1221] border border-white/20 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-4 sm:mb-6">
                Why Choose <span className="text-blue-500">Us</span>?
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500 shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-gray-300 font-bold text-xs sm:text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECOND SECTION (FULL WIDTH FIXED) --- */}

      {/* --- SERVICE AREAS --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left */}
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase">
              Serving Your <br /> <span className="text-blue-500">Community</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              We proudly serve customers across Rosenberg and the Greater Houston area.
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {serviceAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 text-white font-bold bg-white/5 p-3 sm:p-4 rounded-xl border border-white/20 hover:border-blue-500 transition-all text-xs sm:text-sm">
                  <MapPin size={16} className="text-blue-500 shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div className="bg-blue-600 p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-xl sm:text-3xl md:text-5xl font-black text-white mb-4 sm:mb-6">
              Need a Fast Fix?
            </h3>

            <p className="text-blue-100 font-bold text-sm sm:text-lg mb-6 sm:mb-8 italic">
              "Quality workmanship, reliable service."
            </p>

            <a href="tel:+12812502592" className="bg-white text-blue-600 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl font-black text-sm sm:text-lg inline-flex items-center gap-2 sm:gap-3 hover:scale-105 transition-all">
              <Phone size={18} /> +1 (281) 250-2592
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;