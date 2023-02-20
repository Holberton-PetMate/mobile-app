import axios from "axios";
import { getVerifiedStorage } from "../utils";


const getToken = async () => {
  const store = await getVerifiedStorage();
  const token: string = await store.get("token");
  return token;
};

const ApiInstance = async () => {
  // const token = await getToken();
  // console.log({ token });
  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
      Accept: "application/json",
      // ...(token && {
      //   Authorization: "Bearer " + token,
      // }),
    },
  });
};

export default ApiInstance;
