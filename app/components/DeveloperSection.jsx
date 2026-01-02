import React, { useEffect, useRef, useState } from "react";

const DEVELOPER_PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with cart and payments",
    image: "/images/ProjectCard/LouismartineWebsite.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Real-time task management with collaboration features",
    image: "/images/ProjectCard/LouisMartineDashboard.png",
    tags: ["Next.js", "Tailwind", "Firebase"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization and real-time analytics platform",
    image: "/images/hero-image.png",
    tags: ["React", "TypeScript", "Chart.js"],
    link: "#",
  },
  {
    title: "Social Media App",
    description: "Social platform with messaging and notifications",
    image: "/images/ProjectCard/PortfolioRedesign.png",
    tags: ["Next.js", "PostgreSQL", "Socket.io"],
    link: "#",
  },
  {
    title: "Content Management System",
    description: "Headless CMS with API-first architecture",
    image: "/images/ProjectCard/LouismartineWebsite.png",
    tags: ["Node.js", "Express", "GraphQL"],
    link: "#",
  },
  {
    title: "Weather Application",
    description: "Real-time weather data with location services",
    image: "/images/ProjectCard/LouisMartineDashboard.png",
    tags: ["React", "API Integration", "Tailwind"],
    link: "#",
  },
];

const DeveloperSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      id="developer-projects"
      className="py-20 sm:py-28 md:py-40 bg-black"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Section Header - Developer Work */}
        <div
          className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <p className="text-blue-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Developer Work
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Development Projects
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl">
            Showcase of web applications and development projects built with
            modern technologies.
          </p>
        </div>

        {/* Developer Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {DEVELOPER_PROJECTS.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <a
                href={project.link}
                className="block rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 group-hover:border-blue-500/50 transition-all duration-300 h-full hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden w-full h-40 sm:h-48 md:h-52 bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-500 transition-colors flex-1">
                      {project.title}
                    </h3>
                    <span className="text-blue-500/60 group-hover:text-blue-500 transition-colors text-xl">
                      →
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm sm:text-base mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 sm:mt-20 md:mt-28 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: "400ms",
          }}
        >
          <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent border border-blue-500/40 p-8 sm:p-12 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Interested in a
                  <br />
                  web project?
                </h3>
                <p className="text-white/60 text-sm sm:text-base md:text-lg">
                  Let's work together to build amazing digital experiences
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full md:w-auto">
                <a
                  href="#contact"
                  className="px-8 sm:px-10 py-4 sm:py-5 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-400 transition-all duration-300 text-base sm:text-lg hover:shadow-lg hover:shadow-blue-500/30 text-center"
                >
                  Start a Project
                </a>
                <a
                  href="#developer-projects"
                  className="px-8 sm:px-10 py-4 sm:py-5 rounded-lg border-2 border-blue-500/70 text-blue-500 font-bold hover:bg-blue-500/15 transition-all duration-300 text-base sm:text-lg hover:border-blue-500 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
