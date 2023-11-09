import useLocalStorage from "@/hooks/useLocalStorage";

export default function useAutoLogin() {
  const {
    value: isAutoLogin,
    setStorageValue: setAutoLogin,
    removeStorageValue: removeAutoLogin,
  } = useLocalStorage("autoAuth");

  return {
    isAutoLogin,
    setAutoLogin,
    removeAutoLogin,
  };
}
