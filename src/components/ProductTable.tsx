import { useQuery } from "@apollo/client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import GET_PRODUCTS from "../apollo/products";
import { IProductsData } from "../types";

const ProductTable: React.FC = () => {
  const { loading, error, data } = useQuery<IProductsData>(GET_PRODUCTS, {
    variables: {
      withArchived: false,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "95vh",
        width: "100%",
      }}
    >
      <AgGridReact rowData={data?.products || []} columnDefs={columnDefs} />
    </div>
  );
};

export default ProductTable;
