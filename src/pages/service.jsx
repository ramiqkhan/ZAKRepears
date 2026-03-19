import React, { useState } from 'react';
import { 
  Wrench, Bolt, Droplets, ShieldCheck, Hammer, 
  ChevronDown, CheckCircle2 
} from 'lucide-react';

const Service = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const services = [
    {
      title: "Home Repair & Handyman Services",
      icon: <Hammer size={24} />,
      items: ["General home repairs", "Door and window repairs", "Drywall patching", "Minor carpentry", "Fixture replacements", "Furniture assembly"]
    },
    {
      title: "Electrical Repair Services",
      icon: <Bolt size={24} />,
      items: ["Troubleshooting", "Light installation", "Outlet & switch repairs", "Ceiling fans", "Component replacement"]
    },
    {
      title: "Plumbing Repair Services",
      icon: <Droplets size={24} />,
      items: ["Leak detection", "Faucet repairs", "Drain clearing", "Toilet replacement", "Minor installations"]
    },
    {
      title: "Property Maintenance Services",
      icon: <ShieldCheck size={24} />,
      items: ["Preventive maintenance", "Inspections", "Minor adjustments", "Improvement assistance"]
    }
  ];

  return (
    <div className="w-full bg-[#050a14] min-h-screen text-white font-sans overflow-x-hidden">

      {/* --- HERO & SERVICES --- */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10 text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-blue-500"></div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Our Expertise</span>
            <div className="h-[1px] w-8 bg-blue-500"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6">
            Our <span className="bg-blue-600 px-4 py-1 inline-block rounded-xl">Services</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Houston Easy Repairs offers professional repair and maintenance solutions 
            designed to keep your home or business running smoothly.
          </p>
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-[#0a1221] rounded-2xl border transition-all ${activeAccordion === index ? 'border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.1)]' : 'border-white/5 hover:border-white/10'}`}
            >
              <button 
                onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 md:p-8 text-left"
              >
                <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-0">
                  <div className={`p-3 rounded-xl transition-all ${activeAccordion === index ? 'bg-blue-600 text-white' : 'bg-white/5 text-blue-500'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide">{service.title}</h3>
                </div>
                <ChevronDown className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180 text-blue-500 mt-1 sm:mt-0' : 'text-gray-600'}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 sm:px-12 md:px-24 pb-6 md:pb-10 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-4 md:pt-6">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400 group">
                      <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0" />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8">
            Ready To Start Your Project?
          </h2>
          <button className="bg-white text-blue-500 px-12 sm:px-14 py-4 sm:py-5 rounded-2xl font-black uppercase text-lg sm:text-xl shadow-2xl hover:bg-gray-100 transition-all active:scale-95">
            Book Service Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default Service;