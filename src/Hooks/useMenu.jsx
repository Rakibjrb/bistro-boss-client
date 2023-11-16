import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axios = useAxios();

  const { data: menus = [], isPending: loading } = useQuery({
    queryKey: ["getmenus"],
    queryFn: async () => {
      const res = await axios.get("/menus/all");
      return res.data;
    },
  });

  return [menus, loading];
};
export default useMenu;
