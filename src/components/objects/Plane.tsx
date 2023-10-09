export const Plane = () => {
  return (
    <mesh
      rotation={[-0.5 * Math.PI, 0, 0, 'XYZ']}
      position={[15, 0, 0]}
      receiveShadow={true}
    >
      <planeGeometry args={[60, 20]} />
      <meshLambertMaterial args={[{ color: 0xffffff }]} />
    </mesh>
  )
}
