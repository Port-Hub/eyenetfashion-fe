import { Component } from "react";

const mainArray = ["About Us","Infrastructure","Gallery"];
const mainList = mainArray.map((item, index) => <li key={index}><a>{item}</a></li>);
const parentArray = ["Courses Offered", "Students Zone", "News & Events"];
const childArray = [["Fashion Designing","Computer Education","Multimedia Training","Photography","Spoken English","Beautician Courses"],["Portfolio","Roll of Honour"],["Workshops= & Seminar","Fashion Events"]];
const parentDict = [
    {
        Name:"Courses Offered",
        Array:["Fashion Designing","Computer Education","Multimedia Training","Photography","Spoken English","Beautician Courses"]
    },
    {
        Name:"Students Zone",
        Array:["Portfolio","Roll of Honour"]
    },
    {
        Name:"News & Events",
        Array:["Workshops & Seminar","Fashion Events"]
    }
]
const Dropdown =  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>;     


class Navlist extends Component {
    render() {
        return (
            <>
                {mainList}
                <li tabIndex="0">
                    <a>
                        Courses Offered
                        {Dropdown}
                    </a>
                    <ul className="p-2 bg-base-200">
                        <li><a>Fashion Designing</a></li>
                        <li><a>Computer Education</a></li>
                        <li><a>Multimedia Training</a></li>
                        <li><a>Photography</a></li>
                        <li><a>Spoken English</a></li>
                        <li><a>Beautician Courses</a></li>
                    </ul>
                </li>
                <li tabIndex="0">
                    <a>
                    Students Zone
                    {Dropdown}
                    </a>
                    <ul className="p-2 bg-base-200">
                        <li><a>Portfolio</a></li>
                        <li><a>Roll of Honour</a></li>
                    </ul>
                </li>
                <li tabIndex="0">
                    <a>
                    News & Events
                    {Dropdown}
                    </a>
                    <ul className="p-2 bg-base-200">
                        <li><a>Workshop & Seminar</a></li>
                        <li><a>Fashion Events</a></li>
                    </ul>
                </li>
            </>
        )
    }
}

export default Navlist;