import { Link } from "react-router-dom";

const mapChild = (param) => {
    return (
        param.map((item, index) => (
        <li key={index}><Link to={"/"+ item.to}>{item.name}</Link></li>
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
            <ul className="p-2 bg-base-200">
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
        to:"about"
    },
    {
        name:"Infrastructure",
        to:"infrastructure"
    },
    {
        name:"Gallery",
        to:"gallery"
    }
    ];
const parentArray = [
    {
        name:"Courses Offered",
        Array:[
            {
                name:"Fashion Designing",
                to:"fashion"
            },
            {
                name:"Computer Education",
                to:"computer"
            },
            {
                name:"Multimedia Training",
                to:"multimedia"
            },
            {
                name:"Photography",
                to:"photography"
            },
            {
                name:"Spoken English",
                to:"spoken"
            },
            {
                name:"Beautician Courses",
                to:"beautician"
            }
        ]
    },
    {
        name:"Students Zone",
        Array:[
            {
                name:"Portfolio",
                to:"portfolio"
            },
            {
                name:"Roll of Honour",
                to:"rollofhonour"
            }
        ]
    },
    {
        name:"News & Events",
        Array:[
            {
                name:"Workshops & Seminar",
                to:"workshop"
            },
            {
                name:"Fashion Events",
                to:"events"
            }
        ]
    }
]

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