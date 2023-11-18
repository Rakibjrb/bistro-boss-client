import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();

  const { data: admin } = useQuery({
    queryKey: ["checkAdmin"],
    queryFn: async () => {
      const res = await axios.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return [admin];
};

export default useAdmin;
