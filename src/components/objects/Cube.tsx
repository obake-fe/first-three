export const Cube = () => {
  return (
    <mesh position={[-4, 3, 0]} castShadow={true}>
      <boxGeometry args={[4, 4, 4]} />
      <meshLambertMaterial args={[{ color: 0xff0000 }]} />
    </mesh>
  )
}
