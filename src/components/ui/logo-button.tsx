"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion } from "framer-motion"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        image: "border-2 border-primary text-primary-foreground hover:border-primary/80",
      },
      size: {
        default: "h-12 px-6 py-3 rounded-full",
        sm: "h-10 px-4 rounded-full",
        lg: "h-14 px-8 rounded-full",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "image",
      size: "default",
    },
  }
)

export interface LogoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  hideImage?: boolean
  children?: React.ReactNode
}

const MotionButton = motion.button

const LogoButton = React.forwardRef<HTMLButtonElement, LogoButtonProps>(
  ({ className, variant, size, asChild = false, hideImage = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : MotionButton

    return (
      <Comp
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {!hideImage && (
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0.2 }}
            whileHover={{ opacity: 0.4 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/logo/0.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>
        )}
        <motion.span 
          className="relative z-10 flex items-center gap-2"
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-white/10"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ borderRadius: '100%' }}
        />
      </Comp>
    )
  }
)
LogoButton.displayName = "LogoButton"

export { LogoButton, buttonVariants }
