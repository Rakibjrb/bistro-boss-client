import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/CommonHeader/SectionHeader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Items from "./Items";
import { useState } from "react";
import UpdateItem from "./UpdateItem";

const ManageItems = () => {
  const axiosSecure = useAxiosSecure();
  const [form, setForm] = useState(false);
  const [id, setId] = useState();

  const {
    isPending,
    data: items,
    refetch,
  } = useQuery({
    queryKey: ["allItems"],
    queryFn: async () => {
      const res = await axiosSecure("/menus/all");
      return res.data;
    },
  });

  const handleMenuUpdate = (id) => {
    setId(id);
    setForm(true);
  };

  return (
    <div>
      <SectionHeader toptitle={"--manage items--"} title={"Manage All Items"} />
      <h4 className="text-3xl font-semibold">
        Total Users : {items?.length || 0}
      </h4>
      <div className="mt-5">
        <div className="overflow-x-auto relative">
          {form ? (
            <UpdateItem id={id} refetch={refetch} setForm={setForm} />
          ) : (
            <></>
          )}
          {isPending ? (
            "Loading your data please wait"
          ) : (
            <div>
              {items ? (
                <table className="table w-full">
                  <thead className="bg-gray-600 rounded-lg">
                    <tr>
                      <th className="text-xl text-white">NO.</th>
                      <th className="text-xl text-white">Image</th>
                      <th className="text-xl text-white">Name</th>
                      <th className="text-xl text-white">Category</th>
                      <th className="text-xl text-white">Update</th>
                      <th className="text-xl text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.map((item, index) => (
                      <Items
                        key={item._id}
                        item={item}
                        index={index}
                        refetch={refetch}
                        handleMenuUpdate={handleMenuUpdate}
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

export default ManageItems;
