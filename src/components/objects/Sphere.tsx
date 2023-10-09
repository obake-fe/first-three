export const Sphere = () => {
  return (
    <mesh position={[20, 4, 2]}>
      <sphereGeometry args={[4, 20, 20]} />
      <meshBasicMaterial args={[{ color: 0x7777ff, wireframe: true }]} />
    </mesh>
  )
}
