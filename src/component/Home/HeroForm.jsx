import React, { useState, useRef, useEffect } from "react";

import {
  User,
  Phone,
  Mail,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Check,
} from "lucide-react";

const HeroForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select Service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dropdownRef = useRef(null);

  const services = [
    "Electrical",
    "Plumbing",
    "HVAC",
    "Painting Services",
    "Roofing Services",
    "Interior Repairs & Touch-Ups",
    "Accent Walls",
    "Carpentry",
    "Drywall Installation & Repair",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const inputClasses = `
    w-full
    bg-[#050a14]
    text-white
    border
    border-white/10
    rounded-xl
    py-4
    pl-12
    pr-4
    font-bold
    outline-none
    text-sm
    sm:text-base
    transition-all
    duration-300
    placeholder:text-gray-600
    placeholder:font-medium
    focus:border-blue-500
    focus:ring-4
    focus:ring-blue-500/10
  `;

  const iconClasses = `
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    text-gray-500
    group-focus-within:text-blue-500
    transition-all
    duration-300
  `;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let phone = value.replace(/\D/g, "");

      // Remove country code if user enters 1
      if (phone.startsWith("1")) {
        phone = phone.slice(1);
      }

      // Maximum 10 digits
      phone = phone.slice(0, 10);

      // US format: (XXX) XXX-XXXX
      if (phone.length <= 3) {
        phone = phone;
      } else if (phone.length <= 6) {
        phone = `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
      } else {
        phone = `(${phone.slice(0, 3)}) ${phone.slice(
          3,
          6
        )}-${phone.slice(6)}`;
      }

      setFormData({
        ...formData,
        phone,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => {
    const numericPhone = phone.replace(/\D/g, "");
    return numericPhone.length === 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (selectedService === "Select Service") {
      setErrorMessage("Please select a service");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMessage(
        "Please enter a valid US phone number"
      );
      return;
    }

    setLoading(true);

    try {
      const BASE_URL =
        "https://easrepairs-backend.vercel.app";

      const res = await fetch(
        `${BASE_URL}/api/services`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            service: selectedService,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(
          data.message ||
            "Service Booked Successfully"
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
        });

        setSelectedService("Select Service");
      } else {
        setErrorMessage(
          "Please try contacting via phone"
        );
      }
    } catch (error) {
      setErrorMessage(
        "Please try contacting via phone"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">

      {/* Background Glow */}
      <div className="absolute -inset-4 sm:-inset-12 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

      {/* FORM CARD */}
      <div className="relative bg-[#0a1221]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

        {/* Top Line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase tracking-[0.15em]">
            Book Your{" "}
            <span className="text-blue-500">
              Service
            </span>
          </h2>
        </div>

        {/* Messages */}
        {successMessage && (
          <p className="text-green-500 text-center mb-4 font-bold">
            {successMessage}
          </p>
        )}

        {errorMessage && (
          <p className="text-red-500 text-center mb-4 font-bold">
            {errorMessage}
          </p>
        )}

        {/* FORM */}
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >

          {/* NAME */}
          <div className="relative group">
            <User
              className={iconClasses}
              size={20}
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={inputClasses}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="relative group">
            <Mail
              className={iconClasses}
              size={20}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={inputClasses}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* PHONE */}
          <div className="relative group">
            <Phone
              className={iconClasses}
              size={20}
            />

            <input
              type="tel"
              name="phone"
              placeholder="(346) 603-4582"
              className={inputClasses}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* SERVICE DROPDOWN */}
          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              type="button"
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className={`
                w-full
                flex
                items-center
                justify-between
                bg-[#050a14]
                text-white
                border
                transition-all
                duration-300
                rounded-xl
                py-4
                pl-12
                pr-6
                font-bold
                uppercase
                tracking-wider
                text-xs
                sm:text-sm
                ${
                  isOpen
                    ? "border-blue-500 ring-4 ring-blue-500/10 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                    : "border-white/10 hover:border-white/20"
                }
              `}
            >
              <ShieldCheck
                className={`
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  transition-colors
                  duration-300
                  ${
                    isOpen
                      ? "text-blue-500"
                      : "text-gray-500"
                  }
                `}
                size={20}
              />

              <span
                className={
                  selectedService ===
                  "Select Service"
                    ? "text-gray-600"
                    : "text-white"
                }
              >
                {selectedService}
              </span>

              <ChevronDown
                size={18}
                className={`
                  text-blue-500
                  transition-transform
                  duration-300
                  ${
                    isOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {/* DROPDOWN */}
            {isOpen && (
              <div className="absolute top-full left-0 w-full mt-2 bg-[#0a1221] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[100]">

                <div className="max-h-60 overflow-y-auto">

                  {services.map((service) => (
                    <div
                      key={service}
                      onClick={() => {
                        setSelectedService(
                          service
                        );
                        setIsOpen(false);
                      }}
                      className="flex items-center justify-between px-6 py-4 cursor-pointer transition-colors hover:bg-blue-600/10 group"
                    >
                      <span
                        className={`
                          text-[11px]
                          sm:text-xs
                          font-black
                          uppercase
                          tracking-widest
                          transition-colors
                          ${
                            selectedService ===
                            service
                              ? "text-blue-500"
                              : "text-gray-400 group-hover:text-white"
                          }
                        `}
                      >
                        {service}
                      </span>

                      {selectedService ===
                        service && (
                        <Check
                          size={16}
                          className="text-blue-500"
                        />
                      )}
                    </div>
                  ))}

                </div>
              </div>
            )}
          </div>

          {/* ADDRESS / CITY */}
          <div className="relative group">
            <MapPin
              className={iconClasses}
              size={20}
            />

            <input
              type="text"
              name="address"
              placeholder="Your City"
              className={`${inputClasses} text-xs sm:text-sm md:text-base py-3 sm:py-4`}
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              hover:bg-blue-500
              text-white
              py-5
              rounded-xl
              font-black
              text-lg
              sm:text-xl
              shadow-[0_10px_30px_rgba(37,99,235,0.3)]
              mt-4
              transition-all
              active:scale-[0.96]
              tracking-widest
              uppercase
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
            disabled={loading}
          >
            {loading
              ? "Booking..."
              : "Book Appointment"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default HeroForm;