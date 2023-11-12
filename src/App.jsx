import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Nav from "./Layout/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
