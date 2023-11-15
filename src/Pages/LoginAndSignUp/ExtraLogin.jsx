import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const ExtraLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { googleSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Sign In Success ...");
        location?.from?.state ? navigate(location?.from?.state) : navigate("/");
      })
      .catch((e) => {
        console.log(e);
        toast.error("something went wrong !!!");
      });
  };

  return (
    <div className="w-full mt-5 font-roboto">
      <div className="flex items-center justify-between mb-5">
        <div className="bg-white h-1 w-28"></div>
        <h3 className="text-white text-xl">OR</h3>
        <div className="bg-white h-1 w-28"></div>
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="py-2 px-3 btn w-full bg-transparent text-white hover:text-black"
      >
        <FcGoogle className="text-2xl" /> Google
      </button>
    </div>
  );
};

export default ExtraLogin;
