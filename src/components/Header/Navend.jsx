import { Component } from "react";
import { Link } from "react-router-dom";

class Navend extends Component {
    render() {
        return (
            <div className="navbar-end">
                <Link className="btn btn-sm sm:btn-sm lg:btn-md btn-outline btn-primary" to="/contact">Contact</Link>
            </div>
        )
    }
}

export default Navend;