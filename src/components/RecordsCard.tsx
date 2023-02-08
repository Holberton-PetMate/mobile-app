import { PropsWithoutRef } from "react";
import "../styles/components/recordsCard.css";
import { Body } from "./fonts";
import { Edit } from "./Icons";

interface RecordsProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	date: string;
	notification: string
}

const RecordsCard = ({date, notification}:RecordsProps) => {
	return (
		<div className="message-panel">
			<div className="message">
				<ul className="message-content">
					<li className="date">{date}</li>
					<li className="notification">{notification}</li>
				</ul>
			</div>
		</div>
	);
};

export default RecordsCard;