"use client"

import React from "react"
import { cn } from "./utils"

interface OrbProps {
  dimension?: string
  className?: string
  tones?: {
    base?: string
    accent1?: string
    accent2?: string
    accent3?: string
  }
  spinDuration?: number
  children?: React.ReactNode
}

export const ColorOrb: React.FC<OrbProps> = ({
  dimension = "192px",
  className,
  tones,
  spinDuration = 20,
  children,
}) => {
  const fallbackTones = {
    base: "#0B3668",
    accent1: "#1a5a9a",
    accent2: "#0B3668",
    accent3: "#1a5a9a",
  }

  const palette = { ...fallbackTones, ...tones }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes orb-rotate {
            to {
              transform: rotate(360deg);
            }
          }
        `
      }} />
      <div
        className={cn("relative overflow-hidden rounded-full", className)}
        style={{
          width: dimension,
          height: dimension,
          background: palette.base,
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(
              from 0deg,
              ${palette.base} 0deg,
              ${palette.accent1} 90deg,
              ${palette.base} 180deg,
              ${palette.accent1} 270deg,
              ${palette.base} 360deg
            )`,
            filter: 'blur(12px)',
            animation: `orb-rotate ${spinDuration}s linear infinite`,
            transform: 'translateZ(0)',
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(
              circle at 30% 30%,
              ${palette.accent1} 0%,
              transparent 50%
            )`,
            opacity: 0.6,
          }}
        />
        
        {children && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
            {children}
          </div>
        )}
      </div>
    </>
  )
}
