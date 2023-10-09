export const Cube = () => {
  return (
    <mesh position={[-4, 3, 0]}>
      <boxGeometry args={[4, 4, 4]} />
      <meshBasicMaterial args={[{ color: 0xff0000, wireframe: true }]} />
    </mesh>
  )
}
