import { NavLink } from "react-router-dom";
import "./nav.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [sticky, setSticky] = useState(false);

  const navlinks = (
    <>
      <li>
        <NavLink to="/" className="uppercase">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className="uppercase">
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className=" uppercase">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-menu" className="uppercase">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-shop/salad" className="uppercase">
          Our Shop
        </NavLink>
      </li>
    </>
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div
      className={`bg-black ${
        sticky ? "sticky" : "absolute"
      } top-0 left-0 z-[100] w-full bg-opacity-40 transition-all duration-700`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="navbar min-h-[80px]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navlinks}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl text-white">
              Bistro BOSS
            </a>
          </div>
          <div className="navbar-end lg:w-full xl:w-1/2 hidden lg:flex lg:text-white">
            <ul className="space-x-8 menu-horizontal px-1">{navlinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
