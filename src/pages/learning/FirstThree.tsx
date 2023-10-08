import { Canvas } from '@react-three/fiber'

const FirstThree = () => {
  return (
    <div className="App">
      <h2>First Render</h2>
      <Canvas>
        <mesh>
          <boxGeometry args={[10, 10, 1]} />
          <meshPhongMaterial />
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
    </div>
  )
}

export default FirstThree
