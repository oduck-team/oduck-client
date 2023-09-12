import { useNavigate } from "react-router-dom";

import useLocalStorage from "./useLocalStorage";

/**
 * url 리다이렉트를 처리하는 훅입니다
 * 로컬 스토리지를 사용하여 리다이렉트 url을 임시로 저장합니다
 */
export default function useRedirect() {
  const {
    value: redirectUrl,
    setStorageValue,
    removeStorageValue,
  } = useLocalStorage<string>("redirect");
  const navigate = useNavigate();

  /**
   * 저장된 url로 이동후 로컬 스토리지에서 url을 제거합니다
   */
  const handleRedirect = () => {
    if (redirectUrl) {
      navigate(redirectUrl);
      removeStorageValue();
    }
  };

  const setRedirect = (to: string) => {
    setStorageValue(to);
  };

  const removeRedirect = () => {
    removeStorageValue();
  };

  return { redirectUrl, handleRedirect, setRedirect, removeRedirect };
}
