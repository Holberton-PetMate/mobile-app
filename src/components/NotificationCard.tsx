import { PropsWithoutRef } from "react";
import "../styles/components/recordsCard.css";
import { Small } from "./fonts";
import dayjs from "dayjs";

interface NotificationCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	date: string;
	msg: string
}

const NotificationCard = ({ date, msg }: NotificationCardProps) => {
	return (
		<div className="recordCard">
			<Small otherClasses="date">{dayjs(date).format("ddd, MMM D - h:mm A")}</Small>
			<Small otherClasses="notification">{msg}</Small>
		</div>
	);
};

export default NotificationCard;