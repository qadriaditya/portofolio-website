"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="grid grid-cols-1 sm:grid-cols-12 w-full">
        <div className="col-span-5 flex justify-center items-center mb-10 lg:mt-0 order-first sm:order-none">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        <div className="col-span-7 flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-4 ml-10">
          <h1 className="text-white mb-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300">
              Hello, I'm
            </span>
            <br />
            <span className="mb-4 inline-block">
              <TypeAnimation
                sequence={[
                  "Aditya",
                  1000,
                  "Web Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 mt-10 lg:text-xl max-w-xl">
            I am an enthusiastic and passionate individual with a strong
            eagerness to learn and explore. I have a genuine curiosity for
            technology and problem-solving, which drives me to continuously
            improve my skills.
          </p>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-700 via-blue-900 to-blue-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-7 py-1.5">
                Download CV
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
