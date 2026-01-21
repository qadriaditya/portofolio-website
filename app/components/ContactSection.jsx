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
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent(
      `Hi! I'd like to discuss a project.\n\nBest regards`
    );
    window.location.href = `mailto:qadriaditya6@gmail.com?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.547 2.91 1.186.092-.923.35-1.547.636-1.903-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482 3.97-1.309 6.833-5.065 6.833-9.489 0-5.533-4.477-10.017-9.998-10.017z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:qadriaditya6@gmail.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/1234567890",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.75 5.404 2.177 7.657L2.477 24l8.313-2.335c2.206 1.201 4.688 1.834 7.306 1.834 9.59 0 17.383-7.795 17.383-17.384 0-4.649-1.823-9.022-5.138-12.337A17.369 17.369 0 0012.051 2.98z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-28 sm:py-36 bg-black">
      <div
        ref={contactRef}
        className={`max-w-6xl mx-auto px-3 sm:px-6 transition-all duration-700 ${
          contactRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        {/* Main Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and
            let's create something amazing.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <form
            onSubmit={handleSubmit}
            className={`transition-all duration-500 ${
              contactRevealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-indigo-500 focus:bg-white/20 transition-all text-sm sm:text-base"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
              >
                Get Started
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12 sm:my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className="text-white/50 text-sm">or connect with me</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Social Links */}
        <div
          className={`flex justify-center items-center gap-4 sm:gap-6 flex-wrap transition-all duration-500 ${
            contactRevealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target={social.name !== "Email" ? "_blank" : undefined}
              rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/10 border border-white/20 text-white hover:text-indigo-400 hover:border-indigo-500 hover:bg-indigo-600/10 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 group"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div
          className={`mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/10 transition-all duration-500 ${
            contactRevealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">
                Email
              </p>
              <a
                href="mailto:qadriaditya6@gmail.com"
                className="text-white text-lg hover:text-indigo-400 transition-colors"
              >
                qadriaditya6@gmail.com
              </a>
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">
                Available for
              </p>
              <p className="text-white text-lg">
                Freelance & Full-time Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
