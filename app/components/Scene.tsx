'use client'

import { Canvas, extend } from '@react-three/fiber'
import { 
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Stars
} from '@react-three/drei'
import { Color, DirectionalLight, AmbientLight, Group } from 'three'
import Model3D from './Model3D'

extend({ Color, DirectionalLight, AmbientLight, Group })

export default function Scene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[3, 3, 3]} />
      
      <color attach="background" args={['#000']} />
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      
      <Environment preset="sunset" />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      
      <group position={[0, 0, 0]}>
        <Model3D />
      </group>
      
      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </Canvas>
  )
} 