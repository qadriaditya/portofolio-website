import React from "react";
import useReveal from "../hooks/useReveal";

const Footer = () => {
  const { ref, revealed } = useReveal({ threshold: 0.05 });

  return (
    <footer
      ref={ref}
      className={`w-full bg-white border-t border-gray-100 py-8 mt-12 transition-all duration-700 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="w-full mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Qadri Aditya. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/qadriaditya"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/qadri-aditya-hadi-ramadhan-177763355/"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
