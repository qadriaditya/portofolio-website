"use client";

import useReveal from "../hooks/useReveal";

const ProjectCard = ({ project }) => {
  const { ref, revealed } = useReveal({ threshold: 0.12 });

  return (
    <article
      ref={ref}
      className={`bg-transparent rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] ${
        revealed ? "anim-fade-in" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Square thumbnail */}
      <div className="flex justify-center">
        <div className="bg-black rounded-2xl w-full max-w-[360px] aspect-square flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
          {/* center icon: if project.icon === 'square' show square, else circle */}
          <div
            className={`bg-white ${
              project?.icon === "square"
                ? "w-12 h-12 rounded-sm"
                : "w-12 h-12 rounded-full"
            }`}
          />
        </div>
      </div>

      <div className="mt-4 px-1">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
          {project?.title || "Feature title."}
        </h3>
        <p className="text-sm text-muted text-white max-w-[28rem]">
          s
          {project?.description ||
            "This is a feature description spanning a couple of lines."}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
