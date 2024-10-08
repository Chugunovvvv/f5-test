import { useQuery } from "@apollo/client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import GET_PRODUCTS from "../apollo/products";
import { IProductsData } from "../types";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeToken } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Print from "../pages/print";
import PrintButton from "./PrintButton";

const ProductTable: React.FC = () => {
  const dispath = useDispatch();

  const navigate = useNavigate();
  const { loading, error, data } = useQuery<IProductsData>(GET_PRODUCTS, {
    variables: {
      withArchived: false,
    },
  });
  // функция для выхода из аккаунта. Удаляем токен из стейта редакс и из локал сторедж
  const handleLogout = () => {
    dispath(removeToken());
    localStorage.removeItem("auth-token");
    navigate("/", { replace: true });
  };

  // определяем колонки для таблицы
  const columnDefs = [
    { headerName: "ID", field: "id", flex: 1 },
    { headerName: "Name", field: "name", flex: 1 },
    { headerName: "Create ad", field: "createdAt", flex: 1 },
    { headerName: "minLimit", field: "minLimit", flex: 1 },
    {
      headerName: "Process Name",
      valueGetter: (params) => params.data?.process?.name || "N/A",
      flex: 1,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="container">
        <div className="ag-theme-alpine" style={{ marginBottom: "20px" }}>
          <AgGridReact
            rowData={data?.products || []}
            columnDefs={columnDefs}
            domLayout="autoHeight"
          />
        </div>
        <Button
          style={{ marginRight: "10px" }}
          variant="contained"
          color="primary"
          onClick={handleLogout}
          disabled={loading}
        >
          LogOut
        </Button>
        <Link to="/print">
          <Button variant="contained" color="secondary">
            print
          </Button>
        </Link>
        <Link to="/photos">
          <Button variant="contained" color="info">
            Photos
          </Button>
        </Link>
        {/* <PrintButton name={"Распечатать"}>
               <Print />
            </PrintButton> */}
      </div>
    </>
  );
};

export default ProductTable;
