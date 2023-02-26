/* eslint-disable react-hooks/exhaustive-deps */
import NotificationList from "../components/NotificationList";
import PageHeading from "../components/PageHeading";
import { useEffect, useState } from "react";
import Notifications, { NotificationProps } from "../lib/Notifications";
import { useParams } from "react-router";
import Loader from "../components/Loader";

const RecordsPage = () => {
	const params = useParams() as any;
	const [loading, setLoading] = useState<boolean>(false);
	const [notifications, setNotifications] = useState<NotificationProps[]>([]);


	const loadNotifiactions = async () => {
		try {
			setLoading(true);
			const response = await Notifications.get(params.petmate_id);
			setNotifications(response.data as NotificationProps[])
			setLoading(false);
		} catch (err: any) {
			setLoading(false);
			console.log(err);
		}
	};

	useEffect(() => {
		(async () => await loadNotifiactions())()
	}, []);

	return (
		<>
			{loading && <Loader />}
			<PageHeading backUrl="/my-petmates" title="Records" />
			<NotificationList notifications={notifications} />
		</>
	);
};

export default RecordsPage;
