"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/loading-skeleton"
import { cn } from "@/lib/utils"

interface LoadingCardProps {
  imageHeight?: string
  lines?: number
  className?: string
}

export function LoadingCard({ imageHeight = "h-48", lines = 3, className }: LoadingCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-4">
        {imageHeight && <Skeleton className={`${imageHeight} mb-4 w-full`} />}
        <Skeleton className="h-6 w-3/4 mb-2" />
        {Array.from({ length: lines - 1 }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-4 w-full mb-2 last:mb-0 last:w-2/3"
          />
        ))}
      </CardContent>
    </Card>
  )
} 