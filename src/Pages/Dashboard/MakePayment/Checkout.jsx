import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const Checkout = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const [cartItems, , isPending] = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [secrete, setSecrete] = useState(null);

  const totalPrice = cartItems?.reduce((total, item) => total + item.price, 0);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
    }

    if (paymentMethod) {
      //   console.log("Payment Method", paymentMethod);
      const { paymentIntent, error: paymentError } =
        await stripe.confirmCardPayment(secrete, {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "anonymus",
              email: user?.email || "anonymus email",
            },
          },
        });

      if (paymentError) {
        toast.error("something went wrong !!! Payment eror");
      } else {
        const productIds = cartItems?.map((item) => item._id);
        const itemIds = cartItems?.map((item) => item.itemId);

        const orderInfo = {
          name: user?.displayName,
          price: totalPrice,
          transectionId: paymentIntent.id,
          email: user?.email,
          date: new Date(),
          itemIds,
          productIds,
          status: "Pending",
        };

        axios
          .post("/payments", { orderInfo })
          .then((res) => {
            res.data &&
              toast.success("Payment successfull. Go to payment history.....");
          })
          .catch((err) => {
            console.log(err);
            console.log("called error");
          });
      }
    }
  };

  useEffect(() => {
    isPending
      ? ""
      : axios
          .post("/create-payment-intents", { price: parseInt(totalPrice) })
          .then((res) => {
            setSecrete(res.data?.clientSecret);
          })
          .catch((err) => {
            console.log(err);
          });
  }, [isPending, axios, totalPrice]);

  return (
    <form onSubmit={handlePayment}>
      <div className="bg-gray-200 p-6 rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-neutral mt-3 w-full"
        disabled={!stripe || !secrete}
      >
        Pay
      </button>
    </form>
  );
};

export default Checkout;
