"use client";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import useReveal from "../hooks/useReveal";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const { ref: heroRef, revealed: heroRevealed } = useReveal({
    threshold: 0.1,
  });
  const { ref: servicesRef, revealed: servicesRevealed } = useReveal({
    threshold: 0.1,
  });

  const [active, setActive] = useState(1);
  const [isClient, setIsClient] = useState(false);

  const services = [
    { title: "Web Development", icon: "web", desc: "Modern & Responsive" },
    { title: "UI/UX Design", icon: "design", desc: "Beautiful Interfaces" },
    { title: "Graphic Design", icon: "brand", desc: "Creative" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const t = setInterval(() => {
      setActive((s) => (s + 1) % services.length);
    }, 5000);
    return () => clearInterval(t);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") setActive((s) => (s + 1) % services.length);
      if (e.key === "ArrowLeft")
        setActive((s) => (s - 1 + services.length) % services.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isClient]);

  return (
    <section
      id="home"
      suppressHydrationWarning
      className="relative min-h-screen bg-black overflow-hidden py-20 sm:py-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div
          ref={heroRef}
          className={`mb-20 sm:mb-28 transition-all duration-1000 flex flex-col items-center text-center ${
            heroRevealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-3xl">
            {/* Tagline */}
            <p className="text-white/60 text-sm sm:text-base uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
              Welcome to my portfolio
              <span className="w-12 h-px bg-gradient-to-l from-transparent via-purple-500 to-transparent"></span>
            </p>

            {/* Main Title */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                I'm{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      "Aditya",
                      2000,
                      "a Developer",
                      2000,
                      "a Designer",
                      2000,
                      "Creative",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>
            </div>

            {/* Sub-Headline - Value Proposition */}
            <p className="text-indigo-300 text-sm sm:text-base uppercase tracking-widest mb-4 font-semibold">
              Helping brands build pixel-perfect experiences that convert
            </p>

            {/* Description */}
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Passionate frontend developer and UI/UX designer creating
              beautiful, functional digital experiences that drive results.
              Let's build something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Explore My Work
                <ArrowDownCircleIcon className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 mt-12 sm:mt-16 justify-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  2+
                </div>
                <p className="text-white/60 text-sm">Projects Completed</p>
              </div>
            </div>

            {/* Download CV Section */}
            <div className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10 flex flex-col items-center">
              <p className="text-white/60 text-sm uppercase tracking-widest mb-4">
                Get my resume
              </p>
              <a
                href="/CVQadriAditya.pdf"
                download
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19v-7m0 0V5m0 7H5m7 0h7"
                  />
                </svg>
                Download My CV
              </a>
            </div>
          </div>
        </div>

        {/* Services Showcase */}
        <div
          ref={servicesRef}
          className={`transition-all duration-1000 ${
            servicesRevealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-12">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-12 h-px bg-gradient-to-r from-green-500 to-transparent"></span>
              What I Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Services & Expertise
            </h2>
          </div>

          {/* Services Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  onClick={() => setActive(idx)}
                  className={`p-6 sm:p-8 rounded-2xl border cursor-pointer transition-all duration-500 ${
                    idx === active
                      ? "bg-white/10 border-white/40 scale-105 shadow-2xl shadow-white/10"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-4">
                      {service.icon === "web" && (
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      )}
                      {service.icon === "design" && (
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      )}
                      {service.icon === "brand" && (
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">{service.desc}</p>
                  {idx === active && (
                    <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Service Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`transition-all duration-300 ${
                    idx === active
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/40 hover:bg-white/60"
                  }`}
                  style={{ borderRadius: "1px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
