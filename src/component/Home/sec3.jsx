import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const GalleryTestimonials = () => {
  const reviews = [
    { 
      id: 1, 
      name: "Sarch M.", 
      text: "This service and professional home! Truly transformed our kitchen space.", 
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
    },
    { 
      id: 2, 
      name: "James R.", 
      text: "Highly recommend! Great work and very punctual with the timing.", 
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" 
    },
    { 
      id: 3, 
      name: "Linda K.", 
      text: "Excellent job, very reliable! The best home repair service in Houston.", 
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" 
    },
  ];

  // Random Home Repair Images from Unsplash
  const beforeImg = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800";
  const afterImg = "https://images.unsplash.com/photo-1556911220-e150213ff7ad?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="w-full bg-[#f8f9fb] font-sans overflow-hidden">
      
      {/* --- BEFORE & AFTER GALLERY SECTION (Dark) --- */}
      <div className="bg-[#050a14] py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[1px] w-20 bg-blue-500/50"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Before & After Gallery</h2>
            <div className="h-[1px] w-20 bg-blue-500/50"></div>
          </div>

          {/* Gallery Slider Box */}
          <div className="relative max-w-5xl mx-auto border-[6px] border-white rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="flex flex-col md:flex-row">
              
              {/* Before Image */}
              <div className="relative w-full md:w-1/2 border-r-[3px] border-white">
                <img src={beforeImg} alt="Before" className="w-full h-[300px] md:h-[450px] object-cover" />
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white font-black px-8 py-2 uppercase italic skew-x-[-10deg]">
                  Before
                </div>
              </div>

              {/* After Image */}
              <div className="relative w-full md:w-1/2">
                <img src={afterImg} alt="After" className="w-full h-[300px] md:h-[450px] object-cover" />
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white font-black px-8 py-2 uppercase italic skew-x-[-10deg]">
                  After
                </div>
              </div>

              {/* Slider Controls */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 p-2 md:p-3 rounded-lg text-white shadow-xl hover:bg-blue-700 transition-colors">
                <ChevronLeft size={30} strokeWidth={3} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 p-2 md:p-3 rounded-lg text-white shadow-xl hover:bg-blue-700 transition-colors">
                <ChevronRight size={30} strokeWidth={3} />
              </button>
              
              {/* Center Arrows Overlay */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-2xl hidden md:flex gap-1">
                <ChevronLeft className="text-blue-600" size={24} strokeWidth={3} />
                <ChevronRight className="text-blue-600" size={24} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CUSTOMER TESTIMONIALS SECTION (Light) --- */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-[2px] w-16 bg-gray-200"></div>
            <h2 className="text-4xl md:text-5xl font-black text-[#050a14] uppercase tracking-tighter text-center">Customer Testimonials</h2>
            <div className="h-[2px] w-16 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div key={rev.id} className="relative bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-start transition-hover hover:shadow-lg">
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p className="text-gray-700 font-bold text-lg mb-8 italic leading-relaxed">"{rev.text}"</p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
                    <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-black text-gray-900 tracking-tight">— {rev.name}</span>
                </div>

                {/* Speech Bubble Tail Effect */}
                <div className="absolute -bottom-3 left-12 w-6 h-6 bg-white border-r border-b border-gray-100 rotate-45"></div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GalleryTestimonials;