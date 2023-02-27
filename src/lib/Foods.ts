import ApiInstance from './Api';

export interface Food {
	id: number;
	name: string;
	weight: number | null;
	calories: number | null;
	vitamines: number | null;
	proteins: number | null;
}

const Foods = {
  index: async () => {
    const api = await ApiInstance();
    return api.get('/foods');
  },
};

export default Foods;