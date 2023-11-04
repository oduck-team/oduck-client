import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SavePath() {
  const location = useLocation();

  useEffect(() => {
    const prevPath = sessionStorage.getItem("currPath");

    if (prevPath === "/auth/callback") sessionStorage.setItem("prevPath", "");
    else sessionStorage.setItem("prevPath", prevPath ?? "/");

    sessionStorage.setItem("currPath", location.pathname);
  }, [location]);

  return <></>;
}
