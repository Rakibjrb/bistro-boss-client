import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/LoginAndSignUp/Login";
import Signup from "../Pages/LoginAndSignUp/Signup";

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
        element: <OurShop />,
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
]);

export default routes;
