import ApiInstance from "./Api";

export interface LoginProps {
	email: string;
	password: string;
}

export interface User {
	id: number;
	nombre: string;
	email: string;
	platform?: string;
	imagen?: string;
	activo?: number;
	persona?: string;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
	email_verified_at?: Date;
	sms_token?: string;
	sms_token_created_at?: Date;
}

export interface RedeemFeederProps {
	user_id: number;
	feeder_id: number;
	feeder_name: string;
	feeder_food_id: number;
}

const Users = {
	login: async (data: LoginProps) => {
		// if (data.email === "mail@mail.com" && data.password === "password1234")
		//   return {
		//     data: {
		//       user: {
		//         id: 1,
		//         nombre: "Nacho",
		//         email: "mail@mail.com",
		//       },
		//       token: "askdjasd kajs hdkj sahdkj sadkj has",
		//     },
		//   };
		// throw new Error("todo mal bo");
		const api = await ApiInstance();
		return api.post("/mobileLogin", data);
	},
	getCurrent: async () => {
		const api = await ApiInstance();
		return api.get("/users/getCurrentUser");
	},
	redeem_feeder: async ({
		user_id,
		feeder_id,
		feeder_name,
		feeder_food_id
	}: RedeemFeederProps) => {
		const api = await ApiInstance();
		return api.post(`/users/${user_id}/redeem/${feeder_id}`, {
			feeder_name,
			feeder_active_food: feeder_food_id
		});
	}
};

export default Users;
