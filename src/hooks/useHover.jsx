import { useEffect } from "react";
import gsap from "gsap";

//This hook only to login page

export function useHover(ref) {
  useEffect(() => {
    const hover = ref.current;

    hover.addEventListener("mousemove", () => {
      gsap.to(hover, {
        opacity: 0.8,
      });
    });

    hover.addEventListener("mouseleave", () => {
      gsap.to(hover, {
        opacity: 1,
      });
    });
  }, []);
}

