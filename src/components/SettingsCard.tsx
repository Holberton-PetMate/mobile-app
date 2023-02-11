import { PropsWithoutRef } from "react";
import "../styles/components/settingsCard.css";
import { Small } from "./fonts";
import { Edit, Delete } from "./Icons";


interface SettingsProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	time: string;
	quantity: string
}

const SettingsCard = ({time, quantity}:SettingsProps) => {
	return (
		<div className="settingsCard">
			<Small otherClasses="schedule">{time}</Small>
			<Small otherClasses="quantity">{quantity}</Small>
			<div className="toolsContainer">
				<Edit></Edit>
				<Delete></Delete>
			</div>
		</div>
	);
};

export default SettingsCard;