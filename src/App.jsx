import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Nav from "./Layout/Nav/Nav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div data-theme="light">
      <Toaster position="top-center" reverseOrder={false} />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
