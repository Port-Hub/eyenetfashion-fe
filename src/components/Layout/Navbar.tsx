import { Link } from "react-router-dom";
import Navlist from "./Routes";

const Navstart: (arg: any) => JSX.Element = () => {
    return (
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost xl:hidden">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h8m-8 6h16" 
            />
            </svg>
          </label>
          <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          <Navlist />
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
        Eyenet Fashion
        </Link>
      </div>
    );
};

const Navcenter: (arg: any) => JSX.Element = () => {
    return (
        <div className="navbar-center hidden xl:flex">
            <ul className="menu menu-horizontal p-0">
                <Navlist />
            </ul>
        </div>
    )
}

const Navend: (arg: any) => JSX.Element = () => {
  return (
      <div className="navbar-end space-x-5">
          <Link className="btn btn-sm btn-outline btn-primary" to="/contact">Contact</Link>
      </div>
  )
}

const Navbar: (arg: any) => JSX.Element = () => {
    return (
      <nav className="navbar bg-base-200 bg-opacity-75 z-10 sticky top-0">
        <Navstart />
        <Navcenter />
        <Navend />
      </nav>
    )
}

export default Navbar;
