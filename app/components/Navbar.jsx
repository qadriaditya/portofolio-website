"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 px-2 sm:px-4 py-4 sm:py-6">
      <div className="w-full md:max-w-xl mx-auto bg-white md:backdrop-blur-sm md:rounded-full md:shadow-xl px-0">
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 py-2 md:py-3">
          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {leftLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-black/70 hover:text-green-800 transition-colors text-base"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link
            href={"/"}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full text-white font-bold text-sm sm:text-lg"
          >
            <span className="text-white">A</span>
          </Link>

          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {rightLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-black/70 hover:text-green-800 transition-colors text-base"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-2 sm:px-3 py-2 text-black"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <XMarkIcon className="h-5 sm:h-6 w-5 sm:w-6" />
              ) : (
                <Bars3Icon className="h-5 sm:h-6 w-5 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isClient && isOpen && (
          <div className="md:hidden border-t border-black/10">
            <ul className="flex flex-col items-center p-4 space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:text-green-800 border-b-green-800 transition-colors text-sm font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
