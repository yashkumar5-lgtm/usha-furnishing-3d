import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FloatingParticles() {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const count = 400;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = Math.random() * 5 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return positions;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;

    const array = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < array.length; i += 3) {
      array[i + 1] += 0.005;
      array[i] += Math.sin(array[i + 1]) * 0.0008;

      if (array[i + 1] > 3) {
        array[i + 1] = -2;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#FFD54A"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.85}
      />
    </points>
  );
}

export default FloatingParticles;