"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./atoms/TabButton";
import useReveal from "../hooks/useReveal";

const MODAL_CONTENT = {
  skills: (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-semibold text-white/90 mb-2">
          Bahasa Pemrograman
        </h4>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>PHP</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white/90 mb-2">
          Teknologi &amp; Tools
        </h4>
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          <li>Frontend: React.js, Next.js, Vite</li>
          <li>Styling: Tailwind CSS, SCSS</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MySQL, MongoDB</li>
          <li>Tools: Git, GitHub, VS Code, Postman</li>
        </ul>
      </div>
    </div>
  ),
  education: (
    <div>
      <h4 className="text-lg font-semibold text-white/90 mb-2">Pendidikan</h4>
      <ul className="list-disc pl-5 text-gray-300 space-y-1">
        <li>S1 Teknik Informatika – Universitas Contoh</li>
        <li>Bootcamp Web Development – Coding Studio</li>
      </ul>
    </div>
  ),
  experience: (
    <div>
      <h4 className="text-lg font-semibold text-white/90 mb-2">Pengalaman</h4>
      <ul className="list-disc pl-5 text-gray-300 space-y-1">
        <li>Frontend Developer – PT. Maju Mundur (2023 – Sekarang)</li>
        <li>Intern Web Developer – Startup XYZ (2022 – 2023)</li>
      </ul>
    </div>
  ),
};

const AboutSection = () => {
  const [selected, setSelected] = useState(null);
  const { ref: leftRef, revealed: leftRevealed } = useReveal({
    threshold: 0.12,
  });
  const { ref: rightRef, revealed: rightRevealed } = useReveal({
    threshold: 0.12,
  });

  return (
    <section
      id="about"
      className="text-slate-900 mt-16 px-6 sm:px-10 lg:px-20 py-16 pt-60 bg-transparent"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        {/* Left content */}
        <div
          ref={leftRef}
          className={`lg:col-span-7 flex flex-col justify-center text-center lg:text-left transition-all duration-700 ${
            leftRevealed ? "anim-slide-up" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
            About Me
          </h2>

          <p className="text-base md:text-lg text-muted mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I’m a full stack web developer passionate about building clean and
            modern web applications. I enjoy solving problems and turning ideas
            into beautiful, interactive experiences.
          </p>

          {/* Buttons that trigger modal */}
          <div className="flex justify-center lg:justify-start gap-4">
            <TabButton selectTab={() => setSelected("skills")} active={false}>
              Skills
            </TabButton>
            <TabButton
              selectTab={() => setSelected("education")}
              active={false}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => setSelected("experience")}
              active={false}
            >
              Experience
            </TabButton>
          </div>
        </div>

        {/* Right image */}
        <div
          ref={rightRef}
          className={`lg:col-span-5 flex justify-center transition-all duration-700 ${
            rightRevealed ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden shadow p-3"
            style={{ maxWidth: "420px", width: "100%" }}
          >
            <Image
              src="/images/hero-image.png"
              width={400}
              height={300}
              alt="About Me"
              className="object-cover w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-2xl text-left">
            <h3 className="text-2xl font-bold text-primary mb-4 capitalize">
              {selected}
            </h3>
            <div className="text-muted">{MODAL_CONTENT[selected]}</div>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
