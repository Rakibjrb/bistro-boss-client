import { Helmet } from "react-helmet-async";
import Banner from "./HomeComponents/Banner/Banner";
import BistroBoss from "./HomeComponents/BistroBoss/BistroBoss";
import CallUs from "./HomeComponents/CallUs/CallUs";
import ChefRecomend from "./HomeComponents/ChefRecomend/ChefRecomend";
import FromMenu from "./HomeComponents/FromMenu/FromMenu";
import OrderOnline from "./HomeComponents/OrderOnline/OrderOnline";
import OurMenus from "./HomeComponents/OurMenus/OurMenus";
import Testimonials from "./HomeComponents/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <OrderOnline />
        <BistroBoss />
        <OurMenus />
        <CallUs />
        <ChefRecomend />
        <FromMenu />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
