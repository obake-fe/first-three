import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, Plane } from '@react-three/drei'

const ScenePractice = () => {
  return (
    <div className="App">
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 1000, position: [-30, 40, 30] }}
        onCreated={(state) => state.gl.setClearColor(0xeeeeee)}
        shadows={true}
      >
        <Plane
          args={[60, 40]}
          position={[0, 0, 0]}
          rotation={[-0.5 * Math.PI, 0, 0, 'XYZ']}
          receiveShadow={true}
        >
          <meshLambertMaterial color={0xffffff} />
        </Plane>
        <spotLight
          color={0xffffff}
          position={[-20, 30, -5]}
          intensity={2000}
          castShadow={true}
        />
        <ambientLight args={[0x0c0c0c]} intensity={100} />
        <OrbitControls />
        <axesHelper args={[20]} />
        <gridHelper args={[20, 20, 0xff0000, 'teal']} />
        <Stats />
      </Canvas>
    </div>
  )
}

export default ScenePractice
