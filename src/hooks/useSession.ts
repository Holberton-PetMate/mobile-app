import constate from "constate";
import { useState } from "react";
import { User } from "../lib/User";
import Users from "../lib/User";
import { getVerifiedStorage } from "../utils";

interface InitializeSessionProps {
  refetch: boolean;
}

interface SessionProps {
  user: User;
  token: string;
}

const useCurrentUser = () => {
  const [currentToken, setCurrentToken] = useState("");
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  const initializeSession = async ({ refetch }: InitializeSessionProps) => {
    const store = await getVerifiedStorage();

    const storedToken: string = await store.get("token");
    const storedUser: User = await store.get("user");
    setCurrentToken(storedToken);
    setCurrentUser(storedUser);

    // Refetch client using the existent JWT
    if (refetch) {
      try {
        // here we should add the first requests the app needs
        // const { data, status } = await Users.getCurrent();
        // if (status === 200) {
        //   await store.set("user", data.user);
        //   await store.set("token", data.token);
        // } else {
        //   throw new Error();
        // }
        // console.log({ data });
      } catch (err: any) {
        throw new Error("Couldn't refetch");
      }
    }
  };

  const storeToken = async ({ token }: { token: string }) => {
    const store = await getVerifiedStorage();

    await store.set("token", token);
    setCurrentToken(token);
  };

  const storeCurrentUser = async ({ user }: Pick<SessionProps, "user">) => {
    const store = await getVerifiedStorage();
    await store.set("user", user);
    setCurrentUser(user);
  };

  const clearSession = async () => {
    const store = await getVerifiedStorage();
    await store.clear();
  };

  return {
    currentUser,
    currentToken,
    initializeSession,
    storeCurrentUser,
    storeToken,
    clearSession,
  };
};

const [Provider, context] = constate(useCurrentUser);

export const SessionProvider = Provider;
export const useSessionContext = context;
