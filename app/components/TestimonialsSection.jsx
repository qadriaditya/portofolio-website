"use client";
import React from "react";
import useReveal from "../hooks/useReveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Startup",
    text: "Working with Qadri was amazing. The attention to detail and creative solutions exceeded our expectations. Highly recommended!",
    image: "/images/hero-image.png",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "Design Agency",
    text: "Qadri's frontend skills combined with UI/UX expertise made our project stand out. Very professional and reliable.",
    image: "/images/hero-image.png",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "E-commerce Business",
    text: "The website redesign brought a 40% increase in user engagement. Qadri understood our vision perfectly.",
    image: "/images/hero-image.png",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
            Client Testimonials
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-green-500 to-transparent"></div>
            <p className="text-green-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              What Clients Say
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-700 ${
                revealed
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/80 text-sm sm:text-base mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
