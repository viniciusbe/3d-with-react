'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PointerLockControls, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import { Physics } from '@react-three/cannon'

export const Common = () => (
  <Suspense fallback={null}>
    <ambientLight intensity={0.3} />
    <directionalLight position={[100, 100, 0]} castShadow />
  </Suspense>
)

const View = forwardRef(({ children, orbit, ...props }: any, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          <Physics gravity={[0, -9.8, 0]}>{children}</Physics>
          {/* @ts-ignore */}
          <PointerLockControls />
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
