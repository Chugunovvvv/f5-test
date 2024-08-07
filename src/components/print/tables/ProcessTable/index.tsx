import { type FC } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getJobStatusInRussian } from "../../../../helpers/getJobStatus";

const ProcessTable: FC = ({ data }: any) => {

   const columnDefs = [
      { headerName: "№", field: "number", width: 50 },
      { headerName: "Операция", field: "operation", flex: 1 },
      { headerName: "Участок", field: "area", flex: 1 },
      { headerName: "Время работы", field: "time", flex: 1 },
      { headerName: "Стоимость работ", field: "cost", flex: 1 },
      { headerName: "Статус", field: "status", flex: 1 },
   ];



   const graphData = JSON.parse(data.orderLine.graph)
   console.log(graphData)

   // Фильтруем граф данные для рендеринга
   const rowData = graphData.filter(item => item.source && item.target).map((item, index) => {
      // Предполагаем, что item имеет доступ к данным jobs через data.orderLine.jobs
      const job = data.orderLine.jobs ? data.orderLine.jobs.find(job => job.id === item.data.jobId) : null;
      const state = job ? job.state : null;
      return {
         number: index + 1,  // Уникальный номер
         operation: job ? job.name : "Не указано", // Имя из jobs
         area: job && job.area ? job.area.name : "Не указано", // Имя участка из jobs
         time: `${(item.data.duration / 60).toFixed(2)} мин`, // Правильный синтаксис
         cost: `${item.data.costPerHour} ₽`, // Правильный синтаксис
         status: getJobStatusInRussian(state)
      };
   });


   // const rowData = graphData.filter(item => item.source && item.target).map((item, index) => ({
   //    number: index + 1,  // Уникальный номер
   //    operation: item.data.name || "Не указано",
   //    area: item.data.areas ? item.data.areas.join(", ") : "Не указано",
   //    time: `${(item.data.duration / 60).toFixed(2)} мин`,
   //    cost: `${item.data.costPerHour} ₽`,

   // }));



   return (


      <div className="print__process-table">
         <h1 className="title-table">Тех. процесс</h1>
         <div className="ag-theme-alpine" style={{ width: "100%" }}>
            <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               domLayout="autoHeight"
            />
         </div>

      </div>
   );
};

export default ProcessTable;
