import React, { useEffect, useRef, useState } from "react";

const GRAPHIC_DESIGNS = [
  {
    image: "/images/ProjectCard/LouismartineWebsite.png",
  },
  {
    image: "/images/ProjectCard/LouisMartineDashboard.png",
  },
  {
    image: "/images/hero-image.png",
  },
  {
    image: "/images/ProjectCard/PortfolioRedesign.png",
  },
  {
    image: "/images/ProjectCard/LouismartineWebsite.png",
  },
  {
    image: "/images/ProjectCard/LouisMartineDashboard.png",
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
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 md:py-40 bg-black"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Section Header - Graphic Design */}
        <div
          className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
            Work & Projects
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-green-500 to-transparent"></div>
            <p className="text-green-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Graphic Design
            </p>
          </div>
        </div>

        {/* Graphic Design Gallery - Images Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {GRAPHIC_DESIGNS.slice(0, 4).map((design, index) => (
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
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-square bg-slate-900">
                <img
                  src={design.image}
                  alt={`Graphic Design ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
