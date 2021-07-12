import React, { useRef } from 'react'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'

function Box () {
  const mesh = useRef<MeshProps>()

  useFrame(() => {
    if (!mesh.current) return
    if (window.scrollY < 500 && mesh.current.scale.x < 3) {
      mesh.current.scale.x += 0.1
      mesh.current.scale.y += 0.1
      mesh.current.scale.z += 0.1
    }

    if (window.scrollY > 500 && mesh.current.scale.x > 0.5) {
      mesh.current.scale.x -= 0.1
      mesh.current.scale.y -= 0.1
      mesh.current.scale.z -= 0.1
    }

    if (window.scrollY < 500 && mesh.current.position.x < 2) {
      mesh.current.position.x += 0.1
    }

    if (window.scrollY > 500 && mesh.current.position.x > 0) {
      mesh.current.position.x -= 0.1
    }

    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh ref={mesh} position={[2, 0, 0]} scale={3}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

export default function Animation () {
  return (
    <Canvas style={{ background: 'black', position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: -1 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  )
}
