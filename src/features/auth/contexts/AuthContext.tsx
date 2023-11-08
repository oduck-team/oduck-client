import {
  createContext,
  useState,
  useMemo,
  useEffect,
  PropsWithChildren,
  useCallback,
} from "react";

import useSnackBar from "@/components/SnackBar/useSnackBar";
import { useApi } from "@/hooks/useApi";

import { EmailLoginDto } from "../api/AuthApi";

interface AuthState {
  user: User | undefined;
  isLoggedIn: boolean;
}

interface AuthAction {
  fetchUser: () => Promise<void>;
  socialLogin: (provider: Provider) => void;
  emailLogin: (dto: EmailLoginDto) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState & AuthAction>({
  user: undefined,
  isLoggedIn: false,
  fetchUser: async () => {},
  socialLogin: () => {},
  emailLogin: async () => {},
  logout: async () => {},
});

export default AuthContext;

export function AuthProvider({ children }: PropsWithChildren) {
  const { authApi } = useApi();
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const snackbar = useSnackBar();

  const fetchUser = useCallback(async () => {
    try {
      const user = await authApi.getStatus();
      setUser(user);
      setIsLoggedIn(true);
    } catch (e) {
      setIsLoggedIn(false);
    }
  }, [authApi]);

  const logout = useCallback(async () => {
    authApi.logout();
    snackbar.open({ message: "로그아웃 되었어요" });
    setIsLoggedIn(false);
    window.location.replace("/");
  }, [authApi, snackbar]);

  useEffect(() => {
    fetchUser();
  }, []);

  const value = useMemo<AuthState & AuthAction>(
    () => ({
      user,
      isLoggedIn,
      fetchUser,
      socialLogin: authApi.socialLogin,
      emailLogin: authApi.emailLogin,
      logout,
    }),
    [
      user,
      isLoggedIn,
      fetchUser,
      authApi.socialLogin,
      authApi.emailLogin,
      logout,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
