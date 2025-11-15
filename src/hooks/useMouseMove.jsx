import gsap from "gsap";
import { useEffect } from "react";

export function useMouseMove(bodyRef) {
  useEffect(() => {
    const element = bodyRef.current;
    if (!element) return;
    function handleMouseMove(event) {
      const limit = 10;
      const centerY = window.innerHeight / 2;
      const centerX = window.innerWidth / 2;

      const y = event.clientY < centerY ? event.clientX : -event.clientX;

      const x = event.clientX < centerX ? event.clientY : -event.clientY;

      const limitX = Math.max(-limit, Math.min(limit, 0.2 * x));
      const limitY = Math.max(-limit, Math.min(limit, 0.2 * y));

      gsap.to(bodyRef.current, {
        x: limitX,
        y: limitY,
      });
    }
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [bodyRef]);
}
