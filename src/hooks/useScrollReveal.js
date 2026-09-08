import { useEffect } from "react";

export default function useScrollReveal(containerRef, pageKey) {
  useEffect(() => {
    if (!window.IntersectionObserver || !window.matchMedia) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const animations = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          if (motion.matches || !entry.target.animate) return;
          const animation = entry.target.animate(
            [
              { opacity: 0.3, transform: "translateY(38px) scale(0.97)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 850,
              delay: Math.min(index, 3) * 90,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      },
      { threshold: 0.08 },
    );

    containerRef.current
      ?.querySelectorAll(
        ".info-section, .skill-card, .education-card, .project-card",
      )
      .forEach((element) => observer.observe(element));

    const stopAnimations = () => {
      if (!motion.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    motion.addEventListener("change", stopAnimations);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", stopAnimations);
      animations.forEach((animation) => animation.cancel());
    };
  }, [containerRef, pageKey]);
}
