import React from "react";
import Navstart from "./Navstart";
import Navcenter from "./Navcenter";
import Navend from "./Navend";

const Navbar = () => {
    return (
      <nav className="navbar bg-base-200 bg-opacity-75 z-10 sticky top-0">
        <Navstart />
        <Navcenter />
        <Navend />
      </nav>
    )
}

export default Navbar;