import { format } from "date-fns";
import ConsumerCard from "../consumer";
import InfoCard from "../InfoCard";
import "./index.scss";
const PrintContent = ({ data }: any) => {
   const consumers = [
      "ООО «Рога и копыта», S-14",
      "ООО «Лол Технолоджи», S-55",
      "ИП Иванов К.О, S-13",
      "ИП Васильев К.А , S-44",
   ];



   const finishedDate = new Date(data.orderLine.finishByDate)
   const formattedDate = format(finishedDate, 'dd.MM.yyyy')
   const description = data.orderLine.description
   const consumerNames = data.orderLine.consumerReservations
      .map(reservation => reservation.targetSalesOrderLine?.salesOrder?.name)
      .filter(name => name !== undefined);

   return (
      <div className="printContent">
         <div className="printContent__info-card">
            <InfoCard title="Дата выпуска" value={formattedDate} icon="./Icon.svg" />
            <InfoCard title="Факт" value="1 шт." />
            <InfoCard title="План" value="3 шт." />
            <InfoCard title="Общая стоимость" value="5000" />
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
