import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useMemo,
} from "react";

export interface UserProps {
  name: string;
  memberId: number;
  imageUrl: null | string;
  point: number;
  role: string;
  createdAt: string;
  updateAt: string;
}

interface ContextProps {
  user: UserProps;
  loggedIn: boolean;
  setUser: Dispatch<SetStateAction<UserProps>>;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const defaultUser = {
  name: "",
  memberId: 0,
  imageUrl: "",
  point: 0,
  role: "",
  createdAt: "",
  updateAt: "",
};

export const AuthContext = createContext<ContextProps>({
  setLoggedIn: () => {},
  setUser: () => {},
  user: defaultUser,
  loggedIn: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProps>(defaultUser);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const value = useMemo(
    () => ({ setLoggedIn, setUser, loggedIn, user }),
    [setLoggedIn, setUser, loggedIn, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
