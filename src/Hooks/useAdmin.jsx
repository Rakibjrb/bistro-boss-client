import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();

  const { data: admin, isPending: isAdminLoading } = useQuery({
    queryKey: ["checkAdmin"],
    queryFn: async () => {
      const res = await axios.get(`/users/admin/${user.email}`);
      return res.data;
    },
  });

  return [admin, isAdminLoading];
};

export default useAdmin;
