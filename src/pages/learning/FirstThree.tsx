import { Canvas } from '@react-three/fiber'

const FirstThree = () => {
  return (
    <div className="App">
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 1000, position: [-30, 40, 30] }}
        onCreated={(state) => state.gl.setClearColor(0xeeeeee)}
      >
        <mesh>
          <sphereGeometry args={[4, 20, 20]} />
          <meshBasicMaterial args={[{ color: 0x7777ff, wireframe: true }]} />
        </mesh>
        <mesh rotation={[-0.5 * Math.PI, 0, 0, 'XYZ']} position={[15, 0, 0]}>
          <planeGeometry args={[60, 20]} />
          <meshBasicMaterial args={[{ color: 0xcccccc }]} />
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        <axesHelper args={[20]} />
        <gridHelper args={[20, 20, 0xff0000, 'teal']} />
      </Canvas>
    </div>
  )
}

export default FirstThree
