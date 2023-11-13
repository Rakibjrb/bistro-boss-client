import { useEffect, useState } from "react";
import axios from "axios";
import SectionHeader from "../../../../Components/CommonHeader/SectionHeader";
import Menu from "./Menu";

const OurMenus = () => {
  const [loading, setLoading] = useState(true);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get("./menu.json").then((res) => {
      const popular = res.data?.filter((item) => item.category === "popular");
      setMenus(popular);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mb-32 px-3 xl:px-0">
      <SectionHeader toptitle="---Check it out---" title="From Our Menu" />
      {loading ? (
        "loading data ..."
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 mt-8">
          {menus?.map((menu) => (
            <Menu key={menu._id} menu={menu} />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8">
        <button className="px-5 py-2 border-b-4 border-b-black uppercase rounded-b-lg hover:bg-gray-400 rounded-t-lg">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default OurMenus;
