"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const mainNavItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Initiatives",
    href: "/initiatives",
  },
  {
    title: "Meet the Herd",
    href: "/board",
  },
  {
    title: "Chronicles",
    href: "/chronicles",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex gap-6 items-center">
      {mainNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "relative text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {pathname === item.href && (
            <motion.div
              layoutId="activeNav"
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          {item.title}
        </Link>
      ))}
    </nav>
  )
} 