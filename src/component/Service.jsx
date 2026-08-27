import React, { useState } from "react";
import {
    Wrench,
    Bolt,
    Droplets,
    Hammer,
    ChevronDown,
    CheckCircle2,
    Paintbrush,
    Layers,
    Maximize,
    Wind,
    Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const Service = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const services = [
        {
            title: "Electrical Services",
            icon: <Bolt size={24} />,
            description:
                "Power your home with confidence. Our expert electrical services ensure safety, efficiency, and reliability—whether you're upgrading systems or installing cutting-edge solutions.",
            items: [
                "Electrical Construction",
                "Breakers & Fuses",
                "Electrical Safety Inspections",
                "Lighting",
                "Surge Protection",
                "Wiring & Rewiring",
                "Electrical Panel Replacement",
                "Ceiling Fans",
                "Residential Electrician",
                "EV Charger Installation",
            ],
        },
        {
            title: "Plumbing Services",
            icon: <Droplets size={24} />,
            description:
                "From minor leaks to major installations, we deliver seamless plumbing solutions designed to keep your home running flawlessly—day and night.",
            items: [
                "Drain Cleaning",
                "Water Heater Repair & Replacement",
                "Toilet Repair & Replacement",
                "Water Treatment",
                "Piping & Repiping",
                "Sewer Line Services",
                "Plumbing Construction",
                "Leak Detection",
                "Commercial Plumbing",
                "Residential Plumbing",
                "Emergency Plumbing",
            ],
        },
        {
            title: "HVAC Services",
            icon: <Wind size={24} />,
            description:
                "Experience year-round comfort with our advanced heating and cooling solutions. We optimize performance, energy efficiency, and indoor air quality for a healthier living environment.",
            items: [
                "AC Installation",
                "AC Repair",
                "AC Maintenance",
                "Thermostat Services",
                "Heating Services",
                "Indoor Air Quality Services",
            ],
        },
        {
            title: "Painting Services",
            icon: <Paintbrush size={24} />,
            description:
                "Transform your space with flawless finishes and vibrant colors. Our professional painting services enhance beauty, protect surfaces, and elevate property value.",
            items: [
                "Interior Painting",
                "Exterior Painting",
                "Cabinet Painting",
                "Fence & Deck Painting",
                "Commercial Painting",
                "Residential Painting",
            ],
        },
        {
            title: "Roofing Services",
            icon: <Home size={24} />,
            description:
                "Protect what matters most with durable, weather-resistant roofing solutions built to last. We combine quality materials with expert craftsmanship.",
            items: [
                "Roof Installation",
                "Roof Repair",
                "Roof Replacement",
                "Roof Inspection",
                "Shingle Roofing",
                "Flat Roofing",
                "Waterproofing",
            ],
        },
        {
            title: "Interior Repairs & Touch-Ups",
            icon: <Wrench size={24} />,
            description:
                "Keep your interiors looking fresh and refined. Our detailed repair and touch-up services restore beauty and extend the life of your home’s finishes.",
            items: [
                "Wall Repairs",
                "Paint Touch-Ups",
                "Trim & Molding Repair",
                "Door Repairs",
                "Minor Fixture Repairs",
            ],
        },
        {
            title: "Accent Walls",
            icon: <Layers size={24} />,
            description:
                "Make a statement with stunning accent walls that reflect your style. We create eye-catching designs that turn ordinary spaces into extraordinary experiences.",
            items: [
                "Feature Wall Design",
                "Textured Walls",
                "Wallpaper Installation",
                "Decorative Panels",
                "Wood Accent Walls",
            ],
        },
        {
            title: "Carpentry",
            icon: <Hammer size={24} />,
            description:
                "Precision craftsmanship meets creativity. Our carpentry services bring custom designs to life with durability, elegance, and attention to detail.",
            items: [
                "Custom Woodwork",
                "Cabinet Installation",
                "Furniture Repair",
                "Framing",
                "Trim & Molding",
                "Deck Construction",
            ],
        },
        {
            title: "Drywall Installation & Repair",
            icon: <Maximize size={24} />,
            description:
                "Achieve perfectly smooth walls and ceilings with our expert drywall services. We ensure seamless finishes that enhance every room.",
            items: [
                "Drywall Installation",
                "Drywall Repair",
                "Crack & Hole Repair",
                "Drywall Finishing",
                "Plaster Repair",
                "Ceiling Repairs",
            ],
        },
    ];

    return (
        <div className="w-full min-h-screen bg-[#050a14] text-white font-sans overflow-x-hidden">

            {/* ================= HERO ================= */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">

                {/* Background Glow */}
                <div
                    className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-full
            h-[600px]
            blur-[120px]
            rounded-full
            pointer-events-none
          "
                />

                {/* Hero Content */}
                <div className="max-w-4xl mx-auto relative z-10 text-center mb-16">

                    <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="h-[1px] w-10 bg-blue-500" />

                        <span className="text-blue-500 font-bold uppercase tracking-[0.25em] text-xs">
                            Our Expertise
                        </span>

                        <div className="h-[1px] w-10 bg-blue-500" />
                    </div>

                    <h1
                        className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              uppercase
              tracking-tighter
              mb-6
            "
                    >
                        Our{" "}
                        <span className="bg-blue-600 px-4 py-1 inline-block rounded-xl">
                            Services
                        </span>
                    </h1>

                    <p
                        className="
              text-gray-400
              text-base
              sm:text-lg
              leading-relaxed
              max-w-2xl
              mx-auto
            "
                    >
                        Houston Easy Repairs offers professional repair and maintenance
                        solutions designed to keep your home or business running smoothly.
                    </p>
                </div>

                {/* ================= SERVICES ================= */}
                <div className="max-w-4xl mx-auto relative z-10 space-y-4">

                    {services.map((service, index) => {
                        const isActive = activeAccordion === index;

                        return (
                            <div
                                key={service.title}
                                className={`
                  bg-[#0a1221]
                  rounded-2xl
                  border
                  overflow-hidden
                  transition-all
                  duration-300
                  ${isActive
                                        ? "border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.12)]"
                                        : "border-white/5 hover:border-white/10"
                                    }
                `}
                            >
                                {/* Accordion Header */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveAccordion(isActive ? -1 : index)
                                    }
                                    className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-4
                    p-5
                    sm:p-7
                    text-left
                  "
                                >
                                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">

                                        {/* Icon */}
                                        <div
                                            className={`
                        p-3
                        rounded-xl
                        flex-shrink-0
                        transition-all
                        duration-300
                        ${isActive
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-white/5 text-blue-500"
                                                }
                      `}
                                        >
                                            {service.icon}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="
                        text-base
                        sm:text-lg
                        md:text-xl
                        font-black
                        uppercase
                        tracking-wide
                      "
                                        >
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Arrow */}
                                    <ChevronDown
                                        size={22}
                                        className={`
                      flex-shrink-0
                      transition-all
                      duration-300
                      ${isActive
                                                ? "rotate-180 text-blue-500"
                                                : "text-gray-600"
                                            }
                    `}
                                    />
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-in-out
                    ${isActive
                                            ? "max-h-[1200px] opacity-100"
                                            : "max-h-0 opacity-0"
                                        }
                  `}
                                >
                                    <div
                                        className="
                      px-5
                      sm:px-10
                      md:px-14
                      pb-8
                      sm:pb-10
                      pt-6
                      border-t
                      border-white/5
                    "
                                    >

                                        {/* Description */}
                                        <p
                                            className="
                        text-gray-300
                        text-sm
                        sm:text-base
                        leading-relaxed
                        mb-8
                        max-w-3xl
                      "
                                        >
                                            {service.description}
                                        </p>

                                        {/* Service Items */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                            {service.items.map((item) => (
                                                <div
                                                    key={item}
                                                    className="
                            flex
                            items-center
                            gap-3
                            text-gray-400
                            group
                          "
                                                >
                                                    <CheckCircle2
                                                        size={18}
                                                        className="
                              text-blue-500
                              flex-shrink-0
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                                                    />

                                                    <span
                                                        className="
                              text-sm
                              sm:text-base
                              group-hover:text-white
                              transition-colors
                              duration-300
                            "
                                                    >
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section
                className="
          relative
          py-20
          sm:py-24
          px-4
          sm:px-6
          lg:px-8
          text-center
          overflow-hidden
        "
            >
                {/* CTA Glow */}
                <div
                    className="
            absolute
            left-1/2
            -translate-x-1/2
            top-1/2
            -translate-y-1/2
            w-[500px]
            h-[300px]
            bg-blue-600/10
            blur-[100px]
            rounded-full
            pointer-events-none
          "
                />

                <div className="max-w-4xl mx-auto relative z-10">

                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-[1px] w-8 bg-blue-500" />

                        <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.25em]">
                            Get Started
                        </span>

                        <div className="h-[1px] w-8 bg-blue-500" />
                    </div>

                    <h2
                        className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              uppercase
              tracking-tighter
              mb-8
            "
                    >
                        Ready To Start
                        <br />
                        Your Project?
                    </h2>

                    <Link
                        to="/contact"
                        className="
              inline-flex
              items-center
              justify-center
              bg-white
              text-blue-600
              px-10
              sm:px-14
              py-4
              sm:py-5
              rounded-2xl
              font-black
              uppercase
              text-base
              sm:text-lg
              shadow-2xl
              hover:bg-gray-100
              hover:-translate-y-1
              transition-all
              duration-300
              active:scale-95
            "
                    >
                        Book Service Now
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Service;