"use client";
import React from "react";

const Logo = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div
      className={`${sizes[size]} ${className} bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg`}
    >
      <span className="text-xs sm:text-sm lg:text-base">QA</span>
    </div>
  );
};

export default Logo;
