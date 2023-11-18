import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const [admin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center mt-32 mb-10">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && admin) {
    return children;
  }

  return (
    <Navigate state={{ from: location?.pathname }} to="/user-login" replace />
  );
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminRoute;
