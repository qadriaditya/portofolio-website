import React from "react";
import ProjectCard from "./ProjectCard";

const SAMPLE_PROJECTS = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    image: "/images/project/portfolio.png",
    tags: ["Next.js", "Tailwind", "React"],
    link: "#",
    year: "2025",
  },
  {
    title: "Task Manager App",
    description: "Full-stack app with authentication and REST API.",
    image: "/images/project/task.png",
    tags: ["Node.js", "Express", "Postgres"],
    link: "#",
    year: "2024",
  },
  {
    title: "Design System",
    description: "Reusable component library and token system.",
    image: "/images/project/design.png",
    tags: ["React", "Storybook"],
    link: "#",
    year: "2023",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4 anim-slide-up">Projects</h2>
        <p className="text-[#ADB7BE] mb-8 anim-fade-in">Selected projects showcasing skills in frontend, backend and design.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;