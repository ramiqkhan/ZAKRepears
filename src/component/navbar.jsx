import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo22.png";
import {
  FaPhoneAlt,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopLocationOpen, setDesktopLocationOpen] = useState(false);
  const [mobileLocationOpen, setMobileLocationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileLocationOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeLink = ({ isActive }) => {
    const base =
      "font-bold border-b-2 pb-1 transition-all duration-300";

    return isActive
      ? `${base} text-blue-500 border-blue-500`
      : `${base} border-transparent ${
          isScrolled
            ? "text-white hover:text-blue-400"
            : "text-white hover:text-blue-400"
        }`;
  };

  const locations = [
    "Rosenberg TX",
    "Houston TX",
    "Richmond TX",
    "Sugar Land TX",
    "Katy TX",
  ];

  const locationPath = (loc) =>
    `/location/${loc.toLowerCase().replace(/ /g, "-")}`;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-300
          ${
            isScrolled
              ? "h-20 bg-[#050a14]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
              : "h-20 bg-transparent border-b border-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center h-full flex-shrink-0"
            >
              <img
                src={logo}
                alt="Houston Easy Repairs"
                className="
                  h-[82px]
                  sm:h-[88px]
                  lg:h-[96px]
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm uppercase tracking-wider">

              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>

              <NavLink to="/services" className={activeLink}>
                Services
              </NavLink>

              <NavLink to="/about" className={activeLink}>
                About
              </NavLink>

              {/* LOCATIONS */}
              <div
                className="relative"
                onMouseEnter={() =>
                  setDesktopLocationOpen(true)
                }
                onMouseLeave={() =>
                  setDesktopLocationOpen(false)
                }
              >
                <button
                  type="button"
                  className="
                    flex
                    items-center
                    gap-2
                    uppercase
                    font-bold
                    border-b-2
                    border-transparent
                    pb-1
                    text-white
                    hover:text-blue-400
                    transition-all
                    duration-300
                  "
                >
                  Locations

                  <FaChevronDown
                    className={`
                      text-[10px]
                      opacity-70
                      transition-transform
                      duration-300
                      ${
                        desktopLocationOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* DROPDOWN */}
                <div
                  className={`
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    pt-4
                    transition-all
                    duration-200
                    ${
                      desktopLocationOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                  `}
                >
                  <div className="w-56 bg-[#0a1221] rounded-xl shadow-2xl overflow-hidden border border-white/10 py-2">

                    {locations.map((loc) => (
                      <Link
                        key={loc}
                        to={locationPath(loc)}
                        className="
                          block
                          px-5
                          py-3.5
                          text-white
                          text-xs
                          font-bold
                          uppercase
                          tracking-widest
                          hover:bg-blue-600
                          transition-all
                          duration-200
                        "
                        onClick={() =>
                          setDesktopLocationOpen(false)
                        }
                      >
                        {loc}
                      </Link>
                    ))}

                  </div>
                </div>
              </div>

              <NavLink to="/contact" className={activeLink}>
                Contact
              </NavLink>
            </div>

            {/* DESKTOP RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-3">

              <Link
                to="/contact"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-5
                  py-2.5
                  rounded-xl
                  font-bold
                  text-xs
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-blue-600/20
                  hover:shadow-blue-600/40
                  hover:-translate-y-0.5
                "
              >
                Book Service
              </Link>

              <a
                href="tel:+13466034582"
                aria-label="Call Houston Easy Repairs"
                className="
                  p-3
                  rounded-xl
                  bg-white/10
                  text-white
                  hover:bg-white/20
                  transition-all
                  duration-300
                  backdrop-blur-md
                "
              >
                <FaPhoneAlt size={15} />
              </a>

            </div>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden">

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(!mobileOpen);

                  if (mobileOpen) {
                    setMobileLocationOpen(false);
                  }
                }}
                aria-label={
                  mobileOpen
                    ? "Close menu"
                    : "Open menu"
                }
                className="
                  p-2.5
                  rounded-xl
                  transition-all
                  duration-300
                  border
                  flex
                  items-center
                  justify-center
                  bg-white/10
                  backdrop-blur-md
                  border-white/20
                  text-white
                "
              >
                {mobileOpen ? (
                  <FaTimes size={21} />
                ) : (
                  <FaBars size={21} />
                )}
              </button>

            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="
            lg:hidden
            fixed
            inset-x-0
            top-20
            bottom-0
            z-40
            overflow-y-auto
            backdrop-blur-xl
            border-t
            shadow-2xl
            bg-[#050a14]/95
            border-white/10
          "
        >
          <div
            className="
              flex
              flex-col
              px-6
              sm:px-8
              py-8
              gap-5
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-white
            "
          >

            {/* HOME */}
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-white/10"
            >
              Home
            </NavLink>

            {/* SERVICES */}
            <NavLink
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-white/10"
            >
              Services
            </NavLink>

            {/* ABOUT */}
            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-white/10"
            >
              About
            </NavLink>

            {/* LOCATIONS */}
            <div className="border-b border-white/10 pb-2">

              <button
                type="button"
                onClick={() =>
                  setMobileLocationOpen(
                    !mobileLocationOpen
                  )
                }
                className="
                  flex
                  items-center
                  justify-between
                  w-full
                  py-3
                  uppercase
                  font-bold
                "
              >
                Locations

                <FaChevronDown
                  className={`
                    transition-transform
                    duration-300
                    ${
                      mobileLocationOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {mobileLocationOpen && (
                <div className="flex flex-col mt-2 gap-2 pl-2">

                  {locations.map((loc) => (
                    <Link
                      key={loc}
                      to={locationPath(loc)}
                      className="
                        block
                        py-3
                        px-4
                        rounded-xl
                        text-xs
                        tracking-wider
                        bg-white/5
                        hover:bg-blue-600
                        transition-all
                      "
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

            {/* CONTACT */}
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-3 border-b border-white/10"
            >
              Contact
            </NavLink>

            {/* BOOK SERVICE */}
            <Link
              to="/contact"
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-4
                rounded-2xl
                text-center
                mt-4
                shadow-xl
                shadow-blue-600/30
                transition-all
                duration-300
                active:scale-95
              "
              onClick={() => setMobileOpen(false)}
            >
              Book Service
            </Link>

            {/* MOBILE PHONE */}
            <a
              href="tel:+13466034582"
              className="
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-2xl
                border
                border-blue-600/20
                text-blue-400
                bg-blue-600/5
                transition-all
              "
            >
              <FaPhoneAlt size={14} />
              Call Now
            </a>

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;