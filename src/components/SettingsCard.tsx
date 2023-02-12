import { PropsWithoutRef } from "react";
import "../styles/components/settingsCard.css";
import { Small } from "./fonts";
import { Edit, Delete } from "./Icons";


interface SettingsCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	time: string;
	quantity: string
}

const SettingsCard = ({ time, quantity }:SettingsCardProps) => {
	return (
		<div className="settingsCard">
			<Small otherClasses="schedule">{time}</Small>
			<Small otherClasses="quantity">{quantity}</Small>
			<div className="toolsContainer">
				<Edit className="edit-icon"/>
				<Delete className="delete-icon"/>
			</div>
		</div>
	);
};

export default SettingsCard;