"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomScrollBar() {
  const progress = useMotionValue(0);
  const scaleX = useSpring(progress, {
    stiffness: 140,
    damping: 35,
    mass: 0.2,
  });

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const value = height > 0 ? scrollTop / height : 0;
      progress.set(value);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [progress]);

  return (
    <div className="scroll-bar-custom">
      <div className="scroll-bar">
        <motion.div
          className="scroll-value"
          style={{
            scaleX,
            transformOrigin: "0%",
          }}
        />
      </div>
    </div>
  );
}
