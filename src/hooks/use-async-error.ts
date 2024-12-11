import { useState, useCallback } from "react"

interface AsyncError {
  message: string
  code?: string
  details?: unknown
}

export function useAsyncError() {
  const [error, setError] = useState<AsyncError | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleError = useCallback((error: unknown) => {
    if (error instanceof Error) {
      setError({
        message: error.message,
        code: "UNKNOWN_ERROR",
      })
    } else if (typeof error === "string") {
      setError({
        message: error,
        code: "UNKNOWN_ERROR",
      })
    } else {
      setError({
        message: "An unexpected error occurred",
        code: "UNKNOWN_ERROR",
        details: error,
      })
    }
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const withErrorHandling = useCallback(
    async <T,>(asyncFn: () => Promise<T>): Promise<T | undefined> => {
      try {
        setIsLoading(true)
        clearError()
        const result = await asyncFn()
        return result
      } catch (error) {
        handleError(error)
        return undefined
      } finally {
        setIsLoading(false)
      }
    },
    [clearError, handleError]
  )

  return {
    error,
    isLoading,
    handleError,
    clearError,
    withErrorHandling,
  }
} 