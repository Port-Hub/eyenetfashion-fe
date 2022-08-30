import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";

const Navend = () => {
    const [check, setCheck] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const lbutton = document.getElementById('light');
    const dbutton = document.getElementById('dark');
    useEffect(() => {
        themeChange(false)
    }, [])

    const themeSwitch = () => {
        setCheck(!check);
        if(check){
            lbutton.click();
        }
        else{
            dbutton.click();
        }
    }
    return (
        <div className="navbar-end space-x-5">
            <button id="light" data-set-theme="cmyk" data-act-class="ACTIVECLASS"></button>
            <button id="dark" data-set-theme="forest" data-act-class="ACTIVECLASS"></button>
            <input type="checkbox" checked={check} onChange={themeSwitch} className="toggle toggle-sm sm:toggle-md xl:toggle-lg toggle-primary px-4" />
            <Link className="btn btn-sm sm:btn-sm lg:btn-md btn-outline btn-primary" to="/contact">Contact</Link>
        </div>
    )
}

export default Navend;
