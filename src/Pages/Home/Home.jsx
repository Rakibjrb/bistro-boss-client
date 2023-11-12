import Banner from "./HomeComponents/Banner/Banner";
import OrderOnline from "./HomeComponents/OrderOnline/OrderOnline";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <OrderOnline />
      </div>
    </>
  );
};

export default Home;
