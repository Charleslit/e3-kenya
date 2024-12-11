"use client"

import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

interface ElephantModelProps {
  scale?: number
  rotation?: [number, number, number]
}

export function ElephantModel({ 
  scale = 1, 
  rotation = [0, 0, 0] 
}: ElephantModelProps) {
  const { scene } = useGLTF("/models/elephant.glb")
  
  useEffect(() => {
    if (scene) {
      scene.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          child.material.color.set("#8B5E3C")
        }
      })
    }
  }, [scene])

  return (
    <primitive 
      object={scene} 
      scale={scale} 
      rotation={rotation}
      position={[0, -1, 0]}
    />
  )
} 