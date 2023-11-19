import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PropTypes from "prop-types";

const UpdateItem = ({ id, refetch, setForm }) => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (itemData) => {
    const imageSize = itemData.image[0].size / (1024 * 1024);
    if (imageSize > 5) {
      toast.error("Image size must be less than 5 mb");
      return;
    }
    setLoading(true);
    const body = new FormData();
    body.set("key", import.meta.env.VITE_IMAGE_API);
    body.append("image", itemData.image[0]);

    axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    })
      .then((res) => {
        const imageURL = res.data?.data?.url;
        if (imageURL) {
          const data = {
            name: itemData.name,
            category: itemData.category,
            price: itemData.price,
            recipe: itemData.recipe,
            image: imageURL,
          };
          axiosSecure
            .put(`/menus/${id}`, data)
            .then((res) => {
              if (res.data?.matchedCount) {
                refetch();
                toast.success("Item Updated successfull ...");
                setForm(false);
                setLoading(false);
              }
            })
            .catch((err) => {
              console.log(err);
              toast.error("something went wrong !!!");
            });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong !!!");
        setLoading(false);
      });
  };

  return (
    <div className="w-full fixed top-20 z-20">
      <div className="w-full flex justify-center items-center px-4 md:px-0 min-h-[80vh]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#00000089] border-2 border-white form-control p-10 w-[500px] rounded-lg"
        >
          <h2 className="text-2xl text-center text-white mb-10">Update Item</h2>
          <div className="w-full space-y-5">
            <input
              type="text"
              placeholder="Item name"
              className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
              {...register("name", { required: true })}
              required
            />
            <select
              {...register("category")}
              className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            >
              <option>Select Category</option>
              <option className="text-black" value="salad">
                Salad
              </option>
              <option className="text-black" value="pizza">
                Pizza
              </option>
              <option className="text-black" value="drinks">
                Drinks
              </option>
              <option className="text-black" value="dessart">
                Dessart
              </option>
              <option className="text-black" value="soup">
                Soup
              </option>
            </select>
            <input
              type="number"
              placeholder="Enter Price"
              {...register("price", { required: true })}
              className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
              required
            />
            <textarea
              type="text"
              rows={4}
              placeholder="Item description"
              className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
              {...register("recipe", { required: true })}
              required
            ></textarea>
            <input
              type="file"
              {...register("image", { required: true })}
              className="px-3 py-2 rounded-lg w-full text-black bg-[#E5E5E5] border-2 border-white"
              required
            />
            <button
              type="submit"
              className="btn bg-red-500 text-white hover:text-black w-full"
            >
              {loading ? "Updating ...." : "Update Now"}
            </button>
            <h3
              onClick={() => setForm(false)}
              className="btn bg-red-300 w-full cursor-pointer"
            >
              Cancel Update
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

UpdateItem.propTypes = {
  id: PropTypes.string,
  refetch: PropTypes.func,
  setForm: PropTypes.func,
};
export default UpdateItem;
