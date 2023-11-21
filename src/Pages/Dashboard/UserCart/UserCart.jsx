import SectionHeader from "../../../Components/CommonHeader/SectionHeader";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const UserCart = () => {
  const [cartItems, refetch, isPending] = useCart();
  const totalPrice = cartItems?.reduce(
    (sum, currentvalue) => sum + currentvalue.price,
    0
  );

  return (
    <div className="px-2">
      <SectionHeader toptitle={"--My Cart--"} title={"Wanna Do Add More?"} />
      <div className="flex justify-between mt-5 flex-col lg:flex-row">
        <div className="flex justify-between mb-5 w-full lg:pr-20">
          <h4 className="text-2xl font-semibold">
            Total Cart Items : {cartItems.length || 0}
          </h4>
          <h4 className="text-2xl font-semibold">
            Total Price : {parseFloat(totalPrice).toFixed(2) || 0} $
          </h4>
        </div>
        {parseFloat(totalPrice).toFixed(2) > 0 ? (
          <Link to="/user-dashboard/make-payment" className="btn btn-neutral">
            Pay Now
          </Link>
        ) : (
          <button disabled className="btn btn-neutral">
            Pay Now
          </button>
        )}
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto">
          {isPending ? (
            "Loading your data please wait"
          ) : (
            <div>
              {cartItems ? (
                <table className="table w-full">
                  <thead className="bg-gray-600 rounded-lg">
                    <tr>
                      <th className="text-xl text-white">NO. :</th>
                      <th className="text-xl text-white">Image</th>
                      <th className="text-xl text-white">Item Name</th>
                      <th className="text-xl text-white">Price</th>
                      <th className="text-xl text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((item, index) => (
                      <CartItems
                        key={item._id}
                        item={item}
                        index={index}
                        refetch={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              ) : (
                "No data found"
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCart;
