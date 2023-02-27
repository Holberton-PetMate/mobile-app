import ApiInstance from './Api';

export interface FeedingRecord {
	id: number;
	date: string;
	weight: number;
	mode: "output" | "input";
	feeder_id: number;
}

export interface IndexFeedingRecord {
	feeder_id: number;
	startDate?: string;
	endDate?: string;
	mode?: "output" | "input";
}

const FeedingRecords = {
	index: async (props: IndexFeedingRecord) => {
		const api = await ApiInstance();
		return api.get(`feeders/${props.feeder_id}/feeding_records`,
			{
				params: {
					startDate: props.startDate,
					endDate: props.endDate,
					mode: props.mode
				}
			});
	},
};

export default FeedingRecords;