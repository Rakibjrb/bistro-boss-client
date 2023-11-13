import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Nav from "./Layout/Nav/Nav";

function App() {
  return (
    <div data-theme="light">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
