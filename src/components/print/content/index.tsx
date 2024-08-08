import { format } from "date-fns";
import ConsumerCard from "../consumer";
import InfoCard from "../InfoCard";
import "./index.scss";
import { getTotalProcessCost, getTotalSpecificationCost } from "../../../helpers/getTotalCostTable";
const PrintContent = ({ data }) => {

   /** Запланированное количество */
   const planQuantity = data.orderLine.quantity

   /** Достаем дату и форматируем ее в понятный вид */
   const finishedDate = new Date(data.orderLine.finishByDate)
   const formattedDate = format(finishedDate, 'dd.MM.yyyy')
   const description = data.orderLine.description

   /** Находим все имена потребителей, проверяем, чтобы они не были undefiend */
   const consumerNames = data.orderLine.consumerReservations
      .map(reservation => reservation.targetSalesOrderLine?.salesOrder?.name)
      .filter(name => name !== undefined);

   /** Достаем общую стоимость из таблицы и суммируем их */
   const specificationCost = getTotalSpecificationCost(data);
   const processCost = getTotalProcessCost(data);
   const totalCost = specificationCost + processCost;

   return (
      <div className="printContent">
         <div className="printContent__info-card">
            <InfoCard title="Дата выпуска" value={formattedDate} icon="./Icon.svg" />
            <InfoCard title="Факт" value="1" />
            <InfoCard title="План" value={planQuantity} />
            <InfoCard title="Общая стоимость" value={totalCost} />
         </div>
         <div className="printContent__consumer">
            <h2 className="title">Потребитель</h2>
            <div className="printContent__consumer-wrap">
               {consumerNames.map((consumer, index) => (
                  <ConsumerCard text={consumer} key={index} />
               ))}
            </div>
         </div>
         <div className="printContent__description">
            <InfoCard title="Описание" value={description} />
         </div>
      </div>
   );
};

export default PrintContent;
