import { type FC } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getJobStatusInRussian } from "../../../../helpers/getJobStatus";
import TotalInfo from "../../totalInfo";
import './index.scss'
import { getTotalProcessCost } from "../../../../helpers/getTotalCostTable";

const ProcessTable: FC = ({ data }) => {

   const columnDefs = [
      { headerName: "№", field: "number", width: 50 },
      { headerName: "Операция", field: "operation", flex: 1 },
      { headerName: "Участок", field: "area", flex: 1 },
      { headerName: "Время работы", field: "time", flex: 1 },
      { headerName: "Стоимость работ", field: "cost", flex: 1 },
      { headerName: "Статус", field: "status", flex: 1 },
   ];


   /**Парсим граф */
   const graphData = JSON.parse(data.orderLine.graph);

   /**Фильтруем для отображения, только если есть конкретные поля */
   const filteredGraphData = graphData.filter(item => item.source && item.target);


   /** Формируем данные для отображении в таблице */
   const rowData = filteredGraphData.map((item, index) => {

      /** связываем с графом */
      const job = data.orderLine.jobs ? data.orderLine.jobs.find(job => job.name === item.data.name) : null;
      console.log(job)
      /** текущие состояние  */
      const state = job ? job.state : null;

      return {
         number: index + 1,
         operation: item.data.name,  // Используем имя из graph, так как оно точно соответствует операции
         area: job && job.area ? job.area.name : "Не указано",
         time: `${(item.data.duration / 3600)} ч.`,  // Конвертируем секунды в часы
         cost: `${(item.data.costPerHour * (item.data.duration / 3600))} ₽`,  // Стоимость за часы работы
         status: getJobStatusInRussian(state)
      };
   });

   /** Подсчет общего времени работы */
   const totalDuration = filteredGraphData.reduce((sum, item) => sum + Number(item.data.duration), 0);

   /** перевод в часы и минуты */
   const totalHours = Math.floor(totalDuration / 3600);
   const totalMinutes = Math.floor((totalDuration % 3600) / 60);
   /** Если минуты есть, то показываем */
   const totalTimeFormatted = totalMinutes > 0
      ? `${totalHours} ч. ${totalMinutes} мин.`
      : `${totalHours} ч.`;

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
         <div className="process-table__totalDuration" style={{ width: '550px', marginLeft: 'auto' }}>
            <TotalInfo title='Общее время работы' info={totalTimeFormatted} />
         </div>
         <TotalInfo fontWeight='600' title='Итоговая стоимость' info={`${getTotalProcessCost(data)} ₽`} />
      </div>
   );
};

export default ProcessTable;
