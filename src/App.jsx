import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Nav from "./Layout/Nav/Nav";

function App() {
  return (
    <div data-theme="light">
      <Nav />
      <div className="mt-[80px] lg:mt-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
