import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const Cube = () => {
  const ref = useRef<any>(null)

  useFrame((_, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += 2 * delta
    ref.current.rotation.z += delta
  })

  return (
    <mesh position={[-4, 3, 0]} castShadow={true} ref={ref}>
      <boxGeometry args={[4, 4, 4]} />
      <meshLambertMaterial args={[{ color: 0xff0000 }]} />
    </mesh>
  )
}
