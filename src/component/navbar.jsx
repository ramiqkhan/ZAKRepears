import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo22.png"; 
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600 transition-all duration-300";

  return (
    <nav className="bg-white text-black w-full fixed top-0 left-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="flex justify-center w-full">
        {/* Adjusted navbar height to h-28 to fit the larger logo comfortably */}
        <div className="max-w-7xl w-full flex justify-between items-center px-6 lg:px-10 h-28">
          
          {/* Logo Section - Cleaned up nested Links */}
          <Link to="/" className="flex-shrink-0 group flex items-center">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <img
                // h-20 on mobile, h-24 on desktop. w-auto maintains perfect proportions.
                className="h-24 w-auto md:h-24 object-contain"
                src={logo}
                alt="Houston Easy Repairs"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-8 text-[13px] font-bold uppercase tracking-[0.15em]">
            <NavLink to="/" className={activeLink}>Home</NavLink>
            <NavLink to="/services" className={activeLink}>Services</NavLink>
            <NavLink to="/about" className={activeLink}>About Us</NavLink>

            <div className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600 py-2 transition-colors group">
              <span>Gallery</span>
              <FaChevronDown className="text-[10px] opacity-60 group-hover:rotate-180 transition-transform" />
            </div>

            <div className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600 py-2 transition-colors group">
              <span>Service Areas</span>
              <FaChevronDown className="text-[10px] opacity-60 group-hover:rotate-180 transition-transform" />
            </div>

            <NavLink to="/contact" className={activeLink}>Contact</NavLink>
          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-x-5">
            <Link
              to="/book-service"
              className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-2xl font-black text-[11px] transition-all shadow-md active:scale-95 whitespace-nowrap uppercase tracking-widest"
            >
              Book Service
            </Link>

            <a
              href="tel:+12812502592"
              className="bg-gray-100 p-3.5 rounded-2xl border border-gray-200 hover:border-blue-500 hover:bg-gray-200 transition-all hidden md:block"
            >
              <FaPhoneAlt className="text-blue-600 text-[13px]" />
            </a>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-black transition-all border border-gray-200"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu - Aligned Left */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col items-start py-10 px-10 gap-6 text-[14px] font-bold uppercase tracking-widest text-gray-700">
            <NavLink to="/" className={activeLink} onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/services" className={activeLink} onClick={() => setMobileOpen(false)}>Services</NavLink>
            <NavLink to="/about" className={activeLink} onClick={() => setMobileOpen(false)}>About Us</NavLink>
            <NavLink to="/contact" className={activeLink} onClick={() => setMobileOpen(false)}>Contact</NavLink>

            <Link
              to="/book-service"
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xs shadow-md active:scale-95 uppercase tracking-[0.2em] mt-4 w-full text-center"
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