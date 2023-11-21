import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../../../Components/CommonHeader/SectionHeader";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const MakePayment = () => {
  return (
    <div>
      <SectionHeader toptitle={"--Payment--"} title={"Make Payment Now"} />
      <div className="max-w-4xl mx-auto mt-10">
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </div>
    </div>
  );
};

export default MakePayment;
