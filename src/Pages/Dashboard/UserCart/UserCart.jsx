import SectionHeader from "../../../Components/CommonHeader/SectionHeader";
import useCart from "../../../Hooks/useCart";
import CartItems from "./CartItems";

const UserCart = () => {
  const [cartItems, , isPending] = useCart();
  const totalPrice = cartItems?.reduce(
    (sum, currentvalue) => sum + currentvalue.price,
    0
  );

  return (
    <div className="pl-2">
      <SectionHeader toptitle={"--My Cart--"} title={"Wanna Do Add More?"} />
      <div className="flex justify-between mt-8">
        <h4 className="text-2xl font-semibold">
          Total Cart Items : {cartItems.length || 0}
        </h4>
        <h4 className="text-2xl font-semibold">
          Total Price : {totalPrice.toFixed(2) || 0} $
        </h4>
        <button className="btn btn-neutral">Pay Now</button>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto max-w-6xl">
          {isPending ? (
            "Loading your data please wait"
          ) : (
            <div>
              {cartItems ? (
                <table className="table w-[1080px] xl:w-full">
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
                      <CartItems key={item._id} item={item} index={index} />
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
