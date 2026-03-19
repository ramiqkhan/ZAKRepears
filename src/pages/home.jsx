import React from 'react';
import { 
  Phone, MapPin, CheckCircle2, 
  Hammer, Bolt, Droplets, ShieldCheck, Wrench,
  Shield
} from 'lucide-react';
import BookingForm from '../component/bookurservice';

const Home = () => {
  const whyChooseUs = [
    "Experienced and skilled technicians",
    "Fast and dependable service",
    "Affordable and transparent pricing",
    "Residential and commercial services",
    "Commitment to customer satisfaction"
  ];

  const serviceList = [
    { title: "General Home Repairs", icon: <Hammer size={24} /> },
    { title: "Electrical Repair", icon: <Bolt size={24} /> },
    { title: "Plumbing Repair", icon: <Droplets size={24} /> },
    { title: "Property Maintenance", icon: <ShieldCheck size={24} /> },
    { title: "Fixture Installation", icon: <Wrench size={24} /> }
  ];

  const serviceAreas = ["Rosenberg", "Houston", "Richmond", "Sugar Land", "Katy", "Surrounding TX"];

  return (
    <div className="w-full bg-[#050a14] min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* --- 1. HERO SECTION (With Bottom White Border) --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-white/10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/40 px-4 py-2 rounded-full text-blue-500 font-bold text-xs uppercase tracking-widest">
              <Shield size={14} /> Trusted Experts in Rosenberg, TX
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              Houston <br />
              <span className="text-blue-500">Easy Repairs</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your Trusted Experts for Fast, Reliable Home Repair & Maintenance Services. 
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:+12812502592" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                <Phone size={20} /> Call Today
              </a>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all">
                Our Services
              </button>
            </div>
          </div>

          <div className="relative group max-w-xl mx-auto lg:ml-auto lg:mr-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-transparent rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0a1221] border border-white/20 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl">
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Why Choose <span className="text-blue-500">Us</span>?</h3>
              <div className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-gray-300 font-bold text-lg text-left">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. COMBINED SECTION (With Top/Bottom White Border) --- */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-blue-900/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-12">
              <div className="text-left">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                  Professional <br /> 
                  <span className="text-blue-500">Solutions</span>
                </h2>
                <p className="text-gray-400 mt-6 max-w-xl font-medium text-lg leading-relaxed">
                  We make property repairs simple, affordable, and stress-free for homes and businesses.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {serviceList.map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-[#0a1221] p-6 rounded-3xl border border-white/20 hover:border-blue-500 transition-all group cursor-pointer shadow-xl"
                  >
                    <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {service.icon}
                    </div>
                    <h4 className="font-black uppercase text-xs md:text-sm tracking-tight leading-snug">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. SERVICE AREAS SECTION (With Top White Border) --- */}
      <section className="py-24 px-6 relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Serving Your <br /> <span className="text-blue-500">Community</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              We proudly serve customers across Rosenberg and the Greater Houston area.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-bold bg-white/5 p-4 rounded-xl border border-white/20 hover:border-blue-500 transition-all">
                  <MapPin size={18} className="text-blue-500 shrink-0" /> {area}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 p-8 md:p-12 rounded-[3rem] text-center shadow-2xl shadow-blue-600/20 border border-white/20">
             <h3 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">Need a Fast Fix?</h3>
             <p className="text-blue-100 font-bold text-xl mb-10 italic">"Quality workmanship, reliable service."</p>
             <a href="tel:+12812502592" className="bg-white text-blue-600 px-8 py-5 rounded-2xl font-black uppercase text-lg md:text-xl inline-flex items-center gap-3 hover:scale-105 transition-all shadow-xl">
               <Phone size={24} /> +1 (281) 250-2592
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;