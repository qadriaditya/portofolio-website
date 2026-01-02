"use client";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const [displayKey, setDisplayKey] = useState(pathname);
  const [state, setState] = useState("enter");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pathname !== displayKey) {
      // start loading animation
      setIsLoading(true);
      setState("exit");

      const t = setTimeout(() => {
        setDisplayKey(pathname);
        setState("enter");
        setIsLoading(false);
      }, 600); // reduced from 800ms for faster transitions

      return () => clearTimeout(t);
    }
  }, [pathname, displayKey]);

  return (
    <>
      {/* Loading Overlay with Logo Animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo - optimized */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div
                className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center"
                style={{
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              >
                <span className="text-4xl font-bold text-black">A</span>
              </div>
            </div>

            {/* Loading Text with Animated Dots */}
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
      <div className={`page-transition ${state}`} key={displayKey}>
        {children}
      </div>
    </>
  );
}
