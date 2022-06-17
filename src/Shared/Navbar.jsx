import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-brands-svg-icons";
// import {} from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="text-blue-500 flex">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <img className="h-14" src={logo} alt="" />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <li>
                <a>Item 1</a>
              </li>
              <li tabIndex="0">
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li> */}
              <div className="navbar-end">
                <a className="btn btn-ghost">
                  Login{" "}
                  <FontAwesomeIcon className="ml-1" icon={faRightToBracket} />
                </a>
                <a className="btn btn-ghost">
                  Sign Up{" "}
                  <FontAwesomeIcon className="ml-1" icon={faRightToBracket} />
                </a>
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="h-14 lg:h-20 hidden lg:block" src={logo} alt="" />
          </a>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex="0">
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
        <div className="hidden lg:block">
          <a className="btn btn-ghost">
            Login <FontAwesomeIcon className="ml-1" icon={faRightToBracket} />
          </a>
          <a className="btn btn-ghost">
            Sign Up <FontAwesomeIcon className="ml-1" icon={faRightToBracket} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
