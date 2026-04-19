"use client"

import React, { useRef, useState } from "react"
import { motion, useSpring, useMotionTemplate } from "framer-motion"

export function Spotlight({ 
  children, 
  className = "", 
  color = "rgba(212, 175, 55, 0.15)"
}: { 
  children: React.ReactNode, 
  className?: string,
  color?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const springConfig = { stiffness: 300, damping: 30 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  function move(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const { left, top } = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={(e) => {
        setIsHovered(true)
        move(e)
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity: isHovered ? 0 : 0.4,
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
