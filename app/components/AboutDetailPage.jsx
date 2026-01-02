"use client";
import React from "react";
import useReveal from "../hooks/useReveal";

const AboutDetailPage = () => {
  const { ref: heroRef, revealed: heroRevealed } = useReveal({
    threshold: 0.1,
  });
  const { ref: skillsRef, revealed: skillsRevealed } = useReveal({
    threshold: 0.1,
  });
  const { ref: experienceRef, revealed: experienceRevealed } = useReveal({
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
      ],
    },
    {
      category: "Design",
      items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX Design"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PHP", "MySQL", "MongoDB", "REST API"],
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "npm", "Webpack", "Responsive Design"],
    },
  ];

  const experiences = [
    {
      year: "2023 - Present",
      title: "Frontend Developer",
      company: "Freelance",
      description:
        "Building modern web applications with React and Next.js. Creating responsive and user-friendly interfaces.",
      achievements: [
        "Delivered 15+ projects",
        "100% client satisfaction",
        "Increased user engagement by 40%",
      ],
    },
    {
      year: "2022 - 2023",
      title: "UI/UX Designer",
      company: "Digital Agency",
      description:
        "Designed user interfaces and experiences for web and mobile applications.",
      achievements: [
        "Led 10+ design projects",
        "Improved user retention by 35%",
        "Created design system",
      ],
    },
    {
      year: "2021 - 2022",
      title: "Graphic Designer",
      company: "Creative Studio",
      description:
        "Created visual designs, branding materials, and marketing content.",
      achievements: [
        "Designed 50+ marketing materials",
        "Rebranded 5 companies",
        "Award winner design",
      ],
    },
  ];

  const education = [
    {
      year: "2022 - 2023",
      degree: "Digital Web & Project Management",
      institution: "Digital Campus, Montpellier",
      description:
        "Focused on web development, project management, and digital marketing.",
    },
    {
      year: "2021 - 2022",
      degree: "Commercialisation Technique",
      institution: "IUT de Béziers",
      description: "Business and technical commerce studies.",
    },
    {
      year: "2017 - 2020",
      degree: "International Business",
      institution: "Economic University, Danang",
      description: "International business and economics.",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 sm:py-28">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`max-w-7xl mx-auto px-3 sm:px-6 mb-20 sm:mb-32 transition-all duration-700 ${
          heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Profile Photo */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-black">
              <img
                src="/images/hero-image.png"
                alt="Qadri Aditya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-white/70 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Hi! I'm{" "}
            <span className="text-white font-semibold">Qadri Aditya</span>, a
            passionate frontend developer and UI/UX designer with a love for
            creating beautiful, functional, and user-centered digital
            experiences.
          </p>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              3+
            </div>
            <div className="text-white/60 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              15+
            </div>
            <div className="text-white/60 text-sm">Projects Done</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              10+
            </div>
            <div className="text-white/60 text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
              5+
            </div>
            <div className="text-white/60 text-sm">Technologies</div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div
        ref={skillsRef}
        className={`max-w-7xl mx-auto px-3 sm:px-6 mb-20 sm:mb-32 transition-all duration-700 ${
          skillsRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={`p-6 sm:p-8 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 ${
                skillsRevealed
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm sm:text-base transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div
        ref={experienceRef}
        className={`max-w-7xl mx-auto px-3 sm:px-6 mb-20 sm:mb-32 transition-all duration-700 ${
          experienceRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-transparent"></div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 ${
                experienceRevealed
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-green-400 text-sm sm:text-base font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-white/60 text-sm sm:text-base mt-2 sm:mt-0">
                  {exp.year}
                </span>
              </div>
              <p className="text-white/70 text-sm sm:text-base mb-4">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-white/60 text-sm sm:text-base"
                  >
                    <span className="text-green-400 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="text-green-400 text-sm sm:text-base font-semibold mb-3">
                {edu.year}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-white/80 font-medium mb-3 text-sm sm:text-base">
                {edu.institution}
              </p>
              <p className="text-white/60 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDetailPage;
