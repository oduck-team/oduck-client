import { createContext } from "react";

import AuthApi from "@/features/auth/api/AuthApi";
import ProfileApi from "@/features/users/api/profile";
import ProfileDevApi from "@/features/users/api/profileDev";
import { StrictPropsWithChildren } from "@/types";

interface API {
  authApi: AuthApi;
  profile: ProfileDevApi | ProfileApi;
}

export const OduckApiContext = createContext<API | null>(null);

/** @desc: 서버 Api와 개발용 Api 선택 */
const authApi = new AuthApi();
// const profile = new ProfileApi();
const profile = new ProfileDevApi();

export function OduckApiProvider({ children }: StrictPropsWithChildren) {
  return (
    <OduckApiContext.Provider value={{ authApi, profile }}>
      {children}
    </OduckApiContext.Provider>
  );
}
