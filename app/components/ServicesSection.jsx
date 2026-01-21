"use client";
import useReveal from "../hooks/useReveal";

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Web Development",
    description:
      "Building modern, fast, and scalable web applications with React, Next.js, and cutting-edge technologies.",
    features: ["React & Next.js", "Responsive Design", "Performance Optimized"],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21A4 4 0 015 5c11-1 3-7 8-7s-1 6 8 7a4 4 0 11-8 18z"
        />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Creating beautiful and intuitive user interfaces that provide excellent user experience and drive engagement.",
    features: ["User Research", "Wireframing", "Visual Design"],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
    title: "Brand Design",
    description:
      "Developing comprehensive brand identities including logos, color schemes, and design systems.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
];

const ServicesSection = () => {
  const { ref, revealed } = useReveal({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Section Header */}
        <div
          ref={ref}
          className={`mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
            Services I Offer
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-green-500 to-transparent"></div>
            <p className="text-green-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              What I Can Do
            </p>
          </div>
          <p className="text-white/70 text-base sm:text-lg mt-2 sm:mt-3 max-w-2xl">
            I provide end-to-end solutions for your digital needs, from concept
            to launch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10 hover:border-green-500/50 group transition-all duration-700 hover:shadow-lg hover:shadow-green-500/10 ${
                revealed
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="p-3 bg-green-500/10 rounded-lg text-green-400 mb-4 group-hover:bg-green-500/20 transition-colors w-fit">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-white/60 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
