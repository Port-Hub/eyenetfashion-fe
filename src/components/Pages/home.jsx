import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Home = () => {
    return(
        <Canvas>
            <Suspense fallback={null} >
                <OrbitControls />
                <Environment 
                    background
                    files={"Apartment.hdr"}
                    path={"/home/"}
                        />
            </Suspense>
        </Canvas>
    )
}

export default Home;
