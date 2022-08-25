import { Component } from "react";
import { Navbar } from "react-daisyui";
import { Link } from "react-router-dom";

class Navend extends Component {
    render() {
        return (
            <Navbar.End>
                <Link className="btn btn-sm sm:btn-sm lg:btn-md btn-outline btn-primary" to="/contact">Contact</Link>
            </Navbar.End>
        )
    }
}

export default Navend;