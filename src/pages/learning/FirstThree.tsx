import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Cube, Plane, Sphere } from '@/components/firstThree'

const FirstThree = () => {
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
        <spotLight
          color={0xffffff}
          position={[-20, 30, -5]}
          intensity={2000}
          castShadow={true}
        />
        {/*<ambientLight args={[0xff0000]} intensity={0.1} />*/}
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
