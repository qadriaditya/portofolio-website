"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function MainContentClient({
  showAbout,
  onToggleAbout,
  setShowAbout,
}) {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container mx-auto px-6 py-8">
        <HeroSection onScrollDown={onToggleAbout} isAboutOpen={showAbout} />
        {showAbout && <AboutSection onClose={() => setShowAbout(false)} />}
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
