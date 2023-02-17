import { PropsWithoutRef } from "react";
import "../styles/components/settingsCard.css";
import { Small } from "./fonts";
import { Edit, Delete } from "./Icons";


interface SettingsCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	hour: number;
	minutes: number;
	quantity: number
}

const SettingsCard = ({ hour, minutes, quantity }:SettingsCardProps) => {
	return (
    <div className="settingsCard">
      <Small otherClasses="scheduleHour">{hour}:</Small>
      <Small otherClasses="schedule">{minutes}</Small>
      <Small otherClasses="quantity">{quantity}</Small>
      <div className="toolsContainer">
        <Delete className="delete-icon" />
      </div>
    </div>
  );
};

export default SettingsCard;