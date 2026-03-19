import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg"; 
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
      : "hover:text-blue-500 transition-all duration-300";

  return (
    <nav className="bg-[#050a14] text-white w-full fixed top-0 left-0 z-50 border-b border-gray-800/50">
      <div className="flex justify-center w-full">
        <div className="max-w-7xl w-full flex justify-between items-center px-6 lg:px-10 h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              className="h-10 md:h-12 w-auto object-contain"
              src={logo}
              alt="Houston Easy Repairs"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-8 text-[14px] font-medium uppercase tracking-widest">
            <NavLink to="/" className={activeLink}>Home</NavLink>
            <NavLink to="/services" className={activeLink}>Services</NavLink>
            <NavLink to="/about" className={activeLink}>About Us</NavLink>

            <div className="relative group flex items-center gap-1 cursor-pointer hover:text-blue-400 py-2">
              <span>Gallery</span>
              <FaChevronDown className="text-[10px] opacity-60 group-hover:rotate-180 transition-transform" />
            </div>

            <div className="relative group flex items-center gap-1 cursor-pointer hover:text-blue-400 py-2">
              <span>Service Areas</span>
              <FaChevronDown className="text-[10px] opacity-60 group-hover:rotate-180 transition-transform" />
            </div>

            <NavLink to="/contact" className={activeLink}>Contact</NavLink>
          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-x-4">
            <Link
              to="/book-service"
              className="bg-[#007bff] hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,123,255,0.3)] active:scale-95 whitespace-nowrap uppercase tracking-widest"
            >
              Book Service
            </Link>

            <a
              href="tel:+123456789"
              className="bg-[#1e2533] p-3 rounded-xl border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all hidden md:block"
            >
              <FaPhoneAlt className="text-white text-[12px]" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md focus:outline-none bg-gray-800/50 hover:bg-gray-700 transition"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#050a14] border-t border-gray-800/50">
          <div className="flex flex-col items-center py-4 gap-4 text-sm font-medium uppercase">
            <NavLink to="/" className={activeLink} onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/service" className={activeLink} onClick={() => setMobileOpen(false)}>Services</NavLink>
            <NavLink to="/about" className={activeLink} onClick={() => setMobileOpen(false)}>About Us</NavLink>

            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 py-2">
              <span>Gallery</span>
              <FaChevronDown className="text-[10px] opacity-60" />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 py-2">
              <span>Service Areas</span>
              <FaChevronDown className="text-[10px] opacity-60" />
            </div>

            <NavLink to="/contact" className={activeLink} onClick={() => setMobileOpen(false)}>Contact</NavLink>

            <Link
              to="/book-service"
              className="bg-[#007bff] hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,123,255,0.3)] active:scale-95 whitespace-nowrap uppercase tracking-widest"
            >
              Book Service
            </Link>

            <a
              href="tel:+123456789"
              className="bg-[#1e2533] p-3 rounded-xl border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all"
            >
              <FaPhoneAlt className="text-white text-[12px]" />
            </a>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;