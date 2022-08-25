import { Link, Route } from "react-router-dom";
import About from "../Pages/about";
import Infra from "../Pages/infra";
import Gallery from "../Pages/gallery";
import Beautician from "../Pages/courses/beautician";
import Computer from "../Pages/courses/computer";
import Fashion from "../Pages/courses/fashiondes";
import Multimedia from "../Pages/courses/multimedia";
import Photography from "../Pages/courses/photography";
import Spoken from "../Pages/courses/spokeneng";
import Events from "../Pages/news/events";
import Workshop from "../Pages/news/workshop";
import Honour from "../Pages/students/honour";
import Portfolio from "../Pages/students/portfolio";

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
    },
    {
        name:"Students Zone",
        Array:[
            {
                name:"Portfolio",
                to:"portfolio",
                func:<Portfolio />
            },
            {
                name:"Roll of Honour",
                to:"rollofhonour",
                func:<Honour />
            }
        ]
    },
    {
        name:"News & Events",
        Array:[
            {
                name:"Workshops & Seminar",
                to:"workshop",
                func:<Workshop />
            },
            {
                name:"Fashion Events",
                to:"events",
                func:<Events />
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