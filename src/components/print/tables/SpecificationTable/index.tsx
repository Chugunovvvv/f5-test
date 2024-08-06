import { type FC } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useQuery } from "@apollo/client";
import GET_DATA_FOR_PRINT from "../../../../apollo/print";
const SpecificationTable: FC = () => {
  const { loading, error, data } = useQuery(GET_DATA_FOR_PRINT, {
    variables: {
      id: 27005,
    },
  });

  const columnDefs = [
    { headerName: "№", field: "№", width: 50 },
    { headerName: "Операция", field: "name", flex: 1 },
    { headerName: "Участок", field: "site", flex: 1 },
    { headerName: "Время работы", field: "duration", flex: 1 },
    { headerName: "Стоимость работы", field: "workPrice", flex: 1 },
    { headerName: "Статус", field: "status", flex: 1 },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Преобразование graph из строки JSON в объект
  const graphData = JSON.parse(data.orderLine.graph);
  console.log(graphData);

  const rowData = graphData.map((item: any, index: number) => ({
    "№": index + 1,
    name: item.data.name,
    site: item.label || "N/A",
    duration: item.data.duration || "N/A", // Assuming description is present
    workPrice: item.data.costPerHour || "N/A",
  }));

  console.log(rowData);
  return (
    <div className="ag-theme-alpine" style={{ width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default SpecificationTable;
