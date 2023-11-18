import PropTypes from "prop-types";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Users = ({ user, index, refetch }) => {
  const axios = useAxiosSecure();
  const { _id, name, email, role } = user;
  const handleUser = (value) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        if (value === "delete") {
          axios
            .delete(`/users/${_id}`)
            .then((res) => {
              res && refetch();
              toast.success("User deleted ...");
            })
            .catch((e) => {
              console.log(e);
              toast.error("Something went wrong !!! try again ...");
            });
        }
        if (value === "Admin") {
          Swal.fire({
            icon: "success",
          });
          axios
            .patch(`/users/${_id}`, { role: "Admin" })
            .then((res) => {
              res && refetch();
              toast.success("Role changed ...");
            })
            .catch((e) => {
              console.log(e);
              toast.error("Something went wrong !!! try again ...");
            });
        }
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
        <button
          onClick={() => handleUser("Admin")}
          className={`${
            role === "Admin"
              ? "btn btn-sm btn-success w-32"
              : "btn btn-sm btn-warning w-32"
          }`}
        >
          {role === "Admin" ? "Admin" : "Make Admin"}
        </button>
      </td>
      <th>
        <button
          className="btn btn-sm btn-error text-white"
          onClick={() => handleUser("delete")}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

Users.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};
export default Users;
