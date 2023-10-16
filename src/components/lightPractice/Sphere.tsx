export const Sphere = () => {
  return (
    <mesh position={[20, 4, 2]} castShadow={true} ref={ref}>
      <sphereGeometry args={[4, 20, 20]} />
      <meshLambertMaterial args={[{ color: 0x7777ff }]} />
    </mesh>
  )
}
