"use client";
import React from "react";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import ServicesSection from "./ServicesSection";
import DeveloperSection from "./DeveloperSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function MainContentClient() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12">
        <HeroSection />
        <ProjectSection />
        <ServicesSection />
        <DeveloperSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
