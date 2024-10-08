import { type FC } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-alpine.css";

import "./index.scss";

import TotalInfo from "../../totalInfo";
import { getTotalSpecificationCost } from "../../../../helpers/getTotalCostTable";
const SpecificationTable: FC = ({ data }) => {
  const columnDefs = [
    { headerName: "№", field: "№", width: 50 },
    { headerName: "Название", field: "name", flex: 1 },
    { headerName: "Факт/План", field: "quantity", flex: 1 },
    { headerName: "Примечание", field: "description", flex: 1 },
    { headerName: "Стоимость работы", field: "workPrice", flex: 1 },
  ];

  const rowData = data.orderLine.ingredients.map((ingredient, index) => ({
    "№": index + 1, // Уникальный номер
    name: ingredient.sourceProduct.name || "N/A",
    quantity: ingredient.quantity || "N/A",
    workPrice: `${ingredient.sourceProduct?.actualPrice} ₽`,
    description: ingredient.notes,
  }));

  return (
    <div className="print__specification-table" style={{ height: "100%" }}>
      <h1 className="title-table">Спецификация</h1>
      <div className="ag-theme-alpine" style={{ width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          domLayout="autoHeight"
        />
      </div>
      <TotalInfo
        fontWeight="600"
        title="Итоговая стоимость"
        info={`${getTotalSpecificationCost(data)} ₽ `}
      />
    </div>
  );
};

export default SpecificationTable;
