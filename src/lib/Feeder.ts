import ApiInstance from "./Api";

export interface CreateFeederProps {
  code_id: string | null;
  name: string | null;
  active_food: number | null;
}

const Feeders = {
  storeFeeders: async (data:CreateFeederProps) => {
    const api = await ApiInstance();
    return api.post("/feeders", data);
  },
};

export default Feeders;