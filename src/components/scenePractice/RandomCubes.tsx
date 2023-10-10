import { button, useControls } from 'leva'
import { Box } from '@react-three/drei'
import { useState } from 'react'

type Cube = {
  size: number
  color: number
  name: string
  position: [number, number, number]
}

export const RandomCubes = () => {
  const [cubes, setCubes] = useState<Cube[]>([])

  useControls('CubeInfo', () => ({
    // ランダムなCubeを描画する用のpropertyをstateに追加する
    addCube: button(() => {
      setCubes((cubes) => [
        ...cubes,
        {
          size: Math.random() * 3,
          color: Math.random() * 0xffffff,
          name: `cube-${cubes.length}`,
          position: [
            -30 + Math.round(Math.random() * 60),
            Math.round(Math.random() * 5),
            -20 + Math.round(Math.random() * 40)
          ]
        }
      ])
    })
  }))

  return (
    <>
      {cubes.map((cube) => {
        return (
          <Box
            args={[cube.size, cube.size, cube.size]}
            position={cube.position}
            castShadow={true}
            key={cube.name}
            material-color={cube.color}
          />
        )
      })}
    </>
  )
}
