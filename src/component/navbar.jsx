import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg"; 
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Style adjusted for Glassy White theme
  const activeLink = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
      : "text-white/80 hover:text-blue-400 transition-all duration-300";

  return (
    // Yahan humne bg-white/5 (halka white) aur backdrop-blur-md (glass effect) use kiya hai
    <nav className="bg-white/5 backdrop-blur-md text-white w-full fixed top-0 left-0 z-50 border-b border-white/10 shadow-lg">
      <div className="flex justify-center w-full">
        <div className="max-w-7xl w-full flex justify-between items-center px-6 lg:px-10 h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="bg-white p-1.5 rounded-xl group-hover:scale-105 transition-transform">
                <img
                  className="h-10 md:h-11 w-auto object-contain"
                  src={logo}
                  alt="Houston Easy Repairs"
                />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-8 text-[13px] font-bold uppercase tracking-[0.15em] text-white/90">
            <NavLink to="/" className={activeLink}>Home</NavLink>
            <NavLink to="/services" className={activeLink}>Services</NavLink>
            <NavLink to="/about" className={activeLink}>About Us</NavLink>

            <div className="relative group flex items-center gap-1.5 cursor-pointer hover:text-blue-400 py-2 transition-colors">
              <span>Gallery</span>
              <FaChevronDown className="text-[10px] opacity-60 group-hover:rotate-180 transition-transform" />
            </div>

            <div className="relative group flex items-center gap-1.5 cursor-pointer hover:text-blue-400 py-2 transition-colors">
              <span>Service Areas</span>
              <FaChevronDown className="text-[10px] opacity-60 group-hover:rotate-180 transition-transform" />
            </div>

            <NavLink to="/contact" className={activeLink}>Contact</NavLink>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-x-5">
            <Link
              to="/book-service"
              className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-2xl font-black text-[11px] transition-all shadow-xl shadow-blue-600/20 active:scale-95 whitespace-nowrap uppercase tracking-widest border border-blue-400/20"
            >
              Book Service
            </Link>

            <a
              href="tel:+12812502592"
              className="bg-white/10 p-3.5 rounded-2xl border border-white/10 hover:border-blue-500 hover:bg-white/20 transition-all hidden md:block"
            >
              <FaPhoneAlt className="text-blue-400 text-[13px]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 rounded-xl focus:outline-none bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar - White Touch Background */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a1221]/95 backdrop-blur-2xl border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col items-center py-10 gap-6 text-[14px] font-bold uppercase tracking-widest text-white/80">
            <NavLink to="/" className={activeLink} onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/services" className={activeLink} onClick={() => setMobileOpen(false)}>Services</NavLink>
            <NavLink to="/about" className={activeLink} onClick={() => setMobileOpen(false)}>About Us</NavLink>

            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400 py-2">
              <span>Gallery</span>
              <FaChevronDown size={10} />
            </div>

            <NavLink to="/contact" className={activeLink} onClick={() => setMobileOpen(false)}>Contact</NavLink>

            <Link
              to="/book-service"
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xs shadow-2xl active:scale-95 uppercase tracking-[0.2em] mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Book Service
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;