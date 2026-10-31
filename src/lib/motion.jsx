import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/**
 * Runs GSAP setup scoped to a section; skipped entirely under reduced motion.
 * Setup receives gsap, ScrollTrigger and whether the viewport is desktop-sized.
 */
export function useScrollScene(ref, setup) {
  useEffect(() => {
    if (!ref.current) return;
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (c) => {
          if (c.conditions?.reduced) return;
          setup({ gsap, ScrollTrigger, desktop: Boolean(c.conditions?.desktop) });
        },
      );
    }, ref);
    return () => {
      mm.revert();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
