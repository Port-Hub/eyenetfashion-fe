import { Component } from "react";
import Navlist from "./Navlist.jsx";

class Navcenter extends Component {
    render() {
        return (
            <div className="navbar-center hidden xl:flex">
                <ul className="menu menu-horizontal p-0">
                    <Navlist />
                </ul>
            </div>
        )
    }
}

export default Navcenter;