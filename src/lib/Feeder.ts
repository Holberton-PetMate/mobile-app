import ApiInstance from "./Api";

export interface FeederProps {
  id: number;
  code_id: string;
  name: string;
  active_food: number;
  food_served: number;
  food_storage: number;
}

export interface CreateFeederProps {
  code_id: string | null;
  name: string | null;
  active_food: number | null;
}

const Feeders = {
  getFeeders: async () => {
    const api = await ApiInstance();
    return api.get("/users/9/feeders");
  },
  storeFeeders: async (data:CreateFeederProps) => {
    const api = await ApiInstance();
    return api.post("/feeders", data);
  },
};

export default Feeders;