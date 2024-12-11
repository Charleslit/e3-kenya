"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { MobileNav } from "./navigation/mobile-nav"
import { routes } from "@/lib/routes"
import { mainNavItems } from "@/lib/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={routes.home} className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image
                src="/images/logo/0.jpg"
                alt="E3 Kenya Logo"
                fill
                className="object-contain"
              />
            </div>
            {/* <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Sisterherd Strong</span>
            </div> */}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <nav className="hidden md:flex gap-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <Link href={routes.donate}>
                <div className="flex items-center gap-2">
                  <div className="relative h-4 w-4">
                    <Image
                      src="/images/logo/0.jpg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  Donate Now
                </div>
              </Link>
            </Button>
            <ModeToggle />
          </div>

          <MobileNav />
        </motion.div>
      </div>
    </header>
  )
} 