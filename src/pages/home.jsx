import React from 'react';
import { 
  Phone, MapPin, CheckCircle2, ArrowRight, 
  Hammer, Bolt, Droplets, ShieldCheck, Wrench,
  Star, Shield
} from 'lucide-react';

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
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-500 font-bold text-xs uppercase tracking-widest">
              <Shield size={14} /> Trusted Experts in Rosenberg, TX
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              Houston <br />
              <span className="text-blue-500">Easy Repairs</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              Your Trusted Experts for Fast, Reliable Home Repair & Maintenance Services. 
              High-quality workmanship and affordable solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:+12812502592" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                <Phone size={20} /> Call Today
              </a>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all">
                Our Services
              </button>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-transparent rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0a1221] border border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl">
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Why Choose <span className="text-blue-500">Us</span>?</h3>
              <div className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-gray-300 font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. SERVICES PREVIEW --- */}
      <section className="py-24 bg-[#0a1221]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Professional <span className="text-blue-500">Solutions</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-medium">
              We make property repairs simple, affordable, and stress-free for homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {serviceList.map((service, index) => (
              <div key={index} className="bg-[#0a1221] p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all text-center group cursor-pointer shadow-xl">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h4 className="font-black uppercase text-sm tracking-tight leading-snug">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SERVICE AREAS SECTION --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Serving Your <br /> <span className="text-blue-500">Community</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              We proudly serve customers across Rosenberg and the Greater Houston area, delivering dependable 
              solutions right to your doorstep.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-bold bg-white/5 p-4 rounded-xl border border-white/5">
                  <MapPin size={18} className="text-blue-500" /> {area}
                </div>
              ))}
            </div>
          </div>

          {/* Simple Service Map Representation */}
          <div className="bg-blue-600 p-12 rounded-[3rem] text-center shadow-2xl shadow-blue-600/20 rotate-1 lg:rotate-3">
             <h3 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">Need a Fast Fix?</h3>
             <p className="text-blue-100 font-bold text-xl mb-10 italic">"Quality workmanship, reliable service, and affordable solutions."</p>
             <a href="tel:+12812502592" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase text-xl inline-flex items-center gap-3 hover:bg-gray-100 transition-all active:scale-95">
               <Phone size={24} /> +1 (281) 250-2592
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;