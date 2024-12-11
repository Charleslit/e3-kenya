import { NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin")
    const isAuthRoute = req.nextUrl.pathname.startsWith("/admin/auth")
    const token = req.nextauth.token

    if (isAdminRoute && !isAuthRoute && !token) {
      return NextResponse.redirect(new URL("/admin/auth/login", req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ["/admin/:path*"],
} 