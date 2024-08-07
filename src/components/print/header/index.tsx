import { type FC } from "react";
import "./index.scss";
import { getJobStatusInRussian } from "../../../helpers/getJobStatus";
import { OrderLineResponse } from "../../../types";

type Props = {
   data: OrderLineResponse
};

const HeaderPrint: FC<Props> = ({ data }) => {
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
            <p>
               Статус: <span>{getJobStatusInRussian(state)}</span>
            </p>
         </div>
      </div>
   );
};

export default HeaderPrint;
