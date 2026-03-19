"use client" 

import * as React from "react"
import { motion } from "motion/react";
 
export function ShiningText({text}: {text: string}) {
  return (
    <motion.span
      className="bg-[linear-gradient(110deg,#0B3668,25%,#87CEEB,45%,#fff,50%,#87CEEB,55%,#0B3668,75%)] bg-[length:200%_100%] bg-clip-text font-['Rubik',_sans-serif] text-[16px] text-transparent"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
}
