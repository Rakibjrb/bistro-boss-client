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
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <UserCart />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
