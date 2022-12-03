import React from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#service">Services</a>
      </li>
      <li>
        <a href="#show-service">Our Works</a>
      </li>
      <li>
        <a href="#review">Clients</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <section>
      <div className="navbar container mx-auto justify-between">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-3xl font-bold">Eduie</a>
        </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-2xl">
             <BiMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
