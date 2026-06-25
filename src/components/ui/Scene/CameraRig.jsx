import { useFrame, useThree } from "@react-three/fiber";

function CameraRig() {

    const { camera, mouse } = useThree();

    useFrame((state) => {

        const time = state.clock.getElapsedTime();

        // Gentle breathing movement
        camera.position.x += ((mouse.x * 1.2) - camera.position.x) * 0.03;

        camera.position.y += ((2.5 + mouse.y * 0.5) - camera.position.y) * 0.03;

        camera.position.z = 12 + Math.sin(time * 0.4) * 0.2;

        camera.lookAt(0, 0, 0);

    });

    return null;
}

export default CameraRig;