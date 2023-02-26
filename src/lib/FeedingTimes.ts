import ApiInstance from './Api';

export interface FeedingTimesProps {
	id: number;
	hour: number;
	minute: number;
	weight: number;
	feeder_id: number;
}

export interface CreateFeedingTimesProps {
	hour: number;
	minute: number;
	weight: number;
	feeder_id: number;
}

const FeedingTimes = {
	get: async (feeder_id: number) => {
		const api = await ApiInstance();
		return api.get(`/feeders/${feeder_id}/feeding_times`);
	},
	create: async (feedingTime: CreateFeedingTimesProps) => {
		const api = await ApiInstance();
		return api.post("/feeding_times", {
			...feedingTime
		});
	},
	delete: async (feedingTimeId: number) => {
		const api = await ApiInstance();
		return api.delete(`/feeding_times/${feedingTimeId}`);
	}
};

export default FeedingTimes;