import NotificationCard from "./NotificationCard";
import "../styles/components/recordsList.css";
import H3 from "./fonts/H3";
import { NotificationProps } from "../lib/Notifications";


const NotificationList = ({ notifications }: { notifications: NotificationProps[] }) => {

	return (
		<div className="recordsList">
			<div className="titleHedings">
				<H3>Date</H3>
				<H3>Notification</H3>
			</div>
			{notifications.map(item => (
				<NotificationCard
					date={item.created_at}
					notification={item.msg}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default NotificationList;
