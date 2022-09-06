import { Link, Route } from "react-router-dom";
import About from "../../pages/about";
import Infra from "../../pages/infra";
import Gallery from "../../pages/gallery";
import Beautician from "../../pages/courses/beautician";
import Computer from "../../pages/courses/computer";
import Fashion from "../../pages/courses/fashion";
import Multimedia from "../../pages/courses/multimedia";
import Photography from "../../pages/courses/photography";
import Spoken from "../../pages/courses/spokeneng";
import Workshop from "../../pages/workshop";
import Honour from "../../pages/honour";


const mapChild = (param) => {
    return (
        param.map((item, index) => (
        <li key={index}><Link to={"/"+ item.to}>{item.name}</Link></li>
            )
        )
    )
}
const mapRoute = (param) => {
        return (
            param.map((item, index) => (
                <Route key={index} exact path={"/"+ item.to} element={item.func}></Route>
            )
        )
    )
}

const mapParent = (param) => {
    return (
        param.map((item,index) => (
        <li tabIndex="0" key={index}>
            <a>
                {item.name}
                {Dropdown}
            </a>
            <ul className="p-2 bg-base-300">
                {mapChild(item.Array)}
            </ul>
        </li>
            )
        )
    )
}

const Dropdown =  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>;     
const childArray = [
    {
        name:"About",
        to:"about",
        func:<About />
    },
    {
        name:"Infrastructure",
        to:"infrastructure",
        func:<Infra />
    },
    {
        name:"Gallery",
        to:"gallery",
        func:<Gallery />
    },
    {
        name:"Roll of Honour",
        to:"rollofhonour",
        func:<Honour />
    },
    {
        name:"Workshops & Seminar",
        to:"workshop",
        func:<Workshop />
    }
    ];
const parentArray = [
    {
        name:"Courses Offered",
        Array:[
            {
                name:"Fashion Designing",
                to:"fashion",
                func:<Fashion />
            },
            {
                name:"Computer Education",
                to:"computer",
                func:<Computer />
            },
            {
                name:"Multimedia Training",
                to:"multimedia",
                func:<Multimedia />
            },
            {
                name:"Photography",
                to:"photography",
                func:<Photography />
            },
            {
                name:"Spoken English",
                to:"spoken",
                func:<Spoken />
            },
            {
                name:"Beautician Courses",
                to:"beautician",
                func:<Beautician />
            }
        ]
    }
]

export const childRoute =mapRoute(childArray);
export const parentRoute= parentArray.map((item) => mapRoute(item.Array));

const Navlist = () => {
    const childList = mapChild(childArray);
    const parentList = mapParent(parentArray);
    return (
        <>
            {childList}
            {parentList}
        </>
    )
}

export default Navlist;
