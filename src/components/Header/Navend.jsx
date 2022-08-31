import { useState, createRef } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

const html = document.querySelector("html");

const Navend = () => {
    const [check, setCheck] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const lbutton = createRef();
    const dbutton = createRef();

    if(check)
        html.classList.add("dark")
    else
        html.classList.remove("dark")

    const themeSwitch = () => {
        setCheck(!check);
        if(check){
            lbutton.current.click();
            html.classList.remove("dark")
        }
        else{
            dbutton.current.click();
            html.classList.add("dark")
        }
    }
    return (
        <div className="navbar-end space-x-5">
            <Buttons light={lbutton} dark={dbutton} />
            <input type="checkbox" checked={check} onChange={themeSwitch} className="toggle toggle-sm toggle-primary px-4" />
            <Link className="btn btn-sm btn-outline btn-primary" to="/contact">Contact</Link>
        </div>
    )
}

export default Navend;
