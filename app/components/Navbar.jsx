"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import Logo from "./atoms/Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects" },
  { title: "About Me", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.35 2-6.5 2-6.5z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const { isDark, toggleTheme, isMounted } = useTheme();

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <nav
      suppressHydrationWarning
      className="sticky top-0 z-50 px-2 sm:px-4 py-4 sm:py-6 bg-black"
    >
      <div
        suppressHydrationWarning
        className="w-full max-w-7xl mx-auto bg-gradient-to-r from-white/8 to-white/5 md:backdrop-blur-md md:rounded-2xl md:shadow-2xl px-0 border border-white/10"
      >
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 py-2 md:py-3">
          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {leftLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-white/80 hover:text-white transition-colors text-base font-medium hover:text-indigo-400"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Center Logo with Animation */}
          <Link
            href={"/"}
            className="flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
          >
            <Logo
              size="md"
              className="shadow-lg shadow-indigo-500/50 group-hover:shadow-indigo-500/70 transition-all duration-300"
            />
          </Link>

          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {rightLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-white/80 hover:text-white transition-colors text-base font-medium hover:text-indigo-400"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Desktop Actions - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 border-l border-white/10 pl-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <button
              suppressHydrationWarning
              onClick={toggleAvailability}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-white/80 hover:text-white transition-colors"
              title={isAvailable ? "Available for work" : "Not available"}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isAvailable ? "bg-green-500 animate-pulse" : "bg-red-500"
                }`}
              ></span>
              <span className="hidden sm:inline">
                {isAvailable ? "Available" : "Busy"}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              suppressHydrationWarning
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div
            suppressHydrationWarning
            className="md:hidden flex items-center gap-3"
          >
            <button
              suppressHydrationWarning
              onClick={toggleAvailability}
              className={`w-2 h-2 rounded-full ${
                isAvailable ? "bg-green-500 animate-pulse" : "bg-red-500"
              }`}
              title={isAvailable ? "Available" : "Busy"}
            ></button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-2 sm:px-3 py-2 text-white"
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
          <div className="md:hidden border-t border-white/10 bg-white/5">
            <ul className="flex flex-col items-center p-4 space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-indigo-400 transition-colors text-sm font-medium"
                >
                  {link.title}
                </Link>
              ))}
              <div className="border-t border-white/10 w-full my-2 pt-3 flex justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-indigo-400 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
