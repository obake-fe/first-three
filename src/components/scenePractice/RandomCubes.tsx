import { button, useControls } from 'leva'
import { Box } from '@react-three/drei'
import { createRef, RefObject, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

type Cube = {
  size: number
  color: number
  name: string
  position: [number, number, number]
}

export const RandomCubes = () => {
  const [cubes, setCubes] = useState<Cube[]>([])

  const [{ rotationSpeed }, set] = useControls('CubeInfo', () => ({
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
    removeCube: button(() => {
      setCubes((cubes) => {
        if (cubes.length > 0) {
          set({ numberOfObjects: cubes.length - 1 })
          return cubes.slice(0, -1)
        }

        return cubes
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
    },
    rotationSpeed: {
      value: 0.02,
      min: 0,
      max: 1,
      step: 0.01
    }
  }))

  const refs = useRef<RefObject<any>[]>([])

  // cubeの数だけrefを作成する
  cubes.forEach((_, index) => {
    refs.current[index] = createRef()
  })

  useFrame(() => {
    cubes.forEach((_, index) => {
      refs.current[index].current.rotation.x += rotationSpeed
      refs.current[index].current.rotation.y += rotationSpeed
      refs.current[index].current.rotation.z += rotationSpeed
    })
  })

  return (
    <>
      {cubes.map((cube, index) => {
        return (
          <Box
            args={[cube.size, cube.size, cube.size]}
            position={cube.position}
            rotation={[rotationSpeed, rotationSpeed, rotationSpeed]}
            castShadow={true}
            key={cube.name}
            ref={refs.current[index]}
          >
            <meshLambertMaterial color={cube.color} />
          </Box>
        )
      })}
    </>
  )
}
