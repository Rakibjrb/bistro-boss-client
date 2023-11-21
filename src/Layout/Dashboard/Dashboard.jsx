import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [admin] = useAdmin();
  const isAdmin = admin;

  return (
    <div className="min-w-[768px] overflow-auto px-3 xl:px-0">
      <div>
        <div className="drawer drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="mt-0 ml-[200px]">
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
            <ul className="space-y-5 py-6 px-8 min-h-full bg-gray-600 text-white fixed top-0 left-0">
              {/* Sidebar content here */}
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/user-dashboard/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/admin-home">
                      Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/add-items">Add Items</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/manage-items">
                      Manage Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/manage-bookings">
                      Manage Bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/all-users">All Users</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/cart">My Cart</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/user-dashboard/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/make-payment">
                      Reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/payment-histroy">
                      Payment History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/cart">My Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/add-review">
                      Add Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-dashboard/my-booking">
                      My Booking
                    </NavLink>
                  </li>
                </>
              )}
              <div className="h-1 bg-white my-5"></div>
              <li>
                <NavLink to="/">Go Home</NavLink>
              </li>
              <li>
                <NavLink to="/our-shop/salad">Shop</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
