"use client";
import React from "react";
import useReveal from "../hooks/useReveal";

const education = [
  {
    year: "2022 - 2023",
    place: "Digital Campus, Montpellier",
    degree: "Digital Web & Project Management",
  },
  {
    year: "2021 - 2022",
    place: "IUT de Béziers",
    degree: "Commercialisation Technique",
  },
  {
    year: "2017 - 2020",
    place: "Economic University, Danang",
    degree: "International Business",
  },
];

const experience = [
  {
    year: "2022",
    title: "Marketing Intern",
    details: "Social media content creator — Bi Ethic, Narbonne, France",
  },
  {
    year: "2021",
    title: "Freelancer",
    details:
      "Consulted with clients, created logos, posters, presentations based on their requirements",
  },
  {
    year: "2020",
    title: "Graphic Designer",
    details:
      "Designed promotional materials for events — Songhan Incubator, Viet Nam",
  },
];

const skills = {
  softwares: ["Ps", "Ai", "Id", "Xd", "Pr"],
  coding: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  tags: ["Packaging", "Visual design", "UI/UX design", "User Research"],
};

const languages = [
  { name: "English", level: "Fluent" },
  { name: "French", level: "Intermediate" },
  { name: "Vietnamese", level: "Native" },
];

const AboutSection = ({ onClose }) => {
  const { ref, revealed } = useReveal({ threshold: 0.1 });

  // control mount/unmount animation (shorter duration)
  const [isVisible, setIsVisible] = React.useState(false);
  const [announce, setAnnounce] = React.useState("");

  // keep track of previously focused element to restore focus on close
  const prevFocusRef = React.useRef(null);
  const closeBtnRef = React.useRef(null);

  React.useEffect(() => {
    prevFocusRef.current = document.activeElement;
    // trigger enter animation on next tick
    const t = window.setTimeout(() => {
      setIsVisible(true);
      setAnnounce("About opened");
      // move focus to close button for accessibility
      if (closeBtnRef.current) closeBtnRef.current.focus();
    }, 20);
    return () => window.clearTimeout(t);
  }, []);

  // close with animation: animate out then call onClose
  const handleClose = React.useCallback(() => {
    setIsVisible(false);
    setAnnounce("About closed");
    // after animation (500ms) restore focus then call parent onClose
    const timeout = window.setTimeout(() => {
      if (
        prevFocusRef.current &&
        typeof prevFocusRef.current.focus === "function"
      ) {
        try {
          prevFocusRef.current.focus();
        } catch (e) {
          // ignore
        }
      }
      if (typeof onClose === "function") onClose();
    }, 500);
    // do not return cleanup here (caller doesn't use it)
    return () => window.clearTimeout(timeout);
  }, [onClose]);

  // close on ESC
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleClose]);

  // bottom section visibility (hidden by default)
  const [bottomVisible, setBottomVisible] = React.useState(false);

  return (
    <section
      ref={ref}
      id="about"
      className={`transition-all duration-500 ease-out ${
        revealed && isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-95 pointer-events-none"
      }`}
      aria-hidden={!isVisible}
    >
      {/* close button */}
      {typeof onClose === "function" && (
        <div className="absolute top-6 right-6 z-40">
          <button
            ref={closeBtnRef}
            onClick={handleClose}
            aria-label="Close about"
            className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:scale-105 transition-transform"
          >
            ✕
          </button>
        </div>
      )}

      {/* ==================== HERO ==================== */}
      <div className="relative">
        {/* full-bleed background: expand to viewport using left 50% + negative margin */}
        <div
          className="absolute top-0 z-0 bg-black"
          style={{
            left: "50%",
            marginLeft: "-50vw",
            width: "100vw",
            height: "100%",
          }}
        />
        <div className="relative z-10 text-white min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 py-3 items-center">
            {/* LEFT TEXT */}
            <div>
              <h1 className="text-[56px] leading-tight font-extrabold text-white">
                Hello,{" "}
                <span className="block">
                  I’m <span className="text-gray-300">Adit</span>
                </span>
              </h1>
              <p className="mt-6 text-[16px] text-gray-300 leading-relaxed max-w-lg">
                I am a self-taught Graphic Designer based in Viet Nam with
                extensive marketing and communication experience. I am currently
                living in France and pursuing a degree in Digital Web & Project
                Management.
              </p>
            </div>

            {/* RIGHT PROFILE */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative w-[320px] sm:w-[380px] md:w-[440px] lg:w-[480px] max-w-full">
                {/* subtle decorative block shifted to the right for depth */}
                <div
                  className="absolute top-8 right-0 bg-gray-800 rounded-lg -z-10"
                  style={{
                    width: "105%",
                    height: "440px",
                    transform: "translateX(12px)",
                  }}
                />

                {/* image card */}
                <div className="relative rounded-lg overflow-hidden shadow-lg ring-2 ring-black/40">
                  <img
                    src="/images/about-image.png"
                    alt=""
                    className="object-cover w-full h-[500px] rounded-lg"
                  />
                </div>

                {/* name/title caption */}
                <div className="mt-4 text-center lg:text-right">
                  <h4 className="text-lg font-bold text-white"></h4>
                  <p className="text-sm text-gray-300">
                    Graphic Designer & Web Enthusiast
                  </p>
                </div>

                {/* contact card moved to the right side and slightly overlapping */}
                {/* <div className="absolute -bottom-20 right-0 bg-black text-white w-[280px] rounded-lg p-5 shadow-xl">
                  <h3 className="text-base font-semibold mb-1">Email</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    qadriaditya6@gmail.com <br />
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Toggle button to reveal/hide the bottom section (recreated) */}
        <div className="relative">
          <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 z-50">
            <button
              onClick={() => setBottomVisible((v) => !v)}
              aria-expanded={bottomVisible}
              aria-controls="about-bottom"
              aria-label={bottomVisible ? "Hide details" : "Show more"}
              className="px-5 py-2 rounded-full bg-[var(--primary-500)] text-white font-semibold shadow-lg hover:brightness-95 hover:scale-105 transition-transform flex items-center gap-2 pointer-events-auto focus:outline-none focus:ring-4 focus:ring-[var(--primary-500)]/40"
            >
              <span className="select-none">
                {bottomVisible ? "Hide details" : "Show more"}
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  bottomVisible ? "rotate-180" : ""
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
          </div>
        </div>

        {/* ==================== BOTTOM SECTION ==================== */}
        <div
          id="about-bottom"
          className={`relative transition-all duration-500 ease-out ${
            bottomVisible
              ? "opacity-100 translate-y-0 max-h-[5000px]"
              : "opacity-0 -translate-y-6 max-h-0 overflow-hidden pointer-events-none"
          }`}
          aria-hidden={!bottomVisible}
        >
          {/* full-bleed background for bottom section */}
          <div
            className="absolute top-0 z-0"
            style={{
              left: "50%",
              marginLeft: "-50vw",
              width: "100vw",
              height: "100%",
              backgroundColor: "#000",
            }}
          />
          <div className="relative z-10 text-white py-16 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* LEFT SIDE: Education & Experience */}
              <div>
                <h3 className="text-white text-2xl font-bold mb-6">
                  Education
                </h3>
                <ul className="space-y-4">
                  {education.map((edu, i) => (
                    <li key={i} className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 font-bold text-sm">
                          {edu.year}
                        </span>
                        <span className="text-white font-medium">
                          {edu.place}
                        </span>
                      </div>
                      <span className="text-gray-300 text-sm">
                        {edu.degree}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Experience Box */}
                <div className="bg-white text-black p-6 rounded-md mt-10 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Experience</h3>
                  {experience.map((exp, i) => (
                    <div key={i} className="mb-4">
                      <div className="font-bold">{exp.year}</div>
                      <div className="font-semibold">{exp.title}</div>
                      <p className="text-sm text-gray-800">{exp.details}</p>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[
                      "#Creativity",
                      "#Communication",
                      "#Detail-oriented",
                      "#Adaptability",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-black text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Technical Skills, Language, Hobbies */}
              <div>
                <h3 className="text-white text-2xl font-bold mb-6">
                  Technical skills
                </h3>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Software Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.softwares.map((s, i) => (
                      <div
                        key={i}
                        className="bg-white text-black text-sm px-3 py-1 rounded font-semibold"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Coding Skills</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {skills.coding.map((c, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-transparent border border-white rounded"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Other</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black text-white text-xs rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-white text-2xl font-bold mb-4">Language</h3>
                <ul className="text-sm space-y-2 mb-8">
                  {languages.map((lang, i) => (
                    <li key={i}>
                      <span className="font-semibold">{lang.name}</span> —{" "}
                      <span className="text-gray-300">{lang.level}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-white text-2xl font-bold mb-4">
                  Hobbies & Interests
                </h3>
                <p className="text-sm text-gray-300">
                  Photography, travel, illustration, and cooking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
