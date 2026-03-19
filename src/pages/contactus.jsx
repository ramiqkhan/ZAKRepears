import React from 'react';
import { 
  Phone, MapPin, Clock, Send, 
  Facebook, Instagram, Twitter, Linkedin,
  CheckCircle2, Mail, MessageSquare
} from 'lucide-react';
import BookingForm from '../component/bookurservice';

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
         <BookingForm/>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER SECTION --- */}
    

    </div>
  );
};

export default ContactFooter;