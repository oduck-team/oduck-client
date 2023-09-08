import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext, defaultUser } from "@/contexts";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function useAuthFetch() {
  const navigate = useNavigate();
  const { setLoggedIn, setUser } = useContext(AuthContext);

  const authFetch = async (
    url: string,
    method: string = "GET",
    infos: object = {},
  ) => {
    let data = {};

    if (method === "GET" || method === "DELETE") {
      data = {
        method: method,
        credentials: "include",
      };
    } else {
      data = {
        method: method,
        credentials: "include",
        ...infos,
      };
    }

    const response = await fetch(BASE_URL + url, data);

    if (response.status === 401) {
      setLoggedIn(false);
      setUser(defaultUser);
      navigate("/login");
    }

    return response;
  };

  return authFetch;
}
