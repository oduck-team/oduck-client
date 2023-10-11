import useLocalStorage from "@/hooks/useLocalStorage";

export default function useLocalUser() {
  const {
    value: localUser,
    setStorageValue: setLocalUser,
    removeStorageValue: removeLocalUser,
  } = useLocalStorage<User>("user");

  return {
    localUser,
    setLocalUser,
    removeLocalUser,
  };
}
