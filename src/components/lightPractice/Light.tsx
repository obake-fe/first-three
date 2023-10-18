import { useRef } from 'react'
import { folder, useControls } from 'leva'
import { useHelper } from '@react-three/drei'
import { PointLight, PointLightHelper } from 'three'
import { useFrame } from '@react-three/fiber'

export const Light = () => {
  const [
    { color, color2, intensity, intensity2, visible, visible2, distance, decay }
  ] = useControls('Light', () => ({
    ambientLight: folder({
      color: '#ffffff',
      intensity: {
        value: 0.1,
        max: 100,
        min: 0,
        step: 0.1
      },
      visible: true
    }),
    pointLight: folder({
      color2: '#ffffff',
      intensity2: {
        value: 1,
        max: 10,
        min: 0,
        step: 0.1
      },
      distance: {
        value: 15,
        max: 30,
        min: 0,
        step: 1
      },
      decay: {
        value: 0,
        max: 15,
        min: 0,
        step: 0.1
      },
      visible2: true
    })
  }))

  const pointLight = useRef<PointLight>(null!)
  useHelper(pointLight, PointLightHelper, 0.5, 'hotpink')

  useFrame(({ clock }) => {
    pointLight.current.position.x = 10 * Math.sin(clock.elapsedTime) // elapsedTimeの単位は秒
    pointLight.current.position.z = 10 * Math.cos(clock.elapsedTime)
  })

  return (
    <>
      {/*<spotLight*/}
      {/*  color={0xffffff}*/}
      {/*  position={[-20, 30, -5]}*/}
      {/*  intensity={2000}*/}
      {/*  castShadow={true}*/}
      {/*/>*/}
      <ambientLight args={[color]} intensity={intensity} visible={visible} />
      <pointLight
        position={[10, 10, 10]}
        args={[color2]}
        intensity={intensity2}
        visible={visible2}
        distance={distance}
        decay={decay}
        ref={pointLight}
      />
      {/*<directionalLight position={[0, 0, 5]} intensity={0.5} />*/}
    </>
  )
}
