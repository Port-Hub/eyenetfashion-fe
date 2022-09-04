import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense,Component } from "react";

class Env extends Component {
    render() {
        return(
            <Canvas className={this.props.tail}>
                <Suspense fallback={null} >
                    <OrbitControls enableZoom={true} enablePan={false} />
                    <Environment
                    background
                    files={this.props.file}
                    path={"/"}
                    />
                </Suspense>
            </Canvas>
        )
    }
}

const hdrArray = [
    {
        name:"Apartment",
        fname:"Apartment.hdr"
    },
    {
        name:"Forest",
        fname:"Forest.hdr"
    },
    {
        name:"Sunset",
        fname:"Sunset.hdr"
    },
    {
        name:"City",
        fname:"City.hdr"
    },
    {
        name:"Park",
        fname:"Park.hdr"
    },
    {
        name:"Dawn",
        fname:"Dawn.hdr"
    },
    {
        name:"Lobby",
        fname:"Lobby.hdr"
    },
    {
        name:"Night",
        fname:"Night.hdr"
    },
    {
        name:"Studio",
        fname:"Studio.hdr"
    },
    {
        name:"Warehouse",
        fname:"Warehouse.hdr"
    }
]

const mapHDR = (param) => {
    return(
        param.map((item,index) => (
            <Env key={index} file={item.fname} />
            )
        )
    )
}

const Random = () => { 
    return (
        Math.floor((Math.random())*10)
    )
};

const hdrList = mapHDR(hdrArray);

const Home = () => {
    return(
        <>
            <Env file={hdrArray[Random()].fname} />
        </>
    )
}

export default Home;
