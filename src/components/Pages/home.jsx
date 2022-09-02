import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense,Component } from "react";

class Env extends Component {
    render() {
        return(
            <Environment
                background
                files={this.props.file}
                path={"/home/"}
                />
        )
    }
}

const hdrArray = [
    {
        name:"Apartment",
        file:"Apartment.hdr"
    },
    {
        name:"Forest",
        file:"Forest.hdr"
    },
    {
        name:"Sunset",
        file:"Sunset.hdr"
    },
    {
        name:"City",
        file:"City.hdr"
    },
    {
        name:"Park",
        file:"Park.hdr"
    },
    {
        name:"Dawn",
        file:"Dawn.hdr"
    },
    {
        name:"Lobby",
        file:"Lobby.hdr"
    },
    {
        name:"Night",
        file:"Night.hdr"
    },
    {
        name:"Studio",
        file:"Studio.hdr"
    },
    {
        name:"Warehouse",
        file:"Warehouse.hdr"
    }
]

const mapHDR = (param) => <Env file={param.file} />

const hdrList = mapHDR(hdrArray)

const Home = () => {
    return(
        <Canvas>
            <Suspense fallback={null} >
                <OrbitControls />
                {hdrList}
            </Suspense>
        </Canvas>
    )
}

export default Home;
