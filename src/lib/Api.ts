import axios from "axios";
import { getVerifiedStorage } from "../utils";

const getToken = async () => {
	const store = await getVerifiedStorage();
	const token: string = await store.get("token");
	return token;
};

const ApiInstance = async () => {
	//   const token = await getToken();
	//   console.log({ token });
	return axios.create({
		baseURL: process.env.REACT_APP_BACKEND_URL,
		headers: {
			"Accept": "*",
			"Content-Type": "application/json",
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': '*',
			//   ...(token && {
			//     Authorization: "Bearer " + token,
			//   }),
		},
	});
};

export const getCsrf = async () => {
	const api = await ApiInstance();
	await api.get("http://159.223.30.232/backend/pet-mate-app/public/sanctum/csrf-cookie");
}

export default ApiInstance;
