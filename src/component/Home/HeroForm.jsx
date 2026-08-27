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
  const [selectedService, setSelectedService] =
    useState("Select Service");

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

  // Close dropdown when clicking outside
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

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // INPUT STYLES
  const inputClasses =
    "w-full box-border bg-[#050a14] text-white border border-white/10 rounded-xl " +
    "py-3.5 sm:py-4 pl-11 sm:pl-12 pr-3 sm:pr-4 " +
    "font-medium outline-none text-sm sm:text-base " +
    "transition-all duration-300 " +
    "placeholder:text-gray-600 placeholder:font-medium " +
    "focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  const iconClasses =
    "absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 " +
    "text-gray-500 group-focus-within:text-blue-500 " +
    "transition-all duration-300 pointer-events-none";

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    // US PHONE FORMAT
    if (name === "phone") {
      let phone = value.replace(/\D/g, "");

      // Remove +1 if entered
      if (phone.startsWith("1")) {
        phone = phone.slice(1);
      }

      // Maximum 10 digits
      phone = phone.slice(0, 10);

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

      setFormData((prev) => ({
        ...prev,
        phone,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // VALIDATION
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => {
    const numericPhone = phone.replace(/\D/g, "");
    return numericPhone.length === 10;
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (selectedService === "Select Service") {
      setErrorMessage("Please select a service");
      return;
    }

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMessage("Please enter a valid US phone number");
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
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: selectedService,
            address: formData.address,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(
          data.message || "Service Booked Successfully!"
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
          data.message ||
            "Unable to book service. Please call us."
        );
      }
    } catch (error) {
      console.error("Booking error:", error);

      setErrorMessage(
        "Unable to connect. Please call us."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md sm:max-w-lg mx-auto px-3 sm:px-0">
      
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          -inset-3
          sm:-inset-8
          bg-blue-600/20
          blur-[70px]
          sm:blur-[100px]
          rounded-full
          pointer-events-none
        "
      />

      {/* FORM CARD */}
      <div
        className="
          relative
          w-full
          box-border
          bg-[#0a1221]/90
          backdrop-blur-3xl
          border border-white/10
          rounded-[1.5rem]
          sm:rounded-[2.5rem]
          p-4
          sm:p-6
          md:p-10
          shadow-[0_20px_50px_rgba(0,0,0,0.6)]
          overflow-visible
        "
      >

        {/* TOP LINE */}
        <div
          className="
            absolute
            top-0
            left-4
            right-4
            sm:left-8
            sm:right-8
            h-[1.5px]
            bg-gradient-to-r
            from-transparent
            via-blue-500
            to-transparent
            opacity-50
          "
        />

        {/* HEADING */}
        <div className="text-center mb-6 sm:mb-8 pt-2">
          <h2
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              font-black
              tracking-[0.08em]
              sm:tracking-[0.15em]
              text-white
              uppercase
            "
          >
            Book Your{" "}
            <span className="text-blue-500">
              Service
            </span>
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Fast, reliable home repair services
          </p>
        </div>

        {/* SUCCESS */}
        {successMessage && (
          <div
            className="
              mb-4
              rounded-xl
              border
              border-green-500/20
              bg-green-500/10
              px-4
              py-3
              text-center
              text-green-400
              text-sm
              font-bold
            "
          >
            {successMessage}
          </div>
        )}

        {/* ERROR */}
        {errorMessage && (
          <div
            className="
              mb-4
              rounded-xl
              border
              border-red-500/20
              bg-red-500/10
              px-4
              py-3
              text-center
              text-red-400
              text-sm
              font-bold
            "
          >
            {errorMessage}
          </div>
        )}

        {/* FORM */}
        <form
          className="space-y-3.5 sm:space-y-4"
          onSubmit={handleSubmit}
        >

          {/* NAME */}
          <div className="relative group w-full">
            <User
              className={iconClasses}
              size={19}
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={inputClasses}
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          {/* EMAIL */}
          <div className="relative group w-full">
            <Mail
              className={iconClasses}
              size={19}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={inputClasses}
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          {/* PHONE */}
          <div className="relative group w-full">
            <Phone
              className={iconClasses}
              size={19}
            />

            <input
              type="tel"
              name="phone"
              placeholder="(346) 603-4582"
              inputMode="numeric"
              autoComplete="tel"
              className={inputClasses}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* SERVICE DROPDOWN */}
          <div
            className="relative w-full"
            ref={dropdownRef}
          >
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`
                w-full
                box-border
                flex
                items-center
                justify-between
                gap-2
                bg-[#050a14]
                text-white
                border
                rounded-xl
                py-3.5
                sm:py-4
                pl-11
                sm:pl-12
                pr-3
                sm:pr-5
                font-bold
                uppercase
                tracking-wider
                text-[10px]
                sm:text-xs
                md:text-sm
                text-left
                transition-all
                duration-300
                ${
                  isOpen
                    ? "border-blue-500 ring-4 ring-blue-500/10"
                    : "border-white/10 hover:border-white/20"
                }
              `}
            >
              <ShieldCheck
                className={`
                  absolute
                  left-3.5
                  sm:left-4
                  top-1/2
                  -translate-y-1/2
                  ${
                    isOpen
                      ? "text-blue-500"
                      : "text-gray-500"
                  }
                `}
                size={19}
              />

              <span
                className={`
                  truncate
                  ${
                    selectedService === "Select Service"
                      ? "text-gray-600"
                      : "text-white"
                  }
                `}
              >
                {selectedService}
              </span>

              <ChevronDown
                size={17}
                className={`
                  flex-shrink-0
                  text-blue-500
                  transition-transform
                  duration-300
                  ${isOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            {/* DROPDOWN */}
            {isOpen && (
              <div
                className="
                  absolute
                  top-full
                  left-0
                  right-0
                  mt-2
                  bg-[#0a1221]
                  border border-white/10
                  rounded-xl
                  shadow-2xl
                  overflow-hidden
                  z-[100]
                "
              >
                <div className="max-h-56 sm:max-h-60 overflow-y-auto overscroll-contain">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => {
                        setSelectedService(service);
                        setIsOpen(false);
                      }}
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        gap-3
                        px-4
                        sm:px-6
                        py-3.5
                        sm:py-4
                        text-left
                        cursor-pointer
                        transition-colors
                        hover:bg-blue-600/10
                      "
                    >
                      <span
                        className={`
                          text-[10px]
                          sm:text-xs
                          font-black
                          uppercase
                          tracking-wider
                          ${
                            selectedService === service
                              ? "text-blue-500"
                              : "text-gray-400"
                          }
                        `}
                      >
                        {service}
                      </span>

                      {selectedService === service && (
                        <Check
                          size={16}
                          className="text-blue-500 flex-shrink-0"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ADDRESS */}
          <div className="relative group w-full">
            <MapPin
              className={iconClasses}
              size={19}
            />

            <input
              type="text"
              name="address"
              placeholder="Your City"
              className={inputClasses}
              value={formData.address}
              onChange={handleChange}
              autoComplete="address-level2"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              box-border
              bg-blue-600
              hover:bg-blue-500
              text-white
              py-4
              sm:py-5
              px-4
              rounded-xl
              font-black
              text-base
              sm:text-lg
              md:text-xl
              shadow-[0_10px_30px_rgba(37,99,235,0.3)]
              mt-2
              transition-all
              active:scale-[0.97]
              tracking-widest
              uppercase
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
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