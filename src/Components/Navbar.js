import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  // These two value is responsible to give us a flag ki user logged in h ya ni
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" height={32} width={160} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-3 text-richblack-100 gap-x-6 text-lg font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - Signup -Logout-Dashboard */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-richblack-100 bg-richblack-800 px-[12px] py-[8px] rounded-[8px] border border-richblack-700 ">
              Login
            </button>
          </Link>
        )}
        {/* Signup Button */}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="text-richblack-100 bg-richblack-800 px-[12px] py-[8px] rounded-[8px] border border-richblack-700 ">
              Sign up
            </button>
          </Link>
        )}

        {/* Log Out button */}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="text-richblack-5 bg-richblack-800 px-[12px] py-[8px] rounded-[8px] border border-richblack-700 "
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Sign out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="text-white bg-richblack-800 px-[12px] py-[8px] rounded-[8px] border border-richblack-700 ">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
