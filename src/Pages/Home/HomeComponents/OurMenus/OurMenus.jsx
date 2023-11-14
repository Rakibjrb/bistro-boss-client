// import { useEffect, useState } from "react";
// import axios from "axios";
import SectionHeader from "../../../../Components/CommonHeader/SectionHeader";
import MenuItems from "../../../../Components/MenuItems/MenuItems";
import useMenu from "../../../../Hooks/useMenu";

const OurMenus = () => {
  const [menus, loading] = useMenu();
  const popular = menus?.filter((item) => item.category === "popular");

  return (
    <div className="mb-32 px-3 xl:px-0">
      <SectionHeader toptitle="---Check it out---" title="From Our Menu" />
      {loading ? (
        "loading data ..."
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 mt-8">
          {popular?.map((menu) => (
            <MenuItems key={menu._id} menu={menu} />
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
