import { Component } from "react";

const mapChild = (param) => {
    return (
        param.map((item, index) => (
        <li key={index}><a>{item}</a></li>
            )
        )
    )
}

const mapParent = (param) => {
    return (
        param.map((item,index) => (
        <li tabIndex="0" key={index}>
            <a>
                {item.Name}
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
const childArray = ["About Us","Infrastructure","Gallery"];
const parentArray = [
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

const childList = mapChild(childArray);
const parentList = mapParent(parentArray);

class Navlist extends Component {
    render() {
        return (
            <>
                {childList}
                {parentList}
            </>
        )
    }
}

export default Navlist;