import createApiInstance from "./api";
import { URL } from "url";

const api = createApiInstance("http://localhost:3003/user");

interface UserData {
   username?: string;
   email?: string;
   password: string;
   picture?: URL;
}

type AuthResponse<T> = T & {
   error?: string;
};

interface LoginResponseData {
   user: UserData;
}

interface RegistrationResponseData {
   isRegistered: boolean;
}

interface TokenResponseData {
   user: UserData;
}

export const login = async (rawAccountData: UserData) => {
   try {
      const res = await api.post("/login", rawAccountData);
      const data: AuthResponse<LoginResponseData> = res.data;

      if (data.error) throw data.error;

      return data;
   } catch (error) {
      return { error: error as string };
   }
};

export const register = async (rawAccountData: UserData) => {
   try {
      const res = await api.post("/register", rawAccountData);
      const data: AuthResponse<RegistrationResponseData> = res.data;

      if (data.error) throw data.error;

      return data;
   } catch (error) {
      return { error: error as string };
   }
};

export const fetchUserWithToken = async (token: string) => {
   try {
      const res = await api.get("/token/" + token);
      const data: AuthResponse<TokenResponseData> = res.data;

      if (data.error) throw data.error;

      return data;
   } catch (error) {
      return { error: error as string };
   }
};
