import { UUID } from "crypto";
import { URL } from "url";

interface AuthState {
   user: User | null;
   isAuthenticated: boolean;
   token: string | null;
}

interface AuthContext extends AuthState {
   doLogin: (user: RawUser) => void;
   doRegistration: (user: RawUser) => void;
   doLogout: () => void;
}
type AuthProviderProps = {
   children: React.ReactNode;
};
interface LoginResponse {
   error: string;
   token: string;
   user: User;
}
interface RegistrationResponse {
   error: string;
   isRegistered: boolean;
}
interface TokenResponse {
   error: string;
   user: User;
}

export interface RawUser {
   username?: string;
   email?: string;
   password: string;
   picture?: URL;
}
export interface User {
   uuid: UUID;
   username: string;
   picture: URL;
}
