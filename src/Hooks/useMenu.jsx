import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  const axios = useAxios();

  useEffect(() => {
    axios.get("/menus/all").then((res) => {
      setMenus(res.data);
      setLoading(false);
    });
  }, []);

  return [menus, loading];
};
export default useMenu;
