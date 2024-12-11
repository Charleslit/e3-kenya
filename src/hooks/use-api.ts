import { useState, useCallback } from 'react'
import { APIError, handleAPIResponse } from '@/lib/api-error'

interface APIHookOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: APIError) => void
}

export function useAPI<T = unknown>(options: APIHookOptions<T> = {}) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<APIError | null>(null)

  const request = useCallback(
    async <R = T,>(
      url: string,
      requestOptions: RequestInit = {}
    ): Promise<R | undefined> => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch(url, {
          ...requestOptions,
          headers: {
            'Content-Type': 'application/json',
            ...requestOptions.headers,
          },
        })

        const data = await handleAPIResponse<R>(response)
        options.onSuccess?.(data as unknown as T)
        return data
      } catch (err) {
        const apiError =
          err instanceof APIError ? err : new APIError('An unexpected error occurred', 500)
        setError(apiError)
        options.onError?.(apiError)
        return undefined
      } finally {
        setIsLoading(false)
      }
    },
    [options]
  )

  return {
    isLoading,
    error,
    request,
    clearError: () => setError(null),
  }
} 