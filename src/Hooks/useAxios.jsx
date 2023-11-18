import axios from "axios";

const useAxios = () => {
  const axiosPublic = axios.create({
    baseURL: "http://localhost:5000/api/v1",
  });

  return axiosPublic;
};

export default useAxios;
