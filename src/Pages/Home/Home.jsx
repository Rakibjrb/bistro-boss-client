import Banner from "./HomeComponents/Banner/Banner";
import BistroBoss from "./HomeComponents/BistroBoss/BistroBoss";
import CallUs from "./HomeComponents/CallUs/CallUs";
import ChefRecomend from "./HomeComponents/ChefRecomend/ChefRecomend";
import FromMenu from "./HomeComponents/FromMenu/FromMenu";
import OrderOnline from "./HomeComponents/OrderOnline/OrderOnline";
import OurMenus from "./HomeComponents/OurMenus/OurMenus";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <OrderOnline />
        <BistroBoss />
        <OurMenus />
        <CallUs />
        <ChefRecomend />
        <FromMenu />
      </div>
    </>
  );
};

export default Home;
