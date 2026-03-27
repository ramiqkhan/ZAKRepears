import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo22.png"; 
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopLocationOpen, setDesktopLocationOpen] = useState(false);
  const [mobileLocationOpen, setMobileLocationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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

  const locations = [
    "Rosenberg", "Houston", "Richmond", "Sugar Land", "Katy", "Surrounding TX"
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "h-24 lg:h-28 bg-[#050a14]/80 backdrop-blur-md border-b border-white/10"
          : "h-24 lg:h-28 bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          
          {/* LOGO */}
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
          <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wider relative">
            <NavLink to="/" className={activeLink}>Home</NavLink>
            <NavLink to="/services" className={activeLink}>Services</NavLink>
            <NavLink to="/about" className={activeLink}>About</NavLink>

            {/* Desktop Locations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDesktopLocationOpen(true)}
              onMouseLeave={() => setDesktopLocationOpen(false)}
            >
              <button className={`flex items-center gap-1 font-bold border-b-2 pb-1 border-transparent transition-all duration-300 h-full ${
                isScrolled ? "text-white hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
              }`}>
                Locations <FaChevronDown className={`text-xs opacity-70 transition-transform ${desktopLocationOpen ? 'rotate-180' : ''}`} />
              </button>

              {desktopLocationOpen && (
                <div className="absolute top-[20px] left-0 w-52 bg-[#0a1221] rounded-xl shadow-2xl overflow-hidden border border-white/10 z-50 py-2">
                  {locations.map((loc, i) => (
                    <Link
                      key={i}
                      /* PATH UPDATED HERE */
                      to={`/location/${loc.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-5 py-3 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
                      onClick={() => setDesktopLocationOpen(false)}
                    >
                      {loc}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/contact" className={activeLink}>Contact</NavLink>
          </div>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-blue-600/20"
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
                  ? "bg-white/10 backdrop-blur-md border-white/20 text-white"
                  : "bg-blue-600/10 border-blue-600/20 text-blue-600"
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
          className={`lg:hidden fixed inset-x-0 top-24 backdrop-blur-xl border-t transition-all duration-300 shadow-2xl h-screen
            ${isScrolled 
              ? "bg-[#050a14]/95 border-white/10" 
              : "bg-white/95 border-gray-200"
            }`}
        >
          <div className={`flex flex-col px-8 py-10 gap-6 text-sm font-bold uppercase tracking-widest
            ${isScrolled ? "text-white" : "text-gray-800"}`}
          >
            <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/services" onClick={() => setMobileOpen(false)}>Services</NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>

            {/* Mobile Locations Dropdown */}
            <div>
              <button
                onClick={() => setMobileLocationOpen(!mobileLocationOpen)}
                className="flex items-center justify-between w-full py-2 font-bold border-b border-transparent"
              >
                Locations <FaChevronDown className={`transition-transform ${mobileLocationOpen ? "rotate-180" : ""}`} />
              </button>
              
              {mobileLocationOpen && (
                <div className="flex flex-col mt-3 gap-2 pl-4">
                  {locations.map((loc, i) => (
                    <Link
                      key={i}
                      /* PATH UPDATED HERE */
                      to={`/location/${loc.toLowerCase().replace(/ /g, "-")}`}
                      className={`block py-3 px-4 rounded-xl transition-colors ${
                        isScrolled ? "bg-white/5 hover:bg-blue-600" : "bg-gray-100 hover:bg-blue-600 hover:text-white"
                      }`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileLocationOpen(false);
                      }}
                    >
                      {loc}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>

            <Link
              to="/contact"
              className="bg-blue-600 text-white py-4 rounded-2xl text-center mt-6 shadow-xl shadow-blue-600/30 transition-transform active:scale-95"
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