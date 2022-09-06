import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls, Text3D } from "@react-three/drei";
import { Suspense,Component } from "react";

class Env extends Component {
    render() {
        return(
            <div className="h-96">
                <Canvas>
                    <Suspense fallback={null} >
                        <OrbitControls enableZoom={true} enablePan={false} />
                        <Environment
                        background
                        files={this.props.file}
                        path={"/"}
                        />
                    </Suspense>
                </Canvas>
            </div>
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
            {/* <Env file={hdrArray[Random()].fname} head={hdrArray[Random()].name} /> */}
            <Env file={['Left.jpg','RCenter.jpg','Top.jpg','Bottom.jpg','Right.jpg','LCenter.jpg']} />
        </>
    )
}

export default Home;
