import  { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/Authproviders";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  // Redirect to login page if the user is not authenticated
  return (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;
