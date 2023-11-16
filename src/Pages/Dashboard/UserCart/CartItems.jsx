import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";

const CartItems = ({ item, index, refetch }) => {
  const axios = useAxios();
  const { _id, price, image, name, useremail } = item;
  const handleItemDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted",
          icon: "success",
        });
        axios
          .delete(`/cart/${_id}?email=${useremail}`)
          .then((res) => {
            if (res?.data?.deletedCount) {
              refetch();
              toast.success("Item deleted from cart ...");
            }
          })
          .catch((e) => {
            console.log(e);
            toast.error("Something went wrong !!! try again ...");
          });
      }
    });
  };

  return (
    <tr>
      <th>
        <h4 className="text-xl">{index + 1}.</h4>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-24 h-16">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <h3 className="text-xl">{name}</h3>
      </td>
      <td>
        <h4 className="text-xl">{price}$</h4>
      </td>
      <th>
        <button
          className="btn btn-sm btn-error text-white"
          onClick={handleItemDelete}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

CartItems.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};
export default CartItems;
