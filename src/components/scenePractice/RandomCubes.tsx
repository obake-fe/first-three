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

  const [, set] = useControls('CubeInfo', () => ({
    // ランダムなCubeを描画する用のpropertyをstateに追加する
    addRandomCube: button(() => {
      setCubes((cubes) => {
        // 最大100個までオブジェクトを作成する
        if (cubes.length >= 100) {
          return cubes
        }

        set({ numberOfObjects: cubes.length + 1 })

        return [
          ...cubes,
          {
            size: Math.random() * 3,
            color: Math.random() * 0xffffff,
            name: `cube-${cubes.length + 1}`,
            position: [
              -30 + Math.round(Math.random() * 60),
              Math.round(Math.random() * 5),
              -20 + Math.round(Math.random() * 40)
            ]
          }
        ]
      })
    }),
    numberOfObjects: {
      value: 0,
      min: 0,
      max: 100,
      step: 1,
      onChange: (value) => {
        set({ numberOfObjects: value })
        setCubes((cubes) => {
          // 入力値が描画済みのオブジェクト数よりも大きければ、差分の数だけオブジェクトを追加する
          if (value > cubes.length) {
            const addCubesLength = +value - cubes.length
            const addArray: Cube[] = []
            for (let i = 0; i < addCubesLength; i++) {
              addArray.push({
                size: Math.random() * 3,
                color: Math.random() * 0xffffff,
                name: `cube-${cubes.length + i + 1}`,
                position: [
                  -30 + Math.round(Math.random() * 60),
                  Math.round(Math.random() * 5),
                  -20 + Math.round(Math.random() * 40)
                ]
              })
            }

            return [...cubes, ...addArray]
          } else {
            return cubes.filter((_, index) => {
              return index < value
            })
          }
        })
      }
    }
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
          >
            <meshLambertMaterial color={cube.color} />
          </Box>
        )
      })}
    </>
  )
}
