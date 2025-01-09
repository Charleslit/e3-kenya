"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { href: "/", label: "Sisterherd Strong" },
  { href: "/initiatives", label: "Herd Initiatives" },
  { href: "/board", label: "Meet the Herd" },
  { href: "/help", label: "Help Us Make Tracks" },
  { href: "/chronicles", label: "Herd Chronicles" },
] as const

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="container flex h-16 items-center">
        <Link 
          href="/donate" 
          className="group relative flex items-center"
        >
          <div className="relative h-12 w-12 overflow-visible">
            <Image
              src="/images/logo/elephant-logo.svg"
              alt="E3 Kenya Logo"
              fill
              className="object-contain transition-transform group-hover:scale-110"
            />
            <div className="absolute -inset-1 animate-ping rounded-full border-2 border-primary opacity-0 group-hover:opacity-75" />
          </div>
          <div className="ml-3 flex flex-col">
            <span className="text-lg font-bold text-primary">E3 Kenya</span>
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-medium text-muted-foreground"
            >
              Click to Donate
            </motion.span>
          </div>
        </Link>

        <nav className="mx-6 flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}