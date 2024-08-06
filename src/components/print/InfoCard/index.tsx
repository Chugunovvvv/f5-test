import React from "react";
import "./InfoCard.scss";

interface InfoCardProps {
  title: string;
  value: string;
  icon?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon }) => {
  return (
    <div className="info-card">
      <div className="info-card-header">
        {icon && <img src={icon} alt="" className="info-card-icon" />}
        <span>{title}</span>
      </div>
      <div className="info-card-value">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default InfoCard;
