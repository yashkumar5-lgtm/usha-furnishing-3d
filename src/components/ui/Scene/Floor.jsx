function Floor() {
  return (
    <>
      {/* Main Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[80, 80]} />

        <meshStandardMaterial
          color="#08111F"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Main Platform */}
      <mesh
        position={[0, -1.12, 0]}
        receiveShadow
        castShadow
      >
        <cylinderGeometry args={[3.7, 3.7, 0.28, 128]} />

        <meshStandardMaterial
          color="#1A2233"
          metalness={0.9}
          roughness={0.18}
        />
      </mesh>

      {/* Gold Ring */}
      <mesh
        position={[0, -0.96, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[3.72, 0.04, 32, 200]} />

        <meshStandardMaterial
          color="#D4AF37"
          emissive="#D4AF37"
          emissiveIntensity={1.2}
          metalness={1}
          roughness={0.15}
        />
      </mesh>

      {/* Top Disc */}
      <mesh
        position={[0, -0.98, 0]}
        receiveShadow
      >
        <cylinderGeometry args={[3.45, 3.45, 0.03, 128]} />

        <meshStandardMaterial
          color="#2C3548"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </>
  );
}

export default Floor;