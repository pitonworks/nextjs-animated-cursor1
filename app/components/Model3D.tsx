'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring } from '@react-spring/three'
import { Mesh, Vector3 } from 'three'
import { Box, MeshDistortMaterial } from '@react-three/drei'

export default function Model3D() {
  const meshRef = useRef<Mesh>(null)
  const [springs, api] = useSpring(() => ({
    scale: [1, 1, 1] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    config: { mass: 1, tension: 170, friction: 26 },
  }))

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  const handleClick = () => {
    const currentScale = springs.scale.get()[0]
    api.start({
      scale: currentScale === 1 ? [1.5, 1.5, 1.5] : [1, 1, 1],
      rotation: [0, springs.rotation.get()[1] + Math.PI, 0],
    })
  }

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      onClick={handleClick}
      scale={springs.scale.get()}
      rotation={springs.rotation.get()}
    >
      <MeshDistortMaterial
        color="#00ff88"
        speed={2}
        distort={0.3}
        radius={1}
      />
    </Box>
  )
} 