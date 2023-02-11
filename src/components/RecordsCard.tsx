import { PropsWithoutRef } from "react";
import "../styles/components/recordsCard.css";
import { Small } from "./fonts";

interface RecordsProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	date: string;
	notification: string
}

const RecordsCard = ({ date, notification }:RecordsProps) => {
	return (
		<div className="recordCard">
			<Small otherClasses="date">{date}</Small>
			<Small otherClasses="notification">{notification}</Small>
		</div>
	);
};

export default RecordsCard;