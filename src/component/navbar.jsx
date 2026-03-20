import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo22.png"; 
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLink = ({ isActive }) => {
    const base = "font-bold border-b-2 pb-1 transition-all duration-300";
    return isActive
      ? `${base} text-blue-600 border-blue-600`
      : `${base} border-transparent ${
          isScrolled
            ? "text-white hover:text-blue-400"
            : "text-gray-700 hover:text-blue-600"
        }`;
  };

  return (
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled
      ? "h-24 lg:h-28 bg-[#050a14]/80 backdrop-blur-md border-b border-white/10"
      : "h-24 lg:h-28 bg-white border-b border-gray-200"
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
      <div className="flex items-center justify-between h-full">
          
          {/* LOGO - SAME SIZE (NO CHANGE) */}
          <Link to="/" className="flex items-center">
         <div className="hover:scale-105 transition-transform duration-300 -mt-4 lg:-mt-4">
              <img
                className="h-32 w-auto lg:h-[156px] object-contain transition-all duration-500"
                src={logo}
                alt="Houston Easy Repairs"
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wider">
            <NavLink to="/" className={activeLink}>Home</NavLink>
            <NavLink to="/services" className={activeLink}>Services</NavLink>
            <NavLink to="/about" className={activeLink}>About</NavLink>
            
            <div className={`flex items-center gap-1 cursor-pointer font-bold border-b-2 pb-1 border-transparent transition-all duration-300 ${
              isScrolled ? "text-white hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
            }`}>
              Gallery <FaChevronDown className="text-xs opacity-70" />
            </div>

            <div className={`flex items-center gap-1 cursor-pointer font-bold border-b-2 pb-1 border-transparent transition-all duration-300 ${
              isScrolled ? "text-white hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
            }`}>
              Areas <FaChevronDown className="text-xs opacity-70" />
            </div>

            <NavLink to="/contact" className={activeLink}>Contact</NavLink>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/book-service"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition"
            >
              Book Service
            </Link>

            <a
              href="tel:+12812502592"
              className={`p-3 rounded-xl transition ${
                isScrolled ? "bg-white/10 text-white" : "bg-gray-100 text-blue-600"
              }`}
            >
              <FaPhoneAlt />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2.5 rounded-xl transition-all duration-300 border flex items-center justify-center
                ${isScrolled
                  ? "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-lg"
                  : "bg-blue-600/10 backdrop-blur-md border-blue-600/20 text-blue-600 hover:bg-blue-600/20 shadow-sm"
                }`}
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
      <div 
          className={`lg:hidden fixed inset-x-0 top-24 lg:top-28 backdrop-blur-xl border-t transition-all duration-300 shadow-2xl
            ${isScrolled 
              ? "bg-[#050a14]/90 border-white/10" 
              : "bg-white/90 border-gray-200"
            }`}
        >
          <div className={`flex flex-col px-6 py-8 gap-6 text-sm font-bold uppercase tracking-widest
            ${isScrolled ? "text-white" : "text-gray-800"}`}
          >
            <NavLink 
              to="/" 
              className={`transition-colors ${isScrolled ? "hover:text-blue-400" : "hover:text-blue-600"}`}
              onClick={() => setMobileOpen(false)}
            >Home</NavLink>
            
            <NavLink 
              to="/services" 
              className={`transition-colors ${isScrolled ? "hover:text-blue-400" : "hover:text-blue-600"}`}
              onClick={() => setMobileOpen(false)}
            >Services</NavLink>
            
            <NavLink 
              to="/about" 
              className={`transition-colors ${isScrolled ? "hover:text-blue-400" : "hover:text-blue-600"}`}
              onClick={() => setMobileOpen(false)}
            >About</NavLink>
            
            <NavLink 
              to="/contact" 
              className={`transition-colors ${isScrolled ? "hover:text-blue-400" : "hover:text-blue-600"}`}
              onClick={() => setMobileOpen(false)}
            >Contact</NavLink>

            <Link
              to="/book-service"
              className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-center mt-4 shadow-lg shadow-blue-600/30 transition-all active:scale-95"
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