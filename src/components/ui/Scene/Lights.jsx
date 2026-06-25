function Lights() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[8, 10, 8]}
        intensity={2}
        castShadow
      />

      <pointLight
        position={[0, 4, 3]}
        color="#F6D365"
        intensity={30}
      />

      <pointLight
        position={[-5, 2, -4]}
        color="#4A7DFF"
        intensity={6}
      />
    </>
  );
}

export default Lights;