"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { footerNavItems, routes } from "@/lib/routes"
import { Button } from "./ui/button"
import { SocialIcon } from "./ui/social-icon"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href={routes.home} className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo/elephant-logo.svg"
                  alt="E3 Kenya Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">E3 Kenya</span>
                <span className="text-xs text-muted-foreground">
                  Sisterherd Strong
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Encourage, Engage, Empower
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>123 Main Street</p>
              <p>Nairobi, Kenya</p>
              <p>
                Email:{" "}
                <a href="mailto:info@e3kenya.org" className="hover:text-primary">
                  info@e3kenya.org
                </a>
              </p>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Support Our Mission</h3>
            <Button asChild className="w-full">
              <Link href={routes.donate}>Donate Now</Link>
            </Button>
            <div className="flex gap-2">
              <SocialIcon type="twitter" href="https://twitter.com/e3kenya" />
              <SocialIcon
                type="linkedin"
                href="https://linkedin.com/company/e3kenya"
              />
              <SocialIcon type="email" href="mailto:info@e3kenya.org" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} E3 Kenya. All rights reserved.{" "}
            <span className="text-primary">Sisterherd Strong</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 