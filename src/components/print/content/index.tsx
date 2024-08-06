import ConsumerCard from "../consumer";
import InfoCard from "../InfoCard";
import "./index.scss";
const PrintContent = () => {
  const consumers = [
    "ООО «Рога и копыта», S-14",
    "ООО «Лол Технолоджи», S-55",
    "ИП Иванов К.О, S-13",
    "ИП Васильев К.А , S-44",
  ];
  return (
    <div className="printContent">
      <div className="printContent__info-card">
        <InfoCard title="Дата выпуска" value="21.06.2024" icon="./Icon.svg" />
        <InfoCard title="Факт" value="1 шт." />
        <InfoCard title="План" value="3 шт." />
        <InfoCard title="Общая стоимость" value="5000" />
      </div>
      <div className="printContent__consumer">
        <h2 className="title">Потребитель</h2>
        <div className="printContent__consumer-wrap">
          {consumers.map((consumer, index) => (
            <ConsumerCard text={consumer} key={index} />
          ))}
        </div>
      </div>
      <div className="printContent__description">
        <InfoCard title="Описание" value="какой-то текст" />
      </div>
    </div>
  );
};

export default PrintContent;
