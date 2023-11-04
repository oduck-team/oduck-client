import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SavePath() {
  const location = useLocation();

  useEffect(() => {
    const prevPath = sessionStorage.getItem("currPath");

    /** 사용자가 login url을 직접 입력한 경우 prevPath 설정 */
    if (location.pathname === "/login") {
      sessionStorage.setItem("prevPath", prevPath ?? "/");
      return;
    }

    if (prevPath === "/auth/callback") sessionStorage.setItem("prevPath", "");
    else sessionStorage.setItem("prevPath", prevPath ?? "/");

    sessionStorage.setItem("currPath", location.pathname);
  }, [location]);

  return <></>;
}
