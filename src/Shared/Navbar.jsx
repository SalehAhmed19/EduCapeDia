import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-brands-svg-icons";
// import {} from "@fortawesome/fontawesome-svg-core";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";

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
              <li>
                <a>All Courses</a>
              </li>
              <li>
                <a>Notice</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <div className="navbar-end">
                <Link to="/login" className="btn btn-ghost">
                  Login{" "}
                  <FontAwesomeIcon className="ml-1" icon={faRightToBracket} />
                </Link>
                <Link to="/signup" className="btn btn-ghost">
                  Sign Up{" "}
                  <FontAwesomeIcon className="ml-1" icon={faRightToBracket} />
                </Link>
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="h-14 lg:h-20 hidden lg:block" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>All Courses</a>
            </li>
            <li>
              <a>Notice</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link to="/login" className="btn btn-ghost">
            Login <FontAwesomeIcon className="ml-1" icon={faRightToBracket} />
          </Link>
          <Link to="/signup" className="btn btn-ghost">
            Sign Up <FontAwesomeIcon className="ml-1" icon={faRightToBracket} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
