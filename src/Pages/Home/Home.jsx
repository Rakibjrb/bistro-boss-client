import Banner from "./HomeComponents/Banner/Banner";
import BistroBoss from "./HomeComponents/BistroBoss/BistroBoss";
import CallUs from "./HomeComponents/CallUs/CallUs";
import OrderOnline from "./HomeComponents/OrderOnline/OrderOnline";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <OrderOnline />
        <BistroBoss />
        <CallUs />
      </div>
    </>
  );
};

export default Home;
