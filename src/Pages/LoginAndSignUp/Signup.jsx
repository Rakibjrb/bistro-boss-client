import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ExtraLogin from "./ExtraLogin";
import "./loginSignUp.css";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";

const Signup = () => {
  const { loading, createNewUser, updateUserProifle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const clearPasswordField = (form) => {
    setTimeout(() => {
      form.password.value = "";
      form.rtpassword.value = "";
    }, 2000);
  };

  const handleUserCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const retypePassword = form.rtpassword.value;
    if (password.length < 7 && retypePassword.length < 7) {
      toast.error("Password must have at least 8 characters !!!");
      clearPasswordField(form);
      return;
    } else if (!(password === retypePassword)) {
      toast.error("Retype Password Does'nt matched !!!");
      clearPasswordField(form);
      return;
    } else if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(password)) {
      toast.error("Password Must Have 1 Spacial Character !!!");
      return;
    } else if (
      !/(?=.*[0-9])/.test(password) &&
      !/(?=.*[0-9])/.test(retypePassword)
    ) {
      toast.error("Password must have at least 1 number !!!");
      return;
    } else if (
      !/(?=.*[A-Z])/.test(password) &&
      !/(?=.*[A-Z])/.test(retypePassword)
    ) {
      toast.error("Password must have at least 1 Uppercase Letter !!!");
      return;
    }

    createNewUser(email, password)
      .then(() => {
        toast.success("User Account Creation Successfull ...");
        form.reset();
        updateUserProifle(name)
          .then(() => {
            location?.state?.from
              ? navigate(location?.state?.from)
              : navigate("/");
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => {
        toast.error("something went wrong !!!");
        console.log(e);
      });
  };

  return (
    <div className="login-page w-full h-[760px] flex justify-center items-center mt-[80px] px-4 md:px-0 bg-[#000000d3]">
      <form
        onSubmit={handleUserCreate}
        className="bg-[#00000089] border-2 border-white form-control p-10 w-[500px] rounded-lg"
      >
        <h2 className="text-white text-3xl text-center mb-5">User Sign Up</h2>
        <div className="w-full space-y-5">
          <input
            type="name"
            placeholder="Enter name"
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            name="name"
            required
          />
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
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Retype password"
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            name="rtpassword"
            required
          />
          <button className="btn bg-red-500 text-white hover:text-black w-full">
            {loading ? (
              <ImSpinner3 className="animate-spin text-xl" />
            ) : (
              "Sign Up Now"
            )}
          </button>
          <div className="my-2 flex text-white justify-between">
            <p className="font-semibold">Already have an accound?</p>
            <Link to="/user-login" className="font-semibold hover:text-red-500">
              Login now
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

export default Signup;
