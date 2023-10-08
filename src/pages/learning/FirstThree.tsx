import { Canvas } from '@react-three/fiber'

const FirstThree = () => {
  return (
    <div className="App">
      <h2>First Render</h2>
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 1000, position: [-30, 40, 30] }}
        onCreated={(state) => state.gl.setClearColor(0xeeeeee)}
      >
        <mesh>
          <sphereGeometry args={[4, 20, 20]} />
          <meshBasicMaterial args={[{ color: 0x7777ff, wireframe: true }]} />
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
    </div>
  )
}

export default FirstThree
