import React from 'react';
import { Check, Users, Handshake, ChevronRight } from 'lucide-react';

const ServicesAndWorkflow = () => {
  return (
    <div className="w-full font-sans overflow-hidden">
      
      {/* --- SECTION 1: OUR SERVICES (DARK) --- */}
      <div className="relative w-full bg-[#050a14] text-white py-20 px-6">
        
        {/* Background Blue Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[100%] h-[300px] bg-blue-600/20 blur-[120px] rotate-[-15deg]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-[1px] w-20 bg-gray-700"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Our Services</h2>
            <div className="h-[1px] w-20 bg-gray-700"></div>
          </div>

          {/* Services List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 max-w-4xl mx-auto mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Check className="text-blue-500" size={28} strokeWidth={3} />
                <span className="text-2xl font-bold italic">Certified Technicians</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="text-blue-500" size={28} strokeWidth={3} />
                <span className="text-2xl font-bold italic">Affordable Pricing</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Check className="text-blue-500" size={28} strokeWidth={3} />
                <span className="text-2xl font-bold italic">Fast Response</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="text-blue-500" size={28} strokeWidth={3} />
                <span className="text-2xl font-bold italic">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Stats Bar (Blue Circle Icons) */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 border-t border-gray-800 pt-16">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Users className="text-white" size={32} />
              </div>
              <div>
                <p className="text-4xl font-black leading-none">10,000+</p>
                <p className="text-gray-400 font-bold uppercase text-sm mt-1">Repairs Done</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Handshake className="text-white" size={32} />
              </div>
              <div>
                <p className="text-4xl font-black leading-none">1,500+</p>
                <p className="text-gray-400 font-bold uppercase text-sm mt-1">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: HOW IT WORKS (WHITE) --- */}
      <div className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-[2px] w-16 bg-gray-200"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900">How It Works</h2>
            <div className="h-[2px] w-16 bg-gray-200"></div>
          </div>

          {/* Steps Wrapper */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 md:gap-8">
            
            {/* Step 1 */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/30">1</div>
              <span className="text-xl md:text-2xl font-black text-gray-900 whitespace-nowrap">Request Quote</span>
            </div>

            <ChevronRight className="text-blue-500 hidden lg:block" size={32} strokeWidth={3} />

            {/* Step 2 */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/30">2</div>
              <span className="text-xl md:text-2xl font-black text-gray-900 whitespace-nowrap">Schedule Visit</span>
            </div>

            <div className="hidden lg:flex items-center gap-1">
               <ChevronRight className="text-blue-500" size={32} strokeWidth={3} />
               <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/30">3</div>
              <span className="text-xl md:text-2xl font-black text-gray-900 whitespace-nowrap">Expert Arrives</span>
            </div>

            <ChevronRight className="text-blue-500 hidden lg:block" size={32} strokeWidth={3} />

            {/* Step 4 */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/30">4</div>
              <span className="text-xl md:text-2xl font-black text-gray-900 whitespace-nowrap">Job Completed</span>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesAndWorkflow;