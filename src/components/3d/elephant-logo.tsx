'use client'

import { useEffect, useRef, Suspense } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import dynamic from "next/dynamic"
import { Canvas } from "@react-three/fiber"
// Dynamically import Three.js components with no SSR
const ThreeCanvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
)

const ThreeModel = dynamic(
  () => import("./three-model").then((mod) => mod.ElephantModel),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }
)

interface ElephantLogoProps {
  className?: string
  animate?: boolean
  scale?: number
}

export function ElephantLogo({ className, animate = true, scale = 1 }: ElephantLogoProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView && animate) {
      controls.start({
        opacity: 1,
        y: 0,
        rotateY: 360,
        transition: {
          duration: 1.5,
          ease: "easeOut",
        },
      })
    }
  }, [isInView, animate, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: 0 }}
      animate={controls}
      className={className}
    >
      <div className="relative aspect-square">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        }>
          {typeof window !== 'undefined' && (
            <ThreeCanvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              shadows
            >
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
              />
              <ThreeModel scale={scale} />
            </ThreeCanvas>
          )}
        </Suspense>
      </div>
    </motion.div>
  )
} 