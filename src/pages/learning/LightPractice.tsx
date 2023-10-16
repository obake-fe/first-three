import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Cube, Plane, Sphere } from '@/components/lightPractice'
import { folder, useControls } from 'leva'

const FirstThree = () => {
  const [{ color, intensity, visible }] = useControls('Light', () => ({
    ambientLight: folder({
      color: '#ffffff',
      intensity: {
        value: 0.1,
        max: 100,
        min: 0,
        step: 0.1
      },
      visible: true
    })
  }))

  return (
    <div className="App">
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 1000, position: [-30, 40, 30] }}
        onCreated={(state) => state.gl.setClearColor(0xeeeeee)}
        shadows={true}
      >
        <Sphere />
        <Plane />
        <Cube />
        {/*<spotLight*/}
        {/*  color={0xffffff}*/}
        {/*  position={[-20, 30, -5]}*/}
        {/*  intensity={2000}*/}
        {/*  castShadow={true}*/}
        {/*/>*/}
        <ambientLight args={[color]} intensity={intensity} visible={visible} />
        {/*<directionalLight position={[0, 0, 5]} intensity={0.5} />*/}
        <OrbitControls />
        <axesHelper args={[20]} />
        <gridHelper args={[20, 20, 0xff0000, 'teal']} />
        <Stats />
      </Canvas>
    </div>
  )
}

export default FirstThree
