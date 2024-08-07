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

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Print from "../pages/print";


const ProductTable: React.FC = () => {
   const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
   const dispath = useDispatch();
   const componentRef = useRef(null);
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });

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

            <div className="ag-theme-alpine" style={{ marginBottom: "20px", }}>
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

            <div style={{ display: 'none' }}>
               <Print ref={componentRef} />
            </div>
            <button disabled={!componentRef.current} onClick={handlePrint}>Print this out!</button>

         </div>

      </>
   );
};

export default ProductTable;
