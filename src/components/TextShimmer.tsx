"use client"

import * as React from "react"
import { motion } from "motion/react"

interface TextShimmerProps {
  children: string
  className?: string
  duration?: number
}

export function TextShimmer({
  children,
  className = "",
  duration = 2,
}: TextShimmerProps) {
  return (
    <motion.span
      className={`text-[#0c3058] ${className}`}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  )
}