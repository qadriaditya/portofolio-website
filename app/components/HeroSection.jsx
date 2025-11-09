"use client";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import useReveal from "../hooks/useReveal";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const HeroSection = ({ onScrollDown, isAboutOpen }) => {
  const { ref: leftRef, revealed: leftRevealed } = useReveal({
    threshold: 0.08,
  });
  const { ref: underRef, revealed: underRevealed } = useReveal({
    threshold: 0.12,
  });
  const [active, setActive] = useState(1); // center card index (0..n-1)
  const items = [
    { title: "Web Development", icon: "web" },
    { title: "Mobile App Design", icon: "mobile" },
    { title: "Web Design", icon: "content" },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setActive((s) => (s + 1) % items.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setActive((s) => (s + 1) % items.length);
      if (e.key === "ArrowLeft")
        setActive((s) => (s - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[90vh] scroll-mt-16 overflow-visible px-6 pt-4 pb-20 md:pb-32"
    >
      <div className="absolute top-12 left-6 w-12 h-12 bg-[var(--primary-200)] rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" />

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
        className="absolute top-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-b from-black to-transparent z-[5] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="block absolute inset-y-0 left-0 w-48 md:w-56 bg-gradient-to-r from-black/80 to-transparent z-[5] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="block absolute inset-y-0 right-0 w-48 md:w-56 bg-gradient-to-l from-black/80 to-transparent z-[5] pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom fade so video visually blends into the About section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-b from-transparent to-black pointer-events-none z-[5]"
        aria-hidden="true"
      />

      <div className="w-full max-w-4xl mx-auto z-10 mt-40">
        <div
          ref={leftRef}
          className={`flex flex-col items-center text-center px-4 transition-all duration-700 ${
            leftRevealed ? "anim-slide-up" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className={`text-white text-sm sm:text-base mb-3 tracking-wide uppercase ${
              leftRevealed ? "anim-fade-in anim-delay-150" : "opacity-0"
            }`}
          >
            Let’s build something amazing together
          </p>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-black bg-white">Hello, I'm</span>
            <br />
            <span
              className={`mb-2 mt-3 inline-block ${
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
            className={`text-white/80 text-base sm:text-lg mb-6 mt-4 lg:text-xl max-w-2xl ${
              leftRevealed ? "anim-fade-in anim-delay-300" : "opacity-0"
            }`}
          >
            Passionate learner with a love for technology, problem-solving, and
            continuous growth.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${
              leftRevealed ? "anim-fade-in anim-delay-400" : "opacity-0"
            }`}
          >
            {/* Put your CV file (PDF) in `public/resume.pdf` or change href accordingly */}
            <a
              href="/CVQadriAditya.pdf"
              download
              className="w-full sm:w-auto px-6 py-2 rounded-full bg-white text-black shadow-md hover:scale-105 hover:bg-white/80 transition-all inline-flex items-center justify-center"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-2 rounded-full border border-white/30 text-white font-semibold hover:bg-white/5 transition-all flex items-center gap-2 justify-center"
            >
              <ArrowDownCircleIcon className="h-5 w-5 text-white" />
              See My Work
            </a>
          </div>
        </div>
      </div>

      {/* === Services / Offerings carousel (under Hero) === */}
      <div
        ref={underRef}
        className={`w-full mt-70 z-10 transition-all duration-700 ${
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
              <p className="text-sm text-white/60 uppercase tracking-wider">
                What Do I Offer
              </p>
              <h3 className="text-white text-2xl sm:text-3xl font-extrabold mt-3">
                Creates Professional Design That’s
                <br /> Oriented Towards Client Needs
              </h3>

              {/* purple progress pill (hidden on small screens for simplicity) */}
              <div className="hidden sm:flex justify-center mt-4">
                <div className="h-1.5 w-48 bg-white/10 rounded-full relative">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-1 bg-white h-1.5 w-24 rounded-full shadow-lg" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className={`bg-black/50 backdrop-blur-md rounded-xl p-8 shadow-2xl overflow-visible transition-all duration-500 ${
                  underRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <div className="flex items-center justify-center gap-6 md:gap-8">
                  {/* Cards container */}
                  <div className="w-full max-w-5xl mx-auto px-2">
                    <div className="flex items-center justify-center">
                      <div className="w-full overflow-x-auto -mx-4 px-4 sm:overflow-visible sm:mx-0 sm:px-0">
                        <div className="flex items-center justify-center gap-6 md:gap-8 transition-all duration-400 ease-out flex-nowrap snap-x snap-mandatory">
                          {items.map((it, i) => {
                            const isActive = i === active;
                            return (
                              <div
                                key={it.title}
                                onClick={() => setActive(i)}
                                className={`min-w-[220px] md:min-w-[260px] lg:min-w-[300px] rounded-xl p-6 flex flex-col items-center gap-4 cursor-pointer transition-all duration-400 ease-out transform flex-shrink-0 snap-start ${
                                  isActive
                                    ? "scale-100 bg-white/6 shadow-2xl border border-white/10"
                                    : "scale-90 opacity-40 bg-white/5"
                                }`}
                              >
                                <div
                                  className={`w-28 h-28 md:w-32 md:h-32 rounded-lg flex items-center justify-center ${
                                    isActive ? "bg-black" : "bg-black/60"
                                  }`}
                                >
                                  {/* simple icon variants */}
                                  {it.icon === "content" && (
                                    <svg
                                      className="w-12 h-12 text-white/80"
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
                                      className="w-14 h-14 text-white"
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
                                      className="w-12 h-12 text-white/90"
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
                                <div
                                  className={`text-white font-semibold text-center mt-2 ${
                                    isActive ? "" : "text-white/70"
                                  }`}
                                >
                                  {it.title}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls: left/right arrows and pagination dots */}
              <div
                className={`mt-6 flex items-center justify-center gap-6 transition-all duration-500 ${
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
                  className="w-10 h-10 rounded-full bg-white/6 text-white flex items-center justify-center hover:bg-white/10 transition"
                >
                  <svg
                    className="w-4 h-4"
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

                <div className="flex items-center gap-3">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`rounded-full transition-all duration-200 ${
                        i === active
                          ? "w-8 h-3 bg-white"
                          : "w-3 h-3 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  aria-label="Next"
                  onClick={() => setActive((s) => (s + 1) % items.length)}
                  className="w-10 h-10 rounded-full bg-white/6 text-white flex items-center justify-center hover:bg-white/10 transition"
                >
                  <svg
                    className="w-4 h-4 transform rotate-180"
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
      <div className="mt-8 z-10 flex flex-col items-center">
        <button
          onClick={() => {
            if (typeof onScrollDown === "function") onScrollDown();
            else {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          aria-expanded={!!isAboutOpen}
          aria-controls="about"
          className={`relative px-5 py-1 text-sm rounded-full text-black shadow-lg hover:brightness-95 hover:scale-105 transition-transform flex items-center gap-2 bg-white/60 backdrop-blur-md`}
        >
          <span className="select-none">{isAboutOpen ? "Close" : "About"}</span>
          <svg
            className={`w-4 h-4 transform transition-transform ${
              isAboutOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 8l5 5 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Decorative centered white line BELOW the About button — animate when About opens */}
        <div
          aria-hidden="true"
          className={`w-20 h-[2px] bg-white mt-3 rounded-full transition-all duration-500 ease-out transform ${
            isAboutOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
