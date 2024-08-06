import { type FC } from "react";
import "./index.scss";

type Props = {
  text: string;
};
const ConsumerCard: FC<Props> = ({ text }) => {
  return <div className="consumer">{text}</div>;
};

export default ConsumerCard;
