import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 mt-12">
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
