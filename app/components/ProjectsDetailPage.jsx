"use client";
import React, { useState } from "react";
import useReveal from "../hooks/useReveal";

const projects = [
  {
    id: 1,
    title: "Louismartine Website",
    category: "Web Development",
    description:
      "A modern e-commerce website with stunning UI/UX design and seamless user experience.",
    image: "/images/ProjectCard/LouismartineWebsite.png",
    tags: ["React", "Next.js", "Tailwind CSS", "E-commerce"],
    link: "#",
    year: "2024",
  },
  {
    id: 2,
    title: "Louis Martine Dashboard",
    category: "UI/UX Design",
    description:
      "Admin dashboard with analytics, data visualization, and intuitive navigation.",
    image: "/images/ProjectCard/LouisMartineDashboard.png",
    tags: ["Dashboard", "Analytics", "Figma", "React"],
    link: "#",
    year: "2024",
  },
  {
    id: 3,
    title: "Portfolio Redesign",
    category: "Web Design",
    description:
      "Modern portfolio website with smooth animations and responsive design.",
    image: "/images/ProjectCard/PortfolioRedesign.png",
    tags: ["Portfolio", "Animation", "Responsive", "CSS"],
    link: "#",
    year: "2023",
  },
  {
    id: 4,
    title: "Hero Image Project",
    category: "Graphic Design",
    description:
      "Creative visual design with modern aesthetics and brand identity.",
    image: "/images/hero-image.png",
    tags: ["Branding", "Visual Design", "Photoshop"],
    link: "#",
    year: "2023",
  },
];

const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Web Design",
  "Graphic Design",
];

const ProjectsDetailPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref: headerRef, revealed: headerRevealed } = useReveal({
    threshold: 0.1,
  });
  const { ref: projectsRef, revealed: projectsRevealed } = useReveal({
    threshold: 0.05,
  });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black py-20 sm:py-28">
      {/* Header Section */}
      <div
        ref={headerRef}
        className={`max-w-7xl mx-auto px-3 sm:px-6 mb-12 sm:mb-20 transition-all duration-700 ${
          headerRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
            My Projects
          </h1>
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            A collection of my recent work in web development, UI/UX design, and
            graphic design. Each project represents my passion for creating
            beautiful and functional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div ref={projectsRef} className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                projectsRevealed
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm text-green-400 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-white hover:text-green-400 transition-colors text-sm sm:text-base font-medium group/btn"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              15+
            </div>
            <div className="text-white/60 text-sm sm:text-base">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              10+
            </div>
            <div className="text-white/60 text-sm sm:text-base">
              Happy Clients
            </div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              3+
            </div>
            <div className="text-white/60 text-sm sm:text-base">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              100%
            </div>
            <div className="text-white/60 text-sm sm:text-base">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetailPage;
