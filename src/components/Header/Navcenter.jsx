import { Component } from "react";
import { Menu, Navbar } from "react-daisyui";
import Navlist from "./Navlist";

class Navcenter extends Component {
    render() {
        return (
            <Navbar.Center className="hidden xl:flex">
                <Menu horizontal className="p-0">
                    <Navlist />
                </Menu>
            </Navbar.Center>
        )
    }
}

export default Navcenter;