import { Component } from "react";
import { Link } from "react-router-dom";

class Navend extends Component {
    render() {
        return (
            <div className="navbar-end">
                <input type="checkbox" className="toggle toggle-primary px-4" />
                <Link className="btn btn-sm sm:btn-sm lg:btn-md btn-outline btn-primary" to="/contact">Contact</Link>
            </div>
        )
    }
}

export default Navend;
