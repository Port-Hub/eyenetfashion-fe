import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, CubeCamera } from "@react-three/drei";
import { Suspense,Component } from "react";

class Env extends Component {
    render() {
        return(
            <div className="h-screen">
                <Canvas>
                    <Suspense fallback={null} >
                        <OrbitControls />
                        <Environment
                        background
                        files={['Left.jpg','RCenter.jpg','Top.jpg','Bottom.jpg','Right.jpg','LCenter.jpg']}
                        path={this.props.dpath}
                        />
                    </Suspense>
                </Canvas>
            </div>
        )
    }
}

const hdrArray = [
    {
        name: "Eyenet",
        path: "/Eyenet/"
    },
    {
        name: "Reception",
        path: "/Reception/"
    }
]

const mapHDR = (param) => {
    return(
        param.map((item,index) => (
            <Env key={index} dpath={item.path} />
            )
        )
    )
}

const hdrList = mapHDR(hdrArray);

const Virtual = () => {
    return(
        <>
            {hdrList}
        </>
    )
}

export default Virtual;
