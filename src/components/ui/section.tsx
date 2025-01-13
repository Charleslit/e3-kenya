import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"
import { theme } from "@/lib/theme"

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  className?: string
  container?: boolean
}

export function Section({ 
  children, 
  className,
  container = true,
  ...props 
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(theme.spacing.section, className)}
      {...props}
    >
      {container ? (
        <div className={theme.spacing.container}>
          {children}
        </div>
      ) : children}
    </motion.section>
  )
} 