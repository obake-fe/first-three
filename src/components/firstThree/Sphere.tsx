import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

export const Sphere = () => {
  const { bouncingSpeed } = useControls('Cube', {
    bouncingSpeed: 0.03
  })

  const ref = useRef<any>(null)
  let step = 0

  useFrame(() => {
    step += bouncingSpeed
    ref.current.position.x = 20 + 10 * Math.cos(step)
    ref.current.position.y = 2 + 10 * Math.abs(Math.sin(step))
  })

  return (
    <mesh position={[20, 4, 2]} castShadow={true} ref={ref}>
      <sphereGeometry args={[4, 20, 20]} />
      <meshLambertMaterial args={[{ color: 0x7777ff }]} />
    </mesh>
  )
}
