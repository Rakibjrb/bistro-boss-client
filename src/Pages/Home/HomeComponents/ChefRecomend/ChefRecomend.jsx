import { useEffect, useState } from "react";
import axios from "axios";
import SectionHeader from "../../../../Components/CommonHeader/SectionHeader";
import ItemsCard from "./ItemsCard";

const ChefRecomend = () => {
  const [loading, setLoading] = useState(true);
  const [offeredMenu, setOfferedMenu] = useState([]);

  useEffect(() => {
    axios.get("./menu.json").then((res) => {
      const filtered = res.data?.filter((item) => item.category === "offered");
      setOfferedMenu(filtered);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mb-32 px-3 xl:px-0">
      <SectionHeader toptitle="---Should Try---" title="CHEF RECOMMENDS" />
      {loading ? (
        "loading data ....."
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offeredMenu?.map((menu) => (
            <ItemsCard key={menu._id} menu={menu} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChefRecomend;
