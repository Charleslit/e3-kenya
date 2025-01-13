"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

const logoButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        image: "border-2 border-primary text-primary-foreground hover:border-primary/80",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4",
        lg: "h-14 px-8",
        icon: "h-12 w-12",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
      },
      imagePlacement: {
        overlay: "relative",
        left: "pl-12",
        right: "pr-12",
        background: "relative",
      },
      objectFit: {
        fill: "",
        contain: "",
        cover: "",
      },
      textStyle: {
        default: "text-white",
        shadow: "text-white text-shadow-lg",
        outline: "text-white text-stroke",
        glow: "text-white text-glow",
        contrast: "text-white mix-blend-difference",
        overlay: "text-white bg-black/40 px-3 py-1 rounded",
      },
      focusStyle: {
        ring: "focus:ring-2 focus:ring-primary focus:ring-offset-2",
        outline: "focus:outline-2 focus:outline-primary",
        glow: "focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 focus:ring-offset-primary/10",
        none: "",
      },
      sizeTransition: {
        smooth: "transition-all duration-200",
        none: "",
      },
      loadingStyle: {
        fade: "opacity-75",
        blur: "blur-[1px]",
        none: "",
      }
    },
    defaultVariants: {
      variant: "image",
      size: "default",
      rounded: "full",
      imagePlacement: "background",
      objectFit: "cover",
      textStyle: "shadow",
      focusStyle: "ring",
      sizeTransition: "smooth",
      loadingStyle: "fade",
    },
  }
)

export interface LogoButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>,
    VariantProps<typeof logoButtonVariants> {
  asChild?: boolean
  src?: string
  alt?: string
  hideImage?: boolean
  imageQuality?: number
  imageOpacity?: number
  href?: string | { index: string }
  external?: boolean
  darkOverlay?: boolean
  textGlow?: boolean
  customTextStyles?: string
  isLoading?: boolean
  loadingText?: string
  spinner?: React.ReactNode
  motionConfig?: {
    hover?: boolean
    tap?: boolean
    gradient?: boolean
    scale?: number
    loading?: {
      animate?: boolean
      duration?: number
    }
  }
  children: React.ReactNode
}

const MotionButton = motion.button
const MotionLink = motion(Link)
const MotionAnchor = motion.a

const LogoButton = React.forwardRef<HTMLButtonElement, LogoButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    rounded,
    imagePlacement = "background",
    objectFit = "cover",
    textStyle = "shadow",
    focusStyle = "ring",
    sizeTransition = "smooth",
    loadingStyle = "fade",
    src = "/images/logo/0.jpg",
    alt = "Logo",
    hideImage = false,
    imageQuality = 75,
    imageOpacity = 1,
    href,
    external,
    darkOverlay = false,
    textGlow = false,
    customTextStyles,
    isLoading = false,
    loadingText,
    spinner,
    motionConfig = {
      hover: true,
      tap: true,
      gradient: true,
      scale: 1.05,
      loading: {
        animate: true,
        duration: 2
      }
    },
    asChild = false, 
    children,
    disabled,
    ...props 
  }, ref) => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const Comp: any = href ? (external ? MotionAnchor : MotionLink) : asChild ? Slot : MotionButton

    const motionProps = React.useMemo(() => ({
      ...(motionConfig.hover && !isLoading && { 
        whileHover: { scale: motionConfig.scale || 1.05 } 
      }),
      ...(motionConfig.tap && !isLoading && { 
        whileTap: { scale: 0.95 } 
      }),
    }), [motionConfig, isLoading])

    const spinnerAnimation = React.useMemo(() => ({
      animate: isLoading && motionConfig.loading?.animate ? {
        rotate: 360
      } : {},
      transition: {
        duration: motionConfig.loading?.duration || 2,
        repeat: Infinity,
        ease: "linear"
      }
    }), [isLoading, motionConfig.loading])

    const defaultSpinner = (
      <motion.div {...spinnerAnimation}>
        <Loader2 className="h-4 w-4" />
      </motion.div>
    )

    const getHref = (href: string | { index: string }) => {
      if (typeof href === 'string') return href
      return href.index
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          logoButtonVariants({ 
            variant, 
            size, 
            rounded, 
            imagePlacement, 
            objectFit, 
            textStyle,
            focusStyle,
            sizeTransition,
            loadingStyle: isLoading ? loadingStyle : "none"
          }), 
          className
        )}
        {...(href && external ? {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
        } : href ? {
          href,
        } : {})}
        disabled={disabled || isLoading}
        {...motionProps}
        {...props}
      >
        {darkOverlay && (
          <div className="absolute inset-0 bg-black/40 z-[1]" />
        )}
        
        {!hideImage && src && (
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? imageOpacity : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className={cn(
                objectFit === "contain" && "object-contain",
                objectFit === "cover" && "object-cover",
                objectFit === "fill" && "object-fill",
                rounded === 'full' && "rounded-full"
              )}
              quality={imageQuality}
              onLoadingComplete={() => setIsLoaded(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>
        )}
        
        <motion.span 
          className={cn(
            "relative flex items-center gap-2",
            "z-10",
            motionConfig.hover && "transition-transform duration-200",
            textGlow && "text-glow",
            customTextStyles,
          )}
          initial={{ y: 0 }}
          whileHover={motionConfig.hover && !isLoading ? { y: -2 } : undefined}
        >
          {isLoading ? (
            <>
              {spinner || defaultSpinner}
              {loadingText || children}
            </>
          ) : (
            children
          )}
        </motion.span>

        {motionConfig.gradient && (
          <>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute inset-0 bg-white/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: isLoading ? 0 : 1, opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: rounded === 'full' ? '100%' : undefined }}
            />
          </>
        )}
      </Comp>
    )
  }
)

LogoButton.displayName = "LogoButton"

export { LogoButton, logoButtonVariants }
