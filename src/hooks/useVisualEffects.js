import { useEffect } from "react";

export default function useVisualEffects(containerRef, progressRef, pageKey) {
  useEffect(() => {
    const container = containerRef.current;
    const progress = progressRef.current;
    if (!container || !progress) return;

    const motion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    let scrollFrame = 0;
    let pointerFrame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const distance =
          document.documentElement.scrollHeight - window.innerHeight;
        const fraction =
          distance > 0
            ? Math.min(1, Math.max(0, window.scrollY / distance))
            : 0;
        progress.style.transform = `scaleX(${fraction})`;
      });
    };
    const updateSpotlight = (event) => {
      if (motion?.matches || event.pointerType !== "mouse") return;
      const card = event.target.closest(".hero, .skill-card, .project-card");
      if (!card) return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty(
          "--pointer-x",
          `${event.clientX - bounds.left}px`,
        );
        card.style.setProperty(
          "--pointer-y",
          `${event.clientY - bounds.top}px`,
        );
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    container.addEventListener("pointermove", updateSpotlight, {
      passive: true,
    });
    const resizeObserver = window.ResizeObserver
      ? new ResizeObserver(updateProgress)
      : null;
    resizeObserver?.observe(container);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      container.removeEventListener("pointermove", updateSpotlight);
      resizeObserver?.disconnect();
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(pointerFrame);
    };
  }, [containerRef, progressRef, pageKey]);
}
