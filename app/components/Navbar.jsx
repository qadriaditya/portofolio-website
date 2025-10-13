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
    <nav className="sticky top-0 left-0 right-0 z-40 bg-black shadow-sm">
      <div className="flex items-center mx-auto px-6 py-3">
        <Link
          href={"/"}
          className="text-xl md:text-4xl text-white font-bold mr-auto"
        >
          A
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
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-primary hover:text-primary-700 hover:border-slate-300"
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
          <div className="md:hidden w-full bg-white absolute left-0 top-full z-20 shadow-md">
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
