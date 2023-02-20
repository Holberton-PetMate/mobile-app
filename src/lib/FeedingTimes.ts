import ApiInstance from './Api';

export interface FeedingTimesProps {
  id: number;
  hour: number;
  minute: number;
  weight: number;
  feeding_id: number;
}

const FeedingTimes = {
  getFeedingTimes: async () => {
    const api = await ApiInstance();
    return api.get('/feeding_times');
  },
};

export default FeedingTimes;