import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PageHeader from "../../Components/PageHeader/PageHeader";
import OurShopImg from "../../assets/shop/banner2.jpg";
import ItemsCard from "../../Components/ItemsCard.jsx/ItemsCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";

const OurShop = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const categories = ["offered", "salad", "pizza", "dessert", "soup", "drink"];
  const { category } = useParams();
  const defaultIndex = categories.indexOf(category);
  const dessert = menus?.filter((menu) => menu.category === "dessert");
  const pizza = menus?.filter((menu) => menu.category === "pizza");
  const salad = menus?.filter((menu) => menu.category === "salad");
  const soup = menus?.filter((menu) => menu.category === "soup");
  const drinks = menus?.filter((menu) => menu.category === "drinks");
  const offered = menus?.filter((menu) => menu.category === "offered");

  useEffect(() => {
    axios.get(`/menus/all`).then((res) => {
      setMenus(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <PageHeader img={OurShopImg} title={"Our shop"} />
      <div className="max-w-7xl mx-auto mb-16 px-3 xl:px-0">
        <Tabs defaultIndex={defaultIndex}>
          <TabList>
            <Tab>Offered</Tab>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>DESSERT</Tab>
            <Tab>SOUP</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            {loading ? (
              "loading data ....."
            ) : (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {offered?.map((menu) => (
                  <ItemsCard key={menu._id} menu={menu} />
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              "loading data ....."
            ) : (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {salad?.map((menu) => (
                  <ItemsCard key={menu._id} menu={menu} />
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              "loading data ....."
            ) : (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {pizza?.map((menu) => (
                  <ItemsCard key={menu._id} menu={menu} />
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              "loading data ....."
            ) : (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {soup?.map((menu) => (
                  <ItemsCard key={menu._id} menu={menu} />
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              "loading data ....."
            ) : (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {dessert?.map((menu) => (
                  <ItemsCard key={menu._id} menu={menu} />
                ))}
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              "loading data ....."
            ) : (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {drinks?.map((menu) => (
                  <ItemsCard key={menu._id} menu={menu} />
                ))}
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
