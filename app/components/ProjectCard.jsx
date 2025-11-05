"use client";

import Image from "next/image";
import useReveal from "../hooks/useReveal";

const ProjectCard = ({ project }) => {
  const { ref, revealed } = useReveal({ threshold: 0.12 });

  return (
    <article
      ref={ref}
      className={`group relative rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] ${
        project?.gradient ? `bg-gradient-to-br ${project.gradient}` : "bg-white"
      } ${revealed ? "anim-fade-in" : "opacity-0 translate-y-6"}`}
    >
      {/* Image */}
      {project?.image && (
        <div className="relative w-full h-28 sm:h-32 md:h-40 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h3 className="text-black text-base sm:text-lg font-bold mb-2">
          {project?.title || "Project Title"}
        </h3>
        <p className="text-black/90 text-sm sm:text-sm leading-relaxed mb-3">
          {project?.description || "Project description goes here."}
        </p>

        {/* Tags */}
        {project?.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full border border-black/30 text-black/90 text-xs backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {project?.link && (
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-black text-sm font-medium hover:gap-3 transition-all"
          >
            View Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>

      {/* Decorative blur */}
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0" />
    </article>
  );
};

export default ProjectCard;
