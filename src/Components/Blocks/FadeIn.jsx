import React from "react";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";

export default function FadeIn({ children }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const animate = {
//     transition: { type: "tween" },
//     height: isVisible ? "auto" : 0,
//     opacity: open ? 1 : .5
//   };
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      // initial={{ opacity: 0 }}
      style={{
        opacity: IsInView ? "1" : "0",
        transition: "3s opacity",
      }}
    >
      {children}
    </motion.section>
  );
}
