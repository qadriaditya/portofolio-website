"use client";
import React, { useState } from "react";
import useReveal from "../hooks/useReveal";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const { ref: contactRef, revealed: contactRevealed } = useReveal({
    threshold: 0.12,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // simple mailto fallback to open user's mail client
    const subject = encodeURIComponent("Newsletter signup");
    const body = encodeURIComponent(`Please subscribe: ${email}`);
    window.location.href = `mailto:qadriaditya6@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-black">
      <div
        ref={contactRef}
        className={`max-w-6xl mx-auto px-3 sm:px-6 text-center transition-all duration-700 ${
          contactRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mt-10 sm:mt-16">
          STAY WILD INTO
          <br />
          YOUR IDEAS.
        </h2>

        <div className="mt-16 sm:mt-20 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10">
          <div
            className={`md:flex-1 text-left md:text-left transition-all duration-500 ${
              contactRevealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide">
              Want to
            </p>
            <p className="text-white font-medium mt-1 text-base sm:text-lg">
              Ask?
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`flex-1 md:flex-2 w-full max-w-2xl transition-all duration-500 ${
              contactRevealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <div className="flex items-center border-b border-white/20 py-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email address.."
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 px-2 py-2 sm:py-3 text-sm sm:text-base"
                aria-label="Email address"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="ml-2 sm:ml-4 text-white/90 hover:text-white transition-all p-1"
              >
                {/* simple arrow icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
