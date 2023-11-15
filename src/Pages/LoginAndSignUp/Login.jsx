import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ExtraLogin from "./ExtraLogin";
import "./loginSignUp.css";

const Login = () => {
  return (
    <div className="w-full h-[760px] flex justify-center items-center mt-[88px] px-4 md:px-0">
      <form className="bg-[#00000089] border-2 border-white form-control p-10 w-[500px] rounded-lg">
        <h2 className="text-white text-3xl text-center mb-5">User Login</h2>
        <div className="w-full space-y-5">
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            required
          />
          <button className="btn bg-red-500 text-white hover:text-black w-full">
            Login Now
          </button>
          <div className="my-2 flex text-white justify-between">
            <p className="font-semibold">New here?</p>
            <Link
              to="/user-signup"
              className="font-semibold hover:text-red-500"
            >
              Create Account
            </Link>
          </div>
        </div>
        <div>
          <ExtraLogin />
        </div>
      </form>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
    </div>
  );
};

export default Login;
