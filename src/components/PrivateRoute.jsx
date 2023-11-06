// components/PrivateRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = ({ isAdmin, ...props }) => {
  const { loggedIn, checkingStatus, isAdmin: userIsAdmin } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  if (isAdmin && !userIsAdmin) {
    return <Navigate to="/" />;
  }

  return loggedIn ? <Outlet {...props} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
