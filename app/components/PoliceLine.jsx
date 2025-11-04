import React from "react";

const PoliceLine = ({ text = "Next.js • React.js • Vite • Tailwind CSS • JavaScript • TypeScript •" }) => {
  return (
    // wrapper uses viewport-width trick so the strip becomes full-bleed
    <div
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
      }}
      className="overflow-hidden z-10"
    >
      <div className="bg-white py-2 border-t-4 border-b-4 border-black shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
        <div className="marquee py-2">
          <div className="marquee-track whitespace-nowrap font-extrabold text-black">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mx-6">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeHorizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          overflow: hidden;
        }
        .marquee-track {
          display: inline-block;
          animation: marqueeHorizontal 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PoliceLine;
