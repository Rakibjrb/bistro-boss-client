import axios from "axios";

const useAxios = () => {
  const instace = axios.create({
    baseURL: "http://localhost:5000/api/v1",
  });

  return instace;
};

export default useAxios;
