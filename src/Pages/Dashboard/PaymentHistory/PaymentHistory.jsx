import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/CommonHeader/SectionHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Payments from "./Payments";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();

  const { data: paymentHistory, isPending } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const res = await axios.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="px-2">
      <SectionHeader toptitle={"--history--"} title={"Payment History"} />
      <div className="flex justify-between mt-5 flex-col lg:flex-row">
        <div className="flex justify-between mb-5 w-full lg:pr-20">
          <h4 className="text-2xl font-semibold">
            Total History : {paymentHistory?.length || 0}
          </h4>
        </div>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto">
          {isPending ? (
            "Loading your data please wait"
          ) : (
            <div>
              {paymentHistory ? (
                <table className="table w-full">
                  <thead className="bg-gray-600 rounded-lg">
                    <tr>
                      <th className="text-xl text-white">NO. :</th>
                      <th className="text-xl text-white">Email</th>
                      <th className="text-xl text-white">Price</th>
                      <th className="text-xl text-white">Date</th>
                      <th className="text-xl text-white">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory?.map((payment, index) => (
                      <Payments
                        key={payment._id}
                        payment={payment}
                        index={index}
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

export default PaymentHistory;
