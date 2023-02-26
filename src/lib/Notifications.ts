import ApiInstance from './Api';

export interface NotificationProps {
	id: number;
	msg: string;
	status: string;
	created_at: string;
	feeder_id: number;
}


const Notifications = {
	get: async (feeder_id: number) => {
		const api = await ApiInstance();
		return api.get(`/feeders/${feeder_id}/notifications`);
	},
};

export default Notifications;