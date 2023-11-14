import { Helmet } from "react-helmet-async";
import PageHeader from "../../Components/PageHeader/PageHeader";
import OurMenuImg from "../../assets/menu/banner3.jpg";
import DessertImg from "../../assets/home/chef-service.jpg";
import SectionHeader from "../../Components/CommonHeader/SectionHeader";
import MenuSection from "../../Components/MenuSection/MenuSection";
import useMenu from "../../Hooks/useMenu";

const OurMenu = () => {
  const [menus, loading] = useMenu();
  const offered = menus?.filter((menu) => menu.category === "offered");
  const dessert = menus?.filter((menu) => menu.category === "dessert");
  const pizza = menus?.filter((menu) => menu.category === "pizza");
  const salad = menus?.filter((menu) => menu.category === "salad");
  const soup = menus?.filter((menu) => menu.category === "soup");
  const drinks = menus?.filter((menu) => menu.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <PageHeader img={OurMenuImg} title={"OUR MENU"} />
      <div className="max-w-7xl mx-auto mb-16">
        <SectionHeader toptitle={"---Don't miss---"} title={"TODAY'S OFFER"} />
        <MenuSection loading={loading} items={offered} />
      </div>
      <div className="max-w-7xl mx-auto mb-16">
        <PageHeader img={DessertImg} title={"Dessert"} />
        <MenuSection loading={loading} items={dessert} />
      </div>
      <div className="max-w-7xl mx-auto mb-16">
        <PageHeader img={DessertImg} title={"Pizza"} />
        <MenuSection loading={loading} items={pizza} />
      </div>
      <div className="max-w-7xl mx-auto mb-16">
        <PageHeader img={DessertImg} title={"Salads"} />
        <MenuSection loading={loading} items={salad} />
      </div>
      <div className="max-w-7xl mx-auto mb-16">
        <PageHeader img={DessertImg} title={"Soups"} />
        <MenuSection loading={loading} items={soup} />
      </div>
      <div className="max-w-7xl mx-auto mb-16">
        <PageHeader img={DessertImg} title={"Drinks"} />
        <MenuSection loading={loading} items={drinks} />
      </div>
    </div>
  );
};

export default OurMenu;
