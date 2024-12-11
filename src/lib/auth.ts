import { DefaultSession, NextAuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"

interface UserExtensions {
  role: string
  permissions: string[]
}

declare module "next-auth" {
  interface DefaultUser {
    id: string
    role: string
    permissions: string[]
  }

  interface Session {
    users: DefaultSession["user"] & DefaultUser
  }
}

declare module "next-auth/jwt" {
  interface JWT extends UserExtensions {
    id: string
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/admin/auth/login",
    error: "/admin/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Early return if credentials are missing
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Validate admin credentials
        const isValidAdmin = 
          credentials.email === process.env.ADMIN_EMAIL &&
          await compare(credentials.password, process.env.ADMIN_PASSWORD_HASH ?? "")

        if (isValidAdmin) {
          return {
            id: "1",
            email: credentials.email,
            name: "Admin",
            role: "admin",
            permissions: ["manage_settings", "manage_content", "manage_users"]
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const allowedEmails = (process.env.ALLOWED_ADMIN_EMAILS ?? "").split(",")
        
        // Ensure email exists and is in allowed list
        if (!profile?.email || !allowedEmails.includes(profile.email)) {
          return false
        }
      }
      return true
    },

    async jwt({ token, user, account }) {
      if (user?.role) {
        token.id = user.id
        token.role = user.role
        token.permissions = user.permissions ?? []
      }

      if (account?.provider === "google") {
        token.role = "admin"
        token.permissions = ["manage_settings", "manage_content", "manage_users"]
      }

      return token as JWT
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id ?? ""
        session.user.role = token.role ?? "user"
        session.user.permissions = token.permissions ?? []
      }
      return session
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      
      // Allows callback URLs on the same origin
      const parsedUrl = new URL(url)
      if (parsedUrl.origin === baseUrl) return url
      
      return baseUrl
    }
  },
  events: {
    async signIn(message) {
      console.log(`User ${message.user.email} signed in via ${message.account?.provider}`)
    },
    async signOut(message) {
      console.log(`User ${message.session?.user?.email} signed out`)
    },
  },
}