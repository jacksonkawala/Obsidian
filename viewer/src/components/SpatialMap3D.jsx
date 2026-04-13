import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars, Float, Text, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import './SpatialMap3D.css'

function TSFBase() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#2a2e3d" roughness={1} />
    </mesh>
  )
}

function WaterPool({ elevation = 23.90 }) {
  // Normalize elevation for visualization: 23.90mRL -> scale height
  const heightScale = (elevation - 20) * 0.5
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05 + heightScale
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, heightScale, 0]}>
        <cylinderGeometry args={[8, 10, 0.5, 32]} />
        <MeshDistortMaterial
          color="#60a5fa"
          speed={2}
          distort={0.3}
          radius={1}
          opacity={0.6}
          transparent
        />
      </mesh>
    </Float>
  )
}

function DamWall({ position, rotation, scale = [1, 1, 1] }) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[20, 4, 2]} />
      <meshStandardMaterial color="#3e362d" />
    </mesh>
  )
}

function Lift1Progress({ progress = 0.75 }) {
  // progress is 0 to 1
  return (
    <group position={[0, 0, 15]}>
      <Text
        position={[0, 5, 0]}
        fontSize={1}
        color="#e5e7eb"
        anchorX="center"
        anchorY="middle"
      >
        LIFT 1 CONSTRUCTION
      </Text>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[15, 2, 4]} />
        <meshStandardMaterial color="#1e2231" transparent opacity={0.3} />
      </mesh>
      <mesh position={[-(15 * (1 - progress)) / 2, 1, 0]}>
        <boxGeometry args={[15 * progress, 2.1, 4.1]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

export default function SpatialMap3D({ metrics }) {
  return (
    <div className="spatial-map-3d">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[30, 30, 30]} fov={50} />
        <OrbitControls enablePan={true} enableZoom={true} maxPolarAngle={Math.PI / 2.1} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 20, 10]} intensity={1} castShadow />
        <spotLight position={[-20, 40, -20]} angle={0.15} penumbra={1} intensity={2} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <TSFBase />
        <WaterPool elevation={parseFloat(metrics?.poolElevation || 23.90)} />
        
        {/* Dam Walls */}
        <DamWall position={[0, 1, -12]} rotation={[0, 0, 0]} />
        <DamWall position={[0, 1, 12]} rotation={[0, 0, 0]} />
        <DamWall position={[-12, 1, 0]} rotation={[0, Math.PI / 2, 0]} />
        <DamWall position={[12, 1, 0]} rotation={[0, Math.PI / 2, 0]} />
        
        <Lift1Progress progress={metrics?.lift1Progress || 0.75} />
        
        <fog attach="fog" args={['#0f1117', 30, 90]} />
      </Canvas>
    </div>
  )
}
