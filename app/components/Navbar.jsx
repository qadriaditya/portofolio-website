"use client";
import Link from "next/link";
import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = ({ onToggleAbout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref: navRef, revealed: navRevealed } = useReveal({ threshold: 0 });
  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  return (
    <nav
      ref={navRef}
      className={`sticky top-4 left-0 right-0 z-40 px-4 transition-transform duration-500 ${
        navRevealed ? "anim-slide-down" : "-translate-y-6 opacity-0"
      }`}
    >
      <div className="max-w-full md:max-w-xl mx-auto bg-white md:backdrop-blur-sm md:rounded-full md:shadow-xl">
        <div className="flex items-center justify-between px-4 md:px-8 py-2 md:py-3">
          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {leftLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={(e) => {
                  // if About link, call toggle instead of default jump
                  if (link.title === "About") {
                    e.preventDefault();
                    if (typeof onToggleAbout === "function") onToggleAbout();
                  }
                }}
                className="text-black/70 hover:text-green-800 transition-colors text-base"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link
            href={"/"}
            className="flex items-center justify-center w-10 h-10 bg-black rounded-full text-white font-bold text-lg"
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
              className="flex items-center px-3 py-2 text-black"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-black/10">
            <ul className="flex flex-col items-center p-4 space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.title === "About") {
                      e.preventDefault();
                      if (typeof onToggleAbout === "function") onToggleAbout();
                    }
                  }}
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
