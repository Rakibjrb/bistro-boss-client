import Banner from "./HomeComponents/Banner/Banner";
import BistroBoss from "./HomeComponents/BistroBoss/BistroBoss";
import OrderOnline from "./HomeComponents/OrderOnline/OrderOnline";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <OrderOnline />
        <BistroBoss />
      </div>
    </>
  );
};

export default Home;
