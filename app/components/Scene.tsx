'use client'

import { Canvas } from '@react-three/fiber'
import { 
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Float,
  Icosahedron,
  Octahedron,
  Dodecahedron,
  Sphere
} from '@react-three/drei'
import { MeshDistortMaterial } from '@react-three/drei'

interface SceneProps {
  type?: 'frontend' | 'react' | 'backend' | 'fullstack'
}

export default function Scene({ type = 'frontend' }: SceneProps) {
  const getGeometry = () => {
    switch (type) {
      case 'frontend':
        return (
          <Icosahedron args={[1, 0]}>
            <MeshDistortMaterial
              color="#38bdf8"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0}
              metalness={0.8}
            />
          </Icosahedron>
        )
      case 'react':
        return (
          <Octahedron args={[1, 0]}>
            <MeshDistortMaterial
              color="#61dafb"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0}
              metalness={0.8}
            />
          </Octahedron>
        )
      case 'backend':
        return (
          <Dodecahedron args={[1, 0]}>
            <MeshDistortMaterial
              color="#4ade80"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0}
              metalness={0.8}
            />
          </Dodecahedron>
        )
      case 'fullstack':
        return (
          <Sphere args={[1, 32, 32]}>
            <MeshDistortMaterial
              color="#f472b6"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0}
              metalness={0.8}
            />
          </Sphere>
        )
    }
  }

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[3, 3, 3]} />
      
      <color attach="background" args={['transparent']} />
      
      <Environment preset="sunset" />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      
      <Float
        speed={2}
        rotationIntensity={2}
        floatIntensity={1}
      >
        {getGeometry()}
      </Float>
      
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  )
} 