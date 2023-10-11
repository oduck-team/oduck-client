import {
  createContext,
  useState,
  useMemo,
  useEffect,
  PropsWithChildren,
  useCallback,
} from "react";

import useLocalUser from "@/features/auth/hooks/useLocalUser";
import { getAuthStatus } from "@/features/auth/api/getAuthStatus";
import { socialLogin } from "@/features/auth/api/socialLogin";
import { logout as logoutRequeset } from "@/features/auth/api/logout";

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
  const { localUser, setLocalUser, removeLocalUser } = useLocalUser();
  const [user, setUser] = useState<User>(localUser ?? DEFAULT_USER);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUser = useCallback(async () => {
    try {
      const user = await getAuthStatus();
      setUser(user);
      setLocalUser(user);
      setIsLoggedIn(true);
    } catch (e) {
      setUser(DEFAULT_USER);
      removeLocalUser();
      setIsLoggedIn(false);
    }
  }, []);

  const logout = useCallback(async () => {
    logoutRequeset();
    setUser(DEFAULT_USER);
    removeLocalUser();
    setIsLoggedIn(false);
  }, [removeLocalUser]);

  useEffect(() => {
    fetchUser();
  }, []);

  const value = useMemo<AuthState & AuthAction>(
    () => ({
      user,
      isLoggedIn,
      fetchUser,
      socialLogin,
      logout,
    }),
    [user, isLoggedIn, fetchUser, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
