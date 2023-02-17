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
};

export default Users;
