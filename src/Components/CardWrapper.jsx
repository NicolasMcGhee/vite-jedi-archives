import FadeIn from "./Blocks/FadeIn";
import "./CardWrapper.css";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";

export default function CardWrapper({ children, Title }) {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: false });

  return (
    <FadeIn>
      <h1 style={{textAlign: "center", paddingBottom: "2rem", fontSize: "4rem"}}>{Title}</h1>
      <motion.section
        className="CardWrapper_Container"
        ref={ref}
        // initial={{ opacity: 0 }}
        style={{
          gap: IsInView ? "4rem" : "0",
          transition: "1s gap",
        }}
      >
        {children}
      </motion.section>
    </FadeIn>
  );
}
