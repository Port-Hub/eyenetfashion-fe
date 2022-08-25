import { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown, Button } from "react-daisyui";
import Navlist from "./Navlist";

class Navstart extends Component {
    render() {
        return (
            <Navbar.Start>
                <Dropdown>
                    <Button color="ghost" tabIndex={0} className="xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </Button>
                    <Dropdown.Menu tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Navlist />
                    </Dropdown.Menu>
                </Dropdown>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Eyenet Fashion</Link>
            </Navbar.Start>
        )
    }
}

export default Navstart;