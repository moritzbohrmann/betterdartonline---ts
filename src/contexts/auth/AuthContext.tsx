import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchUserWithToken, login, register } from "../../services/authApi";
import { AuthContext as IAuthContext, AuthProviderProps, AuthState, LoginResponse, RawUser, RegistrationResponse, TokenResponse } from "./auth";

const initialAuthState = {
   user: null,
   isAuthenticated: false,
   token: null,
   doLogin: () => {},
   doRegistration: () => {},
   doLogout: () => {},
} as IAuthContext;

const AuthContext = createContext(initialAuthState);

const AuthProvider = ({ children }: AuthProviderProps) => {
   const memoredToken = useMemo<string | undefined>(() => Cookies.get("auth"), []);
   const [authState, setAuthState] = useState<AuthState>({ user: null, isAuthenticated: false, token: null });

   const doLogin = async (rawUserData: RawUser) => {
      const loginResponse = (await login(rawUserData)) as LoginResponse;
      const { user, token, error } = loginResponse;

      if (error) {
         return alert(error);
      }

      setAuthState({ user, token, isAuthenticated: true });
   };

   const doRegistration = async (rawUserData: RawUser) => {
      const registrationResponse = (await register(rawUserData)) as RegistrationResponse;
      const { error, isRegistered } = registrationResponse;

      if (error) {
         return alert(error);
      }

      if (isRegistered) doLogin(rawUserData);
   };

   const doLogout = () => {
      setAuthState(initialAuthState);
   };

   const contextValues = {
      ...authState,
      doLogin,
      doRegistration,
      doLogout,
   };

   useEffect(() => {
      const continueSessionIfExists = async () => {
         if (!memoredToken) return;

         const tokenResponse = (await fetchUserWithToken(memoredToken)) as TokenResponse;
         const { user, error } = tokenResponse;

         if (error) return alert(error);

         setAuthState({ isAuthenticated: true, user, token: memoredToken });
      };

      continueSessionIfExists();
   }, []);

   useEffect(() => {
      if (authState.token) Cookies.set("auth", authState.token);
      else Cookies.remove("auth");
   }, [authState.token]);

   return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
   return useContext(AuthContext);
};

export default AuthProvider;
