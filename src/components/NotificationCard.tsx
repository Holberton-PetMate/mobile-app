import { PropsWithoutRef } from "react";
import "../styles/components/recordsCard.css";
import { Small } from "./fonts";
import dayjs from "dayjs";

interface NotificationCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	date: string;
	msg: string;
	status: "red" | "green" | "yellow"
}

const NotificationCard = ({ date, msg, status }: NotificationCardProps) => {
	return (
		<div className={`recordCard ${status}`}>
			<div>
				<Small otherClasses="date">{dayjs(date).format("ddd, MMM D")}</Small>
				<Small otherClasses="date">{dayjs(date).format("h:mm A")}</Small>
			</div>
			<Small otherClasses="notification">{msg}</Small>
		</div>
	);
};

export default NotificationCard;