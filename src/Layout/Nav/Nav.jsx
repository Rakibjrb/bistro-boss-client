import { Link, NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Nav = () => {
  const [sticky, setSticky] = useState(false);
  const { user, userLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogout().then(() => {
      toast.success("Logout Success ...");
      navigate("/");
    });
  };

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

  const loginLinks = (
    <>
      <li>
        <Link to="/user-login">Login Now</Link>
      </li>
    </>
  );

  const loggedLinks = (
    <>
      <li>
        <a>{user && user.displayName}</a>
      </li>
      <li>
        <Link to="/user-dashboard">Dashboard</Link>
      </li>
      <li>
        <button onClick={handleLogOut}>Logout</button>
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
        sticky ? "sticky bg-opacity-40" : "absolute lg:bg-opacity-50"
      } top-0 left-0 z-[100] w-full transition-all duration-700`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="navbar min-h-[80px]">
          <div className="navbar-start w-full justify-between lg:justify-normal lg:w-auto">
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
            {/* mobile user dropdown */}
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://i.ibb.co/5x441PC/user.png"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                {user ? loggedLinks : loginLinks}
              </ul>
            </div>
          </div>
          <div className="navbar-end lg:w-full hidden lg:flex lg:text-white">
            <ul className="space-x-8 menu-horizontal px-1">{navlinks}</ul>
            {/* desktop user dropdown */}
            <div className="dropdown dropdown-end ml-4">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://i.ibb.co/5x441PC/user.png"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                {user ? loggedLinks : loginLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
