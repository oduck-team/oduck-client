import {
  createContext,
  useState,
  useMemo,
  useEffect,
  PropsWithChildren,
  useCallback,
} from "react";

import { BASE_URL } from "@/config";
import useLocalUser from "@/features/auth/hooks/useLocalUser";
import { IUser, Providers } from "@/features/auth/types";

interface AuthState {
  user: IUser;
  isLoggedIn: boolean;
}

interface AuthAction {
  fetchUser: () => Promise<void>;
  socialLogin: (provider: Providers) => void;
  logout: () => Promise<void>;
}

const DEFAULT_USER: IUser = {
  name: "",
  memberId: 0,
  imageUrl: "",
  point: 0,
  role: null,
  createdAt: "",
  updateAt: "",
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
  const [user, setUser] = useState<IUser>(localUser ?? DEFAULT_USER);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUser = async () => {
    const result = await fetch(BASE_URL + "/auth/status", {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    });

    if (!result.ok) {
      throw new Error(result.statusText);
    }

    const data = await result.json();
    return data as IUser;
  };

  const handleFetchUser = useCallback(async () => {
    try {
      const user = await fetchUser();
      setUser(user);
      setLocalUser(user);
      setIsLoggedIn(true);
    } catch (e) {
      setUser(DEFAULT_USER);
      removeLocalUser();
      setIsLoggedIn(false);
    }
  }, []);

  const handleSocialLogin = (provider: Providers) => {
    window.location.href = `${BASE_URL}/auth/${provider}/login`;
  };

  const handleLogout = useCallback(async () => {
    await fetch("/auth/logout", {
      method: "DELETE",
    });
    setUser(DEFAULT_USER);
    removeLocalUser();
    setIsLoggedIn(false);
  }, [removeLocalUser]);

  useEffect(() => {
    if (localUser) {
      handleFetchUser();
    }
  }, []);

  const value = useMemo<AuthState & AuthAction>(
    () => ({
      user,
      isLoggedIn,
      fetchUser: handleFetchUser,
      socialLogin: handleSocialLogin,
      logout: handleLogout,
    }),
    [user, isLoggedIn, handleFetchUser, handleLogout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
