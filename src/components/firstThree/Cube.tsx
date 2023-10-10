import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

export const Cube = () => {
  const { rotationSpeed } = useControls('Cube', {
    rotationSpeed: 0.02
  })

  const ref = useRef<any>(null)

  useFrame(() => {
    ref.current.rotation.x += rotationSpeed
    ref.current.rotation.y += rotationSpeed
    ref.current.rotation.z += rotationSpeed
  })

  return (
    <mesh position={[-4, 3, 0]} castShadow={true} ref={ref}>
      <boxGeometry args={[4, 4, 4]} />
      <meshLambertMaterial args={[{ color: 0xff0000 }]} />
    </mesh>
  )
}
