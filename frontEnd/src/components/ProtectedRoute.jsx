import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
  //case 1 - it will redirect 
  //case 2 - it will redirect to "/" (login page)
};

export default ProtectedRoute;
