import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Nav from "./Layout/Nav/Nav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div data-theme="light">
      <Toaster position="top-center" reverseOrder={false} />
      <Nav />
      <div className="mt-[80px] lg:mt-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
