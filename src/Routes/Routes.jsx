import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/LoginAndSignUp/Login";
import Signup from "../Pages/LoginAndSignUp/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserCart from "../Pages/Dashboard/UserCart/UserCart";
import UserDashboard from "../Pages/Dashboard/UserDashboard/UserDashboard";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import MakePayment from "../Pages/Dashboard/MakePayment/MakePayment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "our-menu",
        element: <OurMenu />,
      },
      {
        path: "our-shop/:category",
        element: (
          <PrivateRoute>
            <OurShop />
          </PrivateRoute>
        ),
      },
      {
        path: "user-login",
        element: <Login />,
      },
      {
        path: "user-signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "user-dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <UserDashboard />,
      },
      {
        path: "cart",
        element: <UserCart />,
      },
      {
        path: "make-payment",
        element: <MakePayment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },

      //admin routes
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <AdminRoute>
            <ManageBookings />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default routes;
