import { usePlane } from '@react-three/cannon'
import { useRef } from 'react'

export default function Plane() {
  const [ref] = usePlane(() => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0] }), useRef())

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial />
    </mesh>
  )
}
