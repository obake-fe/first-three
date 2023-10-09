export const Plane = () => {
  return (
    <mesh rotation={[-0.5 * Math.PI, 0, 0, 'XYZ']} position={[15, 0, 0]}>
      <planeGeometry args={[60, 20]} />
      <meshBasicMaterial args={[{ color: 0xcccccc }]} />
    </mesh>
  )
}
