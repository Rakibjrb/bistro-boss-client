import axios from "axios";
import { getTokenFromLocalStorage } from "../utilities/access-localstorage";

const instace = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const useAxiosSecure = () => {
  const token = getTokenFromLocalStorage();
  instace.interceptors.request.use(
    function (config) {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instace;
};

export default useAxiosSecure;
