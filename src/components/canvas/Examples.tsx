'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'

export const Sphere = () => {
  const [ref] = useSphere(() => ({ mass: 1, position: [0, 5, 0] }))

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    if (!ref.current) return
    ref.current.position.x = t
  })

  return (
    <>
      <mesh ref={ref} position={[0, 0, 4]} castShadow>
        <sphereGeometry />
        <meshPhysicalMaterial color='green' metalness={1.0} />
      </mesh>
    </>
  )
}
