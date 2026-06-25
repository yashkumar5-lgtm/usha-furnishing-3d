import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import Lights from "./Lights";
import Floor from "./Floor";
import Sofa from "./Sofa";
import CameraRig from "./CameraRig";
import FloatingParticles from "./FloatingParticles";

function Scene3D() {

    return (

        <Canvas

            shadows

            camera={{

                position:[0,2.5,12],

                fov:38

            }}

            style={{

                width:"100%",

                height:"100%"

            }}

        >

            <color attach="background" args={["#08111F"]} />

            <fog attach="fog" args={["#08111F",10,25]} />

            <Environment preset="city" />

            <Lights />

            <CameraRig />

            <Floor />

            <FloatingParticles />

            <Sofa
                position={[0,-1,0]}
                scale={0.75}
            />

        </Canvas>

    );

}

export default Scene3D;