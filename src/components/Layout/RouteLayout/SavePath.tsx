import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SavePath() {
  const location = useLocation();

  useEffect(() => {
    const prevPath = sessionStorage.getItem("currPath");

    /** login 관련 url인 경우 prevPath만 설정 */
    if (
      location.pathname === "/login" ||
      location.pathname === "/auth/callback"
    ) {
      sessionStorage.setItem("prevPath", prevPath ?? "/");
      return;
    }

    sessionStorage.setItem("prevPath", prevPath ?? "/");
    sessionStorage.setItem("currPath", location.pathname);
  }, [location]);

  return <></>;
}
