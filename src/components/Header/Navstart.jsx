import { Component, useState } from "react";
import Navlist from "./Navlist.jsx";

class Navstart extends Component {
    render() {
        return (
            <div className="navbar-start">
                <div className="dropdown">
                    <label className="btn btn-ghost swap swap-rotate xl:hidden">
                        <input type="checkbox"/>
  
                        <svg className="swap-off" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      
                        <svg className="swap-on" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Navlist />
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" href="#">Eyenet Fashion</a>
            </div>
        )
    }
}

export default Navstart;