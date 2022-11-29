import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Env: (props: any) => JSX.Element = (props) =>  {
      return(
        <div className="h-screen">
            <Canvas>
                <Suspense fallback={null} >
                    <OrbitControls />
                    <Environment
                        background
                        files={['Left.jpg','RCenter.jpg','Top.jpg','Bottom.jpg','Right.jpg','LCenter.jpg']}
                        path={props.dpath}
                        />
                </Suspense>
            </Canvas>
        </div>
    )
}

const hdrArray: { name: String, path: String }[] = [
    {
        name: "Eyenet",
        path: "/Eyenet/"
    },
    {
        name: "Reception",
        path: "/Reception/"
    }
]

const mapHDR: (param: any) => JSX.Element = (param) => {
    return(
        param.map((item: any,index: any) => (
            <Env key={index} dpath={item.path} />
            )
        )
    )
}

const hdrList: JSX.Element = mapHDR(hdrArray);

const Virtual: (arg: any) => JSX.Element = () => {
    return(
        <>
            {hdrList}
        </>
    )
}

export default Virtual;
