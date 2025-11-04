"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import useReveal from "../hooks/useReveal";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const HeroSection = ({ onScrollDown, isAboutOpen }) => {
  const { ref: leftRef, revealed: leftRevealed } = useReveal({
    threshold: 0.08,
  });

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[90vh] scroll-mt-16 overflow-visible px-6 pt-4 pb-6"
    >
      <div className="absolute top-12 left-6 w-12 h-12 bg-[var(--primary-200)] rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" />

      {/* Video background (autoplay, muted, loop) */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
        poster="/images/hero-image.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/images/HeroBackground.mp4" type="video/mp4" />
        {/* fallback image if video not supported */}
      </video>

      {/* subtle overlay so text stays readable */}
      <div
        className="absolute inset-0 bg-black/40 z-5 pointer-events-none"
        aria-hidden="true"
      />

      {/* Side fades so video edges blend into black background */}
      {/* Top fade so the top of the video blends into the black background */}
      <div
        className="absolute top-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-b from-black to-transparent z-5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="block absolute inset-y-0 left-0 w-48 md:w-56 bg-gradient-to-r from-black/80 to-transparent z-5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="block absolute inset-y-0 right-0 w-48 md:w-56 bg-gradient-to-l from-black/80 to-transparent z-5 pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom fade so video visually blends into the About section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-b from-transparent to-black pointer-events-none z-5"
        aria-hidden="true"
      />

      <div className="w-full max-w-4xl mx-auto z-10">
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
                  "Front-end Developer",
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
            <button className="px-6 py-1.5 rounded-full bg-white text-black shadow-md hover:scale-105 hover:bg-white/80 transition-all">
              Download CV
            </button>
            <a
              href="#projects"
              className="px-6 py-1.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <ArrowDownCircleIcon className="h-5 w-5 text-white" />
              See My Work
            </a>
          </div>
        </div>
      </div>
      {/* === Police Lines (Crossing) === */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[100px] pointer-events-none overflow-visible z-0 pb-10"> */}
      {/* Line 1: yellow background with black text */}
      {/* <div className="absolute -rotate-[15deg] left-[-10%] bottom-10 bg-white text-black font-extrabold text-sm py-2 w-[130%] shadow-[0_4px_15px_rgba(0,0,0,0.3)] border-y-4 border-black">
          <div className="animate-marquee flex tracking-widest">
            <div className="marquee-track whitespace-nowrap">
              DESIGN • BACKEND LOGIC • SYSTEM BUILDING • CODING IN PROGRESS •
              FRONTEND DESIGN •
            </div>
            <div className="marquee-track whitespace-nowrap">
              DESIGN • BACKEND LOGIC • SYSTEM BUILDING • CODING IN PROGRESS •
              FRONTEND DESIGN •
            </div>
          </div>
        </div> */}

      {/* Line 2: black background with yellow text */}
      {/* <div className="absolute rotate-[10deg] left-[-10%] bottom-0 bg-black text-white font-extrabold text-sm py-2 w-[130%] shadow-[0_4px_15px_rgba(0,0,0,0.3)] border-y-4 border-white">
          <div className="animate-marquee2 flex tracking-widest">
            <div className="marquee-track whitespace-nowrap">
              CREATIVE DEVELOPER • UI/UX DESIGNER • PROBLEM SOLVER • LET’S BUILD
              SOMETHING AMAZING •
            </div>
            <div className="marquee-track whitespace-nowrap">
              CREATIVE DEVELOPER • UI/UX DESIGNER • PROBLEM SOLVER • LET’S BUILD
              SOMETHING AMAZING •
            </div>
          </div>
        </div>
      </div> */}
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
      {/* Scroll down button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
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
          className={`relative px-5 py-1 text-sm rounded-full text-white shadow-lg hover:brightness-95 hover:scale-105 transition-transform flex items-center gap-2 bg-black/60 backdrop-blur-md"`}
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
