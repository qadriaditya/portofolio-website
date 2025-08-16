"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./atoms/TabButton";

const TAB_DATA = {
  skills: (
    <div className="text-left space-y-2 justify-between">
      <div>
        <span className="font-semibold">Bahasa Pemrograman:</span>
        <ul className="flex flex-wrap gap-4 mt-2">
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">JavaScript</li>
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">TypeScript</li>
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">PHP</li>
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">Python</li>
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">SQL</li>
        </ul>
      </div>
      <div>
        <span className="font-semibold">Teknologi &amp; Tools:</span>
        <ul className="flex flex-wrap gap-4 mt-2">
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">
            Frontend: React.js, Next.js, Vite
          </li>
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">
            Styling: Tailwind CSS, SCSS
          </li>
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">
            Backend: Node.js, Express
          </li>
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">
            Database: MySQL, MongoDB
          </li>
          <li className="bg-blue-900/40 px-4 py-2 rounded-lg">
            Tools: Git, GitHub, VS Code, Postman
          </li>
        </ul>
      </div>
    </div>
  ),
  education: (
    <div className="text-left space-y-2">
      <span className="font-semibold">Education:</span>
      <ul className="flex flex-wrap gap-4 mt-2">
        <li className="bg-blue-900/40 px-4 py-2 rounded-lg">
          S1 Teknik Informatika - Universitas Contoh
        </li>
        <li className="bg-blue-900/40 px-4 py-2 rounded-lg">
          Bootcamp Web Development - Coding Studio
        </li>
      </ul>
    </div>
  ),
  experience: (
    <div className="text-left space-y-2">
      <span className="font-semibold">Experience:</span>
      <ul className="flex flex-wrap gap-4 mt-2">
        <li className="bg-blue-900/40 px-4 py-2 rounded-lg">
          Frontend Developer - PT. Maju Mundur (2023 - Sekarang)
        </li>
        <li className="bg-blue-900/40 px-4 py-2 rounded-lg">
          Intern Web Developer - Startup XYZ (2022 - 2023)
        </li>
      </ul>
    </div>
  ),
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) => {
    setTab(id);
  };
  return (
    <section id="about" className="text-white mt-22">
      <div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px- xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Me"
        />
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base mlg:text-lg">
            I am an enthusiastic and passionate individual with a strong
            eagerness to learn and explore. I have a genuine curiosity for
            technology and problem-solving, which drives me to continuously
            improve my skills. My goal is to grow both personally and
            professionally by working in a dynamic environment where I can
            contribute meaningfully while gaining valuable experience. I believe
            in the power of collaboration, adaptability, and continuous
            learning.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA[tab]}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
