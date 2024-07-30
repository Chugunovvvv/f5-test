import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = ({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string | null;
}) => {
  // если токена нет, редиректим на логин
  if (!token) {
    return <Navigate to="/login" />;
  }
  // если токен есть и нет вложенных роутов, то рендерим children если есть то outlet
  return children ? children : <Outlet />;
};

export default PrivateRoute;
