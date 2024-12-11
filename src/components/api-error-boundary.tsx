"use client"

import { Component, ErrorInfo, ReactNode } from "react"
import { APIError } from "@/lib/api-error"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class APIErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("API Error:", error, errorInfo)
  }

  private isAPIError(error: Error): error is APIError {
    return error instanceof APIError
  }

  private getErrorMessage(error: Error): string {
    if (this.isAPIError(error)) {
      switch (error.statusCode) {
        case 401:
          return "Please log in to continue"
        case 403:
          return "You don't have permission to access this resource"
        case 404:
          return "The requested resource was not found"
        case 500:
          return "An internal server error occurred"
        default:
          return error.message
      }
    }
    return "An unexpected error occurred"
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-destructive/10 text-destructive"
        >
          <h3 className="font-semibold mb-2">Error</h3>
          <p className="text-sm mb-4">
            {this.state.error && this.getErrorMessage(this.state.error)}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </Button>
        </motion.div>
      )
    }

    return this.props.children
  }
} 