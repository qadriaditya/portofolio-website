"use client";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 anim-slide-up">
          Get in touch
        </h2>
        <p className="text-[#ADB7BE] mb-6 anim-fade-in">
          I'm open to work and collaborations. Feel free to reach out via email
          or LinkedIn.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:opacity-90 transition-opacity"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-gray-700 text-white rounded"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
