import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Sofa(props) {
  const sofaRef = useRef();

  const gltf = useGLTF("/models/sofa.glb");

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material.metalness = 0.25;
          child.material.roughness = 0.55;
          child.material.envMapIntensity = 1.4;
        }
      }
    });
  }, [gltf]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!sofaRef.current) return;

    // Floating animation
    sofaRef.current.position.y = Math.sin(time * 1.2) * 0.12;

    // Smooth rotation
    sofaRef.current.rotation.y = Math.sin(time * 0.35) * 0.18;

    // Gentle breathing scale
    const scale = 1 + Math.sin(time * 1.2) * 0.01;

    sofaRef.current.scale.set(scale, scale, scale);
  });

  return (
    <primitive
      ref={sofaRef}
      object={gltf.scene}
      {...props}
    />
  );
}

export default Sofa;

useGLTF.preload("/models/sofa.glb");