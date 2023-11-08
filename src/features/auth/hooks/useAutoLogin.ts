import useLocalStorage from "@/hooks/useLocalStorage";

export default function useAutoLogin() {
  const {
    value: isAutoLogin,
    setStorageValue: setLocalUser,
    removeStorageValue: removeLocalUser,
  } = useLocalStorage("autoAuth");

  return {
    isAutoLogin,
    setLocalUser,
    removeLocalUser,
  };
}
