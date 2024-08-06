import { type FC } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ProcessTable: FC = () => {
  const columnDefs = [
    { headerName: "№", field: "number", width: 50 },
    { headerName: "Операция", field: "operation", flex: 1 },
    { headerName: "Участок", field: "area", flex: 1 },
    { headerName: "Время работы", field: "time", flex: 1 },
    { headerName: "Стоимость работ", field: "cost", flex: 1 },
    { headerName: "Статус", field: "status", flex: 1 },
  ];

  const rowData = [
    {
      number: 1,
      operation: "Сварка",
      area: "Сборка",
      time: "5 мин.",
      cost: "500 ₽",
      status: "Выполняется",
    },
    {
      number: 2,
      operation: "Сушка",
      area: "Раскрой",
      time: "2 часа",
      cost: "1 200 ₽",
      status: "Ожидается",
    },
    {
      number: 3,
      operation: "Фиксация",
      area: "Раскрой",
      time: "1 час",
      cost: "0 ₽",
      status: "Завершено",
    },
  ];

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

export default ProcessTable;
