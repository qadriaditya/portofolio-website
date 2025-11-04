import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import PoliceLine from "./PoliceLine";

const SAMPLE_PROJECTS = [
  {
    title: "Louis Martine Website",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS featuring smooth animations and modern design.",
    // fall back to existing public images so the card shows an image
    image: "/images/ProjectCard/LouismartineWebsite.png",
    tags: ["Next.js", "Tailwind", "React"],
    link: "#",
  },
  {
    title: "Louis Martine Dashboard Website",
    description:
      "Full-stack task management application with authentication and real-time updates.",
    image: "/images/ProjectCard/LouisMartineDashboard.png",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with cart functionality and payment integration.",
    image: "/images/hero-image.png",
    tags: ["React", "Redux", "Stripe"],
    link: "#",
  },
];

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [sectionRef.current]);

  return (
    <section id="projects" className="py-16 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Police line placed above the section title; fades/slides based on scroll */}
        <div
          className={`transition-all duration-500 ease-out overflow-visible ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <PoliceLine />
        </div>

        {/* Section Title */}
        <div
          className={`mb-12 mt-6 transition-all duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-30">
            My Projects
          </h2>
          <p className="text-white/70 text-lg">
            Selected work and case studies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
