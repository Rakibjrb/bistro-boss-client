import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import OurMenu from "../Pages/OurMenu/OurMenu";

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
        path: "/our-menu",
        element: <OurMenu />,
      },
    ],
  },
]);

export default routes;
