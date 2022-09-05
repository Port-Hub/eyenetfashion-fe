import { Link } from "react-router-dom";

const Navend = () => {
    return (
        <div className="navbar-end space-x-5">
            <Link className="btn btn-sm btn-outline btn-primary" to="/contact">Contact</Link>
        </div>
    )
}

export default Navend;
