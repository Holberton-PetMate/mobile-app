import ApiInstance from "./Api";

export interface FeederProps {
  id: number;
  code_id: string;
  name: string;
  active_food: number;
  food_served: number;
  food_storage: number;
}

const Feeders = {
  getFeeders: async () => {
    const api = await ApiInstance();
    return api.get("/users/9/feeders");
  },
};

export default Feeders;
