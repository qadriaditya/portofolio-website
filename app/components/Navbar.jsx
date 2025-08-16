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
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center mx-auto pt-4 px-6 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white mr-auto">
          ---
        </Link>
        {/* Desktop Menu */}
        <div className="Menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mr-10">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.path} title={link.title} />
            ))}
          </ul>
        </div>
        <div className="mobile-menu block md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {isOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden w-full bg-[#121212] absolute left-0 top-full z-20">
            <ul className="flex flex-col items-center justify-center p-4 space-y-4">
              {navLinks.map((link, index) => (
                <NavLink key={index} href={link.path} title={link.title} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
