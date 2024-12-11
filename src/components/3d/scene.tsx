"use client"

import { ReactNode } from "react"

interface SceneProps {
  children: ReactNode
}

export function Scene({ children }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
      />
      {children}
    </>
  )
} 