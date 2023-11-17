import PropTypes from "prop-types";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Users = ({ user, index }) => {
  //   const axios = useAxiosSecure();
  const { name, email, role } = user;
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
          icon: "success",
        });
        toast.success("Clicked");
        // axios
        //   .delete(`/cart/${_id}?email=${useremail}`)
        //   .then((res) => {
        //     if (res?.data?.deletedCount) {
        //       refetch();
        //       toast.success("Item deleted from cart ...");
        //     }
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //     toast.error("Something went wrong !!! try again ...");
        //   });
      }
    });
  };

  return (
    <tr>
      <th>
        <h4 className="text-xl">{index + 1}.</h4>
      </th>
      <td>
        <h3 className="text-xl">{name}</h3>
      </td>
      <td>
        <h3 className="text-xl">{email}</h3>
      </td>
      <td>
        <h4
          className={`${
            role === "Admin" ? "btn btn-sm btn-success" : "text-xl"
          }`}
        >
          {role || "User"}
        </h4>
      </td>
      <th>
        <button
          className="btn btn-sm btn-error text-white"
          onClick={handleItemDelete}
        >
          {role === "Admin" ? "Change Role" : "Delete"}
        </button>
      </th>
    </tr>
  );
};

Users.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
  //   refetch: PropTypes.func,
};
export default Users;
