"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsLoading(true);

    // Simulate loading time
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <>
      {/* Loading Overlay with Logo Animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center animate-bounce">
                <span className="text-4xl font-bold text-black">A</span>
              </div>
            </div>

            {/* Loading Text */}
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-medium">Loading</span>
              <div className="flex gap-1">
                <div
                  className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Content with Fade Animation */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {displayChildren}
      </div>
    </>
  );
};

export default PageTransition;
