import React from "react";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";


export default function Expand({children}) {
  return (
    <div>{children}</div>
  )
}
