"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function MainContentClient() {
  const [showAbout, setShowAbout] = useState(false);

  const handleToggleAbout = () => {
    setShowAbout((prev) => {
      const next = !prev;
      if (next) {
        // show -> scroll to about after mount
        setTimeout(() => {
          const el = document.getElementById("about");
          if (el) {
            const nav =
              document.querySelector("nav") || document.querySelector("header");
            const navHeight = nav ? nav.getBoundingClientRect().height : 0;
            const offset = Math.max(navHeight, 0) + 8;
            const top =
              el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }, 60);
      } else {
        // hide -> scroll back to hero
        const hero = document.getElementById("home");
        if (hero) {
          const top = hero.getBoundingClientRect().top + window.scrollY - 8;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
      return next;
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container mx-auto px-6 py-8">
        <HeroSection onScrollDown={handleToggleAbout} isAboutOpen={showAbout} />
        {showAbout && <AboutSection onClose={() => setShowAbout(false)} />}
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
