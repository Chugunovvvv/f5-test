import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = ({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string | null;
}) => {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRoute;
