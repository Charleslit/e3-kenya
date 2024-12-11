"use client"

import { Component, ErrorInfo, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full"
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Oops! Something went wrong</h2>
              <p className="text-muted-foreground">
                We&apos;re sorry for the inconvenience. Please try refreshing the page.
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={() => window.location.reload()}>
                  Refresh Page
                </Button>
                <Button variant="outline" onClick={() => window.history.back()}>
                  Go Back
                </Button>
              </div>
              {process.env.NODE_ENV === "development" && (
                <div className="mt-8 text-left">
                  <p className="text-sm font-mono text-red-500">
                    {this.state.error?.toString()}
                  </p>
                  <pre className="mt-2 text-xs text-muted-foreground overflow-auto">
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
} 