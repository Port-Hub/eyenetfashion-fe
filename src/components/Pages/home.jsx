import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Home = () => {
    return(
        <Canvas>
            <Suspense fallback={null} >
                <OrbitControls />
                <Environment preset="dawn" background />
            </Suspense>
        </Canvas>
    )
}

export default Home;