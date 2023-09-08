import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext, UserProps } from "@/contexts";
import { request } from "@/lib/fetch";

export default function Callback() {
  const { setUser, setLoggedIn, loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const getUser = async () => {
    await request
      .get<UserProps>("/auth/status")
      .then((res) => {
        setUser(res);
        setLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        alert(err);
        navigate("login");
      });
  };

  useEffect(() => {
    if (loggedIn) navigate("/");
    getUser();
  }, []);

  return <></>;
}
