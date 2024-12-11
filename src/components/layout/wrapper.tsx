"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type BaseWrapperProps = {
  children: React.ReactNode
  container?: boolean
  animate?: boolean
  pattern?: "herd" | "elephant" | "none"
}

type MotionWrapperProps = BaseWrapperProps & HTMLMotionProps<"div">
type StaticWrapperProps = BaseWrapperProps & React.HTMLAttributes<HTMLDivElement>

type WrapperProps = MotionWrapperProps | StaticWrapperProps

export function Wrapper({ 
  children, 
  container = true, 
  animate = true,
  pattern = "none",
  className,
  ...props 
}: WrapperProps) {
  const commonClasses = cn(
    "relative",
    container && "container py-24",
    pattern === "herd" && "bg-[url('/patterns/herd.svg')] bg-repeat-x bg-bottom",
    pattern === "elephant" && "bg-[url('/patterns/elephant.svg')] bg-no-repeat bg-right-bottom",
    className
  )

  if (!animate) {
    // Type assertion to handle static props
    const staticProps = props as React.HTMLAttributes<HTMLDivElement>
    return (
      <div
        className={commonClasses}
        {...staticProps}
      >
        {children}
      </div>
    )
  }
  
  // Type assertion to handle motion props
  const motionProps = props as HTMLMotionProps<"div">
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={commonClasses}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
} 