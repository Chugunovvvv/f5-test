import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductTable from "./components/ProductTable";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Print from "./pages/print";
import Photos from "./pages/photos";

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute token={token}>
              <ProductTable />
            </PrivateRoute>
          }
        />
        <Route
          path="/print"
          element={
            <PrivateRoute token={token}>
              <Print />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/photos"
          element={
            <PrivateRoute token={token}>
              <Photos />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
