"use client";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import useReveal from "../hooks/useReveal";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const { ref: leftRef, revealed: leftRevealed } = useReveal({
    threshold: 0.08,
  });
  const { ref: underRef, revealed: underRevealed } = useReveal({
    threshold: 0.12,
  });
  const [active, setActive] = useState(1); // center card index (0..n-1)
  const [isClient, setIsClient] = useState(false);
  const items = [
    { title: "Web Development", icon: "web" },
    { title: "Mobile App Design", icon: "mobile" },
    { title: "Web Design", icon: "content" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const t = setInterval(() => {
      setActive((s) => (s + 1) % items.length);
    }, 4000);
    return () => clearInterval(t);
  }, [isClient]);

  // keyboard navigation
  useEffect(() => {
    if (!isClient) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") setActive((s) => (s + 1) % items.length);
      if (e.key === "ArrowLeft")
        setActive((s) => (s - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isClient]);

  return (
    <section
      id="home"
      suppressHydrationWarning
      className="relative flex flex-col items-center justify-center min-h-screen sm:min-h-[90vh] scroll-mt-16 overflow-visible px-3 sm:px-6 pt-6 sm:pt-8 pb-20 sm:pb-28 md:pb-40"
    >
      <div className="absolute top-8 sm:top-12 left-4 sm:left-6 w-8 sm:w-12 h-8 sm:h-12 bg-[var(--primary-200)] rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" />

      {/* Plain background (image/video removed) */}
      <div className="absolute inset-0 z-0 bg-black" aria-hidden="true" />

      {/* subtle overlay so text stays readable */}
      <div
        className="absolute inset-0 bg-black/40 z-[5] pointer-events-none"
        aria-hidden="true"
      />

      {/* Side fades so video edges blend into black background */}
      {/* Top fade so the top of the video blends into the black background */}
      <div
        className="absolute top-0 left-0 right-0 h-16 sm:h-24 md:h-36 bg-gradient-to-b from-black to-transparent z-[5] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="block absolute inset-y-0 left-0 w-20 sm:w-40 md:w-48 lg:w-56 bg-gradient-to-r from-black/80 to-transparent z-[5] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="block absolute inset-y-0 right-0 w-20 sm:w-40 md:w-48 lg:w-56 bg-gradient-to-l from-black/80 to-transparent z-[5] pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 md:h-56 bg-gradient-to-b from-transparent to-black pointer-events-none z-[5]"
        aria-hidden="true"
      />

      <div className="w-full max-w-4xl mx-auto z-10 mt-20 sm:mt-24 md:mt-48">
        <div
          ref={leftRef}
          className={`flex flex-col items-center text-center px-2 sm:px-4 transition-all duration-700 ${
            leftRevealed ? "anim-slide-up" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className={`text-white text-xs sm:text-sm md:text-base mb-4 sm:mb-6 tracking-wide uppercase ${
              leftRevealed ? "anim-fade-in anim-delay-150" : "opacity-0"
            }`}
          >
            Let’s build something amazing together
          </p>

          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-black bg-white">Hello, I'm</span>
            <br />
            <span
              className={`mb-2 mt-2 sm:mt-3 inline-block ${
                leftRevealed ? "anim-fade-in anim-delay-200" : "opacity-0"
              }`}
            >
              <TypeAnimation
                sequence={[
                  "Qadri Aditya H. R.",
                  1000,
                  "Front-end Dev",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p
            className={`text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 mt-4 sm:mt-6 lg:text-xl max-w-2xl ${
              leftRevealed ? "anim-fade-in anim-delay-300" : "opacity-0"
            }`}
          >
            Passionate learner with a love for technology, problem-solving, and
            continuous growth.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center w-full sm:w-auto mt-4 sm:mt-6 ${
              leftRevealed ? "anim-fade-in anim-delay-400" : "opacity-0"
            }`}
          >
            {/* Put your CV file (PDF) in `public/resume.pdf` or change href accordingly */}
            <a
              href="/CVQadriAditya.pdf"
              download
              className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full bg-white text-black shadow-md hover:scale-105 hover:bg-white/80 transition-all inline-flex items-center justify-center text-sm sm:text-base"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full border border-white/30 text-white font-semibold hover:bg-white/5 transition-all flex items-center gap-2 justify-center text-sm sm:text-base"
            >
              <ArrowDownCircleIcon className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
              See My Work
            </a>
          </div>
        </div>
      </div>

      {/* === Services / Offerings carousel (under Hero) === */}
      <div
        ref={underRef}
        className={`w-full mt-24 sm:mt-32 md:mt-40 z-10 transition-all duration-700 ${
          underRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`text-center mb-6 transition-all duration-500 ${
                underRevealed
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                What Do I Offer
              </p>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold mt-3">
                Creates Professional Design That's
                <br className="hidden sm:block" /> Oriented Towards Client Needs
              </h3>

              {/* purple progress pill (hidden on small screens for simplicity) */}
              <div className="hidden sm:flex justify-center mt-2 sm:mt-4">
                <div className="h-1 sm:h-1.5 w-32 sm:w-48 bg-white/10 rounded-full relative">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-0.5 sm:-mt-1 bg-white h-1 sm:h-1.5 w-16 sm:w-24 rounded-full shadow-lg" />
                </div>
              </div>
            </div>

            <div className="relative w-full">
              <div
                className={`transition-all duration-500 ${
                  underRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                {/* Image carousel - single card in center */}
                <div className="w-full flex items-center justify-center">
                  <div className="w-full max-w-2xl mx-auto px-4">
                    <div className="relative h-56 sm:h-64 md:h-72 flex items-center justify-center">
                      {items.map((it, i) => {
                        const isActive = i === active;
                        return (
                          <div
                            key={it.title}
                            onClick={() => setActive(i)}
                            className={`absolute transition-all duration-700 ease-in-out transform cursor-pointer ${
                              isActive
                                ? "opacity-100 scale-100 z-10"
                                : "opacity-0 scale-50 z-0 pointer-events-none"
                            }`}
                          >
                            <div className="rounded-xl p-6 sm:p-8 md:p-10 flex flex-col items-center gap-4 sm:gap-5 bg-white/10 shadow-2xl border border-white/20 transition-all duration-700">
                              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg flex items-center justify-center bg-black/80 transition-all duration-700">
                                {/* simple icon variants */}
                                {it.icon === "content" && (
                                  <svg
                                    className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-white/80"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden
                                  >
                                    <rect
                                      x="3"
                                      y="4"
                                      width="18"
                                      height="12"
                                      rx="2"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M7 16v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                                {it.icon === "mobile" && (
                                  <svg
                                    className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden
                                  >
                                    <rect
                                      x="7"
                                      y="3"
                                      width="10"
                                      height="14"
                                      rx="2"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                    />
                                    <path
                                      d="M11 18h2"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                )}
                                {it.icon === "web" && (
                                  <svg
                                    className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-white/90"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden
                                  >
                                    <path
                                      d="M3 12h18"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    />
                                    <path
                                      d="M3 7h18"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    />
                                    <path
                                      d="M3 17h18"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                )}
                              </div>
                              <div className="text-white font-semibold text-center text-sm sm:text-base md:text-lg transition-all duration-700">
                                {it.title}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls: left/right arrows and pagination dots */}
              <div
                className={`mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-6 transition-all duration-500 ${
                  underRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <button
                  aria-label="Previous"
                  onClick={() =>
                    setActive((s) => (s - 1 + items.length) % items.length)
                  }
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/6 text-white flex items-center justify-center hover:bg-white/10 transition"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 15L7 10l5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-2 sm:gap-3">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`rounded-full transition-all duration-200 ${
                        i === active
                          ? "w-6 sm:w-8 h-2 sm:h-3 bg-white"
                          : "w-2 sm:w-3 h-2 sm:h-3 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  aria-label="Next"
                  onClick={() => setActive((s) => (s + 1) % items.length)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/6 text-white flex items-center justify-center hover:bg-white/10 transition"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-180"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 15L7 10l5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee,
        .animate-marquee2 {
          display: flex;
          gap: 2rem;
          width: max-content;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 22s linear infinite;
        }
        .marquee-track {
          display: inline-block;
        }
      `}</style>
      {/* Scroll down button (separated below services) */}
      <div className="mt-8 z-10 flex flex-col items-center"></div>
    </section>
  );
};

export default HeroSection;
