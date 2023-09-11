import { BASE_URL } from "@/config";

import { Providers } from "../types";

export default function useSocialLogin() {
  const handleSocialLogin = (provider: Providers) => {
    window.location.href = `${BASE_URL}/auth/${provider}/login`;
  };

  return { handleSocialLogin };
}
