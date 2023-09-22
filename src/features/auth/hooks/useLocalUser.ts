import useLocalStorage from "@/hooks/useLocalStorage";

import { IUser } from "../types";

export default function useLocalUser() {
  const {
    value: localUser,
    setStorageValue: setLocalUser,
    removeStorageValue: removeLocalUser,
  } = useLocalStorage<IUser>("user");

  return {
    localUser,
    setLocalUser,
    removeLocalUser,
  };
}
