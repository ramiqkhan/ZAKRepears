import React from 'react';
import { ShieldCheck, Target, Users, CheckCircle2, MapPin, Award } from 'lucide-react';

const About = () => {
  const commitments = [
    { title: "Professional Service", desc: "Expert handling of every repair task with precision." },
    { title: "Honest Communication", desc: "Clear updates and no hidden surprises during the process." },
    { title: "Quality Workmanship", desc: "Durable solutions built to last for years to come." },
    { title: "Fair Pricing", desc: "Transparent and affordable rates for every homeowner." }
  ];

  return (
    <div className="w-full bg-[#050a14] min-h-screen text-white font-sans overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 px-6 text-center">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-blue-500"></div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs italic">Rosenberg, Texas</span>
            <div className="h-[1px] w-8 bg-blue-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            About <br />
            <span className="bg-blue-600 px-6 py-2 inline-block rounded-2xl mt-2 shadow-lg shadow-blue-600/20">
              Houston Easy Repairs
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            A locally trusted repair and maintenance company dedicated to providing 
            reliable, professional, and affordable services.
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-500 font-bold text-sm">
              <MapPin size={16} /> Based in Rosenberg, Texas
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Your Partner in <span className="text-blue-500">Property Care</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Our experienced technicians understand how important it is to keep your property safe and functioning properly. 
                That’s why we focus on delivering fast response times, quality workmanship, and dependable solutions for every job.
              </p>
              <p>
                From small repairs to routine maintenance tasks, we are committed to helping customers maintain comfortable 
                and well-maintained spaces throughout the Houston area.
              </p>
            </div>

            {/* Mission Box */}
            <div className="bg-[#0a1221] p-8 rounded-3xl border border-blue-500/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={80} />
              </div>
              <h3 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Our Mission</h3>
              <p className="text-white text-xl font-bold leading-snug relative z-10">
                "To provide dependable repair and maintenance services that improve the comfort, safety, and functionality of homes and businesses."
              </p>
            </div>
          </div>

          {/* Right: Visual Stats/Feature Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#0a1221] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 transition-all">
              <ShieldCheck size={40} className="text-blue-500" />
              <h4 className="font-black uppercase text-sm tracking-tighter">Reliable</h4>
            </div>
            <div className="bg-[#0a1221] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 transition-all mt-12">
              <Award size={40} className="text-blue-500" />
              <h4 className="font-black uppercase text-sm tracking-tighter">Professional</h4>
            </div>
            <div className="bg-[#0a1221] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 transition-all">
              <Users size={40} className="text-blue-500" />
              <h4 className="font-black uppercase text-sm tracking-tighter">Trusted</h4>
            </div>
            <div className="bg-[#0a1221] p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 transition-all mt-12">
              <CheckCircle2 size={40} className="text-blue-500" />
              <h4 className="font-black uppercase text-sm tracking-tighter">Quality</h4>
            </div>
          </div>
        </div>
      </div>

      {/* --- COMMITMENT SECTION --- */}
      <div className="bg-blue-600/5 border-y border-white/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Our <span className="text-blue-500">Commitment</span>
            </h2>
            <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-xs">Consistent. Reliable. Transparent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((item, index) => (
              <div key={index} className="bg-[#0a1221] p-8 rounded-2xl border border-white/5 hover:bg-blue-600/10 transition-colors group">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-black uppercase mb-3 tracking-tight">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="bg-blue-600 py-16 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tighter">
            Build a Long-Lasting <br /> Relationship With Us
          </h2>
          <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black uppercase text-xl shadow-2xl hover:bg-gray-100 transition-all active:scale-95">
            Get Started Today
          </button>
        </div>
      </div>

    </div>
  );
};

export default About;