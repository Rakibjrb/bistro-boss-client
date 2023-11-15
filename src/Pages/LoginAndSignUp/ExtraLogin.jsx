import { FcGoogle } from "react-icons/fc";

const ExtraLogin = () => {
  return (
    <div className="w-full mt-5 font-roboto">
      <div className="flex items-center justify-between mb-5">
        <div className="bg-white h-1 w-28"></div>
        <h3 className="text-white text-xl">OR</h3>
        <div className="bg-white h-1 w-28"></div>
      </div>
      <button className="py-2 px-3 btn w-full bg-transparent text-white hover:text-black">
        <FcGoogle className="text-2xl" /> Google
      </button>
    </div>
  );
};

export default ExtraLogin;
