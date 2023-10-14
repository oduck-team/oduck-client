import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import useRedirect from "@/hooks/useRedirect";

export default function useLogin() {
  const { isLoggedIn, socialLogin } = useAuth();
  const { redirectUrl, setRedirect } = useRedirect();
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  /**
   * 리다이렉트 url이 없다면 home을 리다이렉트 url로 설정합니다
   */
  useEffect(() => {
    if (!redirectUrl) setRedirect("/");
  }, [redirectUrl, setRedirect]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return {
    handleClickBack,
    handleSocialLogin: socialLogin,
  };
}
