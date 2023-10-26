import {
  createContext,
  useState,
  useMemo,
  useEffect,
  PropsWithChildren,
  useCallback,
} from "react";

import useSnackBar from "@/components/SnackBar/useSnackBar";
import useLocalUser from "@/features/auth/hooks/useLocalUser";
import { useApi } from "@/hooks/useApi";

interface AuthState {
  user: User;
  isLoggedIn: boolean;
}

interface AuthAction {
  fetchUser: () => Promise<void>;
  socialLogin: (provider: Provider) => void;
  logout: () => Promise<void>;
}

const DEFAULT_USER: User = {
  name: "",
  memberId: 0,
  imageUrl: "",
  point: 0,
  role: null,
  createdAt: "",
  updatedAt: "",
} as const;

const AuthContext = createContext<AuthState & AuthAction>({
  user: DEFAULT_USER,
  isLoggedIn: false,
  fetchUser: async () => {},
  socialLogin: () => {},
  logout: async () => {},
});

export default AuthContext;

export function AuthProvider({ children }: PropsWithChildren) {
  const { authApi } = useApi();
  const { localUser, setLocalUser, removeLocalUser } = useLocalUser();
  const [user, setUser] = useState<User>(localUser ?? DEFAULT_USER);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const snackbar = useSnackBar();

  const fetchUser = useCallback(async () => {
    try {
      const user = await authApi.getStatus();
      setUser(user);
      setLocalUser(user);
      setIsLoggedIn(true);
    } catch (e) {
      setUser(DEFAULT_USER);
      removeLocalUser();
      setIsLoggedIn(false);
    }
  }, [authApi, removeLocalUser, setLocalUser]);

  const logout = useCallback(async () => {
    authApi.logout();
    snackbar.open({ message: "로그아웃 되었어요" });
    setUser(DEFAULT_USER);
    removeLocalUser();
    setIsLoggedIn(false);
    window.location.replace("/");
  }, [authApi, removeLocalUser, snackbar]);

  useEffect(() => {
    if (localUser) {
      fetchUser();
    }
  }, []);

  const value = useMemo<AuthState & AuthAction>(
    () => ({
      user,
      isLoggedIn,
      fetchUser,
      socialLogin: authApi.socialLogin,
      logout,
    }),
    [user, isLoggedIn, authApi.socialLogin, fetchUser, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
