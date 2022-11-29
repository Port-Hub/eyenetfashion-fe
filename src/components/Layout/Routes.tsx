import { Link, Route } from "react-router-dom";
import About from "../../pages/about";
import Infra from "../../pages/infra";
import Infraexplore from "../../pages/infraexplore";
import Gallery from "../../pages/gallery";
import Beautician from "../../pages/courses/beautician";
import Computer from "../../pages/courses/computer";
import Fashion from "../../pages/courses/fashion";
import Multimedia from "../../pages/courses/multimedia";
import Photography from "../../pages/courses/photography";
import Spoken from "../../pages/courses/spokeneng";
import Workshop from "../../pages/workshop";
import Honour from "../../pages/honour";
import Beautytherapy from "../../pages/courses/beauticiancourses/beautytherapy";
import Aromatherapy from "../../pages/courses/beauticiancourses/aromatherapy";
import Certificate from "../../pages/courses/beauticiancourses/certificate";


const mapChild: (param: any) => any = (param) => {
    return (
        param.map((item: any, index: any) => (
        <li key={index}><Link to={"/"+ item.to}>{item.name}</Link></li>
            )
        )
    )
}
const mapRoute: (param: any) => any = (param) => {
        return (
            param.map((item: any, index: any) => (
                <Route key={index} path={"/"+ item.to} element={item.func as JSX.Element} />
            )
        )
    )
}

const mapParent: (param: any) => any = (param) => {
    return (
        param.map((item: any,index: any) => (
        <li tabIndex={0} key={index}>
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

const Dropdown: JSX.Element =  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>;     
const childArray: { name: String, to: String, func: JSX.Element }[] = [
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
const parentArray: { name: String, Array: { name: String, to: String, func: JSX.Element }[] }[] = [
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
const extraArray: { name: String, to: String, func: JSX.Element }[] = [
    {
        name: "Infrastructure Explore",
        to: "infrastructure/explore",
        func: <Infraexplore />
    },
    {
      name: "Advance Diploma in Beauty Therapy",
      to: "beautician/diploma",
      func: <Beautytherapy />,
    },
    {
      name: "Diploma in Aroma Therapy",
      to: "beautician/aromatherapy",
      func: <Aromatherapy />,
    },
    {
      name: "Certificate Courses",
      to: "beautician/certificate",
      func: <Certificate />,
    },
  ];

export const childRoute: any =mapRoute(childArray);
export const parentRoute: any[] = parentArray.map((item) => mapRoute(item.Array));
export const extraRoute: any = mapRoute(extraArray);

const Navlist: (arg: any) => JSX.Element = () => {
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
