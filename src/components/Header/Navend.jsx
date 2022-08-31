import { useState, createRef } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

const Navend = () => {
    const [check, setCheck] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const lbutton = createRef();
    const dbutton = createRef();

    const themeSwitch = () => {
        setCheck(!check);
        if(check){
            lbutton.current.click();
        }
        else{
            dbutton.current.click();
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
