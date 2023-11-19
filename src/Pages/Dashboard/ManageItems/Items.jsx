import PropTypes from "prop-types";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Items = ({ item, index, refetch, handleMenuUpdate }) => {
  const axios = useAxiosSecure();
  const { _id, name, category, image } = item;
  const deleteItem = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/delete-menu/${_id}`)
          .then((res) => {
            res && refetch();
            toast.success("Item deleted ...");
          })
          .catch((e) => {
            console.log(e);
            toast.error("Something went wrong !!!");
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
        <img src={image} className="w-14 h-14" />
      </td>
      <td>
        <h3 className="text-xl">{name}</h3>
      </td>
      <td>
        <h3 className="text-xl">{category}</h3>
      </td>
      <td>
        <button onClick={() => handleMenuUpdate(_id)} className="btn btn-sm">
          Update
        </button>
      </td>
      <th>
        <button
          className="btn btn-sm btn-error text-white"
          onClick={deleteItem}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

Items.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
  handleMenuUpdate: PropTypes.func,
};
export default Items;
