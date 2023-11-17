import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-w-[768px] overflow-auto px-3 xl:px-0">
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col-reverse lg:flex-col">
            <div className="mt-0">
              <Outlet />
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-neutral drawer-button lg:hidden absolute top-0 left-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <NavLink to="profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="reservation">Reservation</NavLink>
              </li>
              <li>
                <NavLink to="payment-history">Payment History</NavLink>
              </li>
              <li>
                <NavLink to="cart">My Cart</NavLink>
              </li>
              <li>
                <NavLink to="add-review">Add Review</NavLink>
              </li>
              <li>
                <NavLink to="my-booking">My Booking</NavLink>
              </li>
              <li>
                <NavLink to="/">Go Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
