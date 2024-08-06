import { type FC } from "react";
import "./index.scss";

type Props = {};

const HeaderPrint: FC<Props> = () => {
  return (
    <div className="headerPrint">
      <div className="headerPrint__info">
        <span className="headerPrint__info-production title">
          Производство:
        </span>
        <span className="headerPrint__info-title">Name</span>
        <span className="headerPrint__info-subtitle">Name 2</span>
      </div>
      <div className="headerPrint__state">
        <p>
          Статус: <span>state</span>
        </p>
      </div>
    </div>
  );
};

export default HeaderPrint;
