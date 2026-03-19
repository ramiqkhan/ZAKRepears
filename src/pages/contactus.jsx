import React from 'react';
import { 
  Phone, MapPin, Clock, Send, 
  Facebook, Instagram, Twitter, Linkedin,
  CheckCircle2, Mail, MessageSquare
} from 'lucide-react';

const ContactFooter = () => {
  return (
    <div className="w-full bg-[#050a14] text-white font-sans overflow-hidden">
      
      {/* --- CONTACT US SECTION --- */}
      <div className="relative pt-32 pb-24 px-6">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Contact <span className="bg-blue-600 px-6 py-2 inline-block rounded-2xl shadow-lg shadow-blue-600/20">Us</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
              Need repair or maintenance services? Our team is ready to help you in Rosenberg and the greater Houston area.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: Contact Info (4 Columns) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0a1221] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-black uppercase text-xs tracking-widest mb-2">Our Office</h4>
                    <p className="text-xl font-bold leading-tight text-white">
                      4925 Avenue H Suite A <br /> Rosenberg, TX 77471
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a1221] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-black uppercase text-xs tracking-widest mb-2">Call Us Anytime</h4>
                    <p className="text-xl font-bold leading-tight text-white">+1 (281) 250-2592</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a1221] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-black uppercase text-xs tracking-widest mb-2">Business Hours</h4>
                    <p className="text-gray-300 font-bold">Mon – Sat: 8:00 AM – 6:00 PM</p>
                    <p className="text-gray-500 font-bold italic text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Contact Form (7 Columns) */}
            <div className="lg:col-span-7">
              <div className="bg-[#0a1221] p-8 md:p-12 rounded-[2.5rem] border border-blue-500/20 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Send Us a <span className="text-blue-500">Message</span></h2>
                  <p className="text-gray-400 mb-10 font-medium">Fill out the form and our team will get back to you shortly.</p>
                  
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input type="text" placeholder="Your Name" className="w-full bg-[#050a14] border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none transition-all font-bold placeholder:text-gray-600 text-white" />
                      <input type="tel" placeholder="Phone Number" className="w-full bg-[#050a14] border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none transition-all font-bold placeholder:text-gray-600 text-white" />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full bg-[#050a14] border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none transition-all font-bold placeholder:text-gray-600 text-white" />
                    <select className="w-full bg-[#050a14] border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none transition-all font-bold text-gray-400">
                      <option>Service Required</option>
                      <option>Home Repair & Handyman</option>
                      <option>Electrical Repairs</option>
                      <option>Plumbing Repairs</option>
                      <option>Property Maintenance</option>
                      <option>Installation Services</option>
                    </select>
                    <textarea placeholder="Your Message" rows="4" className="w-full bg-[#050a14] border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none transition-all font-bold placeholder:text-gray-600 text-white"></textarea>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-blue-600/20">
                      <Send size={20} /> Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER SECTION --- */}
    

    </div>
  );
};

export default ContactFooter;