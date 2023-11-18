import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const instace = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const useAxiosSecure = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate();

  instace.interceptors.request.use(
    function (config) {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "access-token"
      )}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instace.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status == 401 || error.response.status == 403) {
        userLogout();
        navigate("/user-login");
      }
      return Promise.reject(error);
    }
  );

  return instace;
};

export default useAxiosSecure;
