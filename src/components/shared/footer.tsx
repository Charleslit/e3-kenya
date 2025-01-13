"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react'
import { LogoButton } from "./logobutton"
import { footerNavItems, routes } from "@/lib/routes"
import { Input } from "../ui/input"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/e3kenya", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/e3kenya", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/e3kenya", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/e3kenya", label: "Youtube" },
]

const footerLinks = [
  {
    title: "About",
    links: [
      { label: "Our Mission", href: "/mission" },
      { label: "Our Team", href: "/team" },
      { label: "Impact Stories", href: "/stories" },
      { label: "Annual Reports", href: "/reports" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Partner With Us", href: "/partner" },
      { label: "Join Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Press Kit", href: "/press" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link href={routes.home} className="inline-block">
              <Image
                src="/images/logo/logo.png"
                alt="E3 Kenya Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-md text-sm text-muted-foreground">
              Empowering communities through education, entrepreneurship, and environmental conservation in Kenya.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-t pt-8"
        >
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Stay updated with our latest news and impact stories.
              </p>
            </div>
            <div className="flex w-full max-w-md space-x-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <LogoButton variant="default" size="sm">
                Subscribe
              </LogoButton>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 border-t pt-8"
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} E3 Kenya. All rights reserved.{" "}
              <span className="text-primary">Sisterherd Strong</span>
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

