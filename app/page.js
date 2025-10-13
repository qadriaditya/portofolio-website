import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Konten utama */}
      <main className="flex min-h-screen flex-col bg-black">
        <div className="container mx-auto px-6 py-8">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
