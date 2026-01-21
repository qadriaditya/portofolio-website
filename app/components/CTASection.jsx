"use client";
import useReveal from "../hooks/useReveal";
import Link from "next/link";

const CTASection = () => {
  const { ref, revealed } = useReveal({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* CTA Content */}
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-2xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-white/10 to-transparent border border-white/20 transition-all duration-700 ${
            revealed ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Ready to start your next project?
            </h2>
            <p className="text-white/70 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. Whether
              you have a specific project in mind or just want to explore
              possibilities, I'm here to help bring your ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
              >
                View My Work
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  24/7
                </div>
                <p className="text-white/60 text-xs sm:text-sm">
                  Response Time
                </p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  100%
                </div>
                <p className="text-white/60 text-xs sm:text-sm">Satisfaction</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  15+
                </div>
                <p className="text-white/60 text-xs sm:text-sm">
                  Projects Done
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
