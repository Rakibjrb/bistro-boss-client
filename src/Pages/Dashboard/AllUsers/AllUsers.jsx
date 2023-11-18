import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/CommonHeader/SectionHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Users from "./Users";

const AllUsers = () => {
  const axios = useAxiosSecure();

  const {
    data: allUsers,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["getallusers"],
    queryFn: async () => {
      // const res = await axios.get("/users", {
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("access-token")}`,
      //   },
      // });
      const res = await axios.get("/users");
      return res.data;
    },
  });

  return (
    <div className="px-2">
      <SectionHeader toptitle={"--all users--"} title={"Manage All Users"} />
      <h4 className="text-3xl font-semibold">
        Total Users : {allUsers?.length || 0}
      </h4>
      <div className="mt-5">
        <div className="overflow-x-auto">
          {isPending ? (
            "Loading your data please wait"
          ) : (
            <div>
              {allUsers ? (
                <table className="table w-full">
                  <thead className="bg-gray-600 rounded-lg">
                    <tr>
                      <th className="text-xl text-white">NO. :</th>
                      <th className="text-xl text-white">Name</th>
                      <th className="text-xl text-white">Email</th>
                      <th className="text-xl text-white">Role</th>
                      <th className="text-xl text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers?.map((user, index) => (
                      <Users
                        key={user._id}
                        user={user}
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

export default AllUsers;
