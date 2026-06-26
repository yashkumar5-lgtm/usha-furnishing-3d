import { SpotLight } from "@react-three/drei";

function Lights() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.55} />

      {/* Main White Light */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Soft Fill Light */}
      <pointLight
        position={[-5, 3, 5]}
        intensity={0.6}
        color="#ffffff"
      />

      {/* Luxury Gold Back Light */}
      <pointLight
        position={[0, 2.5, -4]}
        intensity={14}
        distance={12}
        color="#D4AF37"
      />

      {/* Soft Top Spotlight */}
      <SpotLight
        position={[0, 7, 2]}
        angle={0.45}
        penumbra={1}
        intensity={18}
        distance={20}
        color="#ffffff"
        castShadow
      />
    </>
  );
}

export default Lights;