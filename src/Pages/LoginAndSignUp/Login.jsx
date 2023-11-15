import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import ExtraLogin from "./ExtraLogin";
import "./loginSignUp.css";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { ImSpinner3 } from "react-icons/im";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const captchaRef = useRef();
  const { userLogin, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state.from);

  const validateCaptchaFunc = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      toast.error("Captcha not valid");
      captchaRef.current.value = "";
      setDisable(true);
    }
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 7) {
      toast.error("Password must have at least 8 characters !!!");
      setTimeout(() => {
        e.target.password.value = "";
      }, 2000);
      return;
    } else if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(password)) {
      toast.error("Password Must Have 1 Spacial Character !!!");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      toast.error("Password must have at least 1 number !!!");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password must have at least 1 Uppercase Letter !!!");
      return;
    }

    userLogin(email, password)
      .then(() => {
        toast.success("User login successfull ...");
        location?.state?.from ? navigate(location?.state?.from) : navigate("/");
      })
      .catch((e) => {
        if (e) toast.error("Please provide valid info !!!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="w-full h-[760px] flex justify-center items-center mt-[80px] px-4 md:px-0 bg-[#000000d3]">
      <form
        onSubmit={handleUserLogin}
        className="bg-[#00000089] border-2 border-white form-control p-10 w-[500px] rounded-lg"
      >
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
          <div className="bg-white px-4 py-2 rounded-lg">
            <LoadCanvasTemplate />
          </div>
          <input
            onBlur={validateCaptchaFunc}
            type="text"
            placeholder="Type Captcha"
            name="captcha"
            ref={captchaRef}
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            required
          />
          <button
            className={`${
              disable ? "hidden" : "block"
            } btn bg-red-500 text-white hover:text-black w-full`}
          >
            {loading ? (
              <ImSpinner3 className="animate-spin text-xl" />
            ) : (
              "Login Now"
            )}
          </button>
          <div
            className={`${
              disable ? "block" : "hidden"
            } text-center py-2 rounded-lg bg-red-500 text-white w-full`}
          >
            Complete Captcha
          </div>
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
