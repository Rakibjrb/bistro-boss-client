import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/CommonHeader/SectionHeader";
import CartItems from "./CartItems";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UserCart = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const {
    data: cartItems = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["getcartItems", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/cart?email=${user?.email}`);
      return res.data;
    },
  });
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
            Total Price : {totalPrice.toFixed(2) || 0} $
          </h4>
        </div>
        <button className="btn btn-neutral">Pay Now</button>
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
