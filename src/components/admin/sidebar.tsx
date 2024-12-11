"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  DollarSign,
  Settings,
  LogOut
} from "lucide-react"
import { cn } from "@/lib/utils"
import { signOut } from "next-auth/react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard
  },
  {
    title: "Volunteers",
    href: "/admin/volunteers",
    icon: Users
  },
  {
    title: "Board Members",
    href: "/admin/board-members",
    icon: Users
  },
  {
    title: "Initiatives",
    href: "/admin/initiatives",
    icon: FileText
  },
  {
    title: "Donations",
    href: "/admin/donations",
    icon: DollarSign
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings
  }
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 min-h-screen bg-muted/50 border-r">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <Link href="/admin" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Admin</span>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={() => signOut({ callbackUrl: "/admin/auth/login" })}
            className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg hover:bg-muted transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </aside>
  )
} 