"use client";
import React, { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";

const projects = [
  {
    id: 1,
    title: "Louismartine Website",
    category: "Web Development",
    subcategory: null,
    description:
      "A modern e-commerce website with stunning UI/UX design and seamless user experience.",
    image: "/images/ProjectCard/LouismartineWebsite.png",
    tags: ["React", "Next.js", "Tailwind CSS", "E-commerce"],
    link: "#",
    year: "2025",
    featured: true,
  },
  {
    id: 2,
    title: "Louis Martine Dashboard",
    category: "Web Development",
    subcategory: null,
    description:
      "Admin dashboard with analytics, data visualization, and intuitive navigation.",
    image: "/images/ProjectCard/LouisMartineDashboard.png",
    tags: ["Dashboard", "Analytics", "Figma", "React"],
    link: "#",
    year: "2025",
    featured: true,
  },
  {
    id: 3,
    title: "kedai Aroma",
    category: "Web Design",
    subcategory: null,
    description:
      "Modern static website with smooth animations and responsive design.",
    image: "/images/ProjectCard/KedaiAroma.png",
    tags: ["Static Web Design", "HTML", "Responsive", "CSS", "JavaScript"],
    link: "#",
    year: "2025",
    featured: true,
  },
  {
    id: 4,
    title: "Hero Image Project",
    category: "Graphic Design",
    subcategory: "Poster",
    description:
      "Creative visual design with modern aesthetics and brand identity.",
    image: "/images/hero-image.png",
    tags: ["Branding", "Visual Design", "Photoshop"],
    link: "#",
    year: "2023",
    featured: false,
  },
];

const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Web Design",
  "Graphic Design",
];

const graphicDesignSubcategories = [
  "All Graphic Design",
  "Poster",
  "Flyer",
  "Packaging",
  "Branding",
];

const ProjectsDetailPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] =
    useState("All Graphic Design");
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref: headerRef, revealed: headerRevealed } = useReveal({
    threshold: 0.1,
  });
  const { ref: projectsRef, revealed: projectsRevealed } = useReveal({
    threshold: 0.05,
  });

  // Load featured projects from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("featuredProjects");
      if (saved) {
        try {
          setFeaturedProjects(JSON.parse(saved));
        } catch {
          // Jika parse error, gunakan default
          setFeaturedProjects(
            projects.filter((p) => p.featured).map((p) => p.id)
          );
        }
      } else {
        // First time - gunakan default dari featured property
        setFeaturedProjects(
          projects.filter((p) => p.featured).map((p) => p.id)
        );
      }
      setIsLoaded(true);
    }
  }, []);

  const toggleFeatured = (projectId) => {
    setFeaturedProjects((prev) => {
      const updated = prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId];

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("featuredProjects", JSON.stringify(updated));
      }

      return updated;
    });
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : activeCategory === "Graphic Design"
      ? activeSubcategory === "All Graphic Design"
        ? projects.filter((p) => p.category === activeCategory)
        : projects.filter(
            (p) =>
              p.category === activeCategory &&
              p.subcategory === activeSubcategory
          )
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div
      suppressHydrationWarning
      className="min-h-screen bg-slate-950 py-20 sm:py-28"
    >
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
          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
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
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubcategory("All Graphic Design");
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white dark:bg-indigo-600 dark:text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Graphic Design Subcategory Filter */}
        {activeCategory === "Graphic Design" && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            {graphicDesignSubcategories.map((subcat) => (
              <button
                key={subcat}
                onClick={() => setActiveSubcategory(subcat)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeSubcategory === subcat
                    ? "bg-indigo-600 text-white dark:bg-indigo-600 dark:text-white"
                    : "bg-white/5 text-white/70 dark:bg-white/5 dark:text-white/70 hover:bg-white/10 dark:hover:bg-white/10"
                }`}
              >
                {subcat}
              </button>
            ))}
          </div>
        )}
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
              <div className="bg-slate-900 dark:bg-slate-900 border border-white/10 dark:border-white/10 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl dark:hover:shadow-indigo-500/20 dark:hover:border-indigo-500/30">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-indigo-600/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs sm:text-sm font-semibold">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 sm:p-6 lg:p-8 bg-slate-900">
                  <div className="mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm text-indigo-400 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs border border-indigo-500/40 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project & Featured Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-xs sm:text-sm font-semibold group/btn"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                    <button
                      onClick={() => toggleFeatured(project.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1 ${
                        featuredProjects.includes(project.id)
                          ? "bg-yellow-500/30 text-yellow-300 border border-yellow-500/50"
                          : "bg-white/10 text-white/60 border border-white/20 hover:bg-white/20 hover:text-white/80"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill={
                          featuredProjects.includes(project.id)
                            ? "currentColor"
                            : "none"
                        }
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              2+
            </div>
            <div className="text-white/60 text-sm sm:text-base">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              2+
            </div>
            <div className="text-white/60 text-sm sm:text-base">
              Happy Clients
            </div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              5+
            </div>
            <div className="text-white/60 text-sm sm:text-base">
              Month Experience
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
