"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const { isDark, isMounted } = useTheme();

  useEffect(() => {
    // Show splash screen for 3 seconds
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
      // Hide after fade out animation
      setTimeout(() => {
        setIsVisible(false);
      }, 600);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center transition-opacity duration-600 ${
        isAnimatingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Main Logo Animation */}
        <div className="relative">
          {/* Outer Ring */}
          <div
            className="absolute inset-0 border-2 border-transparent rounded-full animate-spin"
            style={{
              width: "120px",
              height: "120px",
              marginLeft: "-60px",
              marginTop: "-60px",
              borderTopColor: isDark ? "#4f46e5" : "#4f46e5",
              borderRightColor: isDark ? "#a855f7" : "#9333ea",
            }}
          ></div>

          {/* Middle Ring */}
          <div
            className="absolute inset-0 border-2 border-transparent rounded-full animate-spin"
            style={{
              width: "100px",
              height: "100px",
              marginLeft: "-50px",
              marginTop: "-50px",
              animationDirection: "reverse",
              animationDuration: "3s",
              borderBottomColor: isDark ? "#4f46e5" : "#4f46e5",
              borderLeftColor: isDark ? "#a855f7" : "#9333ea",
            }}
          ></div>

          {/* Logo */}
          <div
            className="relative w-24 h-24 rounded-full flex items-center justify-center animate-bounce shadow-lg"
            style={{
              background: isDark
                ? "linear-gradient(to bottom right, #4f46e5, #a855f7)"
                : "linear-gradient(to bottom right, #4f46e5, #9333ea)",
              boxShadow: isDark
                ? "0 20px 25px -5px rgba(79, 70, 229, 0.5)"
                : "0 20px 25px -5px rgba(79, 70, 229, 0.4)",
            }}
          >
            <span className="text-5xl font-bold text-white">A</span>
          </div>
        </div>

        {/* Text Animation */}
        <div className="text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-up"
            style={{ color: "var(--foreground)" }}
          >
            Qadri Aditya
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg animate-fade-up animation-delay-300"
            style={{ color: "var(--foreground)" }}
          >
            Front-end Developer & UI/UX Designer
          </p>
        </div>

        {/* Loading Progress */}
        <div
          className="w-48 h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--foreground)", opacity: 0.2 }}
        >
          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-progress"></div>
        </div>

        {/* Loading Text */}
        <p
          className="text-xs sm:text-sm tracking-widest uppercase animate-pulse"
          style={{ color: "var(--foreground)", opacity: 0.6 }}
        >
          Loading...
        </p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animate-progress {
          animation: progress 2.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
