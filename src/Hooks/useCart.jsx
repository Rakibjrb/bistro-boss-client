import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCart = () => {
  const axios = useAxios();

  const { data: cartItems = [] } = useQuery({
    queryKey: ["getcartItems"],
    queryFn: async () => {
      const res = await axios.get("/cart");
      return res.data;
    },
  });
  return [cartItems];
};

export default useCart;
