import React from 'react';
import { 
  Phone, MapPin, CheckCircle2, 
  Shield
} from 'lucide-react';
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
    <div className="w-full pt-10 min-h-screen bg-[#050a14] text-white font-sans overflow-x-hidden">

      {/* TOP SECTION */}
      <section className="w-full border-b border-white/10">
        <ProfessionalServicePage />
      </section>

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">

        {/* Background Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* LEFT */}
          <div className="space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/40 px-4 py-2 rounded-full text-blue-500 font-bold text-xs uppercase tracking-widest">
              <Shield size={14} /> Trusted Experts in Rosenberg, TX
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Houston <br />
              <span className="text-blue-500">Easy Repairs</span>
            </h1>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
              Your Trusted Experts for Fast, Reliable Home Repair & Maintenance Services.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:+12812502592" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition">
                <Phone size={18} /> Call Today
              </a>

              <button className="bg-white/10 border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition">
                Our Services
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-lg mx-auto lg:ml-auto">
            <div className="bg-[#0a1221] border border-white/20 rounded-2xl p-6 shadow-xl">

              <h3 className="text-2xl font-black mb-6">
                Why Choose <span className="text-blue-500">Us</span>?
              </h3>

              <div className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl font-black">
              Serving Your <br />
              <span className="text-blue-500">Community</span>
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
              We proudly serve customers across Rosenberg and the Greater Houston area.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/20 hover:border-blue-500 transition text-sm">
                  <MapPin size={16} className="text-blue-500" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-blue-600 p-10 rounded-2xl text-center shadow-xl">
            <h3 className="text-3xl font-black mb-4">
              Need a Fast Fix?
            </h3>

            <p className="text-blue-100 mb-6 italic">
              "Quality workmanship, reliable service."
            </p>

            <a href="tel:+12812502592" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:scale-105 transition">
              <Phone size={18} /> +1 (281) 250-2592
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;