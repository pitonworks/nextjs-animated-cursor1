'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function Model3D() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.distort = 0.3 + Math.sin(time) * 0.2
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#38bdf8"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  )
} 