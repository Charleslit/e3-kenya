"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { mainNavItems } from "@/lib/navigation"
import { routes } from "@/lib/routes"
import { LogoButton } from "../shared/logobutton"

interface NavItem {
  href: string
  title: string
  subItems?: Array<{
    href: string
    title: string
  }>
}

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when clicking outside
  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest('.mobile-nav-container')) {
      setIsOpen(false)
    }
  }, [])

  // Add/remove event listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleClickOutside])

  const isActiveLink = (href: string) => 
    pathname === href || (pathname === "/" && href === "/")

  const renderNavItem = ({ href, title, subItems }: NavItem, index: number) => (
    <motion.li
      key={href}
      variants={itemVariants}
      custom={index}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className={`group flex items-center text-lg font-medium transition-all
          ${isActiveLink(href) ? "text-primary" : "text-muted-foreground"}
          ${title === "Sustain the Herd" ? "text-primary font-semibold" : ""}
        `}
      >
        <span className="relative">
          {title}
          <span className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full
            ${isActiveLink(href) ? "w-full" : ""}`}
          />
        </span>
      </Link>
      
      {subItems && (
        <ul className="ml-4 mt-2 space-y-2">
          {subItems.map((subItem) => (
            <li key={subItem.href}>
              <Link
                href={subItem.href}
                className={`block text-sm transition-colors hover:text-primary
                  ${isActiveLink(subItem.href) ? "text-primary" : "text-muted-foreground"}`}
                onClick={() => setIsOpen(false)}
              >
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </motion.li>
  )

  return (
    <div className="mobile-nav-container md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50 hover:bg-transparent"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b 
              bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <nav className="container py-4" aria-label="Mobile navigation">
              <ul className="space-y-4">
                {mainNavItems.map((item, index) => renderNavItem(item, index))}
                
                <motion.li
                  variants={itemVariants}
                  custom={mainNavItems.length}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2, delay: mainNavItems.length * 0.05 }}
                >
                  <LogoButton className="w-full" >
                    <Link href={routes.donate}>Donate Now</Link>
                  </LogoButton>
                </motion.li>
                
                <motion.li
                  variants={itemVariants}
                  custom={mainNavItems.length + 1}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2, delay: (mainNavItems.length + 1) * 0.05 }}
                  className="flex justify-center"
                >
                  <ModeToggle />
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}