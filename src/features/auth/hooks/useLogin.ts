// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import useRedirect from "@/hooks/useRedirect";

// import useAuth from "./useAuth";

/**
 * deprecated
 * 로그인 리다이렉트 로직 변경으로 더 이상 사용되지 않습니다.
 * */
export default function useLogin() {
  // const { isLoggedIn, socialLogin } = useAuth();
  // const { redirectUrl, setRedirect } = useRedirect();
  // const navigate = useNavigate();
  // /** 리다이렉트 url이 없다면 home을 리다이렉트 url로 설정합니다 */
  // useEffect(() => {
  //   if (!redirectUrl) setRedirect("/");
  // }, [redirectUrl, setRedirect]);
  // /** 로그인 했다면 home으로 리다이렉트합니다 */
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn, navigate]);
  // return {
  //   socialLogin,
  // };
}
