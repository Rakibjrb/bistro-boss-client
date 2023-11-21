import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const {
    data: cartItems = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["getcartItems", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/cart?email=${user?.email}`);
      return res.data;
    },
  });
  return [cartItems, refetch, isPending];
};

export default useCart;
