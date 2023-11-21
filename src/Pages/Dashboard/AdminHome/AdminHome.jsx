import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/CommonHeader/SectionHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const axios = useAxiosSecure();

  const { data, isPending } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axios.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <SectionHeader toptitle={"--admin panel--"} title={"Admin Home"} />
      {isPending ? (
        "Loading data please wait"
      ) : (
        <div className="stats shadow flex  mt-8 gap-5">
          <div className="stat">
            <div className="stat-title text-2xl">Revenue</div>
            <div className="stat-value">
              {parseFloat(data?.revenue).toFixed(2) || 0}$
            </div>
          </div>
          <div className="stat">
            <div className="stat-title text-2xl">Products</div>
            <div className="stat-value">{data?.menuItems || 0}+</div>
          </div>

          <div className="stat">
            <div className="stat-title text-2xl">Users</div>
            <div className="stat-value">{data?.users || 0}+</div>
          </div>

          <div className="stat">
            <div className="stat-title text-2xl">Orders</div>
            <div className="stat-value">{data?.orders || 0}+</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
