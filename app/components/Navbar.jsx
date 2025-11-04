"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const leftLinks = navLinks.slice(0, 2); // Home, About
  const rightLinks = navLinks.slice(2); // Projects, Contact

  return (
    <nav className="sticky top-4 left-0 right-0 z-40 px-4">
      <div className="max-w-xl mx-auto bg-white backdrop-blur-sm rounded-full shadow-xl">
        <div className="flex items-center justify-between px-8 py-3">
          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-13">
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
            className="flex items-center justify-center w-11 h-7 bg-black rounded-es-xl text-white font-bold text-lg"
          >
            <span className="text-white">A</span>
          </Link>

          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-13">
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
              className="flex items-center px-3 py-2 text-white"
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
          <div className="md:hidden border-t border-white/10">
            <ul className="flex flex-col items-center p-4 space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-black hover:text-green-800 border-b-green-800 transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
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
