import PropTypes from "prop-types";

const CartItems = ({ item, index }) => {
  const { price, image, name } = item;

  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Your file has been deleted.",
  //         icon: "success",
  //       });
  //       axios.delete(`/delete-CartItems/${id}`).then((res) => {
  //         if (res?.data?.updated?.deletedCount > 0) handleReloadBooking(id);
  //       });
  //     }
  //   });

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
        <button className="btn btn-sm btn-error text-white">Delete</button>
      </th>
    </tr>
  );
};

CartItems.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};
export default CartItems;
