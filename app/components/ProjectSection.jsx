"use client";
import React, { useEffect, useRef, useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import useReveal from "../hooks/useReveal";

// All available projects (same as in ProjectsDetailPage)
const ALL_PROJECTS = [
  {
    id: 1,
    title: "Louis Martine Website",
    image: "/images/ProjectCard/LouismartineWebsite.png",
    description:
      "Complete website redesign and development for fashion brand with e-commerce integration",
    role: "UI/UX Designer & Frontend Developer",
    techStack: ["React", "Tailwind CSS", "Next.js", "Figma"],
    outcome: "+35% user engagement",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Louis Martine Dashboard",
    image: "/images/ProjectCard/LouisMartineDashboard.png",
    description:
      "Analytics dashboard for business performance tracking with real-time data visualization",
    role: "Frontend Developer",
    techStack: ["React", "Chart.js", "Tailwind CSS", "API Integration"],
    outcome: "+28% operational efficiency",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "kedai Aroma",
    image: "/images/ProjectCard/KedaiAroma.png",
    description:
      "Modern static website with smooth animations and responsive design.",
    role: "Web Designer",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    outcome: "Enhanced user experience",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Hero Image Project",
    image: "/images/hero-image.png",
    description:
      "Creative visual design with modern aesthetics and brand identity.",
    role: "Graphic Designer",
    techStack: ["Photoshop", "Illustrator", "Adobe Creative Suite"],
    outcome: "Award-winning design",
    liveLink: "#",
    githubLink: "#",
  },
];

const ProjectCard = ({ project, index, isFeatured }) => {
  const { ref, revealed } = useReveal({ threshold: 0.1 });

  if (isFeatured) {
    // Featured card with image-only and hover overlay
    return (
      <div
        ref={ref}
        className={`group transition-all duration-500 ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } sm:col-span-2 row-span-2`}
        style={{
          transitionDelay: `${index * 100}ms`,
        }}
      >
        <div
          className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 h-full group/card"
          style={{
            height: "clamp(100px, 50vw, 1000px)",
            backgroundColor: "#000000",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Image Container - Full Height */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
            />

            {/* Featured Badge - Always Visible */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full backdrop-blur-md opacity-100 group-hover/card:opacity-0 transition-opacity duration-300 z-10">
              ⭐ Mark
            </div>

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/90 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 opacity-0 group-hover/card:opacity-100">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-indigo-400 text-3xl font-bold uppercase tracking-widest">
                    {project.category ||
                      (project.id === 1 || project.id === 2
                        ? "Web Development"
                        : project.id === 3
                          ? "Web Design"
                          : "Graphic Design")}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-white/90 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-indigo-300 text-sm font-semibold">
                    Role: {project.role}
                  </p>
                  <p className="text-green-400 text-sm font-semibold">
                    ✓ {project.outcome}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-full border border-indigo-500/50 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs px-3 py-1 bg-white/10 text-white/70 rounded-full border border-white/20">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <EyeIcon className="w-4 h-4" />
                  View
                </a>
                <a
                  href={project.githubLink}
                  className="flex-1 px-4 py-3 border border-white/40 hover:border-indigo-400 hover:bg-indigo-500/10 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular card with content always visible
  return (
    <div
      ref={ref}
      className={`group transition-all duration-500 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } flex flex-col`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 h-full group/card flex flex-col"
        style={{
          height: "clamp(250px, 50vw, 600px)",
          backgroundColor: "#000000",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Image Container */}
        <div
          className="relative overflow-hidden flex-1 md:flex-shrink-0"
          style={{ height: "clamp(200px, 50vw, 250px)", minHeight: "auto" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="hidden md:flex p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="hidden md:flex items-start gap-2 mb-2">
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
                {project.category ||
                  (project.id === 1 || project.id === 2
                    ? "Web Development"
                    : project.id === 3
                      ? "Web Design"
                      : "Graphic Design")}
              </span>
            </div>

            <h3 className="hidden md:block text-center md:text-left text-base md:text-lg font-bold text-white mb-0 md:mb-2 group-hover/card:text-indigo-300 transition-colors">
              {project.title}
            </h3>

            <p className="hidden md:block text-white/70 text-xs mb-3 line-clamp-2">
              {project.description}
            </p>

            {/* Role & Outcome - Compact */}
            <div className="hidden md:block text-xs space-y-0.5 mb-2">
              <p className="text-indigo-300 font-semibold text-xs">
                {project.role}
              </p>
              <p className="text-green-400 font-semibold text-xs">
                ✓ {project.outcome}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="hidden md:flex flex-wrap gap-1">
              {project.techStack.slice(0, 2).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-0.5 bg-indigo-600/20 text-indigo-300 rounded-full border border-indigo-500/40 font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 2 && (
                <span className="text-xs px-2 py-0.5 bg-white/5 text-white/60 rounded-full border border-white/10">
                  +{project.techStack.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Desktop Buttons Only */}
          <div className="hidden md:flex gap-2 mt-3">
            <a
              href={project.liveLink}
              className="flex-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-1"
            >
              <EyeIcon className="w-3 h-3" />
              <span>View</span>
            </a>
            <a
              href={project.githubLink}
              className="flex-1 px-3 py-1.5 border border-white/30 hover:border-indigo-500 hover:bg-indigo-500/10 text-white text-xs font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-1"
            >
              <CodeBracketIcon className="w-3 h-3" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile View Button removed - only featured button shows on mobile */}
    </div>
  );
};

const ProjectSection = () => {
  const [featuredProjects, setFeaturedProjects] = useState([1, 2, 3]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: headerRef, revealed: headerRevealed } = useReveal({
    threshold: 0.1,
  });

  // Load featured projects from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("featuredProjects");
      if (saved) {
        try {
          setFeaturedProjects(JSON.parse(saved));
        } catch {
          setFeaturedProjects([1, 2, 3]); // Default fallback
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Listen for localStorage changes (untuk sync antar tab)
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem("featuredProjects");
      if (saved) {
        try {
          setFeaturedProjects(JSON.parse(saved));
        } catch {
          setFeaturedProjects([1, 2, 3]);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Filter projects yang di-mark sebagai featured - hanya ambil 3 project
  const displayProjects = ALL_PROJECTS.filter((p) =>
    featuredProjects.includes(p.id),
  ).slice(0, 3);

  return (
    <section
      suppressHydrationWarning
      id="projects"
      className="py-20 sm:py-28 md:py-40 bg-black"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            headerRevealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
            Projects
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-indigo-500 to-transparent"></div>
            <p className="text-indigo-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Case
            </p>
          </div>
          <p className="text-white/60 text-sm sm:text-base mt-4 max-w-2xl">
            Explore my recent work where I combined design thinking with modern
            technologies to create impactful solutions.
          </p>
        </div>

        {/* Projects Grid - 3 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {displayProjects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard project={project} index={index} isFeatured={false} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center transition-all duration-700 opacity-100 translate-y-0">
          <p className="text-white/70 text-sm sm:text-base mb-4">
            Want to see all my work?
          </p>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View All Projects
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
