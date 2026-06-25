import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Sofa(props) {

    const sofaRef = useRef();

    const gltf = useGLTF("/models/sofa.glb");

    useFrame((state) => {

        const time = state.clock.getElapsedTime();

        if (sofaRef.current) {

            // Floating animation
            sofaRef.current.position.y = Math.sin(time) * 0.15;

            // Slow rotation
            sofaRef.current.rotation.y = Math.sin(time * 0.4) * 0.25;

        }

    });

    return (

        <primitive

            ref={sofaRef}

            object={gltf.scene}

            {...props}

            scale={1}

        />

    );

}

export default Sofa;

useGLTF.preload("/models/sofa.glb");