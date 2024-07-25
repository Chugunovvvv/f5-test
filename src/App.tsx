import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductTable from "./components/ProductTable";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
