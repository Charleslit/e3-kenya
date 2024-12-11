export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code: string = 'API_ERROR'
  ) {
    super(message)
    this.name = 'APIError'
  }

  static fromResponse(response: Response) {
    return new APIError(
      'An error occurred while processing your request',
      response.status,
      'API_ERROR'
    )
  }
}

export async function handleAPIResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new APIError(
      error.message || 'An error occurred',
      response.status,
      error.code || 'API_ERROR'
    )
  }

  return response.json()
} 