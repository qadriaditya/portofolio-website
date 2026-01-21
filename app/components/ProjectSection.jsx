"use client";
import React, { useEffect, useRef, useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

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

const ProjectCard = ({ project, visible, index }) => {
  return (
    <div
      className={`group transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-slate-900 dark:bg-slate-900 border dark:border-white/10 border-gray-400 shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/150 dark:group-hover:bg-black/80 transition-colors duration-300"></div>

          {/* Overlay Details */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="mb-3">
                <p className="text-indigo-300 text-xs sm:text-sm font-semibold mb-2">
                  Role: {project.role}
                </p>
                <p className="text-white/70 text-xs mb-2">
                  <span className="font-semibold">Tech:</span>{" "}
                  {project.techStack.join(", ")}
                </p>
                <p className="text-green-400 text-xs font-semibold">
                  Outcome: {project.outcome}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 sm:gap-3">
              <a
                href={project.liveLink}
                className="flex-1 px-3 py-2 sm:py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <EyeIcon className="w-4 h-4" />
                View
              </a>
              <a
                href={project.githubLink}
                className="flex-1 px-3 py-2 sm:py-2.5 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <CodeBracketIcon className="w-4 h-4" />
                Details
              </a>
            </div>
          </div>
        </div>

        {/* Card Header (visible by default) */}
        <div className="p-4 sm:p-5 bg-black/40">
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.techStack.slice(0, 2).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-indigo-600/40 text-indigo-200 rounded"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 2 && (
              <span className="text-xs px-2 py-1 bg-white/10 text-white/60 rounded">
                +{project.techStack.length - 2} more
              </span>
            )}
          </div>
          <p className="text-white/60 text-xs sm:text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [featuredProjects, setFeaturedProjects] = useState([1, 2]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load featured projects from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("featuredProjects");
      if (saved) {
        try {
          setFeaturedProjects(JSON.parse(saved));
        } catch {
          setFeaturedProjects([1, 2]); // Default fallback
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
          setFeaturedProjects([1, 2]);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Filter projects yang di-mark sebagai featured
  const displayProjects = ALL_PROJECTS.filter((p) =>
    featuredProjects.includes(p.id)
  );

  return (
    <section
      suppressHydrationWarning
      id="projects"
      className="py-20 sm:py-28 md:py-40 bg-black dark:bg-black"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Section Header */}
        <div
          className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-indigo-500 to-transparent"></div>
            <p className="text-indigo-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Case Studies
            </p>
          </div>
          <p className="text-white/60 text-sm sm:text-base mt-4 max-w-2xl">
            Explore my recent work where I combined design thinking with modern
            technologies to create impactful solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              visible={visible}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-12 sm:mt-16 md:mt-20 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
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
