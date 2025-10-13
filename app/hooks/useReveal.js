"use client";
import { useEffect, useRef, useState } from "react";

// Simple hook: returns ref and `revealed` boolean. When element enters viewport,
// it sets revealed=true and disconnects the observer (once:true behavior).
export default function useReveal({
  root = null,
  rootMargin = "0px",
  threshold = 0.12,
} = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref.current]);

  return { ref, revealed };
}
