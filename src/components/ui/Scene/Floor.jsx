function Floor() {
  return (
    <>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[80, 80]} />

        <meshStandardMaterial
          color="#101827"
          roughness={1}
        />
      </mesh>

      <mesh
        position={[0, -1.15, 0]}
        receiveShadow
        castShadow
      >
        <cylinderGeometry args={[3.5, 3.5, 0.22, 64]} />

        <meshStandardMaterial
          color="#232C3D"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>
    </>
  );
}

export default Floor;