import React from "react";
import { Navbar } from "react-daisyui";
import Navstart from "./Navstart";
import Navcenter from "./Navcenter";
import Navend from "./Navend";

const NavBar = () => {
    return (
      <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <Navbar>
          <Navstart />
          <Navcenter />
          <Navend />
        </Navbar>
      </div>
    )
}

export default NavBar;