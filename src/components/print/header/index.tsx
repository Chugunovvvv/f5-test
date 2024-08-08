import { type FC } from "react";
import "./index.scss";
import { getJobStatusInRussian } from "../../../helpers/getJobStatus";



const HeaderPrint: FC = ({ data }) => {
   const name = data.orderLine.name
   const nameProduct = data.orderLine.product.name
   const state = data.orderLine.status
   return (
      <div className="headerPrint">
         <div className="headerPrint__info">
            <span className="headerPrint__info-production title">
               Производство:
            </span>
            <span className="headerPrint__info-title">{name}</span>
            <span className="headerPrint__info-subtitle">{nameProduct}</span>
         </div>
         <div className="headerPrint__state">

            <h3 className="title">Статус:</h3> <span>{getJobStatusInRussian(state)}</span>

         </div>
      </div>
   );
};

export default HeaderPrint;
