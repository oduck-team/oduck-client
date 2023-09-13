import { useEffect } from "react";

import useAuth from "@/hooks/useAuth";
import useRedirect from "@/hooks/useRedirect";

import useLocalUser from "../../hooks/useLocalUser";

/**
 * 소셜 로그인 후 리다이렉트되는 컴포넌트
 */
export default function Callback() {
  const { fetchUser } = useAuth();
  const { localUser } = useLocalUser();
  const { redirectUrl, handleRedirect } = useRedirect();

  /**
   * 로컬 스토리지에 유저 정보가 있다면 서버에 유저 정보를 요청합니다
   * /auth/callback으로 사용자의 첫 url 요청 방지입니다
   */
  useEffect(() => {
    if (localUser) {
      fetchUser();
    }
  }, [localUser, fetchUser]);

  /**
   * 로컬 스토리지에 리다이렉트 url이 있다면, 유저 정보 요청후 리다이렉트 url로 이동합니다
   */
  useEffect(() => {
    if (redirectUrl) {
      fetchUser();
      handleRedirect();
    }
  });

  // TODO: 로딩 컴포넌트
  if (redirectUrl) return <>Loading...</>;

  // TODO: 404 컴포넌트
  return <>404</>;
}
