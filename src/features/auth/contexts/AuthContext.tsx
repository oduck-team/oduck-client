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
import useAutoLogin from "../hooks/useAutoLogin";

interface AuthState {
  user: User | undefined;
}

interface AuthAction {
  fetchUser: () => Promise<void>;
  socialLogin: (provider: Provider) => void;
  emailLogin: (dto: EmailLoginDto) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState & AuthAction>({
  user: undefined,
  fetchUser: async () => {},
  socialLogin: () => {},
  emailLogin: async () => {},
  logout: async () => {},
});

export default AuthContext;

export function AuthProvider({ children }: PropsWithChildren) {
  const { authApi } = useApi();
  const [user, setUser] = useState<User>();
  const { setAutoLogin, removeAutoLogin, isAutoLogin } = useAutoLogin();
  const snackbar = useSnackBar();

  const fetchUser = useCallback(async () => {
    try {
      const user = await authApi.getStatus();
      setUser(user);
      setAutoLogin(true);
    } catch (e) {
      setUser(undefined);
      removeAutoLogin();
    }
  }, [authApi, removeAutoLogin, setAutoLogin]);

  const logout = useCallback(async () => {
    authApi.logout();
    snackbar.open({ message: "로그아웃 되었어요" });
    removeAutoLogin();
    window.location.replace("/");
  }, [authApi, removeAutoLogin, snackbar]);

  /** 자동 로그인이 설정된 경우에 유저 정보 가져옴 */
  useEffect(() => {
    if (isAutoLogin) {
      fetchUser();
    }
  }, [isAutoLogin]);

  const value = useMemo<AuthState & AuthAction>(
    () => ({
      user,
      fetchUser,
      socialLogin: authApi.socialLogin,
      emailLogin: authApi.emailLogin,
      logout,
    }),
    [user, fetchUser, authApi.socialLogin, authApi.emailLogin, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
