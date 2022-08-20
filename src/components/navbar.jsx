import React from "react";

class Navlist extends React.Component {
  render() {
    return (
      <>
        <li><a>About Us</a></li>
        <li tabindex="0">
          <a className="justify-between">
            Courses Offered
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Fashion Designing</a></li>
            <li><a>Computer Education</a></li>
            <li><a>Multimedia Training</a></li>
            <li><a>Photography</a></li>
            <li><a>Spoken English</a></li>
            <li><a>Beautician Courses</a></li>
          </ul>
        </li>
        <li><a>Infrastructure</a></li>
        <li tabindex="0">
          <a className="justify-between">
            Students Zone
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Portfolio</a></li>
            <li><a>Roll of Honour</a></li>
          </ul>
        </li>
        <li tabindex="0">
          <a className="justify-between">
            News & Events
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Workshop & Seminar</a></li>
            <li><a>Fashion Events</a></li>
          </ul>
        </li>
        <li><a>Gallery</a></li>
      </>
    );
  }
}

const Navbar = () => {
    return (
    <nav className="navbar bg-base-300">

      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost xl:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <Navlist />
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" href="#">Eyenet Fashion</a>
      </div>

      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal p-0">
          <Navlist />
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-accent">Contact Us</a>
      </div>

    </nav>
    )
}

export default Navbar;