import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

const ItemsCard = ({ menu }) => {
  const { user } = useAuth();
  const axios = useAxios();
  const { _id, name, image, recipe, price } = menu;
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      navigate("/user-login");
      return;
    }
    const dataAddToCart = {
      name,
      image,
      recipe,
      price,
      itemId: _id,
      username: user?.displayName,
      useremail: user?.email,
    };

    axios
      .post("/cart", dataAddToCart)
      .then(() => {
        toast.success("Item Added to your cart ...");
      })
      .catch((e) => {
        console.log(e);
        toast.error("something went wrong !!!");
      });
  };

  return (
    <div className="bg-base-200">
      <figure className="relative">
        <img className="w-full h-[250px]" src={image} alt={name} />
        <h3 className="bg-[#000000c7] text-white px-4 py-2 absolute top-2 right-2 rounded-lg">
          {price}$
        </h3>
      </figure>
      <div className="card-body">
        <h2 className="font-semibold text-2xl text-center mb-4">{name}</h2>
        <p className="text-center min-h-[76px]">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="font-bold mt-4 text-yellow-700 bg-gray-400 px-5 py-3 border-b-4 border-b-yellow-700 uppercase rounded-b-lg hover:bg-gray-600 rounded-t-lg hover:border-none"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

ItemsCard.propTypes = {
  menu: PropTypes.object,
};
export default ItemsCard;
