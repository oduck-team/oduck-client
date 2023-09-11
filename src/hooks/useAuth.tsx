import { useContext } from "react";

import { AuthContext } from "@/contexts";

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("can not find auth provider");
  }
  return auth;
}